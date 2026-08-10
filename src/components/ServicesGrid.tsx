import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import NumflashIcon from './CategoryIcons';

export default function ServicesGrid() {
  const services = [
    {
      id: 'romans',
      iconName: 'romans',
      title: 'Romans (Tous Genres)',
      description:
        'Romance, thriller, fantasy, roman historique ou littéraire. Conception de l\'intrigue, développement des personnages et rédaction fluide.',
      image: '/images/books/roman.png',
      badge: 'Nouveau',
    },
    {
      id: 'essais',
      iconName: 'essais',
      title: 'Essais & Manifestes',
      description:
        'Ouvrages de réflexion philosophique, politique ou sociétale. Formulation percutante de vos thèses et argumentaires d\'expert.',
      image: '/images/books/essai.png',
      badge: 'Nouveau',
    },
    {
      id: 'nouvelles',
      iconName: 'nouvelles',
      title: 'Nouvelles & Recueils',
      description:
        'Format court incisif ou recueil de récits thématiques. Chute travaillée et intensité narrative à chaque texte.',
      image: '/images/books/nouvelle.png',
      badge: 'Nouveau',
    },
    {
      id: 'enfants',
      iconName: 'enfants',
      title: 'Livres pour Enfants',
      description:
        'Albums illustrés, contes merveilleux et histoires du soir. Écriture rythmée, bienveillante et adaptée aux tranches d\'âge.',
      image: '/images/books/enfant.png',
      badge: 'Nouveau',
    },
    {
      id: 'kdp',
      iconName: 'kdp',
      title: 'Publication KDP Amazon',
      description:
        'Accompagnement complet pour publier sur Amazon Kindle Direct Publishing : mise en page, formatage EPUB/Broché, couverture et SEO KDP.',
      image: '/images/books/kdp.png',
      badge: 'Publication',
    },
    {
      id: 'ebooks',
      iconName: 'ebooks',
      title: 'Ebooks & Livres d\'Expert',
      description:
        'Transformez vos connaissances, formations ou conférences en un livre d\'autorité B2B ou grand public.',
      image: '/images/books/ebook.png',
      badge: 'Populaire',
    },
    {
      id: 'biographies',
      iconName: 'biographies',
      title: 'Biographies & Mémoires',
      description:
        'Immortalisez votre parcours d\'entrepreneur, l\'histoire de votre entreprise familiale ou vos mémoires personnelles.',
      image: '/images/books/biographie.png',
    },
    {
      id: 'discours',
      iconName: 'discours',
      title: 'Discours & Prises de Parole',
      description:
        'Allocutions de convention, vœux de direction et discours de mariage ou cérémonie calibrés sur la voix orale.',
      image: '/images/books/discours.png',
    },
    {
      id: 'articles',
      iconName: 'articles',
      title: 'Articles de Fond & Contenu Web',
      description:
        'Tribunes d\'opinion, articles de blog stratégiques et contenus SEO pour asseoir votre leadership d\'opinion.',
      image: '/images/books/article.png',
    },
    {
      id: 'livres-blancs',
      iconName: 'livresblancs',
      title: 'Textes Pro & Livres Blancs',
      description:
        'Synthèse et rédaction rigoureuse de rapports d\'activité, livres blancs prospectifs et documents d\'analyse.',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'reecriture',
      iconName: 'reecriture',
      title: 'Réécriture & Sublimation',
      description:
        'Optimisation de vos ébauches manuscrites. Harmonisation du style, correction approfondie et polissage littéraire.',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80',
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            return (
              <div
                key={service.id}
                className="bg-black/95 rounded-[2rem] p-7 border border-white/15 hover:border-[#F6A028] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden"
              >
                <div>
                  {/* Top Row: Icon at Top Left, Badge at Top Right */}
                  <div className="flex items-center justify-between mb-5">
                    <NumflashIcon name={service.iconName} size="md" />

                    {service.badge && (
                      <span className="text-[10px] uppercase tracking-wider font-bold bg-[#F6A028] text-[#2A1B12] px-3 py-1 rounded-full shadow-md">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-editorial text-2xl font-bold text-white mb-3 group-hover:text-[#F6A028] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* High-End Book Cover Preview */}
                  <div className="relative h-52 w-full rounded-2xl overflow-hidden mb-6 border border-white/10 bg-black/60 group-hover:border-[#F6A028]/40 transition-colors shadow-inner">
                    <img
                      src={service.image}
                      alt={`Livre ${service.title}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  </div>
                </div>

                {/* Action Button inside service card */}
                <Link
                  href="/contact"
                  className="bg-black hover:bg-[#111111] text-white border border-white/20 hover:border-[#F6A028] hover:text-[#F6A028] text-xs px-5 py-3.5 inline-flex items-center justify-between w-full font-bold rounded-2xl mt-2 shadow-lg hover:scale-[1.02] transition-all group/btn"
                >
                  <span>Contactez-nous</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover/btn:text-[#F6A028] transition-colors" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Central Action Button in Services Section */}
        <div className="text-center mt-14 bg-black p-8 sm:p-10 rounded-[2rem] border border-white/15 max-w-2xl mx-auto backdrop-blur-md shadow-2xl">
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white mb-2">
            Un projet unique en tête ?
          </h3>
          <p className="text-xs sm:text-sm text-white/80 mb-6">
            Racontez-nous votre idée. Notre équipe étudie votre manuscrit et vous recontacte en moins de 24 heures.
          </p>
          <Link
            href="/contact"
            className="bg-black hover:bg-[#111111] text-white border border-white/20 hover:border-[#F6A028] hover:text-[#F6A028] text-base px-10 py-4 inline-flex items-center gap-2 font-bold rounded-full shadow-2xl hover:scale-105 transition-all group/btn"
          >
            <span>Contactez-nous</span>
            <ArrowRight className="w-5 h-5 text-white group-hover/btn:text-[#F6A028] transition-colors" />
          </Link>
        </div>
      </div>
    </section>
  );
}
