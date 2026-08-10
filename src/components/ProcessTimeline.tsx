import React from 'react';
import { MessageSquare, UserCheck, Edit, Send } from 'lucide-react';

export default function ProcessTimeline() {
  const steps = [
    {
      number: '01',
      title: 'Échange & Brief',
      subtitle: 'Premier contact & diagnostic',
      description:
        'Un entretien approfondi pour analyser vos intentions, le genre recherché (roman, essai, jeunesse, ebook...) et votre univers.',
      icon: MessageSquare,
    },
    {
      number: '02',
      title: 'Cadrage & Attribution',
      subtitle: 'Synopsis, NDA & choix de la plume',
      description:
        'Rédaction du plan détaillé. Attribution à la plume spécialisée de l\'atelier et signature du contrat de confidentialité.',
      icon: UserCheck,
    },
    {
      number: '03',
      title: 'Rédaction & Supervision',
      subtitle: 'Écriture par vagues & révisions',
      description:
        'Entretiens enregistrés ou trames narratives. Rédaction progressive avec relectures et validation par le fondateur.',
      icon: Edit,
    },
    {
      number: '04',
      title: 'Livraison, KDP & Cession',
      subtitle: 'Document final & publication',
      description:
        'Remise du manuscrit finalisé, option d\'accompagnement sur Amazon KDP et cession exclusive et intégrale de vos droits.',
      icon: Send,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="processus">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#F6A028] mb-2 block">
            Méthodologie d'Atelier
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Un processus fluide en 4 étapes
          </h2>
          <p className="text-white/80 text-base sm:text-lg">
            De la première idée jusqu'à la publication sur Amazon KDP ou en imprimerie, chaque étape est maîtrisée.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="glass-panel rounded-3xl p-7 border border-white/15 hover:border-[#F6A028] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-editorial text-4xl font-bold text-[#F6A028]/40 group-hover:text-[#F6A028] transition-colors">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F6A028]/30 via-white/10 to-[#2A1B12]/80 text-[#F6A028] flex items-center justify-center border border-[#F6A028]/40 shadow-sm group-hover:scale-110 group-hover:border-[#F6A028] group-hover:bg-[#F6A028] group-hover:text-[#2A1B12] transition-all duration-300">
                      <Icon className="w-6 h-6 stroke-[1.75] fill-[#F6A028]/25 group-hover:fill-[#2A1B12]/30 drop-shadow-sm" />
                    </div>
                  </div>
                  <h3 className="font-editorial text-xl font-bold text-white mb-1">
                    {step.title}
                  </h3>
                  <span className="text-xs font-semibold text-[#F6A028] block mb-3">
                    {step.subtitle}
                  </span>
                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
