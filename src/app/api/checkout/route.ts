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

    // Option 1 : Lien de paiement direct configuré dans l'environnement Netlify
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

    // Si aucun ID de produit n'est encore configuré dans Netlify, informer clairement l'utilisateur
    if (!productId) {
      return NextResponse.json(
        {
          error:
            'Pour activer les encaissements réels par Carte Bancaire, vous devez ajouter la variable DODO_PAYMENTS_PRODUCT_ID dans Netlify avec l\'ID du produit créé sur votre dashboard Dodo Payments (ex. prod_xxxx).',
        },
        { status: 400 }
      );
    }

    // Appel direct API Dodo Payments
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

    const resText = await res.text();
    let resData: any = {};
    try {
      resData = JSON.parse(resText);
    } catch (e) {
      console.warn('Réponse brute Dodo Payments:', resText);
    }

    if (res.ok && (resData.checkout_url || resData.url || resData.payment_link)) {
      return NextResponse.json({
        checkoutUrl: resData.checkout_url || resData.url || resData.payment_link,
        isDemo: false,
      });
    }

    // Si l'API Dodo Payments renvoie une erreur (ex: product_id invalide ou non trouvé)
    const dodoErrMsg =
      resData.message || resData.error || resData.detail || 'Clé API ou ID Produit Dodo Payments invalide.';

    return NextResponse.json(
      {
        error: `Dodo Payments : ${dodoErrMsg} (Vérifiez la variable DODO_PAYMENTS_PRODUCT_ID dans Netlify).`,
      },
      { status: 400 }
    );
  } catch (error: any) {
    console.error('Erreur API Checkout Dodo Payments:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de l\'initialisation du paiement.' },
      { status: 500 }
    );
  }
}
