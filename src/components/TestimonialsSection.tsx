import React from 'react';
import { Quote, Star } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        'L\'atelier PrêtePlume a su m\'attribuer une romancière d\'exception. Mon roman thriller a été rédigé avec un suspense haletant et publié sur Amazon KDP. Les retours de mes premiers lecteurs sont dithyrambiques !',
      author: 'Marc D.',
      role: 'Auteur indépendant & Entrepreneur (France)',
      project: 'Roman Thriller 240 pages + KDP',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    },
    {
      quote:
        'Une discrétion absolue et un professionnalisme remarquable sous la direction d\'Horizonrose. Notre livre blanc d\'entreprise et notre essai stratégique ont été salués par nos partenaires en Suisse.',
      author: 'Élodie M.',
      role: 'Directrice de Cabinet (Genève, Suisse)',
      project: 'Essai & Livre Blanc d\'autorité',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    },
    {
      quote:
        'Nous souhaitions consigner le récit de vie de notre famille. La plume biographe s\'est montrée d\'une grande écoute. Le livre imprimé relié est un véritable trésor pour nos enfants.',
      author: 'Jean-Philippe K.',
      role: 'Dirigeant d\'entreprise (Montréal, Québec)',
      project: 'Biographie de Famille 180 pages',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="avis">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#F6A028] mb-2 block">
            Avis Vérifiés & Témoignages
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Ce que nos clients disent de l'Atelier
          </h2>
          <p className="text-white/80 text-base sm:text-lg">
            Retours d'expérience vérifiés sur notre atelier et sur notre profil ComeUp (Horizonrose).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-3xl p-8 border border-white/15 shadow-glass flex flex-col justify-between group hover:border-[#F6A028] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-[#F6A028]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#F6A028]/30" />
                </div>

                <p className="font-editorial italic text-base text-white leading-relaxed mb-6">
                  « {item.quote} »
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#F6A028]"
                />
                <div>
                  <h4 className="font-editorial font-bold text-white text-base">
                    {item.author}
                  </h4>
                  <p className="text-xs text-white/70">{item.role}</p>
                  <span className="text-[10px] font-semibold text-[#F6A028] block mt-0.5">
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
