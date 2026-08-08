import React from 'react';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Politique de Confidentialité — PrêtePlume',
  description: 'Politique de protection des données personnelles et d\'engagement de confidentialité de PrêtePlume.',
  canonical: 'https://preteplume.com/politique-de-confidentialite',
});

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-20 bg-[#FAF8F4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-editorial text-4xl font-bold text-[#1A1A2E] mb-8 border-b border-[#E5E0D8] pb-4">
          Politique de Confidentialité
        </h1>

        <div className="prose max-w-none text-[#2B2B40]">
          <h2>1. Collecte des données personnelles</h2>
          <p>
            Les données personnelles transmises via le formulaire de contact (nom, adresse email, type de projet, message) sont collectées exclusivement pour traiter les demandes de devis et échanger sur vos projets de rédaction.
          </p>

          <h2>2. Utilisation des données et non-divulgation</h2>
          <p>
            PrêtePlume s'engage formellement à ne jamais céder, louer ou vendre vos informations personnelles à des tiers. Vos coordonnées et contenus échangés sont strictement confidentiels.
          </p>

          <h2>3. Durée de conservation</h2>
          <p>
            Les informations issues du formulaire de contact sont conservées pendant une durée maximale de 3 ans après le dernier contact commercial ou la fin de la mission de rédaction.
          </p>

          <h2>4. Vos droits (RGPD)</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Pour exercer ce droit, adressez un email à <strong>contact@preteplume.com</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
