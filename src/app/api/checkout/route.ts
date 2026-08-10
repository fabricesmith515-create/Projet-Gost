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

    const isLive = process.env.DODO_PAYMENTS_ENVIRONMENT !== 'test_mode';
    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL || 'https://gregarious-babka-dee942.netlify.app';

    // Détermination des URLs de redirection de retour
    const returnUrl = `${baseUrl}/paiement/succes?ref=${encodeURIComponent(
      reference || 'SANS_REF'
    )}&amount=${amount}`;
    const cancelUrl = `${baseUrl}/paiement/annule`;

    const amountInCents = Math.round(Number(amount) * 100);
    const productId = process.env.DODO_PAYMENTS_PRODUCT_ID || 'p_default';

    // 1. Tentative avec le SDK Officiel dodopayments
    try {
      const DodoPayments = (await import('dodopayments')).default;
      const dodoClient = new DodoPayments({
        bearerToken: apiKey,
        environment: isLive ? 'live_mode' : 'test_mode',
      });

      const sessionPayload: any = {
        product_cart: [
          {
            product_id: productId,
            quantity: 1,
            amount: amountInCents,
          },
        ],
        billing: {
          city: 'Nantes',
          country: 'FR',
          state: 'Pays de la Loire',
          street: '19 Boulevard de la Liberté',
          zipcode: '44000',
        },
        customer: {
          email: customerEmail,
          name: customerName || 'Client PrêtePlume',
        },
        return_url: returnUrl,
      };

      const session = await dodoClient.checkoutSessions.create(sessionPayload);

      if (session && (session.checkout_url || (session as any).url)) {
        return NextResponse.json({
          checkoutUrl: session.checkout_url || (session as any).url,
          isDemo: false,
        });
      }
    } catch (sdkErr: any) {
      console.warn('Erreur SDK DodoPayments:', sdkErr?.message || sdkErr);
    }

    // 2. Appel direct REST API
    const apiDomain = isLive ? 'https://live.dodopayments.com' : 'https://test.dodopayments.com';
    const res = await fetch(`${apiDomain}/checkout/sessions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        product_cart: [
          {
            product_id: productId,
            quantity: 1,
            amount: amountInCents,
          },
        ],
        customer: {
          email: customerEmail,
          name: customerName || 'Client PrêtePlume',
        },
        billing: {
          city: 'Nantes',
          country: 'FR',
          state: 'Pays de la Loire',
          street: '19 Boulevard de la Liberté',
          zipcode: '44000',
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
    } else {
      const errText = await res.text();
      console.error('Erreur API Dodo Payments direct:', res.status, errText);
    }

    // Fallback Démo avec explications
    return NextResponse.json({
      isDemo: true,
      checkoutUrl: `/paiement/succes?demo=true&amount=${amount}&ref=${encodeURIComponent(
        reference || 'DEVIS-ONLINE'
      )}`,
      message:
        'Vérifiez la variable DODO_PAYMENTS_PRODUCT_ID sur Netlify si vous avez créé un produit dans votre tableau de bord Dodo Payments.',
    });
  } catch (error: any) {
    console.error('Erreur API Checkout Dodo Payments:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de l\'initialisation du paiement.' },
      { status: 500 }
    );
  }
}
