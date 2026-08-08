import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { messages, projectContext } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages invalides' },
        { status: 400 }
      );
    }

    const openaiKey = process.env.OPENAI_API_KEY;

    if (openaiKey) {
      const systemPrompt = `Tu es l'Assistant Virtuel de l'Atelier PrêtePlume (preteplume.com), un collectif de 5 plumes d'exception dirigé par son fondateur Horizonrose.
Tes missions :
1. Répondre avec élégance, bienveillance et rigueur sur nos services : Romans (romance, thriller, fantasy...), Essais, Nouvelles, Livres pour enfants, Ebooks & livres d'expert, Biographies, Discours et Publication KDP (Amazon).
2. Rappeler nos piliers : 100% Confidentialité (accord NDA signé), cession intégrale des droits d'auteur, respect strict des délais.
3. Qualifier le prospect en demandant gentiment : le type de projet/genre, la longueur estimée, l'échéance souhaitée et le budget.
4. Rediriger le prospect vers le formulaire de contact ou vers WhatsApp pour finaliser son devis gratuit.
Factures possibles en EUR (€), CHF (Suisse) et CAD (Canada). Target : France, Suisse, Belgique, Québec.`;

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${openaiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [{ role: 'system', content: systemPrompt }, ...messages],
          temperature: 0.7,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const reply = data.choices[0]?.message?.content || 'Comment puis-je vous aider sur votre projet d\'écriture ?';
        return NextResponse.json({ reply });
      }
    }

    // Intelligent Interactive Fallback Response if no LLM key is set
    const lastUserMessage = messages[messages.length - 1]?.content?.toLowerCase() || '';

    let reply = "Bonjour ! Je suis l'assistant de l'Atelier PrêtePlume. Quel est votre projet d'écriture (Roman, Essai, Livre enfant, Ebook, Biographie, KDP) ?";

    if (lastUserMessage.includes('roman') || lastUserMessage.includes('fiction')) {
      reply = "Nous disposons d'une plume spécialisée en roman (romance, thriller, fantasy, historique). Souhaitez-vous rédiger un projet de 150 à 300 pages ? Quel est votre délai envisagé ?";
    } else if (lastUserMessage.includes('kdp') || lastUserMessage.includes('amazon')) {
      reply = "Notre accompagnement KDP comprend la mise en forme EPUB/Broché, la création de couverture, la rédaction de fiche Amazon et la mise en ligne. Souhaitez-vous publier un livre d'expert ou un roman ?";
    } else if (lastUserMessage.includes('tarif') || lastUserMessage.includes('prix') || lastUserMessage.includes('coût')) {
      reply = "Nos prestations sont établies sur-mesure sous forme de forfaits fixes (en €, CHF ou CAD). Par exemple : de 500 € à 2 500 € pour un ebook/livre enfant, et de 2 500 € à 7 500 € pour un roman ou livre d'expert complet. Souhaitez-vous recevoir un devis gratuit ?";
    } else if (lastUserMessage.includes('confidential') || lastUserMessage.includes('nda') || lastUserMessage.includes('droit')) {
      reply = "La confidentialité est absolue : nous signons systématiquement un accord NDA avant les échanges, et l'intégralité des droits d'auteur vous est cédée par contrat.";
    } else if (lastUserMessage.includes('devis') || lastUserMessage.includes('contact')) {
      reply = "Parfait ! Je vous invite à remplir notre formulaire de contact ou à échanger directement par WhatsApp avec notre fondateur Horizonrose.";
    }

    return NextResponse.json({ reply, fallback: true });
  } catch (error) {
    console.error('Erreur API Chatbot:', error);
    return NextResponse.json(
      { reply: "Désolé, une erreur s'est produite. Vous pouvez nous écrire directement à contact@preteplume.com ou sur WhatsApp." },
      { status: 500 }
    );
  }
}
