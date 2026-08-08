import { Metadata } from 'next';

export const SITE_CONFIG = {
  name: 'PrêtePlume',
  domain: 'preteplume.com',
  url: 'https://preteplume.com',
  description: 'Services de ghostwriting haut de gamme et rédaction sur-mesure : ebooks, livres, articles, discours, biographies et contenus professionnels.',
  email: 'contact@preteplume.com',
  phone: '+33600000000', // À personnaliser
  whatsapp: '33600000000',
  author: 'PrêtePlume',
  social: {
    linkedin: 'https://linkedin.com/in/preteplume',
    twitter: 'https://twitter.com/preteplume',
  },
};

export function constructMetadata({
  title = `${SITE_CONFIG.name} — Ghostwriter & Redacteur de l'Ombre`,
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
      'ghostwriter',
      'prête-plume',
      'rédacteur de l ombre',
      'rédaction ebook',
      'écrire un livre',
      'biographe',
      'rédaction discours',
      'livre blanc',
      'rédaction contenu web',
      'prête plume francophone',
    ],
    authors: [{ name: SITE_CONFIG.author }],
    creator: SITE_CONFIG.author,
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
    areaServed: ['FR', 'BE', 'CH', 'CA', 'AFR'],
    serviceType: [
      'Ghostwriting',
      'Rédaction d Ebook',
      'Écriture de livre d entreprise',
      'Biographies',
      'Discours de direction',
      'Livres blancs',
    ],
  };
}
