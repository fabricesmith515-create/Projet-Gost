'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Comment garantissez-vous la confidentialité absolue ?',
      answer:
        'Avant même tout échange de documents sensibles, nous signons un accord de non-divulgation (NDA) juridiquement contraignant. Votre nom figurera seul en couverture et sur tous les dépôts légaux. Notre atelier s\'engage à ne jamais citer votre ouvrage sans votre accord préalable.',
    },
    {
      question: 'Le texte est-il 100 % original et cédé en totalité ?',
      answer:
        'Oui, sans aucune exception. Chaque mot est rédigé sur-mesure pour vous par l\'auteur spécialisé de l\'atelier. Une fois la livraison validée, une convention formelle de cession intégrale des droits d\'auteur patrimoniaux (reproduction, adaptation, distribution) vous est transmise.',
    },
    {
      question: 'Combien coûte un projet de ghostwriting en Atelier ?',
      answer:
        'Le tarif dépend du format et de l\'ampleur du projet : de quelques centaines d\'euros pour des articles de fond, à un forfait fixe personnalisé pour un roman, un essai ou une biographie complète. Un devis transparent et fixe en Euros (€) est établi sous 24 heures.',
    },
    {
      question: 'Quels sont les délais moyens de réalisation ?',
      answer:
        'Comptez entre 2 et 4 semaines pour un livre blanc ou un ebook d\'expert, et entre 2 et 4 mois pour un roman complet, une biographie ou un essai de fond. Un calendrier précis avec jalons de livraison est convenu dès le cadrage.',
    },
    {
      question: 'Comment se déroulent les révisions et allers-retours ?',
      answer:
        'La rédaction s\'effectue par vagues de chapitres. Vous lisez chaque livraison progressive et formulez vos retours. Des révisions ajustées par chapitre sont incluses dans le forfait pour garantir votre satisfaction totale.',
    },
    {
      question: 'Sur quels genres et thématiques pouvez-vous intervenir ?',
      answer:
        'Grâce au collectif de nos 5 plumes spécialisées, nous couvrons la fiction (romans, thrillers, fantasy), les essais, la littérature jeunesse, les biographies & mémoires, ainsi que les livres d\'expert B2B et la réécriture.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#F6A028] mb-2 block">
            Foire Aux Questions
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Tout ce que vous devez savoir
          </h2>
          <p className="text-white/80 text-base sm:text-lg">
            Des réponses claires pour aborder votre projet de rédaction en toute sérénité.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-black/95 rounded-2xl border border-white/15 overflow-hidden transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:border-[#F6A028]/50"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="font-editorial text-lg sm:text-xl font-bold text-white flex items-center gap-3 group-hover:text-[#F6A028] transition-colors">
                    <HelpCircle className="w-5 h-5 text-[#F6A028] shrink-0" />
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#F6A028] text-[#2A1B12]' : 'bg-white/10 text-white'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm sm:text-base text-white/80 leading-relaxed border-t border-white/10 mt-2 pt-4 animate-fade-in">
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
