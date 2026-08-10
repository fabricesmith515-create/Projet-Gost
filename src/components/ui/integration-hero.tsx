"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Real official platform and tools brand logos (WhatsApp, Telegram, Google, Amazon, Apple, TikTok, etc.)
const ICONS_ROW1 = [
  "https://cdn-icons-png.flaticon.com/512/3670/3670051.png", // WhatsApp
  "https://cdn-icons-png.flaticon.com/512/2111/2111646.png", // Telegram
  "https://cdn-icons-png.flaticon.com/512/300/300221.png", // Google
  "https://cdn-icons-png.flaticon.com/512/5968/5968854.png", // Amazon KDP
  "https://cdn-icons-png.flaticon.com/512/731/731985.png", // Apple Books
  "https://cdn-icons-png.flaticon.com/512/3046/3046124.png", // TikTok
  "https://cdn-icons-png.flaticon.com/512/5968/5968764.png", // Facebook
  "https://cdn-icons-png.flaticon.com/512/2111/2111463.png", // Instagram
];

const ICONS_ROW2 = [
  "https://cdn-icons-png.flaticon.com/512/174/174857.png", // LinkedIn
  "https://cdn-icons-png.flaticon.com/512/1384/1384060.png", // YouTube
  "https://cdn-icons-png.flaticon.com/512/174/174861.png", // PayPal
  "https://cdn-icons-png.flaticon.com/512/5968/5968919.png", // Stripe
  "https://cdn-icons-png.flaticon.com/512/732/732221.png", // MS Word
  "https://cdn-icons-png.flaticon.com/512/906/906324.png", // Notion
  "https://cdn-icons-png.flaticon.com/512/12222/12222560.png", // OpenAI / ChatGPT
  "https://cdn-icons-png.flaticon.com/512/733/733609.png", // EPUB
];

// Utility to repeat icons enough times
const repeatedIcons = (icons: string[], repeat = 4) =>
  Array.from({ length: repeat }).flatMap(() => icons);

export default function IntegrationHero() {
  return (
    <section className="relative py-20 overflow-hidden bg-black text-white border-y border-white/10">
      {/* Radial background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(246,160,40,0.08)_1px,transparent_1px)] [background-size:32px_32px]" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 mb-4 text-xs font-bold rounded-full border border-[#F6A028]/30 bg-[#F6A028]/10 text-[#F6A028] tracking-wider uppercase">
          ⚡ Écosystème Éditorial & Formats
        </span>
        <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Compatibilité & Diffusion sur toutes les Plateformes
        </h2>
        <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
          De votre manuscrit Word/Scrivener à la publication mondiale sur Amazon KDP, Apple Books, Fnac et en Imprimerie.
        </p>
        <div className="mt-8 flex justify-center">
          <Link href="/contact">
            <Button size="lg" className="btn-white-pill gap-2 text-base px-8 py-3.5 font-bold text-[#2A1B12] shadow-xl hover:scale-105">
              <span>Lancer votre projet d'édition</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>

        {/* Carousel */}
        <div className="mt-14 overflow-hidden relative pb-4">
          {/* Row 1 */}
          <div className="flex gap-8 whitespace-nowrap animate-scroll-left">
            {repeatedIcons(ICONS_ROW1, 4).map((src, i) => (
              <div
                key={i}
                className="h-16 w-16 flex-shrink-0 rounded-full bg-white text-black shadow-xl flex items-center justify-center p-3 hover:scale-110 hover:shadow-[0_0_20px_rgba(246,160,40,0.5)] transition-all duration-300 border border-white/20"
              >
                <img src={src} alt="Format & Tool Icon" className="h-9 w-9 object-contain" />
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex gap-8 whitespace-nowrap mt-6 animate-scroll-right">
            {repeatedIcons(ICONS_ROW2, 4).map((src, i) => (
              <div
                key={i}
                className="h-16 w-16 flex-shrink-0 rounded-full bg-white text-black shadow-xl flex items-center justify-center p-3 hover:scale-110 hover:shadow-[0_0_20px_rgba(246,160,40,0.5)] transition-all duration-300 border border-white/20"
              >
                <img src={src} alt="Format & Tool Icon" className="h-9 w-9 object-contain" />
              </div>
            ))}
          </div>

          {/* Fade overlays */}
          <div className="absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none z-10" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 35s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 35s linear infinite;
        }
      `}</style>
    </section>
  );
}
