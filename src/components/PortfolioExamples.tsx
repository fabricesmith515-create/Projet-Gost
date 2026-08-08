import React from 'react';
import { BookOpen, User, Building, Award, CheckCircle2 } from 'lucide-react';

export default function PortfolioExamples() {
  const examples = [
    {
      category: 'Livre d\'Expert & Leadership',
      title: '« Scaler son entreprise sans sacrifier sa vision »',
      clientType: 'Fondateur d\'une Scale-up Tech (Paris)',
      format: 'Livre imprimé 180 pages',
      duration: '3 mois de collaboration',
      description:
        'Synthèse de 10 ans d\'expérience entrepreneuriale. Entretiens oraux retranscrits, structuration des chapitres et écriture dynamique.',
      outcome: 'Publié chez un éditeur national, +8 000 exemplaires vendus, invité sur 6 podcasts majeurs.',
      icon: Building,
      tag: 'Édition B2B',
    },
    {
      category: 'Biographie Familiale & Patrimoine',
      title: '« Trois générations sous le même toit »',
      clientType: 'Famille d\'industriels (Lyon)',
      format: 'Ouvrage de prestige relié cuir 220 pages',
      duration: '4 mois d\'immersion',
      description:
        'Recueil des mémoires du grand-père fondateur. Recherche d\'archives familiales, récits anecdotiques et mise en récit vivante.',
      outcome: 'Tirage privé de 300 exemplaires distribués lors du centenaire de l\'entreprise familiale.',
      icon: User,
      tag: 'Mémoires & Récits',
    },
    {
      category: 'Ebook & Lead Magnet Stratégique',
      title: '« Le Guide de la Gouvernance Responsable »',
      clientType: 'Cabinet de Conseil en Stratégie (Bruxelles)',
      format: 'Ebook PDF interactif 45 pages',
      duration: '3 semaines',
      description:
        'Vulgarisation de concepts RSE complexes pour décideurs grands comptes. Rédaction fluide et synthétique.',
      outcome: '+2 500 téléchargements qualifiés et 14 rendez-vous de mission obtenus.',
      icon: BookOpen,
      tag: 'Ebook B2B',
    },
    {
      category: 'Discours & Prise de Parole',
      title: 'Allocution de Convention Annuelle des Cadres',
      clientType: 'Directrice Générale Groupe Agroalimentaire',
      format: 'Discours oral de 25 minutes',
      duration: '1 semaine',
      description:
        'Rédaction d\'un discours mobilisateur dans un contexte de restructuration. Ancrage émotionnel et silences travaillés.',
      outcome: 'Ovation debout de 400 cadres et hausse mesurée de la cohésion interne.',
      icon: Award,
      tag: 'Discours Dirigeant',
    },
  ];

  return (
    <section className="py-20 bg-white border-y border-[#E5E0D8]" id="realisations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C75B39] mb-2 block">
            Études de cas anonymisées
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A2E] mb-4">
            Exemples de réalisations sur-mesure
          </h2>
          <p className="text-[#5A5A72] text-base sm:text-lg">
            Par respect pour la confidentialité absolue de mes clients, les noms sont omis. Voici quelques projets emblématiques menés à bien.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {examples.map((example, idx) => {
            const Icon = example.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF8F4] rounded-2xl p-8 border border-[#E5E0D8] shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider bg-white text-[#C75B39] px-3 py-1 rounded-full border border-[#E5E0D8]">
                      {example.tag}
                    </span>
                    <span className="text-xs text-[#5A5A72] font-medium">
                      {example.duration}
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl font-bold text-[#1A1A2E] mb-2">
                    {example.title}
                  </h3>
                  <p className="text-xs text-[#B08D57] font-semibold mb-4">
                    Client : {example.clientType} • {example.format}
                  </p>

                  <p className="text-sm text-[#5A5A72] leading-relaxed mb-6">
                    {example.description}
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#E5E0D8] flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#1A1A2E] block mb-0.5">
                      Résultat & Impact :
                    </span>
                    <p className="text-xs text-[#5A5A72] leading-normal">
                      {example.outcome}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
