import React from 'react';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Mentions Légales — Digital Product World LTD / PrêtePlume',
  description: 'Mentions légales et informations juridiques de la plateforme PrêtePlume éditée par Digital Product World LTD.',
  canonical: 'https://preteplume.com/mentions-legales',
});

export default function LegalPage() {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto glass-panel rounded-[2.5rem] p-8 sm:p-12 border border-white/15 shadow-glass">
        <h1 className="font-editorial text-4xl font-bold text-white mb-8 border-b border-white/15 pb-4">
          Mentions Légales
        </h1>

        <div className="prose max-w-none text-white/90">
          <h2>1. Éditeur du site</h2>
          <p>
            Le site internet <strong>preteplume.com</strong> est édité par la société <strong>Digital Product World LTD</strong>.
          </p>
          <p>
            <strong>Raison sociale :</strong> Digital Product World LTD<br />
            <strong>Forme juridique :</strong> Limited Company (Ltd)<br />
            <strong>Adresse du siège social :</strong> [ADRESSE À COMPLÉTER PAR LE PROPRIÉTAIRE]<br />
            <strong>Numéro d'immatriculation / Registre :</strong> [N° À COMPLÉTER PAR LE PROPRIÉTAIRE]<br />
            <strong>Directeur de la publication :</strong> Fondateur PrêtePlume (Horizonrose)<br />
            <strong>Email de contact :</strong> contact@preteplume.com
          </p>

          <h2>2. Hébergement du site</h2>
          <p>
            Le site est hébergé par la société <strong>Vercel Inc.</strong><br />
            Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.<br />
            Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>
          </p>

          <h2>3. Propriété intellectuelle et droits d'auteur</h2>
          <p>
            L'ensemble des éléments figurant sur le site preteplume.com (marques, logos, graphismes, textes, visuels) est la propriété exclusive de <strong>Digital Product World LTD</strong> ou fait l'objet d'une autorisation d'utilisation. Toute reproduction partielle ou totale est interdite.
          </p>

          <h2>4. Confidentialité des Prestations & Accords NDA</h2>
          <p>
            Les prestations d'écriture et de ghostwriting accomplies par l'Atelier PrêtePlume font l'objet d'un accord de non-divulgation (NDA) rigoureux et d'une cession définitive et exclusive des droits d'auteur au bénéfice du client.
          </p>
        </div>
      </div>
    </div>
  );
}
