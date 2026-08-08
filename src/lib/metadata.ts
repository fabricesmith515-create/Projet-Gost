import { Metadata } from 'next';

export const SITE_CONFIG = {
  name: 'PrêtePlume',
  publisher: 'Digital Product World LTD',
  domain: 'preteplume.com',
  url: 'https://preteplume.com',
  description: 'Atelier d\'écriture & collectif de 5 plumes dirigé par son fondateur. Rédaction sur-mesure de romans, essais, nouvelles, livres enfants, ebooks, biographies et publication KDP.',
  email: 'contact@preteplume.com',
  phone: '+33600000000', // À personnaliser par le propriétaire
  whatsapp: '33600000000',
  comeup: 'https://comeup.com/@horizonrose',
  founder: 'Horizonrose',
  targetRegions: ['France', 'Suisse', 'Belgique', 'Québec (Canada)'],
  currencies: ['€ (EUR)', 'CHF (Suisse)', 'CAD (Canada)'],
  social: {
    linkedin: 'https://linkedin.com/company/preteplume',
    twitter: 'https://twitter.com/preteplume',
    comeup: 'https://comeup.com/@horizonrose',
  },
};

export function constructMetadata({
  title = `${SITE_CONFIG.name} — Atelier d'Écriture & Collectif de 5 Plumes`,
  description = SITE_CONFIG.description,
  image = '/images/og-image.jpg',
  noIndex = false,
  canonical = SITE_CONFIG.url,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  canonical?: string;
} = {}): Metadata {
  return {
    title,
    description,
    keywords: [
      'atelier d écriture',
      'collectif de plumes',
      'ghostwriter',
      'prête-plume',
      'rédacteur de roman',
      'écrire un roman',
      'rédaction essai',
      'livre pour enfants',
      'publication KDP Amazon',
      'rédaction ebook',
      'biographe',
      'rédaction discours',
      'livre blanc',
      'Horizonrose ComeUp',
    ],
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.publisher,
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'fr_FR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@preteplume',
    },
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical,
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

export function generateProfessionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_CONFIG.name,
    image: `${SITE_CONFIG.url}/images/og-image.jpg`,
    '@id': SITE_CONFIG.url,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    priceRange: '€€€',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'FR',
    },
    description: SITE_CONFIG.description,
    knowsLanguage: ['fr'],
    areaServed: ['FR', 'CH', 'BE', 'CA'],
    serviceType: [
      'Ghostwriting de Romans',
      'Rédaction d Essais & Nouvelles',
      'Livres pour Enfants',
      'Publication KDP Amazon',
      'Ebooks & Livres d d\'Expert',
      'Biographies',
      'Discours de direction',
    ],
  };
}
