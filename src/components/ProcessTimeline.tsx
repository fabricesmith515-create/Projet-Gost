import React from 'react';
import NumflashIcon from './CategoryIcons';

export default function ProcessTimeline() {
  const steps = [
    {
      number: '01',
      title: 'Échange & Brief',
      subtitle: 'Premier contact & diagnostic',
      description:
        'Un entretien approfondi pour analyser vos intentions, le genre recherché (roman, essai, jeunesse, ebook...) et votre univers.',
      iconName: 'step01',
    },
    {
      number: '02',
      title: 'Cadrage & Attribution',
      subtitle: 'Synopsis, NDA & choix de la plume',
      description:
        'Rédaction du plan détaillé. Attribution à la plume spécialisée de l\'atelier et signature du contrat de confidentialité.',
      iconName: 'step02',
    },
    {
      number: '03',
      title: 'Rédaction & Supervision',
      subtitle: 'Écriture par vagues & révisions',
      description:
        'Entretiens enregistrés ou trames narratives. Rédaction progressive avec relectures et validation par le fondateur.',
      iconName: 'step03',
    },
    {
      number: '04',
      title: 'Livraison, KDP & Cession',
      subtitle: 'Document final & publication',
      description:
        'Remise du manuscrit finalisé, option d\'accompagnement sur Amazon KDP et cession exclusive et intégrale de vos droits.',
      iconName: 'step04',
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
            return (
              <div
                key={idx}
                className="bg-black/95 rounded-3xl p-7 border border-white/15 hover:border-[#F6A028] transition-all duration-300 flex flex-col justify-between group shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:-translate-y-1 relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-editorial text-4xl font-bold text-[#F6A028]/40 group-hover:text-[#F6A028] transition-colors">
                      {step.number}
                    </span>
                    <NumflashIcon name={step.iconName} size="md" />
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
