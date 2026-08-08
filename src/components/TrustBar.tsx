import React from 'react';
import { BookOpen, ShieldCheck, Award, Users } from 'lucide-react';

export default function TrustBar() {
  const stats = [
    {
      icon: BookOpen,
      value: '45+',
      label: 'Ouvrages & rapports rédigés',
    },
    {
      icon: ShieldCheck,
      value: '100%',
      label: 'Confidentialité garantie (NDA)',
    },
    {
      icon: Award,
      value: '8+ ans',
      label: 'D\'expérience éditoriale',
    },
    {
      icon: Users,
      value: '99%',
      label: 'Satisfaction clients & recommandation',
    },
  ];

  const domains = [
    'Édition & Livres',
    'Entrepreneuriat B2B',
    'Biographies & Mémoires',
    'Communication Dirigeants',
  ];

  return (
    <section className="py-12 bg-white border-y border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#E5E0D8]">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex flex-col items-center p-4">
                <div className="w-10 h-10 rounded-full bg-[#FAF8F4] text-[#C75B39] flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-editorial text-3xl font-bold text-[#1A1A2E] mb-1">
                  {stat.value}
                </span>
                <span className="text-xs text-[#5A5A72] font-medium max-w-[160px]">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-10 pt-6 border-t border-[#E5E0D8]/60 flex flex-wrap items-center justify-center gap-6 text-xs text-[#5A5A72] uppercase tracking-wider font-semibold">
          <span className="text-[#B08D57]">Domaines d'expertise :</span>
          {domains.map((domain, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C75B39]" />
              {domain}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
