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

    // Option 1 : Lien de paiement direct s'il est configuré
    const directCheckoutUrl =
      process.env.DODO_PAYMENTS_CHECKOUT_URL || process.env.DODO_PAYMENTS_PAYMENT_LINK;
    if (directCheckoutUrl) {
      return NextResponse.json({
        checkoutUrl: directCheckoutUrl,
        isDemo: false,
      });
    }

    // Clé API Dodo Payments
    const apiKey =
      process.env.DODO_PAYMENTS_API_KEY ||
      '-VNHxTWdS0fNxZTY.StHhYPDsuw_R49WfFVKKBwG1xJl0oBrnpHwVLShA9XB4dBm6';

    const isLive = process.env.DODO_PAYMENTS_ENVIRONMENT !== 'test_mode';
    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL || 'https://gregarious-babka-dee942.netlify.app';

    const returnUrl = `${baseUrl}/paiement/succes?ref=${encodeURIComponent(
      reference || 'SANS_REF'
    )}&amount=${amount}`;
    const cancelUrl = `${baseUrl}/paiement/annule`;
    const amountInCents = Math.round(Number(amount) * 100);

    const productId = process.env.DODO_PAYMENTS_PRODUCT_ID;

    // 1. Tentative avec le SDK Officiel dodopayments
    if (productId) {
      try {
        const DodoPayments = (await import('dodopayments')).default;
        const dodoClient = new DodoPayments({
          bearerToken: apiKey,
          environment: isLive ? 'live_mode' : 'test_mode',
        });

        const session = await dodoClient.checkoutSessions.create({
          product_cart: [
            {
              product_id: productId,
              quantity: 1,
            },
          ],
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
      } catch (sdkErr: any) {
        console.warn('SDK DodoPayments:', sdkErr?.message || sdkErr);
      }
    }

    // 2. Appel direct REST API aux endpoints Dodo Payments
    const apiDomains = isLive
      ? ['https://live.dodopayments.com', 'https://api.dodopayments.com/v1']
      : ['https://test.dodopayments.com', 'https://test-api.dodopayments.com/v1'];

    for (const domain of apiDomains) {
      try {
        const payload: any = {
          customer: {
            email: customerEmail,
            name: customerName || 'Client PrêtePlume',
          },
          return_url: returnUrl,
          cancel_url: cancelUrl,
        };

        if (productId) {
          payload.product_cart = [
            {
              product_id: productId,
              quantity: 1,
            },
          ];
        }

        const res = await fetch(`${domain}/checkout/sessions`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
          body: JSON.stringify(payload),
        });

        const resText = await res.text();
        let resData: any = {};
        try {
          resData = JSON.parse(resText);
        } catch (e) {
          console.warn('Réponse non-JSON Dodo Payments:', resText.slice(0, 100));
        }

        if (res.ok && (resData.checkout_url || resData.url || resData.payment_link)) {
          return NextResponse.json({
            checkoutUrl: resData.checkout_url || resData.url || resData.payment_link,
            isDemo: false,
          });
        }

        if (resData.checkout_url || resData.url || resData.payment_link) {
          return NextResponse.json({
            checkoutUrl: resData.checkout_url || resData.url || resData.payment_link,
            isDemo: false,
          });
        }
      } catch (endpointErr) {
        console.warn(`Erreur sur endpoint ${domain}:`, endpointErr);
      }
    }

    // Si aucune session n'a pu être créée
    if (!productId) {
      return NextResponse.json(
        {
          error:
            'Pour activer l\'encaissement direct, veuillez ajouter la variable DODO_PAYMENTS_PRODUCT_ID sur Netlify avec l\'ID de votre produit (ex. p_xxxx ou prod_xxxx).',
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        error:
          'Impossible de créer la session Dodo Payments. Vérifiez que votre Product ID et votre Clé API correspondent au mode actif (Live / Test).',
      },
      { status: 400 }
    );
  } catch (error: any) {
    console.error('Erreur API Checkout Dodo Payments:', error);
    return NextResponse.json(
      { error: error?.message || 'Une erreur est survenue lors de l\'initialisation du paiement.' },
      { status: 500 }
    );
  }
}
