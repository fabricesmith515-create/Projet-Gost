'use client';

import React, { useState } from 'react';
import { SITE_CONFIG } from '@/lib/metadata';
import { Mail, MessageCircle, Clock, ShieldCheck, FileCheck, Send, CheckCircle2, AlertCircle, ExternalLink, ArrowRight, Sparkles, User, Globe, FileText, Layers, DollarSign } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: 'France',
    projectType: 'Roman (Fiction)',
    pageCount: '150 à 250 pages',
    budget: '1 000 € - 3 000 €',
    expectations: '',
    honeypot: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message?: string;
  }>({ type: 'idle' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      setSubmitted(true);
      return;
    }

    setStatus({ type: 'loading' });

    setTimeout(() => {
      setStatus({
        type: 'success',
        message: 'Votre projet a été qualifié avec succès par l\'Atelier PrêtePlume.',
      });
      setSubmitted(true);
    }, 800);
  };

  const whatsappMessage = encodeURIComponent(
    `Bonjour Atelier PrêtePlume,\nJe viens de remplir ma demande sur le site :\n- Nom : ${formData.name}\n- Pays : ${formData.country}\n- Projet : ${formData.projectType}\n- Pages : ${formData.pageCount}\n- Budget : ${formData.budget}\n- Attentes : ${formData.expectations}`
  );

  return (
    <div className="pt-28 pb-20">
      {/* Contact Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto glass-panel rounded-[2.5rem] p-8 sm:p-12 border border-white/15 shadow-glass">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#F6A028] mb-3 block">
            Étude de Projet & Diagnostic Éditorial
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Confiez-nous votre projet d'écriture
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Complétez le formulaire de cadrage ci-dessous. Les outils de contact direct (WhatsApp, Email & Téléphone) s'afficheront immédiatement après validation.
          </p>
        </div>
      </section>

      {/* Main Form & Revealed Contact Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {!submitted ? (
            /* STEP 1: Structured Form */
            <div className="glass-panel-darker p-8 sm:p-12 rounded-[2.5rem] border border-white/20 shadow-glass">
              <div className="flex items-center justify-between border-b border-white/15 pb-6 mb-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F6A028] block mb-1">
                    Étape 1 sur 2
                  </span>
                  <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-white">
                    Formulaire de qualification du projet
                  </h2>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#F6A028] flex items-center justify-center border border-white/15">
                  <Sparkles className="w-6 h-6" />
                </div>
              </div>

              {status.type === 'error' && (
                <div className="mb-6 p-4 bg-red-900/40 border border-red-500 text-white rounded-2xl flex items-start gap-3 text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-400" />
                  <p>{status.message}</p>
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

                {/* Nom & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/90 mb-2">
                      <User className="w-4 h-4 text-[#F6A028]" />
                      Nom & Prénom *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="ex. Alexandre Martin"
                      className="w-full px-4 py-3.5 rounded-xl border border-white/15 bg-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#F6A028] transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/90 mb-2">
                      <Mail className="w-4 h-4 text-[#F6A028]" />
                      Adresse Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ex. alexandre@domaine.com"
                      className="w-full px-4 py-3.5 rounded-xl border border-white/15 bg-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#F6A028] transition-colors text-sm"
                    />
                  </div>
                </div>

                {/* Pays & Genre */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/90 mb-2">
                      <Globe className="w-4 h-4 text-[#F6A028]" />
                      Votre Pays *
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-white/15 bg-[#2A1B12] text-white focus:outline-none focus:border-[#F6A028] transition-colors text-sm"
                    >
                      <option value="France">France</option>
                      <option value="Suisse">Suisse</option>
                      <option value="Belgique">Belgique</option>
                      <option value="Canada (Québec)">Canada (Québec)</option>
                      <option value="Autre pays">Autre pays francophone</option>
                    </select>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/90 mb-2">
                      <FileText className="w-4 h-4 text-[#F6A028]" />
                      Type de projet / Genre *
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-white/15 bg-[#2A1B12] text-white focus:outline-none focus:border-[#F6A028] transition-colors text-sm"
                    >
                      <option value="Roman (Fiction)">Roman (Romance, Thriller, Fantasy, Littéraire)</option>
                      <option value="Essai / Manifeste">Essai & Manifeste d'expert</option>
                      <option value="Nouvelles / Recueil">Nouvelles & Recueil</option>
                      <option value="Livre pour Enfants">Livre pour Enfants & Conte</option>
                      <option value="Publication KDP Amazon">Publication KDP Amazon</option>
                      <option value="Ebook / Livre d'expert">Ebook & Livre d'Expert B2B</option>
                      <option value="Biographie / Mémoires">Biographie & Mémoires Familiales</option>
                      <option value="Discours / Interventions">Discours & Prise de Parole</option>
                      <option value="Réécriture & Sublimation">Réécriture & Sublimation</option>
                    </select>
                  </div>
                </div>

                {/* Longueur estimée & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/90 mb-2">
                      <Layers className="w-4 h-4 text-[#F6A028]" />
                      Nombre de pages / Longueur estimée
                    </label>
                    <select
                      name="pageCount"
                      value={formData.pageCount}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-white/15 bg-[#2A1B12] text-white focus:outline-none focus:border-[#F6A028] transition-colors text-sm"
                    >
                      <option value="Moins de 50 pages (Format court / Conte)">Moins de 50 pages (Format court / Conte)</option>
                      <option value="50 à 150 pages (Ebook / Petit ouvrage)">50 à 150 pages (Ebook / Petit essai)</option>
                      <option value="150 à 250 pages (Roman / Biographie standard)">150 à 250 pages (Roman / Biographie standard)</option>
                      <option value="Plus de 250 pages (Grand récit / Livre d'art)">Plus de 250 pages (Grand récit)</option>
                    </select>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/90 mb-2">
                      <DollarSign className="w-4 h-4 text-[#F6A028]" />
                      Budget indicatif envisagé
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-white/15 bg-[#2A1B12] text-white focus:outline-none focus:border-[#F6A028] transition-colors text-sm"
                    >
                      <option value="Moins de 1 000 € / CHF / CAD">Moins de 1 000 € / CHF / CAD</option>
                      <option value="1 000 € - 3 000 € / CHF / CAD">1 000 € - 3 000 € / CHF / CAD</option>
                      <option value="3 000 € - 7 500 € / CHF / CAD">3 000 € - 7 500 € / CHF / CAD</option>
                      <option value="Plus de 7 500 € / CHF / CAD">Plus de 7 500 € / CHF / CAD</option>
                    </select>
                  </div>
                </div>

                {/* Attentes */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/90 mb-2">
                    Vos attentes & Présentation du projet *
                  </label>
                  <textarea
                    name="expectations"
                    required
                    rows={4}
                    value={formData.expectations}
                    onChange={handleChange}
                    placeholder="Résumez l'idée principale, les personnages, l'objectif d'édition et le ton recherché..."
                    className="w-full px-4 py-3.5 rounded-xl border border-white/15 bg-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#F6A028] transition-colors text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.type === 'loading'}
                  className="btn-white-pill w-full py-4 text-base font-bold flex items-center justify-center gap-3 text-[#2A1B12] shadow-pill hover:scale-[1.02] transition-transform"
                >
                  {status.type === 'loading' ? (
                    <span>Qualification du projet...</span>
                  ) : (
                    <>
                      <span>Valider mon projet & Obtenir les accès de contact</span>
                      <ArrowRight className="w-5 h-5 text-[#2A1B12]" />
                    </>
                  )}
                </button>
              </form>

              {/* Guarantees bar */}
              <div className="pt-8 mt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-xs text-white/75">
                <div className="flex items-center justify-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#25D366]" />
                  <span>Confidentialité NDA stricte</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4 text-[#F6A028]" />
                  <span>Devis sur-mesure sous 24h</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <FileCheck className="w-4 h-4 text-[#F6A028]" />
                  <span>Cession 100% des droits</span>
                </div>
              </div>
            </div>
          ) : (
            /* STEP 2: REVEALED CONTACT TOOLS (Apparition après soumission du formulaire) */
            <div className="glass-panel p-8 sm:p-12 rounded-[2.5rem] border-2 border-[#25D366]/50 shadow-glass text-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#25D366]/20 border border-[#25D366] text-[#25D366] flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#25D366] block mb-2">
                Étape 2 sur 2 — Projet Qualifié
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-white mb-4">
                Merci {formData.name} ! Vos outils de contact sont débloqués
              </h2>
              <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto mb-10 leading-relaxed">
                Votre projet de <strong>{formData.projectType}</strong> ({formData.pageCount}) a bien été réceptionné. Vous pouvez dès maintenant échanger directement avec l'Atelier PrêtePlume via le canal de votre choix :
              </p>

              {/* Revealed Direct Contact Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
                {/* WhatsApp Direct */}
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 rounded-2xl glass-panel-darker border border-[#25D366]/40 hover:border-[#25D366] transition-all group flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center border border-[#25D366]/30">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-[#25D366] uppercase bg-[#25D366]/10 px-2.5 py-1 rounded-full">
                      Instantané
                    </span>
                  </div>
                  <div>
                    <h4 className="font-editorial text-lg font-bold text-white mb-1 group-hover:text-[#25D366] transition-colors">
                      WhatsApp Direct
                    </h4>
                    <p className="text-xs text-white/70">
                      Lancez une discussion immédiate avec les informations pré-remplies.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 text-xs font-bold text-[#25D366] flex items-center gap-1">
                    <span>Ouvrir WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </a>

                {/* Email Direct */}
                <a
                  href={`mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(
                    `Projet PrêtePlume — ${formData.name} (${formData.projectType})`
                  )}`}
                  className="p-6 rounded-2xl glass-panel-darker border border-white/15 hover:border-[#F6A028] transition-all group flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 text-[#F6A028] flex items-center justify-center border border-white/15">
                      <Mail className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-[#F6A028] uppercase bg-white/10 px-2.5 py-1 rounded-full">
                      24h ouvrées
                    </span>
                  </div>
                  <div>
                    <h4 className="font-editorial text-lg font-bold text-white mb-1 group-hover:text-[#F6A028] transition-colors">
                      Courriel Officiel
                    </h4>
                    <p className="text-xs text-white/70">{SITE_CONFIG.email}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 text-xs font-bold text-[#F6A028] flex items-center gap-1">
                    <span>Envoyer un email</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </a>

                {/* Profil ComeUp */}
                <a
                  href={SITE_CONFIG.comeup}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 rounded-2xl glass-panel-darker border border-white/15 hover:border-[#F6A028] transition-all group flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 text-[#F6A028] flex items-center justify-center border border-white/15">
                      <ExternalLink className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-white/80 uppercase bg-white/10 px-2.5 py-1 rounded-full">
                      Horizonrose
                    </span>
                  </div>
                  <div>
                    <h4 className="font-editorial text-lg font-bold text-white mb-1 group-hover:text-[#F6A028] transition-colors">
                      Commande ComeUp
                    </h4>
                    <p className="text-xs text-white/70">Paiement sécurisé et avis vérifiés.</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 text-xs font-bold text-white group-hover:text-[#F6A028] flex items-center gap-1">
                    <span>Voir le profil ComeUp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </a>
              </div>

              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-white/60 hover:text-white underline transition-colors"
              >
                Modifier les détails de mon projet
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
