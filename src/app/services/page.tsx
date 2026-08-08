import React from 'react';
import Link from 'next/link';
import { constructMetadata } from '@/lib/metadata';
import { BookOpen, FileText, UserCheck, Mic, FileSpreadsheet, Edit3, CheckCircle2, ArrowUpRight } from 'lucide-react';
import ProcessTimeline from '@/components/ProcessTimeline';
import FinalCTASection from '@/components/FinalCTASection';

export const metadata = constructMetadata({
  title: 'Services de Ghostwriting & Rédaction — PrêtePlume',
  description:
    'Découvrez mes prestations de rédaction sur-mesure : ebooks, livres d\'expert, biographies, discours de direction, contenus web et réécriture.',
  canonical: 'https://preteplume.com/services',
});

export default function ServicesPage() {
  const serviceDetails = [
    {
      id: 'ebooks',
      title: 'Ebooks & Livres d\'Expert',
      icon: BookOpen,
      subtitle: 'Devenez l\'auteur de référence dans votre secteur',
      description:
        'Le livre est l\'outil d\'autorité ultime pour un entrepreneur ou un consultant d\'expérience. Je prends en charge l\'intégralité du processus de rédaction pour transformer vos connaissances brutes en un livre captivant.',
      forWho: 'Entrepreneurs, dirigeants, coachs, experts et conférenciers.',
      included: [
        'Série d\'interviews approfondies (8 à 12 heures d\'échanges enregistrés)',
        'Établissement du synopsis complet et de la structure des chapitres',
        'Rédaction intégrale du manuscrit dans votre voix (150 à 250 pages)',
        'Jusqu\'à 2 séries de révisions et corrections par chapitre',
        'Rédaction du résumé quatrième de couverture et préface',
        'Cession exclusive et définitive de l\'intégralité de vos droits d\'auteur',
      ],
      deliverable: 'Fichier manuscrit complet (DOCX / EPUB / PDF prêt pour imprimeur)',
    },
    {
      id: 'articles',
      title: 'Articles & Contenu Web Stratégique',
      icon: FileText,
      subtitle: 'Installez votre leadership d\'opinion et votre visibilité',
      description:
        'Des textes de fond fouillés pour alimenter votre blog d\'entreprise, vos tribunes dans la presse spécialisée ou vos publications LinkedIn à forte valeur ajoutée.',
      forWho: 'Cabinets de conseil, agences, dirigeants et marques exigeantes.',
      included: [
        'Recherche documentaire et analyse sectorielle pointue',
        'Rédaction d\'articles de 1 200 à 3 000 mots au style soigné',
        'Optimisation naturelle pour le référencement (SEO sans lourdeur)',
        'Intégration d\'exemples concrets, citations et métaphores percutantes',
      ],
      deliverable: 'Fichiers rédigés prêts à publier (MDX, Word ou intégration CMS)',
    },
    {
      id: 'biographies',
      title: 'Biographies & Récits de Vie',
      icon: UserCheck,
      subtitle: 'Transmettez votre histoire et votre patrimoine humain',
      description:
        'Consignez les moments fondateurs de votre existence, l\'histoire de votre entreprise familiale ou l\'héritage transmis à vos proches dans un récit chaleureux et littéraire.',
      forWho: 'Particuliers, familles d\'entrepreneurs, fondateurs à la retraite.',
      included: [
        'Entretiens de mémoire confidentiels et enregistrés (à domicile ou à distance)',
        'Collecte et mise en valeur des archives familiales ou professionnelles',
        'Rédaction narrative chronologique ou thématique',
        'Conseils pour le choix du papier, de la reliure et de l\'imprimeur',
      ],
      deliverable: 'Manuscrit biographique prêt pour tirage privé ou éditorial',
    },
    {
      id: 'discours',
      title: 'Discours & Prises de Parole',
      icon: Mic,
      subtitle: 'Marquez les esprits lors de vos interventions clés',
      description:
        'Que ce soit pour une convention annuelle, une cérémonie de vœux ou un colloque international, je rédige des discours calibrés sur la rythmique orale qui captivent l\'auditoire.',
      forWho: 'PDG, Directeurs Généraux, responsables d\'associations, personnalités.',
      included: [
        'Brainstorming sur l\'intention centrale et l\'émotion recherchée',
        'Calcul précis du timing de diction (5, 15 ou 30 minutes)',
        'Indications de ton, silences et inflexions sur le document final',
      ],
      deliverable: 'Fichier texte aéré avec prompteur et guide de diction',
    },
    {
      id: 'livres-blancs',
      title: 'Livres Blancs & Rapports d\'Activité',
      icon: FileSpreadsheet,
      subtitle: 'Synthétisez vos analyses stratégiques avec élégance',
      description:
        'Transformez vos données brutes, vos études de marché et vos bilans d\'activité en documents clairs, structurés et agréables à parcourir par vos partenaires.',
      forWho: 'Direction générale, départements RSE, cabinets d\'études.',
      included: [
        'Restructuration des données et synthèse des rapports d\'experts',
        'Rédaction d\'introductions impactantes et de conclusions prospectives',
        'Titrages incitatifs et encadrés de synthèse',
      ],
      deliverable: 'Document éditorial structuré pour mise en page graphiste',
    },
    {
      id: 'reecriture',
      title: 'Réécriture & Sublimation Éditoriale',
      icon: Edit3,
      subtitle: 'Donnez un souffle littéraire à vos premiers écrits',
      description:
        'Vous avez rédigé une première version de votre manuscrit mais le style vous semble inégal ? Je reprends votre texte pour en corriger le rythme et en sublimer la clarté.',
      forWho: 'Auteurs ayant déjà une ébauche complète ou partielle.',
      included: [
        'Diagnostic éditorial préalable du manuscrit existant',
        'Correction syntaxique, grammaticale et stylistique approfondie',
        'Harmonisation des temps et suppression des pléonasmes et lourdeurs',
      ],
      deliverable: 'Manuscrit révisé avec suivi des modifications apparentes',
    },
  ];

  return (
    <div className="pt-28 pb-20">
      {/* Header Page */}
      <section className="py-16 bg-[#F4EFEA] border-b border-[#E5E0D8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C75B39] mb-3 block">
            Catalogue d'expertise
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1A2E] mb-6">
            Mes prestations de ghostwriting
          </h1>
          <p className="text-base sm:text-lg text-[#5A5A72] max-w-2xl mx-auto leading-relaxed">
            Chaque mission est pensée comme un partenariat éditorial d'exception. Découvrez le détail de ce que comprend chaque accompagnement.
          </p>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {serviceDetails.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-12 ${
                  index !== 0 ? 'border-t border-[#E5E0D8]' : ''
                }`}
              >
                {/* Left col info */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#FAF8F4] text-[#C75B39] border border-[#E5E0D8] flex items-center justify-center">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#1A1A2E]">
                    {service.title}
                  </h2>
                  <span className="text-sm font-semibold text-[#B08D57]">
                    {service.subtitle}
                  </span>
                  <p className="text-sm text-[#5A5A72] leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-4 p-4 bg-[#FAF8F4] rounded-xl border-l-4 border-[#C75B39]">
                    <span className="text-xs font-bold text-[#1A1A2E] block uppercase tracking-wider mb-1">
                      Pour qui ?
                    </span>
                    <p className="text-xs text-[#5A5A72]">{service.forWho}</p>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#C75B39] hover:bg-[#B04A2A] text-white text-xs font-semibold px-6 py-3 rounded-full shadow-soft w-fit mt-2 transition-all duration-200"
                  >
                    <span>Réserver ce service</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Right col included */}
                <div className="lg:col-span-7 bg-[#FAF8F4] p-8 rounded-2xl border border-[#E5E0D8]">
                  <h3 className="font-editorial text-xl font-bold text-[#1A1A2E] mb-6 border-b border-[#E5E0D8] pb-3">
                    Ce qui est systématiquement inclus :
                  </h3>
                  <ul className="space-y-4 mb-8">
                    {service.included.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#2B2B40]">
                        <CheckCircle2 className="w-5 h-5 text-[#C75B39] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-[#E5E0D8] flex items-center justify-between text-xs">
                    <span className="text-[#5A5A72] font-medium">Format de livraison :</span>
                    <span className="font-bold text-[#1A1A2E]">{service.deliverable}</span>
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
