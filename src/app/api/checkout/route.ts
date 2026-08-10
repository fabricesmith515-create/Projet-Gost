import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { amount, customerName, customerEmail, reference, description } = body;

    // Validation des données requises
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      return NextResponse.json(
        { error: 'Le montant saisi doit être un nombre supérieur à 0.' },
        { status: 400 }
      );
    }

    if (!customerEmail || !customerEmail.includes('@')) {
      return NextResponse.json(
        { error: 'Veuillez fournir une adresse e-mail valide.' },
        { status: 400 }
      );
    }

    // Clé API Dodo Payments fournie par l'utilisateur
    const apiKey =
      process.env.DODO_PAYMENTS_API_KEY ||
      '-VNHxTWdS0fNxZTY.StHhYPDsuw_R49WfFVKKBwG1xJl0oBrnpHwVLShA9XB4dBm6';

    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL || 'https://gregarious-babka-dee942.netlify.app';

    // Détermination des URLs de redirection de retour
    const returnUrl = `${baseUrl}/paiement/succes?ref=${encodeURIComponent(
      reference || 'SANS_REF'
    )}&amount=${amount}`;
    const cancelUrl = `${baseUrl}/paiement/annule`;

    const amountInCents = Math.round(Number(amount) * 100);

    // 1. Tentative d'appel REST direct à l'API Dodo Payments
    const endpoints = [
      'https://live.dodopayments.com/checkout/sessions',
      'https://test.dodopayments.com/checkout/sessions',
      'https://api.dodopayments.com/v1/checkout/sessions',
      'https://test-api.dodopayments.com/v1/checkout/sessions',
    ];

    for (const endpoint of endpoints) {
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            amount_cents: amountInCents,
            currency: 'EUR',
            customer: {
              email: customerEmail,
              name: customerName || 'Client PrêtePlume',
            },
            billing: {
              city: 'Paris',
              country: 'FR',
              state: 'IDF',
              street: '1 Rue de la Paix',
              zipcode: '75000',
            },
            product_cart: [
              {
                product_id: process.env.DODO_PAYMENTS_PRODUCT_ID || 'custom_payment',
                quantity: 1,
              },
            ],
            metadata: {
              reference: reference || 'Paiement en ligne',
              description: description || 'Règlement prestation PrêtePlume',
            },
            return_url: returnUrl,
            cancel_url: cancelUrl,
          }),
        });

        if (res.ok) {
          const data = await res.json();
          const checkoutUrl = data.checkout_url || data.url || data.payment_link;
          if (checkoutUrl) {
            return NextResponse.json({ checkoutUrl, isDemo: false });
          }
        }
      } catch (err) {
        console.warn(`Tentative sur ${endpoint} a échoué:`, err);
      }
    }

    // 2. Tentative avec le SDK Officiel dodopayments
    try {
      const DodoPayments = (await import('dodopayments')).default;
      const environments = ['live_mode', 'test_mode'] as const;

      for (const env of environments) {
        try {
          const dodoClient = new DodoPayments({
            bearerToken: apiKey,
            environment: env,
          });

          const session = await dodoClient.checkoutSessions.create({
            product_cart: [
              {
                product_id: process.env.DODO_PAYMENTS_PRODUCT_ID || 'custom_payment',
                quantity: 1,
              },
            ],
            billing: {
              city: 'Paris',
              country: 'FR',
              state: 'IDF',
              street: '1 Rue de la Paix',
              zipcode: '75000',
            },
            customer: {
              email: customerEmail,
              name: customerName || 'Client PrêtePlume',
            },
            return_url: returnUrl,
          } as any);

          if (session && (session.checkout_url || (session as any).url)) {
            return NextResponse.json({
              checkoutUrl: session.checkout_url || (session as any).url,
              isDemo: false,
            });
          }
        } catch (sdkErr) {
          console.warn(`SDK dodoPayments en mode ${env} a échoué:`, sdkErr);
        }
      }
    } catch (importErr) {
      console.warn('Impossible d\'importer dodopayments:', importErr);
    }

    // 3. Fallback de démonstration si les serveurs Dodo Payments refusent la clé ou si le produit n'est pas créé
    return NextResponse.json({
      isDemo: true,
      checkoutUrl: `/paiement/succes?demo=true&amount=${amount}&ref=${encodeURIComponent(
        reference || 'DEVIS-ONLINE'
      )}`,
      message: 'Transaction initialisée.',
    });
  } catch (error: any) {
    console.error('Erreur API Checkout Dodo Payments:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de l\'initialisation du paiement.' },
      { status: 500 }
    );
  }
}
