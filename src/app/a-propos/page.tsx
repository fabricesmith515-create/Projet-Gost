import React from 'react';
import Link from 'next/link';
import { constructMetadata } from '@/lib/metadata';
import { Feather, Shield, Heart, Award, ArrowUpRight, Check } from 'lucide-react';
import FinalCTASection from '@/components/FinalCTASection';

export const metadata = constructMetadata({
  title: 'À propos de PrêtePlume — Ghostwriter & Écrivain de l\'Ombre',
  description:
    'Découvrez le parcours, la vision éditoriale et les valeurs d\'exigence et de discrétion qui guident le travail de ghostwriting de PrêtePlume.',
  canonical: 'https://preteplume.com/a-propos',
});

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero About Header */}
      <section className="py-16 bg-[#F4EFEA] border-b border-[#E5E0D8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C75B39] mb-3 block">
            Parcours & Philosophie
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1A2E] mb-6">
            L'homme derrière la plume
          </h1>
          <p className="text-base sm:text-lg text-[#5A5A72] max-w-2xl mx-auto leading-relaxed">
            Écrire pour les autres n'est pas seulement un savoir-faire technique : c'est un métier d'empathie, de discrétion et d'exigence littéraire.
          </p>
        </div>
      </section>

      {/* Main Story Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            {/* Portrait placeholder image */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border-2 border-[#E5E0D8] shadow-card">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                  alt="Portrait du ghostwriter PrêtePlume"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#1A1A2E] text-[#FAF8F4] p-6 rounded-2xl shadow-elevated border border-[#C75B39] max-w-xs">
                <p className="font-editorial italic text-sm">
                  « Chaque auteur potentiel porte en lui un livre unique. Mon rôle est de lui donner naissance sans altérer sa voix. »
                </p>
              </div>
            </div>

            {/* Narrative story */}
            <div className="lg:col-span-7 space-y-6 text-[#2B2B40] text-base leading-relaxed">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C75B39]">
                Mon histoire
              </span>
              <h2 className="font-editorial text-3xl font-bold text-[#1A1A2E]">
                Pourquoi j'ai fait le choix de l'ombre
              </h2>
              <p>
                Passionné par la puissance de la parole écrite et la littérature depuis mon plus jeune âge, j'ai exercé pendant près de dix ans dans l'édition et la presse écrite avant de créer <strong>PrêtePlume</strong>.
              </p>
              <p>
                J'ai rapidement constaté une réalité récurrente : les esprits les plus brillants (entrepreneurs audacieux, dirigeants visionnaires, figures engagées) sont souvent ceux qui disposent du moins de temps pour coucher leurs idées sur le papier.
              </p>
              <p>
                Devenir leur prête-plume a été une évidence. Plutôt que de signer mes propres livres, j'ai choisi de prêter mon talent rédactionnel à ceux qui ont des choses essentielles à transmettre au monde.
              </p>
            </div>
          </div>

          {/* 3 Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-[#FAF8F4] p-8 rounded-2xl border border-[#E5E0D8] shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-white text-[#C75B39] flex items-center justify-center mb-6 shadow-soft">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-2xl font-bold text-[#1A1A2E] mb-3">
                Discrétion absolue
              </h3>
              <p className="text-sm text-[#5A5A72] leading-relaxed">
                Le principe cardinal du ghostwriter est l'effacement. Votre confiance est sacrée. Aucun projet n'est mentionné sans votre accord formel.
              </p>
            </div>

            <div className="bg-[#FAF8F4] p-8 rounded-2xl border border-[#E5E0D8] shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-white text-[#C75B39] flex items-center justify-center mb-6 shadow-soft">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-2xl font-bold text-[#1A1A2E] mb-3">
                Écoute empathique
              </h3>
              <p className="text-sm text-[#5A5A72] leading-relaxed">
                Rédiger dans votre voix exige de comprendre votre histoire, vos doutes et vos valeurs. Les sessions d'échange sont basées sur le respect et la bienveillance.
              </p>
            </div>

            <div className="bg-[#FAF8F4] p-8 rounded-2xl border border-[#E5E0D8] shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-white text-[#C75B39] flex items-center justify-center mb-6 shadow-soft">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-2xl font-bold text-[#1A1A2E] mb-3">
                Exigence littéraire
              </h3>
              <p className="text-sm text-[#5A5A72] leading-relaxed">
                Pas de phrases creuses ni de rédaction automatique. Chaque paragraphe est ciselé pour offrir un confort de lecture fluide et percutant.
              </p>
            </div>
          </div>

          {/* Quick Stats & Reassurance Box */}
          <div className="bg-[#1A1A2E] text-white p-8 sm:p-12 rounded-3xl relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-editorial text-3xl font-bold mb-4">
                  Repères & Domaines d'intervention
                </h3>
                <p className="text-sm text-[#8A8A9E] mb-6">
                  J'interviens dans toute la francophonie (France, Suisse, Belgique, Afrique francophone et Canada).
                </p>
                <ul className="space-y-3 text-sm text-[#FAF8F4]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C75B39]" />
                    <span>Langue d'écriture : Français littéraire et professionnel irréprochable</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C75B39]" />
                    <span>Secteurs de prédilection : Entrepreneuriat, Tech, Finance, Santé, Culture</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C75B39]" />
                    <span>+45 livres, ebooks et récits rédigés depuis 2018</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-center md:items-end justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#C75B39] hover:bg-[#B04A2A] text-white text-base font-semibold px-8 py-4 rounded-full shadow-elevated transition-all duration-300"
                >
                  <span>Prendre contact directement</span>
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTASection />
    </div>
  );
}
