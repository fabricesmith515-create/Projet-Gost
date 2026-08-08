import React from 'react';
import { ExternalLink, Feather, ShieldCheck, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Horizonrose (Fondateur)',
      role: 'Directeur d\'Atelier & Master Ghostwriter',
      specialty: 'Romans, Édition & Direction Littéraire',
      bio: 'Plusieurs années d\'expérience dans le journalisme et l\'édition. Profil reconnu sur ComeUp sous le pseudo Horizonrose.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      badge: 'Fondateur',
    },
    {
      name: 'Plume Spécialiste Essais',
      role: 'Auteur & Essayiste',
      specialty: 'Essais, Manifestes & Pensée d\'Entreprise',
      bio: 'Expert en synthèse de concepts complexes, philosophie d\'entreprise et écrits d\'autorité.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      badge: 'Non-Fiction',
    },
    {
      name: 'Plume Romancière',
      role: 'Ghostwriter de Fiction',
      specialty: 'Romance, Thriller, Fantasy & Historique',
      bio: 'Sens aigu de la dramaturgie narrative et de la création de personnages captivants.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      badge: 'Fiction',
    },
    {
      name: 'Plume Jeunesse',
      role: 'Auteure pour Enfants',
      specialty: 'Contes, Albums Illustrés & Recueils',
      bio: 'Plume douce et poétique adaptée à l\'imaginaire des plus jeunes et aux récits illustrés.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      badge: 'Jeunesse',
    },
    {
      name: 'Plume Biographe',
      role: 'Biographe & Mémorialiste',
      specialty: 'Mémoires Familiales & Parcours de Vie',
      bio: 'Écoute empathique pour transformer souvenirs oraux et archives en récits de transmission.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      badge: 'Biographies',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="equipe">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#F6A028] mb-2 block">
            Atelier d'Écriture & Synergie
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Une équipe de 5 plumes complémentaires
          </h2>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed">
            Plutôt qu'un intervenant unique, PrêtePlume s'appuie sur le talent croisé de 5 auteurs aguerris sous la supervision du fondateur.
          </p>
        </div>

        {/* Founder Spotlight Card */}
        <div className="glass-panel-darker rounded-[2.5rem] p-8 sm:p-12 mb-12 border border-white/20 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 relative">
              <div className="rounded-2xl overflow-hidden border-2 border-[#F6A028] shadow-glass">
                <img
                  src={teamMembers[0].image}
                  alt={teamMembers[0].name}
                  className="w-full h-80 object-cover"
                />
              </div>
              <span className="absolute top-4 left-4 bg-[#F6A028] text-[#2A1B12] text-xs font-bold px-3 py-1 rounded-full shadow-md">
                Fondateur & Direction
              </span>
            </div>

            <div className="lg:col-span-8 flex flex-col items-start gap-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs text-[#F6A028]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Membre vérifié ComeUp (Horizonrose)</span>
              </div>

              <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-white">
                {teamMembers[0].name}
              </h3>
              <p className="text-sm font-semibold text-[#F6A028]">
                {teamMembers[0].role} • {teamMembers[0].specialty}
              </p>

              <p className="text-sm text-white/80 leading-relaxed">
                Fondateur de PrêtePlume, je supervise la ligne éditoriale et la répartition de chaque projet vers la plume la plus adaptée. Fort de plusieurs années de succès sur ComeUp sous le pseudo Horizonrose, je garantis le respect absolu des délais et de votre charte littéraire.
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-2">
                <a
                  href={SITE_CONFIG.comeup}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-white-pill text-xs px-5 py-2.5 flex items-center gap-2"
                >
                  <span>Voir le profil ComeUp (Horizonrose)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#2A1B12]" />
                </a>

                <div className="flex items-center gap-2 text-xs text-white/70">
                  <ShieldCheck className="w-4 h-4 text-[#F6A028]" />
                  <span>Cession intégrale des droits & Accord NDA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Other Plumes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.slice(1).map((member, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-3xl p-6 border border-white/15 hover:border-[#F6A028] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="relative h-48 rounded-2xl overflow-hidden mb-4 border border-white/10">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 bg-white/20 backdrop-blur-md text-white text-[10px] uppercase font-bold px-2.5 py-1 rounded-full border border-white/20">
                    {member.badge}
                  </span>
                </div>

                <h4 className="font-editorial text-xl font-bold text-white mb-1">
                  {member.name}
                </h4>
                <p className="text-xs font-semibold text-[#F6A028] mb-2">
                  {member.specialty}
                </p>
                <p className="text-xs text-white/75 leading-relaxed mb-4">
                  {member.bio}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 text-[10px] text-white/60 font-editorial italic">
                Rédacteur certifié de l'atelier
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
