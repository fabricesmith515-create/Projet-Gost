import React from 'react';
import Link from 'next/link';
import { BookOpen, FileText, UserCheck, Mic, FileSpreadsheet, Edit3, ArrowRight } from 'lucide-react';

export default function ServicesGrid() {
  const services = [
    {
      id: 'ebooks',
      icon: BookOpen,
      title: 'Ebooks & Livres d\'Expert',
      description:
        'Transformez vos réflexions, méthodes ou conférences en un livre d\'autorité captivant. Prise en charge intégrale du plan à la version finale.',
      badge: 'Le plus demandé',
    },
    {
      id: 'articles',
      icon: FileText,
      title: 'Articles & Contenu Web',
      description:
        'Production d\'articles de fond, tribunes d\'opinion et contenus stratégiques pour asseoir votre visibilité et votre leadership d\'opinion.',
    },
    {
      id: 'biographies',
      icon: UserCheck,
      title: 'Biographies & Récits de Vie',
      description:
        'Immortalisez votre parcours d\'entrepreneur, l\'histoire de votre entreprise familiale ou vos mémoires personnelles dans un récit incarné.',
    },
    {
      id: 'discours',
      icon: Mic,
      title: 'Discours & Prises de Parole',
      description:
        'Rédaction sur-mesure de vos interventions publiques, vœux de direction et allocutions de convention pour impacter votre auditoire.',
    },
    {
      id: 'livres-blancs',
      icon: FileSpreadsheet,
      title: 'Textes Professionnels & Livres Blancs',
      description:
        'Rédaction synthétique et rigoureuse de rapports d\'activité, livres blancs prospectifs et documents d\'analyse d\'entreprise.',
    },
    {
      id: 'reecriture',
      icon: Edit3,
      title: 'Réécriture & Sublimation Éditoriale',
      description:
        'Optimisation de vos ébauches manuscrites. Harmonisation du style, correction approfondie et polissage du rythme littéraire.',
    },
  ];

  return (
    <section className="py-20 bg-[#FAF8F4]" id="services-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C75B39] mb-2 block">
            Prestations sur-mesure
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A2E] mb-4">
            Comment puis-je vous accompagner ?
          </h2>
          <p className="text-[#5A5A72] text-base sm:text-lg">
            Chaque mission est abordée avec une exigence littéraire maximale et un respect scrupuleux de votre identité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-8 border border-[#E5E0D8] shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
              >
                {service.badge && (
                  <span className="absolute top-6 right-6 text-[10px] uppercase tracking-wider font-bold bg-[#F9ECE8] text-[#C75B39] px-3 py-1 rounded-full">
                    {service.badge}
                  </span>
                )}
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FAF8F4] group-hover:bg-[#C75B39] text-[#1A1A2E] group-hover:text-white flex items-center justify-center mb-6 transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-editorial text-2xl font-bold text-[#1A1A2E] mb-3 group-hover:text-[#C75B39] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#5A5A72] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <Link
                  href={`/services#${service.id}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A1A2E] group-hover:text-[#C75B39] transition-colors pt-4 border-t border-[#F4EFEA]"
                >
                  <span>En savoir plus</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#C75B39] hover:text-[#B04A2A] border-b-2 border-[#C75B39] pb-0.5 transition-colors"
          >
            <span>Voir l'ensemble des détails de prestation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
