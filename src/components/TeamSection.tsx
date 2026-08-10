import React from 'react';
import { ExternalLink, Feather, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Horizonrose',
      titleRole: 'Fondateur & Directeur d\'Atelier',
      role: 'Directeur d\'Atelier & Master Ghostwriter',
      specialty: 'Direction Littéraire, Romans & Édition',
      bio: 'Basé à l\'atelier de Nantes (19 Bd de la Liberté), Horizonrose cumule plus de 10 ans d\'expérience en journalisme et ghostwriting littéraire. Reconnu sur ComeUp pour sa rigueur et son écoute, il pilote l\'atelier et veille personnellement à l\'excellence stylistique de chaque manuscrit.',
      image: '/images/team/horizonrose.png',
      badge: 'Fondateur • Nantes',
    },
    {
      name: 'Éléonore Vaneau',
      titleRole: 'Romancière & Dramaturge',
      role: 'Ghostwriter de Fiction & Roman',
      specialty: 'Romance, Thriller, Fantasy & Littéraire',
      bio: 'Diplômée en Lettres Modernes à la Sorbonne, Éléonore insuffle suspense, intensité émotionnelle et relief psychologique dans vos récits de fiction. Elle façonne des dialogues captivants et des architectures romanesques sur-mesure.',
      image: '/images/team/eleonore.png',
      badge: 'Fiction & Roman',
    },
    {
      name: 'Marc-Antoine Delafosse',
      titleRole: 'Essayiste & Plume d\'Entreprise',
      role: 'Auteur & Essayiste',
      specialty: 'Essais, Manifestes & Livres d\'Expert',
      bio: 'Ancien consultant en stratégie et plume de direction, Marc-Antoine traduit la pensée des dirigeants et penseurs en des essais incisifs et structurés qui assoient une autorité professionnelle incontestable.',
      image: '/images/team/marc.png',
      badge: 'Essais & Manifestes',
    },
    {
      name: 'Clara Saint-Germain',
      titleRole: 'Autrice Jeunesse & Poétesse',
      role: 'Auteure Jeunesse & Contes',
      specialty: 'Contes, Albums Illustrés & Recueils',
      bio: 'Autrice passionnée par le monde de l\'enfance et l\'imaginaire, Clara écrit avec poésie et sensibilité. Elle découpe avec précision chaque texte pour guider les futurs illustrateurs et éveiller la curiosité des jeunes lecteurs.',
      image: '/images/team/clara.png',
      badge: 'Littérature Jeunesse',
    },
    {
      name: 'Jean-Baptiste Moreau',
      titleRole: 'Biographe & Mémorialiste',
      role: 'Biographe Familial & Saga d\'Entreprise',
      specialty: 'Mémoires Familiales & Parcours de Vie',
      bio: 'Biographe d\'une grande bienveillance, Jean-Baptiste mène les entretiens de mémoire avec écoute et délicatesse pour transformer souvenirs oraux et archives personnelles en de précieux livres d\'art familiaux.',
      image: '/images/team/jeanbaptiste.png',
      badge: 'Biographies & Récits',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="equipe">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#F6A028]/30 text-[#F6A028] text-xs font-semibold uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5" />
            Atelier Littéraire basé à Nantes (44000)
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Des visages, des voix et 5 plumes passionnées
          </h2>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed">
            Derrière PrêtePlume se trouvent des auteurs de métier, installés et animés par la passion du mot juste. Découvrez notre collectif réuni autour du fondateur Horizonrose.
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
                  className="w-full h-88 object-cover"
                />
              </div>
              <span className="absolute top-4 left-4 bg-[#F6A028] text-[#2A1B12] text-xs font-bold px-3.5 py-1 rounded-full shadow-md flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Fondateur & Direction
              </span>
            </div>

            <div className="lg:col-span-8 flex flex-col items-start gap-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs text-[#F6A028]">
                <MapPin className="w-3.5 h-3.5 text-[#F6A028]" />
                <span>Atelier Physique : 19 Bd de la Liberté, 44000 Nantes</span>
              </div>

              <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-white">
                {teamMembers[0].name}
              </h3>
              <p className="text-sm font-semibold text-[#F6A028]">
                {teamMembers[0].titleRole} • {teamMembers[0].specialty}
              </p>

              <p className="text-sm text-white/80 leading-relaxed">
                {teamMembers[0].bio}
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
                  <span>Cession 100% Droits & Confidentialité NDA</span>
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
                <div className="relative h-56 rounded-2xl overflow-hidden mb-4 border border-white/10 shadow-sm">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 bg-[#2A1B12]/80 backdrop-blur-md text-[#F6A028] text-[10px] uppercase font-bold px-2.5 py-1 rounded-full border border-[#F6A028]/30">
                    {member.badge}
                  </span>
                </div>

                <h4 className="font-editorial text-xl font-bold text-white mb-0.5">
                  {member.name}
                </h4>
                <span className="text-[11px] text-white/60 block font-medium mb-1.5">
                  {member.titleRole}
                </span>
                <p className="text-xs font-semibold text-[#F6A028] mb-2">
                  {member.specialty}
                </p>
                <p className="text-xs text-white/75 leading-relaxed mb-4">
                  {member.bio}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 text-[10px] text-white/60 font-editorial italic flex items-center justify-between">
                <span>Rédacteur certifié</span>
                <span className="text-[#F6A028]">Atelier Nantes</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
