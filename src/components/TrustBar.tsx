import React from 'react';
import NumflashIcon from './CategoryIcons';

export default function TrustBar() {
  const stats = [
    {
      iconName: 'crown',
      value: '5 Plumes',
      label: 'Collectif d\'auteurs spécialisés',
    },
    {
      iconName: 'amazon',
      value: '45+',
      label: 'Livres, romans & projets édités',
    },
    {
      iconName: 'shield',
      value: '100%',
      label: 'Confidentialité NDA & Cession',
    },
    {
      iconName: 'award',
      value: '99%',
      label: 'Satisfaction clients vérifiée',
    },
  ];

  const brands = [
    { name: 'WhatsApp Direct', iconName: 'whatsapp' },
    { name: 'Amazon KDP', iconName: 'amazon' },
    { name: 'Apple Books', iconName: 'apple' },
    { name: 'Google Play', iconName: 'google' },
    { name: 'Telegram VIP', iconName: 'telegram' },
  ];

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-black/95 rounded-3xl p-6 sm:p-8 border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            {stats.map((stat, idx) => {
              return (
                <div key={idx} className="flex flex-col items-center p-3 group">
                  <div className="mb-3">
                    <NumflashIcon name={stat.iconName} size="sm" />
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

          {/* Real Platform Brand Bar */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/80 font-semibold">
            <span className="text-[#F6A028] uppercase tracking-wider font-bold">Plateformes & Canaux d'Échange :</span>
            {brands.map((brand, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/15 hover:border-[#F6A028] transition-colors">
                <img
                  src={
                    brand.iconName === 'whatsapp'
                      ? 'https://cdn-icons-png.flaticon.com/512/3670/3670051.png'
                      : brand.iconName === 'telegram'
                      ? 'https://cdn-icons-png.flaticon.com/512/2111/2111646.png'
                      : brand.iconName === 'google'
                      ? 'https://cdn-icons-png.flaticon.com/512/300/300221.png'
                      : brand.iconName === 'apple'
                      ? 'https://cdn-icons-png.flaticon.com/512/731/731985.png'
                      : 'https://cdn-icons-png.flaticon.com/512/5968/5968854.png'
                  }
                  alt={brand.name}
                  className="w-4 h-4 object-contain"
                />
                <span className="text-white text-xs">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
