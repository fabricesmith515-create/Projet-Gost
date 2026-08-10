'use client';

import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/metadata';
import { XCircle, ArrowLeft, RefreshCw, Mail, MessageCircle } from 'lucide-react';

export default function PaymentCancelPage() {
  return (
    <div className="pt-28 pb-20">
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto glass-panel p-8 sm:p-12 rounded-[2.5rem] border border-white/20 shadow-glass">
          
          <div className="w-20 h-20 rounded-full bg-red-500/20 border border-red-500/50 text-red-400 flex items-center justify-center mx-auto mb-6">
            <XCircle className="w-10 h-10" />
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-red-400 block mb-2">
            Paiement non finalisé
          </span>

          <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-white mb-4">
            La transaction a été annulée
          </h1>

          <p className="text-sm sm:text-base text-white/80 max-w-lg mx-auto mb-8 leading-relaxed">
            Vous avez interrompu le processus de règlement. Aucun montant n'a été débité de votre compte bancaire.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/paiement"
              className="btn-white-pill w-full sm:w-auto px-6 py-3.5 text-xs font-bold flex items-center justify-center gap-2 text-[#2A1B12] shadow-pill"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Réessayer le paiement</span>
            </Link>

            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-white/20 text-white hover:bg-white/10 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Contacter l'atelier</span>
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
