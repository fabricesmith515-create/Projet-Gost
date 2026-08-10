import React from 'react';
import Link from 'next/link';
import { constructMetadata, SITE_CONFIG } from '@/lib/metadata';
import { Feather, Shield, Heart, Award, ArrowUpRight, Check, ExternalLink, MapPin } from 'lucide-react';
import TeamSection from '@/components/TeamSection';
import FinalCTASection from '@/components/FinalCTASection';

export const metadata = constructMetadata({
  title: 'À propos de l\'Atelier PrêtePlume à Nantes — Fondateur & 5 Auteurs',
  description:
    'Découvrez l\'Atelier littéraire PrêtePlume situé au 19 Boulevard de la Liberté à Nantes. Son fondateur Horizonrose et son collectif de 5 plumes spécialisées en romans, essais, jeunesse, ebooks et biographie.',
  canonical: 'https://preteplume.com/a-propos',
});

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero About Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto glass-panel rounded-[2.5rem] p-8 sm:p-12 border border-white/15 shadow-glass">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#F6A028]/30 text-[#F6A028] text-xs font-semibold uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5" />
            Atelier Physique : 19 Boulevard de la Liberté, 44000 Nantes
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            L'Atelier Littéraire PrêtePlume
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Un véritable collectif humain d'auteurs de métier réunis au cœur de Nantes pour donner une voix unique et vivante à chaque histoire.
          </p>
        </div>
      </section>

      {/* Main Story Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="glass-panel rounded-[2.5rem] p-8 sm:p-12 border border-white/15 shadow-glass mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Founder Portrait */}
              <div className="lg:col-span-5 relative">
                <div className="rounded-3xl overflow-hidden border-2 border-[#F6A028] shadow-glass">
                  <img
                    src="/images/team/horizonrose.png"
                    alt="Portrait du fondateur Horizonrose"
                    className="w-full h-[450px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-4 glass-panel-darker text-white p-5 rounded-2xl border border-[#F6A028] max-w-xs shadow-glass">
                  <p className="font-editorial italic text-xs">
                    « L'écriture de prêt n'est pas un algorithme. C'est une rencontre humaine, de l'empathie et le plaisir de faire vivre de vraies histoires. »
                  </p>
                  <span className="text-[10px] font-bold text-[#F6A028] block mt-1">
                    — Horizonrose (Fondateur, Nantes)
                  </span>
                </div>
              </div>

              {/* Narrative Story */}
              <div className="lg:col-span-7 space-y-5 text-white/85 text-sm sm:text-base leading-relaxed">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F6A028]">
                  Notre Genèse & Atelier de Nantes
                </span>
                <h2 className="font-editorial text-3xl font-bold text-white">
                  Une maison d'écriture artisanale et chaleureuse
                </h2>
                <p>
                  Installé au <strong>19 Boulevard de la Liberté à Nantes (44000)</strong>, l'Atelier PrêtePlume est né sous l'impulsion de son fondateur, reconnu sur la plateforme <strong>ComeUp sous le pseudo Horizonrose</strong>. Après des années à prêter sa plume pour la presse et l'édition, un constat s'est imposé : chaque projet demande une sensibilité littéraire singulière qu'un auteur isolé ne peut couvrir seul.
                </p>
                <p>
                  Aujourd'hui, PrêtePlume est un <strong>collectif vivant de 5 auteurs aguerris</strong> : romanciers de fiction, essayistes, autrices de livres jeunesse, biographes mémorialistes et experts de la chaîne du livre.
                </p>
                <p>
                  Dans notre atelier nantais, chaque manuscrit est confié à la plume la plus adaptée et fait l'objet d'échanges privilégiés, avec la garantie d'une relecture et d'un contrôle qualité rigoureux assurés par le fondateur.
                </p>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href={SITE_CONFIG.comeup}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-white-pill text-xs px-6 py-3 inline-flex items-center gap-2"
                  >
                    <span>Vérifier notre profil ComeUp (Horizonrose)</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#2A1B12]" />
                  </a>

                  <div className="text-xs text-white/70 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#F6A028]" />
                    <span>Nantes (44000)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Profiles Grid */}
          <TeamSection />

          {/* 3 Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
            <div className="glass-panel p-8 rounded-3xl border border-white/15">
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#F6A028] border border-white/15 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-2xl font-bold text-white mb-3">
                Confidentialité Absolue (NDA)
              </h3>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                Le secret professionnel est gravé dans notre éthique. Votre nom figure seul sur l'œuvre et l'intégralité des droits d'auteur vous est cédée.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-white/15">
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#F6A028] border border-white/15 flex items-center justify-center mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-2xl font-bold text-white mb-3">
                Rencontre & Écoute Humaine
              </h3>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                Chaque livre est le fruit d'entretiens vivants et chaleureux à distance ou à notre atelier de Nantes pour capturer votre véritable voix.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-white/15">
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#F6A028] border border-white/15 flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-2xl font-bold text-white mb-3">
                Mise en Page & Édition KDP
              </h3>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                De l'écriture de la première phrase à la mise en ligne sur Amazon KDP ou l'impression reliée, nous vous guidons à chaque étape.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTASection />
    </div>
  );
}
