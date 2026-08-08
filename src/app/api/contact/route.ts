import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, projectType, budget, message, honeypot } = body;

    // Honeypot check
    if (honeypot) {
      return NextResponse.json({ success: true, message: 'Message traité' });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Veuillez remplir les champs obligatoires.' },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      // Send via Resend API
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: 'PrêtePlume Contact <contact@preteplume.com>',
          to: ['contact@preteplume.com'],
          reply_to: email,
          subject: `[Contact PrêtePlume] Nouveau projet de ${name} (${projectType || 'Général'})`,
          html: `
            <div style="font-family: Arial, sans-serif; color: #1A1A2E; max-width: 600px; margin: 0 auto; border: 1px solid #E5E0D8; padding: 24px; border-radius: 12px;">
              <h2 style="color: #C75B39;">Nouveau message de contact — PrêtePlume</h2>
              <p><strong>Nom :</strong> ${name}</p>
              <p><strong>Email :</strong> ${email}</p>
              <p><strong>Type de projet :</strong> ${projectType || 'Non spécifié'}</p>
              <p><strong>Budget indicatif :</strong> ${budget || 'Non spécifié'}</p>
              <hr style="border: 0; border-top: 1px solid #E5E0D8; margin: 16px 0;" />
              <h4 style="margin-bottom: 8px;">Message :</h4>
              <p style="white-space: pre-wrap; background: #FAF8F4; padding: 16px; border-radius: 8px;">${message}</p>
            </div>
          `,
        }),
      });

      if (!res.ok) {
        console.error('Erreur API Resend:', await res.text());
        return NextResponse.json(
          { success: true, fallback: true, message: 'Message reçu (mode secours)' },
          { status: 200 }
        );
      }

      return NextResponse.json({ success: true, message: 'Votre message a été transmis avec succès.' });
    }

    // Fallback response if no API key is configured
    return NextResponse.json({
      success: true,
      fallback: true,
      message: 'Demande bien enregistrée. Redirection vers WhatsApp ou Email...',
    });
  } catch (error) {
    console.error('Erreur serveur API contact:', error);
    return NextResponse.json(
      { success: false, error: 'Une erreur est survenue lors de l\'envoi.' },
      { status: 500 }
    );
  }
}
