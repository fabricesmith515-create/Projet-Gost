'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Sparkles, BookOpen, Feather, ShieldCheck, ChevronRight } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';

export default function HeroSection() {
  const words = ['Votre nom.', 'Votre histoire.', 'Votre roman.', 'Votre vision.'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const genres = [
    { id: 'romans', name: 'Romans', tag: 'Tous genres', desc: 'Romance, thriller, fantasy, littéraire' },
    { id: 'essais', name: 'Essais', tag: 'Pensée d\'expert', desc: 'Manifestes & philosophie' },
    { id: 'enfants', name: 'Livres Enfants', tag: 'Albums & Contes', desc: 'Récits illustrés & éveil' },
    { id: 'ebooks', name: 'Ebooks & Livres', tag: 'B2B & Non-fiction', desc: 'Livres d\'autorité' },
    { id: 'biographies', name: 'Biographies', tag: 'Mémoires', desc: 'Récits de vie & familles' },
    { id: 'kdp', name: 'Publication KDP', tag: 'Amazon', desc: 'Mise en page & publication' },
  ];

  const [activeGenre, setActiveGenre] = useState(genres[0]);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        if (displayText === currentWord) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex]);

  return (
    <section className="pt-28 pb-16 sm:pt-36 sm:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="glass-panel rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-14 relative overflow-hidden border border-white/15 shadow-glass">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F6A028]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#D94A1E]/30 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
            {/* Left Column */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill text-xs font-semibold text-[#F6A028] mb-6 border border-white/15 shadow-sm mx-auto">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Atelier d'Écriture</span>
              </div>

              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-6 text-center">
                Vos idées. Nos mots.{' '}
                <span className="text-[#F6A028] underline decoration-white/20 underline-offset-8 block sm:inline">
                  {displayText}
                  <span className="inline-block w-1 h-8 sm:h-10 bg-[#F6A028] ml-1 align-middle cursor-blink" />
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#FDF6EC]/85 leading-relaxed mb-8 font-normal text-center max-w-lg mx-auto">
                Notre collectif rassemble <strong className="text-white font-semibold">5 auteurs d'exception</strong>, dirigé par son fondateur <strong>Horizonrose</strong>, reconnu sur ComeUp.<br className="hidden sm:inline" />
                Nous écrivons romans, essais, biographies, contes pour enfants, ebooks et publications KDP.
              </p>

              {/* Action Button #1 : Contactez-nous */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto mb-8 mx-auto">
                <Link
                  href="/contact"
                  className="btn-white-pill px-8 py-4 text-sm font-bold flex items-center justify-center gap-2 text-[#2A1B12] shadow-pill hover:scale-105"
                >
                  <span>Contactez-nous</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <a
                  href="#portfolio"
                  className="glass-pill px-6 py-4 text-sm font-semibold rounded-full flex items-center justify-center gap-2 text-white hover:bg-white/20"
                >
                  <span>Voir le portfolio</span>
                </a>
              </div>

              <div className="flex items-center justify-center gap-3 text-xs text-white/70 mx-auto">
                <ShieldCheck className="w-4 h-4 text-[#F6A028]" />
                <span>Confidentialité stricte (NDA) & Devis gratuit en Euros (€)</span>
              </div>
            </div>

            {/* Center Column */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center relative my-6 lg:my-0">
              <div className="relative group">
                <div className="absolute inset-0 bg-[#F6A028]/30 rounded-3xl blur-2xl group-hover:bg-[#F6A028]/40 transition-all duration-500" />
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-[2rem] glass-panel p-6 flex flex-col justify-between border border-white/25 shadow-glass transform hover:rotate-1 hover:scale-105 transition-all duration-500">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-[#F6A028] bg-white/10 px-3 py-1 rounded-full border border-white/10">
                      Édition de Prestige
                    </span>
                    <Feather className="w-5 h-5 text-white/60" />
                  </div>

                  <div className="my-auto text-center p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <BookOpen className="w-12 h-12 text-[#F6A028] mx-auto mb-3 animate-pulse" />
                    <h3 className="font-editorial text-2xl font-bold text-white mb-1">
                      {activeGenre.name}
                    </h3>
                    <p className="text-xs text-white/70 italic">
                      « {activeGenre.desc} »
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/80">
                    <span>5 Plumes Dédiées</span>
                    <span className="text-[#F6A028] font-semibold">Devis en €</span>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-xs font-editorial italic text-white/70 text-center">
                Confiance & Excellence — Chaleur d'écriture garantie
              </p>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-3 flex flex-col gap-4">
              <div className="p-5 rounded-2xl glass-panel border border-white/15">
                <span className="text-[10px] uppercase tracking-widest font-bold text-white/60 block mb-1">
                  Sélection rapide
                </span>
                <h4 className="font-editorial text-lg font-bold text-white mb-4">
                  Choisissez votre genre
                </h4>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  {genres.map((g) => {
                    const isSelected = activeGenre.id === g.id;
                    return (
                      <button
                        key={g.id}
                        onClick={() => setActiveGenre(g)}
                        className={`text-xs font-semibold px-3 py-2 rounded-xl transition-all text-left ${
                          isSelected
                            ? 'bg-white text-[#2A1B12] shadow-pill font-bold scale-105'
                            : 'bg-white/5 text-white/80 hover:bg-white/15'
                        }`}
                      >
                        {g.name}
                      </button>
                    );
                  })}
                </div>

                <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold text-[#F6A028] uppercase">
                      {activeGenre.tag}
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-white/60" />
                  </div>
                  <p className="text-xs text-white/90 leading-snug">
                    {activeGenre.desc}
                  </p>
                </div>
              </div>

              <a
                href={SITE_CONFIG.comeup}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl glass-panel border border-white/15 hover:border-[#F6A028] transition-all flex items-center gap-3 group"
              >
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                  alt="Fondateur Horizonrose"
                  className="w-10 h-10 rounded-full object-cover border border-[#F6A028]"
                />
                <div className="text-left flex-1">
                  <span className="text-[10px] font-bold uppercase text-[#F6A028] block">
                    Fondateur Horizonrose
                  </span>
                  <span className="text-xs text-white font-medium group-hover:text-[#F6A028] transition-colors">
                    Reconnu sur ComeUp ★★★★★
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
