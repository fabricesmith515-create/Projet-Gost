import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, MessageCircle, Clock, ShieldCheck, FileCheck, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';

export default function FinalCTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="glass-panel-darker rounded-[2.5rem] p-8 sm:p-14 text-center border border-white/20 shadow-glass relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#F6A028]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#D94A1E]/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#F6A028] mb-3 block">
              Donnez vie à vos manuscrits
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
              Prêt à confier votre projet à notre atelier de 5 plumes ?
            </h2>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-10 font-normal">
              Roman, essai, livre enfants, biographie, ebook ou publication KDP : échangeons en toute confidentialité sous 24h ouvrées.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                href="/contact"
                className="btn-white-pill px-8 py-4 text-sm font-bold flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <span>Discutons de votre projet</span>
                <ArrowUpRight className="w-5 h-5 text-[#2A1B12]" />
              </Link>

              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
                  'Bonjour Atelier PrêtePlume, je souhaite échanger sur un projet d\'écriture.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-pill px-8 py-4 text-sm font-semibold rounded-full flex items-center justify-center gap-2 text-white hover:bg-white/20 w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <span>Message WhatsApp immédiat</span>
              </a>
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs text-white/70">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#F6A028]" />
                <span>Réponse sous 24h ouvrées</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-[#F6A028]" />
                <span>Devis & Diagnostic gratuits (€, CHF, CAD)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#25D366]" />
                <span>Accord NDA & Cession des droits</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
