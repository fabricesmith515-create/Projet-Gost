import React from 'react';
import { Users, BookOpen, ShieldCheck, Award } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';

export default function TrustBar() {
  const stats = [
    {
      icon: Users,
      value: '5 Plumes',
      label: 'Collectif d\'auteurs spécialisés',
    },
    {
      icon: BookOpen,
      value: '45+',
      label: 'Livres, romans & projets édités',
    },
    {
      icon: ShieldCheck,
      value: '100%',
      label: 'Confidentialité NDA & Cession',
    },
    {
      icon: Award,
      value: '99%',
      label: 'Satisfaction clients vérifiée',
    },
  ];

  const regions = [
    'France',
    'Suisse (CHF)',
    'Belgique',
    'Québec (CAD)',
  ];

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/15">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="flex flex-col items-center p-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 text-[#F6A028] flex items-center justify-center mb-3 border border-white/15">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-editorial text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </span>
                  <span className="text-xs text-white/75 font-medium max-w-[160px]">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/70 uppercase tracking-wider font-semibold">
            <span className="text-[#F6A028]">Zone d'intervention & Tarification :</span>
            {regions.map((region, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F6A028]" />
                {region}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
