import React from 'react';
import { MessageSquare, FileCheck, Edit, Send } from 'lucide-react';

export default function ProcessTimeline() {
  const steps = [
    {
      number: '01',
      title: 'Échange & Brief',
      subtitle: 'Premier contact & diagnostic',
      description:
        'Un entretien approfondi de 45 minutes pour cerner vos objectifs, votre style, le public cible et le format souhaité.',
      icon: MessageSquare,
    },
    {
      number: '02',
      title: 'Devis & Cadrage',
      subtitle: 'Plan détaillé & contrat NDA',
      description:
        'Rédaction de l\'architecture du projet (synopsis) et validation du calendrier. Signature de la convention confidentielle.',
      icon: FileCheck,
    },
    {
      number: '03',
      title: 'Rédaction & Allers-retours',
      subtitle: 'Entretiens & écriture progressive',
      description:
        'Sessions d\'interviews enregistrées, rédaction par chapitres et ajustements réguliers selon vos remarques.',
      icon: Edit,
    },
    {
      number: '04',
      title: 'Livraison & Cession',
      subtitle: 'Document final & droits d\'auteur',
      description:
        'Remise du manuscrit impeccablement mis en forme, prêt pour impression ou diffusion. Cession exclusive de vos droits.',
      icon: Send,
    },
  ];

  return (
    <section className="py-20 bg-[#FAF8F4]" id="processus">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C75B39] mb-2 block">
            Méthodologie rodée
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A2E] mb-4">
            Un processus transparent en 4 étapes
          </h2>
          <p className="text-[#5A5A72] text-base sm:text-lg">
            De la première idée jusqu'au document prêt à imprimer, chaque étape est balisée pour vous garantir sérénité et contrôle total.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#E5E0D8] shadow-soft relative flex flex-col justify-between group hover:border-[#C75B39] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-editorial text-4xl font-bold text-[#C75B39]/20 group-hover:text-[#C75B39] transition-colors">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#FAF8F4] text-[#1A1A2E] flex items-center justify-center group-hover:bg-[#C75B39] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-editorial text-xl font-bold text-[#1A1A2E] mb-1">
                    {step.title}
                  </h3>
                  <span className="text-xs font-semibold text-[#B08D57] block mb-3">
                    {step.subtitle}
                  </span>
                  <p className="text-xs sm:text-sm text-[#5A5A72] leading-relaxed">
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
