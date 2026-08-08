import React from 'react';
import { Lock, Mic, Clock, UserCheck } from 'lucide-react';

export default function WhyMeSection() {
  const features = [
    {
      icon: Lock,
      title: 'Confidentialité absolue',
      description:
        'Votre nom est le seul qui apparaîtra. Signature systématique d\'un accord de confidentialité (NDA) et cession totale des droits d\'auteur.',
    },
    {
      icon: Mic,
      title: 'Écriture dans votre voix',
      description:
        'Analyse approfondie de votre rythme verbal et de votre sensibilité. Le texte final vous ressemble comme si vous l\'aviez rédigé vous-même.',
    },
    {
      icon: Clock,
      title: 'Respect scrupuleux des délais',
      description:
        'Calendrier de rédaction jalonnée. Chaque étape fait l\'objet d\'une échéance claire tenue avec rigueur.',
    },
    {
      icon: UserCheck,
      title: 'Un seul interlocuteur dédié',
      description:
        'Pas de sous-traitance ni d\'intermédiaires. Vous échangez exclusivement avec l\'auteur de la première à la dernière ligne.',
    },
  ];

  return (
    <section className="py-20 bg-white border-y border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Editorial Header */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C75B39]">
              Engagement & Rigueur
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A2E] leading-tight">
              Pourquoi confier votre plume à PrêtePlume ?
            </h2>
            <p className="text-[#5A5A72] text-base leading-relaxed">
              La rédaction d'un ouvrage ou d'un texte d'importance requiert bien plus que de la technique : une confiance mutuelle, une écoute attentive et une absolue discrétion.
            </p>
            <div className="p-6 bg-[#FAF8F4] border-l-4 border-[#C75B39] rounded-r-xl mt-4">
              <blockquote className="font-editorial italic text-lg text-[#1A1A2E]">
                « Mon métier consiste à me rendre invisible pour que votre pensée brille avec toute la clarté qu'elle mérite. »
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
                  className="bg-[#FAF8F4] p-6 rounded-2xl border border-[#E5E0D8] hover:border-[#B08D57] transition-all duration-300 flex flex-col gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-white text-[#C75B39] shadow-soft flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-editorial text-xl font-bold text-[#1A1A2E]">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A5A72] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
