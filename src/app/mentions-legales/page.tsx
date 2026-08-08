import React from 'react';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Mentions Légales — PrêtePlume',
  description: 'Mentions légales et informations éditoriales de la plateforme PrêtePlume (preteplume.com).',
  canonical: 'https://preteplume.com/mentions-legales',
});

export default function LegalPage() {
  return (
    <div className="pt-28 pb-20 bg-[#FAF8F4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-editorial text-4xl font-bold text-[#1A1A2E] mb-8 border-b border-[#E5E0D8] pb-4">
          Mentions Légales
        </h1>

        <div className="prose max-w-none text-[#2B2B40]">
          <h2>1. Éditeur du site</h2>
          <p>
            Le site internet <strong>preteplume.com</strong> est édité par la marque <strong>PrêtePlume</strong>, entreprise individuelle enregistrée en France sous le numéro SIREN [Remplir SIREN].
          </p>
          <p>
            <strong>Directeur de la publication :</strong> Fondateur PrêtePlume<br />
            <strong>Contact :</strong> contact@preteplume.com
          </p>

          <h2>2. Hébergement du site</h2>
          <p>
            Le site est hébergé par la société <strong>Vercel Inc.</strong><br />
            Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.<br />
            Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>
          </p>

          <h2>3. Propriété intellectuelle et droits d'auteur</h2>
          <p>
            L'ensemble des contenus présents sur le site preteplume.com (textes, visuels, identité graphique, structure) est protégé par le droit d'auteur. Toute reproduction ou représentation, intégrale ou partielle, sans l'accord écrit préalable de l'éditeur est strictement interdite.
          </p>

          <h2>4. Confidentialité des prestations (Ghostwriting)</h2>
          <p>
            Les œuvres rédigées pour le compte des clients font l'objet d'une convention de cession exclusive des droits d'auteur et d'un accord de non-divulgation (NDA) garantissant l'anonymat absolu de la prestation.
          </p>
        </div>
      </div>
    </div>
  );
}
