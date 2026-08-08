import React from 'react';
import Link from 'next/link';
import { constructMetadata, SITE_CONFIG } from '@/lib/metadata';
import { Feather, Shield, Heart, Award, ArrowUpRight, Check, ExternalLink } from 'lucide-react';
import TeamSection from '@/components/TeamSection';
import FinalCTASection from '@/components/FinalCTASection';

export const metadata = constructMetadata({
  title: 'À propos de PrêtePlume — Fondateur & Atelier de 5 Plumes',
  description:
    'Découvrez l\'histoire de PrêtePlume, son fondateur (Horizonrose sur ComeUp) et notre collectif de 5 plumes spécialisées en romans, essais, jeunesse, ebooks et KDP.',
  canonical: 'https://preteplume.com/a-propos',
});

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero About Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto glass-panel rounded-[2.5rem] p-8 sm:p-12 border border-white/15 shadow-glass">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#F6A028] mb-3 block">
            Histoire & Collectif
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            L'Atelier PrêtePlume
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            De la plume d'un auteur passionné est né un collectif de 5 rédacteurs chevronnés pour donner vie à toutes vos histoires.
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
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                    alt="Portrait du fondateur Horizonrose"
                    className="w-full h-[450px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-4 glass-panel-darker text-white p-5 rounded-2xl border border-[#F6A028] max-w-xs shadow-glass">
                  <p className="font-editorial italic text-xs">
                    « Un seul auteur ne peut pas tout écrire. En réunissant 5 plumes spécialisées, nous offrons l'excellence dans chaque genre. »
                  </p>
                  <span className="text-[10px] font-bold text-[#F6A028] block mt-1">
                    — Horizonrose (Fondateur)
                  </span>
                </div>
              </div>

              {/* Narrative Story */}
              <div className="lg:col-span-7 space-y-5 text-white/85 text-sm sm:text-base leading-relaxed">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F6A028]">
                  Notre Genèse
                </span>
                <h2 className="font-editorial text-3xl font-bold text-white">
                  De la rédaction solo à l'Atelier de 5 Plumes
                </h2>
                <p>
                  Fondée par un rédacteur chevronné reconnu sur la plateforme <strong>ComeUp sous le pseudo Horizonrose</strong>, l'aventure PrêtePlume est née d'un constat simple : la demande en récits incarnés (romans, mémoires, essais, contes jeunesse) nécessite une variété de styles qu'un auteur unique ne peut porter seul.
                </p>
                <p>
                  Pour répondre à cette exigence, PrêtePlume s'est développé en un <strong>Atelier d'écriture réunissant 5 plumes complémentaires</strong> : romanciers de fiction, essayistes, auteurs jeunesse, biographes et spécialistes en édition Amazon KDP.
                </p>
                <p>
                  Chaque projet confié à notre atelier bénéficie d'une attribution sur-mesure à la plume dont la sensibilité correspond exactement à votre genre, avec la garantie d'une relecture et d'un contrôle qualité assurés par le fondateur.
                </p>

                <div className="pt-4">
                  <a
                    href={SITE_CONFIG.comeup}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-white-pill text-xs px-6 py-3 inline-flex items-center gap-2"
                  >
                    <span>Vérifier notre profil ComeUp (Horizonrose)</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#2A1B12]" />
                  </a>
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
                Discrétion & Accord NDA
              </h3>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                Le secret professionnel est notre pilier. Votre nom figure seul sur l'œuvre et l'intégralité des droits d'auteur vous est cédée.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-white/15">
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#F6A028] border border-white/15 flex items-center justify-center mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-2xl font-bold text-white mb-3">
                Adéquation de la Plume
              </h3>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                Chaque genre littéraire (roman, contes, essai, ebook) dispose de sa plume dédiée pour garantir le ton juste et authentique.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-white/15">
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#F6A028] border border-white/15 flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-2xl font-bold text-white mb-3">
                Accompagnement KDP
              </h3>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                Nous ne nous contentons pas d'écrire : nous vous accompagnons jusqu'à la publication finale sur Amazon Kindle & Broché.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTASection />
    </div>
  );
}
