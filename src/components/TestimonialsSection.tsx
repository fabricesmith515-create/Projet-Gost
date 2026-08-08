import React from 'react';
import { Quote, Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        'Travailler avec PrêtePlume a été une révélation. Mon manuscrit végétait depuis deux ans. En seulement 3 mois de rendez-vous passionnants, mon livre est né. Mes proches ont cru que je l\'avais écrit moi-même !',
      author: 'Marc D.',
      role: 'Fondateur d\'une entreprise de conseil',
      project: 'Livre d\'expert 200 pages',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    },
    {
      quote:
        'Discrétion exemplaire et finesse rédactionnelle remarquable. PrêtePlume a réussi à capturer mon franc-parler et mes intuitions sans dénaturer un seul mot. Un véritable travail d\'artisan de l\'écriture.',
      author: 'Élodie M.',
      role: 'Directrice Générale & Conférencière',
      project: 'Ebook & Tribunes d\'opinion',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    },
    {
      quote:
        'Nous souhaitions consigner les mémoires de mon père pour ses 80 ans. L\'écoute bienveillante et la patience apportées lors des interviews ont rendu cet exercice inoubliable. Le livre familial est magnifique.',
      author: 'Jean-Philippe K.',
      role: 'Repreneur familial d\'un groupe textile',
      project: 'Biographie de famille 160 pages',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    },
  ];

  return (
    <section className="py-20 bg-[#FAF8F4]" id="avis">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C75B39] mb-2 block">
            Preuve sociale & Témoignages
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A2E] mb-4">
            Ce que disent mes clients
          </h2>
          <p className="text-[#5A5A72] text-base sm:text-lg">
            Leurs retours d'expérience témoignent de la précision littéraire et de la confidentialité qui guident chaque projet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 border border-[#E5E0D8] shadow-soft flex flex-col justify-between relative group hover:border-[#C75B39] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-[#B08D57]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#C75B39]/20" />
                </div>

                <p className="font-editorial italic text-base text-[#1A1A2E] leading-relaxed mb-6">
                  « {item.quote} »
                </p>
              </div>

              <div className="pt-6 border-t border-[#F4EFEA] flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#E5E0D8]"
                />
                <div>
                  <h4 className="font-editorial font-bold text-[#1A1A2E] text-base">
                    {item.author}
                  </h4>
                  <p className="text-xs text-[#5A5A72]">{item.role}</p>
                  <span className="text-[10px] font-semibold text-[#C75B39] block mt-0.5">
                    Projet : {item.project}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
