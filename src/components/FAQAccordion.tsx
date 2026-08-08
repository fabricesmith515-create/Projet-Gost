'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Comment garantissez-vous la confidentialité absolue ?',
      answer:
        'Avant même tout échange de documents sensibles, nous signons un accord de non-divulgation (NDA) juridiquement contraignant. Votre nom figurera seul en couverture et sur tous les dépôts légaux. Je m\'engage à n\'invoquer votre ouvrage dans mon portfolio qu\'avec votre autorisation écrite explicite.',
    },
    {
      question: 'Le texte est-il 100 % original et cédé en totalité ?',
      answer:
        'Oui, sans aucune exception. Chaque mot est rédigé sur-mesure pour vous. Une fois le document finalisé et le règlement effectué, une convention formelle de cession intégrale des droits d\'auteur patrimoniaux (reproduction, adaptation, distribution) vous est remise.',
    },
    {
      question: 'Combien coûte un projet de ghostwriting ?',
      answer:
        'Le tarif varie selon le format et la complexité : de quelques centaines d\'euros pour un article de fond stratégique, à un budget forfaitaire compris entre 2 500 € et 8 500 € pour un ebook complet ou un livre d\'expert imprimé (150 à 250 pages). Un devis détaillé et fixe est établi dès le cadrage.',
    },
    {
      question: 'Quels sont les délais moyens de réalisation ?',
      answer:
        'Comptez entre 2 et 4 semaines pour un ebook professionnel ou un livre blanc, et entre 2 et 4 mois pour un manuscrit complet de livre d\'expert ou de biographie. Un calendrier précis avec jalons est convenu d\'un commun accord.',
    },
    {
      question: 'Comment se passent les révisions et allers-retours ?',
      answer:
        'La rédaction s\'effectue par blocs de chapitres. Vous lisez chaque livraison et formulez vos retours. Jusqu\'à deux séries de révisions complètes par chapitre sont incluses dans le forfait pour assurer une satisfaction totale.',
    },
    {
      question: 'Sur quels sujets et thématiques pouvez-vous intervenir ?',
      answer:
        'J\'interviens principalement sur l\'entrepreneuriat, le leadership, la stratégie B2B, les mémoires familiales, le développement personnel exigeant, la finance et les biographies. Ma force réside dans ma capacité d\'immersion rapide sur des sujets techniques.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#FAF8F4]" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C75B39] mb-2 block">
            Foire Aux Questions
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#1A1A2E] mb-4">
            Tout ce que vous devez savoir
          </h2>
          <p className="text-[#5A5A72] text-base">
            Des réponses claires pour aborder votre projet de rédaction en toute sérénité.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E5E0D8] overflow-hidden transition-all duration-200 shadow-soft"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-editorial text-lg sm:text-xl font-bold text-[#1A1A2E] flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#C75B39] shrink-0" />
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#FAF8F4] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#C75B39] text-white' : 'text-[#1A1A2E]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm text-[#5A5A72] leading-relaxed border-t border-[#F4EFEA] mt-2 pt-4 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
