import React from 'react';
import Link from 'next/link';
import { BookOpen, FileText, UserCheck, Mic, FileSpreadsheet, Edit3, Sparkles, BookHeart, Compass, Feather, Share2, ArrowRight, ShieldCheck, Sparkle } from 'lucide-react';

export default function ServicesGrid() {
  const services = [
    {
      id: 'romans',
      icon: BookHeart,
      title: 'Romans (Tous Genres)',
      description:
        'Romance, thriller, fantasy, roman historique ou littéraire. Conception de l\'intrigue, développement des personnages et rédaction fluide.',
      badge: 'Nouveau',
    },
    {
      id: 'essais',
      icon: Compass,
      title: 'Essais & Manifestes',
      description:
        'Ouvrages de réflexion philosophique, politique ou sociétale. Formulation percutante de vos thèses et argumentaires d\'expert.',
      badge: 'Nouveau',
    },
    {
      id: 'nouvelles',
      icon: Feather,
      title: 'Nouvelles & Recueils',
      description:
        'Format court incisif ou recueil de récits thématiques. Chute travaillée et intensité narrative à chaque texte.',
      badge: 'Nouveau',
    },
    {
      id: 'enfants',
      icon: Sparkles,
      title: 'Livres pour Enfants',
      description:
        'Albums illustrés, contes merveilleux et histoires du soir. Écriture rythmée, bienveillante et adaptée aux tranches d\'âge.',
      badge: 'Nouveau',
    },
    {
      id: 'kdp',
      icon: Share2,
      title: 'Publication KDP Amazon',
      description:
        'Accompagnement complet pour publier sur Amazon Kindle Direct Publishing : mise en page, formatage EPUB/Broché, couverture et SEO KDP.',
      badge: 'Publication',
    },
    {
      id: 'ebooks',
      icon: BookOpen,
      title: 'Ebooks & Livres d\'Expert',
      description:
        'Transformez vos connaissances, formations ou conférences en un livre d\'autorité B2B ou grand public.',
      badge: 'Populaire',
    },
    {
      id: 'biographies',
      icon: UserCheck,
      title: 'Biographies & Mémoires',
      description:
        'Immortalisez votre parcours d\'entrepreneur, l\'histoire de votre entreprise familiale ou vos mémoires personnelles.',
    },
    {
      id: 'discours',
      icon: Mic,
      title: 'Discours & Prises de Parole',
      description:
        'Allocutions de convention, vœux de direction et discours de mariage ou cérémonie calibrés sur la voix orale.',
    },
    {
      id: 'articles',
      icon: FileText,
      title: 'Articles de Fond & Contenu Web',
      description:
        'Tribunes d\'opinion, articles de blog stratégiques et contenus SEO pour asseoir votre leadership d\'opinion.',
    },
    {
      id: 'livres-blancs',
      icon: FileSpreadsheet,
      title: 'Textes Pro & Livres Blancs',
      description:
        'Synthèse et rédaction rigoureuse de rapports d\'activité, livres blancs prospectifs et documents d\'analyse.',
    },
    {
      id: 'reecriture',
      icon: Edit3,
      title: 'Réécriture & Sublimation',
      description:
        'Optimisation de vos ébauches manuscrites. Harmonisation du style, correction approfondie et polissage littéraire.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#F6A028] mb-2 block">
            Éventail Éditorial Complet
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Ce que nos 5 plumes rédigent pour vous
          </h2>
          <p className="text-white/80 text-base sm:text-lg mb-4">
            De la fiction grand public aux ouvrages d'autorité professionnelle. Vous hésitez sur le format ? Échangez gratuitement avec notre atelier.
          </p>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#25D366] bg-[#25D366]/10 px-4 py-1.5 rounded-full border border-[#25D366]/20">
            <ShieldCheck className="w-4 h-4" />
            <span>Réponse personnalisée sous 24h & Devis gratuit en Euros (€)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="glass-panel rounded-3xl p-7 border border-white/15 hover:border-[#F6A028] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
              >
                {service.badge && (
                  <span className="absolute top-6 right-6 text-[10px] uppercase tracking-wider font-bold bg-[#F6A028] text-[#2A1B12] px-3 py-0.5 rounded-full shadow-sm">
                    {service.badge}
                  </span>
                )}
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#F6A028] border border-white/15 flex items-center justify-center mb-5 group-hover:bg-white group-hover:text-[#2A1B12] transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-editorial text-2xl font-bold text-white mb-3 group-hover:text-[#F6A028] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Action Button #2 inside services grid card */}
                <Link
                  href="/contact"
                  className="btn-white-pill text-xs px-4 py-3 inline-flex items-center justify-between w-full font-bold text-[#2A1B12] mt-4 shadow-sm hover:scale-102"
                >
                  <span>Contactez-nous</span>
                  <ArrowRight className="w-4 h-4 text-[#2A1B12]" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Central Action Button #2 in Services Section with incitation */}
        <div className="text-center mt-14 bg-white/5 p-8 rounded-3xl border border-white/10 max-w-2xl mx-auto backdrop-blur-md">
          <h3 className="font-editorial text-2xl font-bold text-white mb-2">
            Un projet unique en tête ?
          </h3>
          <p className="text-xs sm:text-sm text-white/80 mb-6">
            Racontez-nous votre idée. Notre équipe étudie votre manuscrit et vous recontacte en moins de 24 heures.
          </p>
          <Link
            href="/contact"
            className="btn-white-pill text-base px-10 py-4 inline-flex items-center gap-2 font-bold text-[#2A1B12] shadow-pill hover:scale-105 transition-transform"
          >
            <span>Contactez-nous</span>
            <ArrowRight className="w-5 h-5 text-[#2A1B12]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
