import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Clock, ShieldCheck, FileCheck } from 'lucide-react';

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
              Roman, essai, livre enfants, biographie, ebook ou publication KDP : devis gratuit en Euros (€) sous 24h ouvrées.
            </p>

            {/* Action Button #3 : Contactez-nous */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                href="/contact"
                className="btn-white-pill px-10 py-4 text-base font-bold flex items-center justify-center gap-2 w-full sm:w-auto shadow-pill hover:scale-105 text-[#2A1B12]"
              >
                <span>Contactez-nous</span>
                <ArrowUpRight className="w-5 h-5 text-[#2A1B12]" />
              </Link>
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs text-white/70">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#F6A028]" />
                <span>Réponse sous 24h ouvrées</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-[#F6A028]" />
                <span>Devis & Diagnostic gratuits en Euros (€)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#25D366]" />
                <span>Accord NDA & Cession 100% des droits</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
