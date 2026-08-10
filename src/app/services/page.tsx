import React from 'react';
import Link from 'next/link';
import { constructMetadata } from '@/lib/metadata';
import { BookOpen, FileText, UserCheck, Mic, FileSpreadsheet, Edit3, CheckCircle2, ArrowUpRight, BookHeart, Compass, Feather, Sparkles, Share2, ShieldCheck, Clock, CreditCard } from 'lucide-react';
import ProcessTimeline from '@/components/ProcessTimeline';
import FinalCTASection from '@/components/FinalCTASection';

export const metadata = constructMetadata({
  title: 'Catalogue des Prestations & Offres en Euros (€) — PrêtePlume',
  description:
    'Découvrez les 11 offres de rédaction de notre atelier : romans, essais, nouvelles, contes enfants, ebooks, biographies et publication KDP Amazon. Devis gratuit en Euros (€) sous 24h.',
  canonical: 'https://preteplume.com/services',
});

export default function ServicesPage() {
  const serviceDetails = [
    {
      id: 'romans',
      title: 'Offre Roman (Tous Genres)',
      icon: BookHeart,
      subtitle: 'Romance, Thriller, Fantasy, Historique & Littéraire',
      description:
        'Donnez vie à vos idées d\'intrigues et d\'univers fictionnels. Notre romancière spécialisée prend en charge la structuration dramaturgique, le développement des personnages et la rédaction intégrale.',
      forWho: 'Auteurs en devenir, passionnés de narration, créateurs d\'univers.',
      included: [
        'Établissement du synopsis détaillé et des fiches personnages',
        'Rédaction narrative complète par vagues de chapitres (150 à 350 pages)',
        'Harmonisation du suspense, des dialogues et du rythme',
        'Jusqu\'à 2 séries de révisions par chapitre',
        'Cession intégrale des droits d\'auteur & NDA confidentiel',
      ],
      pricingNote: 'Devis sur-mesure gratuit sous 24h en Euros (€)',
      deliverable: 'Manuscrit complet (DOCX / EPUB / Broché prêt pour édition ou KDP)',
    },
    {
      id: 'essais',
      title: 'Offre Essai & Manifeste',
      icon: Compass,
      subtitle: 'Posez votre pensée philosophique, sociétale ou d\'entreprise',
      description:
        'L\'essai permet d\'exposer un point de vue tranché ou une thèse novatrice. Notre plume essayiste structure votre argumentaire avec rigueur et profondeur.',
      forWho: 'Penseurs, dirigeants, consultants, universitaires et essayistes.',
      included: [
        'Analyse de vos thèses et recueil de vos notes d\'analyse',
        'Structuration logique de l\'argumentaire et des chapitres',
        'Rédaction au style incisif et élégant (100 à 220 pages)',
        'Cession des droits d\'auteur & NDA',
      ],
      pricingNote: 'Devis sur-mesure gratuit sous 24h en Euros (€)',
      deliverable: 'Manuscrit d\'essai prêt pour l\'imprimeur ou l\'éditeur',
    },
    {
      id: 'enfants',
      title: 'Offre Livre pour Enfants & Conte',
      icon: Sparkles,
      subtitle: 'Éveillez l\'imaginaire des plus jeunes avec poésie',
      description:
        'Contes merveilleux, récits d\'apprentissage et albums illustrés. Notre plume jeunesse écrit avec bienveillance en respectant la musicalité des mots.',
      forWho: 'Parents, grands-parents, éducateurs et auteurs jeunesse.',
      included: [
        'Découpage page par page pour l\'illustrateur (storyboard textuel)',
        'Rédaction adaptée aux tranches d\'âge (3-6 ans, 7-10 ans, ados)',
        'Relecture à voix haute pour vérifier le rythme sonore',
      ],
      pricingNote: 'Devis sur-mesure gratuit sous 24h en Euros (€)',
      deliverable: 'Texte découpé avec consignes d\'illustration',
    },
    {
      id: 'kdp',
      title: 'Offre Publication KDP Amazon',
      icon: Share2,
      subtitle: 'Publiez et vendez votre livre en autonomie sur Amazon',
      description:
        'Ne laissez pas votre manuscrit dormir. Nous gérons pour vous toute la chaîne technique de mise en ligne sur Amazon Kindle Direct Publishing.',
      forWho: 'Auteurs de romans, essais, ebooks et livres d\'expert.',
      included: [
        'Mise en page aux normes Kindle EPUB et Broché papier (Word/InDesign)',
        'Création ou adaptation graphique de la couverture',
        'Rédaction de la fiche produit vendeuse et sélection des mots-clés SEO KDP',
        'Configuration de votre compte auteur et mise en ligne',
      ],
      pricingNote: 'Devis sur-mesure gratuit sous 24h en Euros (€)',
      deliverable: 'Livre publié et disponible à la commande sur Amazon',
    },
    {
      id: 'ebooks',
      title: 'Offre Ebook & Livre d\'Expert',
      icon: BookOpen,
      subtitle: 'Positionnez votre autorité professionnelle',
      description:
        'Le livre est l\'outil d\'autorité ultime pour un entrepreneur ou un consultant. Nous transformons votre savoir en un livre d\'expert captivant.',
      forWho: 'Entrepreneurs, consultants, coachs, dirigeants.',
      included: [
        'Série d\'interviews enregistrées (8 à 12 heures d\'échanges)',
        'Rédaction du manuscrit (120 à 250 pages)',
        'Résumé 4ème de couverture et préface',
        'Cession totale des droits d\'auteur & NDA',
      ],
      pricingNote: 'Devis sur-mesure gratuit sous 24h en Euros (€)',
      deliverable: 'Fichier manuscrit complet prêt pour publication',
    },
    {
      id: 'biographies',
      title: 'Offre Biographie & Mémoires',
      icon: UserCheck,
      subtitle: 'Transmettez votre mémoire familiale ou votre saga d\'entreprise',
      description:
        'Consignes les moments clés de votre existence ou l\'histoire de votre entreprise familiale dans un récit chaleureux et littéraire.',
      forWho: 'Familles d\'entrepreneurs, fondateurs, mémorialistes.',
      included: [
        'Entretiens de mémoire confidentiels à domicile ou à distance',
        'Mise en récit narrative des souvenirs et archives',
        'Conseils de reliure et d\'impression de prestige',
      ],
      pricingNote: 'Devis sur-mesure gratuit sous 24h en Euros (€)',
      deliverable: 'Ouvrage biographique relié prêt pour tirage privé',
    },
    {
      id: 'nouvelles',
      title: 'Offre Nouvelles & Recueils',
      icon: Feather,
      subtitle: 'Le format court ciselé à forte intensité dramatique',
      description:
        'Que ce soit pour une nouvelle unique ou un recueil thématique, notre atelier rédige des récits courts où chaque mot compte.',
      forWho: 'Créateurs de contenus, concours littéraires, recueils thématiques.',
      included: [
        'Cadrage du concept et de la chute',
        'Écriture ciselée et poétique (1 500 à 10 000 mots par nouvelle)',
        'Mise en cohérence du recueil complet',
      ],
      pricingNote: 'Devis sur-mesure gratuit sous 24h en Euros (€)',
      deliverable: 'Recueil numéroté prêt à publier',
    },
    {
      id: 'discours',
      title: 'Offre Discours & Allocutions',
      icon: Mic,
      subtitle: 'Captivez votre auditoire lors de vos interventions',
      description:
        'Discours de convention annuelle, vœux de direction ou événements solennels calibrés sur le rythme oral.',
      forWho: 'PDG, Directeurs Généraux, conférenciers.',
      included: [
        'Calcul du timing (5, 15 ou 30 minutes)',
        'Indications de ton et silences sur le prompteur',
      ],
      pricingNote: 'Devis sur-mesure gratuit sous 24h en Euros (€)',
      deliverable: 'Texte avec guide de diction oral',
    },
  ];

  return (
    <div className="pt-28 pb-20">
      {/* Header Page */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto glass-panel rounded-[2.5rem] p-8 sm:p-12 border border-white/15 shadow-glass">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#F6A028] mb-3 block">
            Offres Structurées (Tarification en Euros €)
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Nos Prestations & Formats Éditoriaux
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Chaque offre fait l'objet d'un devis sur-mesure gratuit en Euros (€). Cliquez sur Contactez-nous pour cadrer votre projet.
          </p>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {serviceDetails.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className="glass-panel rounded-[2.5rem] p-8 sm:p-12 border border-white/15 shadow-glass grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
              >
                {/* Left info */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 text-[#F6A028] border border-white/15 flex items-center justify-center">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-white">
                    {service.title}
                  </h2>
                  <span className="text-sm font-semibold text-[#F6A028]">
                    {service.subtitle}
                  </span>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="p-4 bg-white/5 rounded-xl border-l-4 border-[#F6A028] mt-2">
                    <span className="text-xs font-bold text-white uppercase tracking-wider block mb-1">
                      Pour qui ?
                    </span>
                    <p className="text-xs text-white/70">{service.forWho}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#2A1B12]/60 border border-white/10 text-xs text-[#F6A028] flex items-center gap-2">
                    <Clock className="w-4 h-4 shrink-0" />
                    <span>{service.pricingNote}</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 mt-2">
                    <Link
                      href="/contact"
                      className="btn-white-pill text-xs px-6 py-3.5 w-fit inline-flex items-center gap-2 shadow-pill hover:scale-105 font-bold text-[#2A1B12]"
                    >
                      <span>Contactez-nous</span>
                      <ArrowUpRight className="w-4 h-4 text-[#2A1B12]" />
                    </Link>

                    <Link
                      href="/paiement"
                      className="text-xs px-5 py-3.5 rounded-full bg-[#F6A028]/15 border border-[#F6A028]/40 hover:bg-[#F6A028]/25 font-bold text-[#F6A028] inline-flex items-center gap-2 transition-all"
                    >
                      <CreditCard className="w-4 h-4 text-[#F6A028]" />
                      <span>Régler acompte</span>
                    </Link>
                  </div>
                </div>

                {/* Right included */}
                <div className="lg:col-span-7 bg-white/5 p-6 sm:p-8 rounded-3xl border border-white/10 backdrop-blur-md">
                  <h3 className="font-editorial text-xl font-bold text-white mb-6 border-b border-white/10 pb-3">
                    Ce qui est inclus dans l'offre :
                  </h3>
                  <ul className="space-y-4 mb-8">
                    {service.included.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-white/90">
                        <CheckCircle2 className="w-5 h-5 text-[#F6A028] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-white/60 font-medium">Livrable final :</span>
                    <span className="font-bold text-[#F6A028]">{service.deliverable}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <ProcessTimeline />
      <FinalCTASection />
    </div>
  );
}
