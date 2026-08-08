'use client';

import React, { useState } from 'react';
import { SITE_CONFIG } from '@/lib/metadata';
import { Mail, MessageCircle, Clock, ShieldCheck, FileCheck, Send, CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Roman (Fiction)',
    currency: 'EUR (€)',
    budget: '1 000 € - 3 000 €',
    message: '',
    honeypot: '',
  });

  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message?: string;
  }>({ type: 'idle' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      setStatus({ type: 'success', message: 'Message traité.' });
      return;
    }

    setStatus({ type: 'loading' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus({
          type: 'success',
          message:
            'Merci pour votre message ! L\'atelier PrêtePlume vous répondra sous 24h ouvrées. Un devis sur-mesure vous sera transmis.',
        });

        if (data.fallback) {
          const text = encodeURIComponent(
            `Bonjour Atelier PrêtePlume,\nJe suis ${formData.name} (${formData.email}).\nProjet : ${formData.projectType}\nDevise : ${formData.currency}\nMessage : ${formData.message}`
          );
          setTimeout(() => {
            window.open(`https://wa.me/${SITE_CONFIG.whatsapp}?text=${text}`, '_blank');
          }, 1500);
        }

        setFormData({
          name: '',
          email: '',
          projectType: 'Roman (Fiction)',
          currency: 'EUR (€)',
          budget: '1 000 € - 3 000 €',
          message: '',
          honeypot: '',
        });
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Une erreur est survenue lors de l\'envoi du formulaire.',
        });
      }
    } catch (err) {
      console.error('Erreur soumission contact:', err);
      setStatus({
        type: 'error',
        message: 'Impossible de se connecter au serveur. Veuillez échanger directement via WhatsApp ou email.',
      });
    }
  };

  return (
    <div className="pt-28 pb-20">
      {/* Contact Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto glass-panel rounded-[2.5rem] p-8 sm:p-12 border border-white/15 shadow-glass">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#F6A028] mb-3 block">
            Devis Gratuit & Diagnostic Éditorial
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Discutons de votre projet d'écriture
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Avez-vous une idée de roman, d'essai, de livre pour enfants, d'ebook ou de publication KDP ? Échangeons avec le collectif PrêtePlume.
          </p>
        </div>
      </section>

      {/* Main Form & Direct Info */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left direct contact info */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#F6A028] mb-2 block">
                  Contact direct & ComeUp
                </span>
                <h2 className="font-editorial text-3xl font-bold text-white mb-6">
                  Une question sur un genre ?
                </h2>
                <p className="text-sm text-white/80 leading-relaxed mb-8">
                  Chaque projet fait l'objet d'un accord de non-divulgation (NDA) préalable et d'une cession exclusive de vos droits d'auteur.
                </p>

                <div className="space-y-4">
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
                      'Bonjour Atelier PrêtePlume, je souhaite échanger sur un projet.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 rounded-2xl glass-panel border border-white/15 hover:border-[#25D366] transition-all flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0 border border-[#25D366]/30">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-editorial font-bold text-white text-base group-hover:text-[#25D366] transition-colors">
                        Discussion WhatsApp
                      </h4>
                      <p className="text-xs text-white/70">
                        Réponse directe et échange informel
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="p-5 rounded-2xl glass-panel border border-white/15 hover:border-[#F6A028] transition-all flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/10 text-[#F6A028] flex items-center justify-center shrink-0 border border-white/15">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-editorial font-bold text-white text-base group-hover:text-[#F6A028] transition-colors">
                        Email professionnel
                      </h4>
                      <p className="text-xs text-white/70">{SITE_CONFIG.email}</p>
                    </div>
                  </a>

                  <a
                    href={SITE_CONFIG.comeup}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 rounded-2xl glass-panel border border-white/15 hover:border-[#F6A028] transition-all flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/10 text-[#F6A028] flex items-center justify-center shrink-0 border border-white/15">
                      <ExternalLink className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-editorial font-bold text-white text-base group-hover:text-[#F6A028] transition-colors">
                        Profil ComeUp (Horizonrose)
                      </h4>
                      <p className="text-xs text-white/70">Avis vérifiés & commandes sécurisées</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Reassurance */}
              <div className="pt-8 mt-8 border-t border-white/10 space-y-3 text-xs text-white/75">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#F6A028] shrink-0" />
                  <span><strong>Réponse sous 24h ouvrées</strong> pour toute demande</span>
                </div>
                <div className="flex items-center gap-3">
                  <FileCheck className="w-5 h-5 text-[#F6A028] shrink-0" />
                  <span>Facturation en <strong>EUR (€), CHF (Suisse) ou CAD (Canada)</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#25D366] shrink-0" />
                  <span><strong>Confidentialité garantie par NDA</strong> et cession de tous les droits</span>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7 glass-panel-darker p-8 sm:p-12 rounded-[2.5rem] border border-white/20 shadow-glass">
              <h3 className="font-editorial text-2xl font-bold text-white mb-6">
                Formulaire de projet sur-mesure
              </h3>

              {status.type === 'success' && (
                <div className="mb-6 p-4 bg-[#25D366]/20 border border-[#25D366] text-white rounded-2xl flex items-start gap-3 text-sm animate-fade-in">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-[#25D366]" />
                  <div>
                    <strong className="block font-bold">Demande transmise avec succès !</strong>
                    <p>{status.message}</p>
                  </div>
                </div>
              )}

              {status.type === 'error' && (
                <div className="mb-6 p-4 bg-red-900/40 border border-red-500 text-white rounded-2xl flex items-start gap-3 text-sm animate-fade-in">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-400" />
                  <div>
                    <strong className="block font-bold">Erreur de transmission</strong>
                    <p>{status.message}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/90 mb-2">
                      Votre Nom & Prénom *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="ex. Alexandre Martin"
                      className="w-full px-4 py-3 rounded-xl border border-white/15 bg-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#F6A028] transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/90 mb-2">
                      Votre Adresse Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ex. alexandre@entreprise.com"
                      className="w-full px-4 py-3 rounded-xl border border-white/15 bg-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#F6A028] transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/90 mb-2">
                      Genre / Type de projet
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#2A1B12] text-white focus:outline-none focus:border-[#F6A028] transition-colors text-sm"
                    >
                      <option value="Roman (Fiction)">Roman (Romance, Thriller, Fantasy, Littéraire)</option>
                      <option value="Essai / Manifeste">Essai & Manifeste d'expert</option>
                      <option value="Nouvelle / Recueil">Nouvelles & Recueil</option>
                      <option value="Livre pour Enfants">Livre pour Enfants & Conte</option>
                      <option value="Publication KDP Amazon">Publication KDP Amazon</option>
                      <option value="Ebook / Livre d'expert">Ebook & Livre d'Expert B2B</option>
                      <option value="Biographie / Mémoires">Biographie & Mémoires Familiales</option>
                      <option value="Discours / Interventions">Discours & Prise de Parole</option>
                      <option value="Articles de blog / Web">Articles de fond & Web</option>
                      <option value="Réécriture & Relecture">Réécriture & Sublimation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/90 mb-2">
                      Devise souhaitée
                    </label>
                    <select
                      name="currency"
                      value={formData.currency}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#2A1B12] text-white focus:outline-none focus:border-[#F6A028] transition-colors text-sm"
                    >
                      <option value="EUR (€)">Euros (€ - France & UE)</option>
                      <option value="CHF (Suisse)">Francs Suisses (CHF - Suisse)</option>
                      <option value="CAD (Canada)">Dollars Canadiens (CAD - Québec)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/90 mb-2">
                    Présentation de votre projet *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre idée, le genre littéraire, la longueur estimée et vos attentes..."
                    className="w-full px-4 py-3 rounded-xl border border-white/15 bg-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#F6A028] transition-colors text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.type === 'loading'}
                  className="btn-white-pill w-full py-4 text-sm font-bold flex items-center justify-center gap-2 text-[#2A1B12]"
                >
                  {status.type === 'loading' ? (
                    <span>Transmission en cours...</span>
                  ) : (
                    <>
                      <span>Envoyer ma demande à l'Atelier</span>
                      <Send className="w-4 h-4 text-[#2A1B12]" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
