import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, MessageCircle, Clock, ShieldCheck, FileCheck } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';

export default function FinalCTASection() {
  return (
    <section className="py-20 bg-[#1A1A2E] text-white relative overflow-hidden">
      {/* Editorial Decorative Background Accent */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#C75B39]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#B08D57]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#B08D57] mb-3 block">
          Passez de l'idée à la publication
        </span>
        <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
          Prêt à donner vie à votre ouvrage ou votre projet d'écriture ?
        </h2>
        <p className="text-base sm:text-lg text-[#8A8A9E] max-w-2xl mx-auto mb-10 font-normal">
          Échangeons sans engagement sur vos attentes. Un devis clair et une méthodologie sur-mesure vous seront proposés sous 24 heures.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C75B39] hover:bg-[#B04A2A] text-white text-base font-semibold px-8 py-4 rounded-full shadow-elevated transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>Discutons de votre projet</span>
            <ArrowUpRight className="w-5 h-5" />
          </Link>
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
              'Bonjour PrêtePlume, je souhaite discuter d\'un projet de rédaction.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2B2B40] hover:bg-[#3D3D56] text-white border border-[#3D3D56] text-base font-semibold px-8 py-4 rounded-full transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5 text-[#25D366]" />
            <span>Message WhatsApp immédiat</span>
          </a>
        </div>

        <div className="pt-8 border-t border-[#2B2B40] flex flex-wrap items-center justify-center gap-8 text-xs text-[#8A8A9E]">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#C75B39]" />
            <span>Réponse sous 24h ouvrées</span>
          </div>
          <div className="flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-[#B08D57]" />
            <span>Devis & Diagnostic gratuits</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#25D366]" />
            <span>Confidentialité stricte garantie</span>
          </div>
        </div>
      </div>
    </section>
  );
}
