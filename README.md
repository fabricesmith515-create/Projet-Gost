# PrêtePlume — Site Vitrine & Blog Ghostwriter (preteplume.com)

**PrêtePlume** est un site vitrine et éditorial haut de gamme conçu pour un prête-plume (ghostwriter) francophone professionnel. Le projet est bâti sur une stack moderne **Next.js (App Router)**, **TypeScript**, **Tailwind CSS** et **Blog MDX sans base de données**.

---

## 🎨 Direction Artistique

- **Style :** Éditorial littéraire, sobre et épuré.
- **Palette de couleurs :**
  - Fond Crème / Blanc cassé : `#FAF8F4`
  - Texte Encre Profonde : `#1A1A2E`
  - Accent Terracotta : `#C75B39`
  - Touche Laiton / Or : `#B08D57`
- **Typographies :** Titres en *Playfair Display* / *Cormorant Garamond* (serif littéraire), corps de texte en *Inter* (sans-serif haute lisibilité).

---

## 🛠️ Stack Technique & Structure

- **Next.js 14+ (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **MDX (Markdown enrichi)** avec `gray-matter` & `next-mdx-remote`
- **Lucide Icons** pour l'iconographie moderne
- **Date-fns** pour la gestion locale des dates en français

---

## 📂 Organisation du Projet

```text
Euryci/
├── content/
│   └── blog/                       # Fichiers MDX des articles du blog
│       ├── comment-travailler-avec-un-ghostwriter.mdx
│       ├── ecrire-un-livre-quand-on-est-entrepreneur.mdx
│       └── trouver-sa-voix-le-secret-du-ghostwriting.mdx
├── public/                         # Fichiers statiques et images
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts    # Route API d'envoi d'email & fallback
│   │   ├── services/page.tsx       # Page Services
│   │   ├── a-propos/page.tsx       # Page À Propos
│   │   ├── blog/                   # Liste du blog et [slug]
│   │   ├── contact/page.tsx        # Page Contact avec formulaire
│   │   ├── mentions-legales/       # Mentions légales RGPD
│   │   ├── politique-de-confidentialite/
│   │   ├── sitemap.ts              # Sitemap XML dynamique
│   │   ├── robots.ts               # Robots.txt
│   │   ├── rss.xml/route.ts        # Flux RSS XML du blog
│   │   ├── globals.css             # Styles globaux & prose MDX
│   │   └── layout.tsx              # Layout racine (Header, Footer, WhatsApp)
│   ├── components/                 # Composants UI modulaires
│   └── lib/                        # Utilitaires MDX & SEO Metadata
├── tailwind.config.ts
├── package.json
└── README.md
```

---

## ✍️ Comment ajouter un nouvel article de blog ?

Pour ajouter un nouvel article, il suffit de créer un nouveau fichier `.mdx` dans le dossier `content/blog/` (ex. `content/blog/mon-nouvel-article.mdx`).

Respectez l'en-tête Frontmatter suivant en haut du fichier :

```markdown
---
title: "Titre de votre article captivant"
excerpt: "Courte synthèse de 2 phrases pour les cartes d'aperçu et le SEO."
date: "2026-08-08"
category: "Conseils d'écriture" # Choix : Conseils d'écriture, Édition, Marketing de contenu, Rédaction
readTime: "5 min de lecture"
coverImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80"
featured: false # Mettre true pour mettre en avant en haut de la page blog
author:
  name: "PrêtePlume"
  role: "Rédacteur de l'ombre & Biographe"
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
---

## Titre de section H2

Votre contenu rédigé en Markdown...
```

Le sommaire (table des matières), la barre de progression au scroll, la métadonnée SEO et les boutons de partage seront **générés automatiquement** !

---

## 📬 Configuration de l'envoi d'Email (Formulaire de Contact)

Le formulaire de contact (`/contact`) communique avec l'API route `src/app/api/contact/route.ts`.

### 1. Avec service d'emailing Resend (Recommandé) :
Créez un fichier `.env.local` à la racine du projet et ajoutez votre clé API :

```env
RESEND_API_KEY=re_123456789_votre_cle_resend
```

### 2. Mode Fallback automatique :
En l'absence de clé API `RESEND_API_KEY`, le système passe automatiquement en mode fallback élégant :
- Validation des champs et honeypot anti-spam.
- Message de succès immédiat sur le site.
- Ouverture/Redirection fluide vers **WhatsApp** ou l'application **Mail** par défaut préremplie avec le message du client.

---

## ⚙️ Numéro WhatsApp & Coordonnées

Pour modifier le numéro WhatsApp qui apparaît sur le bouton flottant et dans les formulaires, modifiez le fichier `src/lib/metadata.ts` :

```typescript
export const SITE_CONFIG = {
  name: 'PrêtePlume',
  domain: 'preteplume.com',
  email: 'contact@preteplume.com',
  phone: '+33600000000',
  whatsapp: '33600000000', // Format international sans '+'
  // ...
};
```

---

## 🚀 Lancement local et Déploiement

### Développement local :
```bash
npm install
npm run dev
```
Rendez-vous sur `http://localhost:3000`.

### Déploiement sur Vercel :
1. Poussez votre repository sur GitHub / GitLab.
2. Connectez le repository à votre compte **Vercel**.
3. Ajoutez la variable d'environnement `RESEND_API_KEY` dans les paramètres Vercel si souhaité.
4. Cliquez sur **Deploy**.
