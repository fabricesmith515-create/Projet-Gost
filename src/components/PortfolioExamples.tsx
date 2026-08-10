'use client';

import React, { useState } from 'react';
import { BookOpen, ShieldCheck, Sparkles, Lock, ArrowUpRight } from 'lucide-react';

export default function PortfolioExamples() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const categories = [
    'Tous',
    'Romans',
    'Essais',
    'Nouvelles',
    'Livres Enfants',
    'Ebooks',
    'Biographies',
    'Publication KDP',
  ];

  // Anonymized sample entries with explicit replacement placeholders
  const portfolioItems = [
    {
      id: 1,
      category: 'Romans',
      title: '« L\'Ombre du Destin »',
      genre: 'Roman Thriller & Suspense',
      cover: '/images/books/roman.png',
      extract: '[EXTRAIT À REMPLACER — La pluie battante contre la vitre semblait scander les secondes. Il savait qu\'en ouvrant ce manuscrit, sa vie basculerait.]',
      duration: '4 mois de création',
      kdp: true,
    },
    {
      id: 2,
      category: 'Essais',
      title: '« Le Manifeste du Leadership Conscient »',
      genre: 'Essai de Philosophie d\'Entreprise',
      cover: '/images/books/essai.png',
      extract: '[EXTRAIT À REMPLACER — Diriger ne consiste pas à imposer une vision, mais à créer le cadre dans lequel chaque intuition trouve son épanouissement.]',
      duration: '2 mois de rédaction',
      kdp: true,
    },
    {
      id: 3,
      category: 'Livres Enfants',
      title: '« Le Petit Renard et la Lune d\'Argent »',
      genre: 'Album Illustré & Conte Jeunesse',
      cover: '/images/books/enfant.png',
      extract: '[EXTRAIT À REMPLACER — Cette nuit-là, Barnabé le renard s\'éveilla sous un éclat argenté. La lune lui murmurait une promesse secrète.]',
      duration: '1 mois',
      kdp: true,
    },
    {
      id: 4,
      category: 'Nouvelles',
      title: '« Histoires Courtes au Crépuscule »',
      genre: 'Recueil de Nouvelles Littéraires',
      cover: '/images/books/nouvelle.png',
      extract: '[EXTRAIT À REMPLACER — À 18 heures précises, la vieille horloge du café s\'arrêta. Personne ne se doutait que le temps venait d\'être suspendu.]',
      duration: '2 mois',
      kdp: false,
    },
    {
      id: 5,
      category: 'Ebooks',
      title: '« Scaler son Entreprise sans sacrifier sa vision »',
      genre: 'Livre d\'Expert B2B',
      cover: '/images/books/ebook.png',
      extract: '[EXTRAIT À REMPLACER — La croissance désordonnée détruit la valeur. Voici la méthode en 5 piliers pour structurer votre expansion.]',
      duration: '3 mois',
      kdp: true,
    },
    {
      id: 6,
      category: 'Biographies',
      title: '« Trois Générations sous le Même Toit »',
      genre: 'Mémoires Familiales de Prestige',
      cover: '/images/books/biographie.png',
      extract: '[EXTRAIT À REMPLACER — Mon grand-père est arrivé à Marseille en 1948 avec pour seule fortune une valise en carton et une certitude inébranlable.]',
      duration: '4 mois d\'immersion',
      kdp: false,
    },
  ];

  const filteredItems =
    selectedCategory === 'Tous'
      ? portfolioItems
      : selectedCategory === 'Publication KDP'
      ? portfolioItems.filter((item) => item.kdp)
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#F6A028] mb-2 block">
            Galerie d'Extraits & Couvertures
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Exemples de réalisations sur-mesure
          </h2>
          <p className="text-white/80 text-base sm:text-lg">
            Par respect pour la confidentialité stricte de nos clients (NDA), les noms d'auteurs sont remplacés par la mention « Client confidentiel ».
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-semibold px-5 py-2.5 rounded-full transition-all ${
                  isActive
                    ? 'bg-black text-[#F6A028] border-2 border-[#F6A028] shadow-2xl font-bold scale-105'
                    : 'bg-black/70 text-white/90 border border-white/15 hover:border-white/40 hover:bg-black'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Portfolio Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="glass-panel rounded-[2rem] overflow-hidden border border-white/15 hover:border-[#F6A028] transition-all duration-500 shadow-glass flex flex-col justify-between group hover:-translate-y-2"
            >
              <div>
                {/* Book Cover Image Placeholder */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black/40">
                  <img
                    src={item.cover}
                    alt={`Couverture de ${item.title}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                  {/* Confidential Client Tag */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/20 text-[#F6A028] text-[10px] uppercase font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                    <Lock className="w-3 h-3 text-[#F6A028]" />
                    <span>Client confidentiel (NDA)</span>
                  </div>

                  {item.kdp && (
                    <span className="absolute top-4 right-4 bg-[#F6A028] text-[#2A1B12] text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                      KDP Amazon
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#F6A028] block mb-1">
                    {item.genre}
                  </span>
                  <h3 className="font-editorial text-2xl font-bold text-white mb-3 group-hover:text-[#F6A028] transition-colors">
                    {item.title}
                  </h3>

                  {/* Extract Text */}
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white/80 font-editorial italic leading-relaxed mb-4">
                    {item.extract}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                <span>Durée : {item.duration}</span>
                <span className="text-[#F6A028] font-medium flex items-center gap-1">
                  Atelier PrêtePlume
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
