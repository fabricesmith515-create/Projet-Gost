import React from 'react';
import { Lock, Users, Clock, Sparkles } from 'lucide-react';

export default function WhyMeSection() {
  const features = [
    {
      icon: Lock,
      title: 'Confidentialité absolue (NDA)',
      description:
        'Votre nom est le seul qui apparaîtra sur l\'œuvre finale. Accord de non-divulgation signé avant les échanges et cession totale de tous les droits d\'auteur.',
    },
    {
      icon: Users,
      title: '5 Plumes = Un genre dédié',
      description:
        'Roman, essai, biographie, jeunesse ou ebook : votre projet est confié à l\'auteur spécialisé de l\'atelier dont le style correspond exactement à votre univers.',
    },
    {
      icon: Clock,
      title: 'Respect scrupuleux des délais',
      description:
        'Grâce au travail en collectif et à la supervision du fondateur, chaque calendrier est jalonnée et livrée en temps voulu sans aucun retard.',
    },
    {
      icon: Sparkles,
      title: 'Supervision par le Fondateur',
      description:
        'Le fondateur Horizonrose assure le contrôle qualité littéraire de chaque chapitre pour vous offrir une harmonie et une excellence irréprochables.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="glass-panel rounded-[2.5rem] p-8 sm:p-12 border border-white/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Editorial Header */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#F6A028]">
                Rigueur & Synergie
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Pourquoi confier votre ouvrage à notre atelier ?
              </h2>
              <p className="text-white/80 text-base leading-relaxed">
                La rédaction d'un ouvrage exige bien plus qu'une écriture neutre : une écoute attentive, une adéquation stylistique parfaite et une discrétion absolue.
              </p>
              <div className="p-6 rounded-2xl bg-white/5 border-l-4 border-[#F6A028] mt-4 backdrop-blur-md">
                <blockquote className="font-editorial italic text-lg text-white">
                  « Notre mission d'atelier consiste à nous rendre invisibles pour que votre histoire brille avec toute la clarté qu'elle mérite. »
                </blockquote>
              </div>
            </div>

            {/* Right Features Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={i}
                    className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#F6A028] transition-all duration-300 flex flex-col gap-3 backdrop-blur-md"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F6A028]/30 via-white/10 to-[#2A1B12]/80 text-[#F6A028] flex items-center justify-center border border-[#F6A028]/40 shadow-sm">
                      <Icon className="w-6 h-6 stroke-[1.75] fill-[#F6A028]/25 drop-shadow-sm" />
                    </div>
                    <h3 className="font-editorial text-xl font-bold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
