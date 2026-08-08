'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles, Feather } from 'lucide-react';

export default function HeroSection() {
  const words = ['Votre nom.', 'Votre histoire.', 'Votre signature.', 'Votre vision.'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

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
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#FAF8F4] via-[#F4EFEA] to-[#FAF8F4]">
      {/* Editorial Decorative Plume Watermark */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-5">
        <Feather className="w-[600px] h-[600px] text-[#1A1A2E]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Badge top */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#E5E0D8] shadow-soft mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-[#C75B39]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1A1A2E]">
              Rédacteur de l'ombre & Ghostwriter Francophone
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1A1A2E] leading-[1.1] mb-6">
            Vos idées. Mes mots.{' '}
            <span className="text-[#C75B39] underline decoration-[#B08D57]/40 underline-offset-8 block sm:inline">
              {displayText}
              <span className="inline-block w-1 h-8 md:h-12 bg-[#C75B39] ml-1 align-middle cursor-blink" />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-[#5A5A72] max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
            J'écris ce que vous n'avez pas le temps d'écrire. Ebooks, livres d'expert, autobiographies, articles et discours rédigés avec précision dans votre voix unique.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C75B39] hover:bg-[#B04A2A] text-white text-base font-semibold px-8 py-4 rounded-full shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Discutons de votre projet</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>
            <a
              href="#realisations"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/80 hover:bg-white text-[#1A1A2E] border border-[#D9CBB9] text-base font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:border-[#1A1A2E]"
            >
              <span>Voir mes réalisations</span>
            </a>
          </div>

          {/* Social Proof */}
          <div className="pt-8 border-t border-[#E5E0D8]/60 flex flex-col sm:flex-row items-center gap-4 text-left">
            <div className="flex -space-x-3">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
                alt="Client 1"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
                alt="Client 2"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80"
                alt="Client 3"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80"
                alt="Client 4"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
            </div>
            <div className="text-sm">
              <div className="flex items-center gap-1 text-[#B08D57]">
                {'★'.repeat(5)}
              </div>
              <p className="text-[#1A1A2E] font-medium">
                <strong className="font-bold">+45 projets rédigés</strong> pour des entrepreneurs et décideurs satisfaits
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
