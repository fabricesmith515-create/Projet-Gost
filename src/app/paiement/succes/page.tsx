'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { SITE_CONFIG } from '@/lib/metadata';
import { CheckCircle2, ArrowRight, ShieldCheck, Mail, FileText, Sparkles, MessageCircle } from 'lucide-react';

function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const ref = searchParams.get('ref') || 'N/A';
  const amount = searchParams.get('amount') || 'N/A';
  const isDemo = searchParams.get('demo') === 'true';

  return (
    <div className="pt-28 pb-20">
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto glass-panel p-8 sm:p-12 rounded-[2.5rem] border border-white/20 shadow-glass animate-fade-in">
          
          <div className="w-20 h-20 rounded-full bg-[#25D366]/20 border border-[#25D366] text-[#25D366] flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-[#25D366] block mb-2">
            Paiement Confirmé
          </span>

          <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Merci ! Votre règlement a bien été enregistré
          </h1>

          <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Un courriel de confirmation ainsi que votre reçu officiel ont été transmis à votre adresse e-mail. Notre équipe va traiter immédiatement votre dossier.
          </p>

          {isDemo && (
            <div className="mb-8 p-4 rounded-2xl bg-[#F6A028]/10 border border-[#F6A028]/40 text-xs text-[#F6A028] text-left">
              <strong>Note de test :</strong> Vous avez effectué cette transaction en mode démonstration Dodo Payments. Pour encaisser de vrais paiements bancaires, configurez <code className="bg-black/30 px-1 py-0.5 rounded">DODO_PAYMENTS_API_KEY</code> dans votre fichier <code className="bg-black/30 px-1 py-0.5 rounded">.env.local</code>.
            </div>
          )}

          {/* Details Card */}
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-left max-w-lg mx-auto mb-8 space-y-3 text-xs sm:text-sm">
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span className="text-white/60">Référence / Devis :</span>
              <span className="font-bold text-white">{ref}</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span className="text-white/60">Montant réglé :</span>
              <span className="font-extrabold text-[#F6A028]">{amount} € EUR</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/60">Prestataire :</span>
              <span className="font-medium text-white">{SITE_CONFIG.name}</span>
            </div>
          </div>

          {/* CTA Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
                `Bonjour Atelier PrêtePlume,\nJe viens d'effectuer un règlement de ${amount} € (Réf: ${ref}).`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-white-pill w-full sm:w-auto px-6 py-3.5 text-xs font-bold flex items-center justify-center gap-2 text-[#2A1B12] shadow-pill"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Informer sur WhatsApp</span>
            </a>

            <Link
              href="/"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-white/20 text-white hover:bg-white/10 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
            >
              <span>Retourner à l'accueil</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-white">Chargement...</div>}>
      <PaymentSuccessContent />
    </Suspense>
  );
}
