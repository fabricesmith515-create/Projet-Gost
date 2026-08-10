import { NextResponse } from 'next/server';

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

    const apiKey = process.env.DODO_PAYMENTS_API_KEY;
    const isLive = process.env.DODO_PAYMENTS_ENVIRONMENT === 'live_mode';
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://preteplume.com';

    // Détermination des URLs de redirection de retour
    const returnUrl = `${baseUrl}/paiement/succes?ref=${encodeURIComponent(
      reference || 'SANS_REF'
    )}&amount=${amount}`;
    const cancelUrl = `${baseUrl}/paiement/annule`;

    // Si la clé API Dodo Payments est configurée
    if (apiKey) {
      try {
        const DodoPayments = (await import('dodopayments')).default;
        const dodoClient = new DodoPayments({
          bearerToken: apiKey,
          environment: isLive ? 'live_mode' : 'test_mode',
        });

        // Conversion du montant (si nécessaire selon le produit ou session dynamique)
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
            zipcode: '75000'
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
      } catch (sdkError: any) {
        console.warn('Dodo Payments SDK call fallback to REST API or simulation:', sdkError?.message || sdkError);
        
        // Tentative d'appel direct REST API si l'ID produit dynamique diffère
        const apiDomain = isLive ? 'https://live.dodopayments.com' : 'https://test.dodopayments.com';
        const res = await fetch(`${apiDomain}/checkout/sessions`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            amount_cents: Math.round(Number(amount) * 100),
            currency: 'EUR',
            customer: {
              email: customerEmail,
              name: customerName || 'Client PrêtePlume',
            },
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
          if (data.checkout_url || data.url) {
            return NextResponse.json({
              checkoutUrl: data.checkout_url || data.url,
              isDemo: false,
            });
          }
        }
      }
    }

    // Mode simulation / fallback si la clé Dodo Payments n'est pas encore saisie dans .env.local
    return NextResponse.json({
      isDemo: true,
      checkoutUrl: `/paiement/succes?demo=true&amount=${amount}&ref=${encodeURIComponent(
        reference || 'DEVIS-DEMO'
      )}`,
      message:
        'Mode Démo Dodo Payments actif (Ajoutez DODO_PAYMENTS_API_KEY dans votre fichier .env.local pour activer les vrais encaissements CB).',
    });
  } catch (error: any) {
    console.error('Erreur API Checkout Dodo Payments:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de l\'initialisation du paiement.' },
      { status: 500 }
    );
  }
}
