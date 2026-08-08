'use client';

import React, { useState } from 'react';
import { SITE_CONFIG } from '@/lib/metadata';
import { Mail, MessageCircle, Clock, ShieldCheck, FileCheck, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Ebook / Livre d\'expert',
    budget: '500 € - 2 500 €',
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
      setStatus({ type: 'success', message: 'Message envoyé.' });
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
            'Merci pour votre message ! Je vous répondrai sous 24h ouvrées. Un mail récapitulatif vous a été préparé.',
        });

        // Optional direct WhatsApp launch fallback if user prefers immediate chat
        if (data.fallback) {
          const text = encodeURIComponent(
            `Bonjour PrêtePlume,\nJe suis ${formData.name} (${formData.email}).\nProjet : ${formData.projectType}\nMessage : ${formData.message}`
          );
          setTimeout(() => {
            window.open(`https://wa.me/${SITE_CONFIG.whatsapp}?text=${text}`, '_blank');
          }, 1500);
        }

        setFormData({
          name: '',
          email: '',
          projectType: 'Ebook / Livre d\'expert',
          budget: '500 € - 2 500 €',
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
        message: 'Impossible de se connecter au serveur. Veuillez utiliser WhatsApp ou l\'email direct.',
      });
    }
  };

  return (
    <div className="pt-28 pb-20">
      {/* Contact Header */}
      <section className="py-16 bg-[#F4EFEA] border-b border-[#E5E0D8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C75B39] mb-3 block">
            Échange & Diagnostic gratuit
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1A2E] mb-6">
            Discutons de votre projet
          </h1>
          <p className="text-base sm:text-lg text-[#5A5A72] max-w-2xl mx-auto leading-relaxed">
            Avez-vous une idée d'ouvrage, d'ebook ou un besoin en contenu stratégique ? Remplissez ce formulaire ou écrivez-moi directement.
          </p>
        </div>
      </section>

      {/* Main Form & Direct Info */}
      <section className="py-20 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left direct contact details */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C75B39] mb-2 block">
                  Contact direct
                </span>
                <h2 className="font-editorial text-3xl font-bold text-[#1A1A2E] mb-6">
                  Une question ? Un besoin urgent ?
                </h2>
                <p className="text-sm text-[#5A5A72] leading-relaxed mb-8">
                  Chaque projet est traité avec le plus haut niveau de discrétion. Aucun engagement n'est requis avant la validation du devis final.
                </p>

                <div className="space-y-6">
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
                      'Bonjour PrêtePlume, je souhaite échanger sur un projet.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 bg-white rounded-2xl border border-[#E5E0D8] shadow-soft hover:border-[#25D366] transition-all duration-200 flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-editorial font-bold text-[#1A1A2E] text-base group-hover:text-[#25D366] transition-colors">
                        Discussion WhatsApp
                      </h4>
                      <p className="text-xs text-[#5A5A72]">
                        Réponse rapide et échange informel
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="p-5 bg-white rounded-2xl border border-[#E5E0D8] shadow-soft hover:border-[#C75B39] transition-all duration-200 flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#C75B39]/10 text-[#C75B39] flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-editorial font-bold text-[#1A1A2E] text-base group-hover:text-[#C75B39] transition-colors">
                        Email professionnel
                      </h4>
                      <p className="text-xs text-[#5A5A72]">{SITE_CONFIG.email}</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Reassurance cards */}
              <div className="pt-8 mt-8 border-t border-[#E5E0D8] space-y-4 text-xs text-[#5A5A72]">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#C75B39] shrink-0" />
                  <span><strong>Réponse sous 24h ouvrées</strong> garantie pour tout message envoyé</span>
                </div>
                <div className="flex items-center gap-3">
                  <FileCheck className="w-5 h-5 text-[#B08D57] shrink-0" />
                  <span><strong>Devis gratuit & diagnostic</strong> d'opportunité éditoriale sans frais</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#25D366] shrink-0" />
                  <span><strong>Confidentialité garantie par NDA</strong> signé avant la transmission des briefs</span>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-[#E5E0D8] shadow-soft">
              <h3 className="font-editorial text-2xl font-bold text-[#1A1A2E] mb-6">
                Formulaire de projet
              </h3>

              {status.type === 'success' && (
                <div className="mb-6 p-4 bg-[#F2F9F4] border border-[#25D366] text-[#1E7E34] rounded-xl flex items-start gap-3 text-sm animate-fade-in">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold">Message envoyé avec succès !</strong>
                    <p>{status.message}</p>
                  </div>
                </div>
              )}

              {status.type === 'error' && (
                <div className="mb-6 p-4 bg-[#FDF2F2] border border-[#D9381E] text-[#D9381E] rounded-xl flex items-start gap-3 text-sm animate-fade-in">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold">Erreur de transmission</strong>
                    <p>{status.message}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot hidden input */}
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
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1A1A2E] mb-2">
                      Votre Nom & Prénom *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="ex. Alexandre Martin"
                      className="w-full px-4 py-3 rounded-xl border border-[#E5E0D8] bg-[#FAF8F4] text-[#1A1A2E] focus:outline-none focus:border-[#C75B39] transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1A1A2E] mb-2">
                      Votre Adresse Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ex. alexandre@entreprise.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#E5E0D8] bg-[#FAF8F4] text-[#1A1A2E] focus:outline-none focus:border-[#C75B39] transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1A1A2E] mb-2">
                      Type de projet
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#E5E0D8] bg-[#FAF8F4] text-[#1A1A2E] focus:outline-none focus:border-[#C75B39] transition-colors text-sm"
                    >
                      <option value="Ebook / Livre d'expert">Ebook & Livre d'Expert</option>
                      <option value="Biographie / Récit de vie">Biographie & Récit de vie</option>
                      <option value="Articles de blog / Contenu Web">Articles & Contenu Web</option>
                      <option value="Discours / Interventions">Discours de direction</option>
                      <option value="Rapport / Livre blanc">Textes professionnels & Livre blanc</option>
                      <option value="Réécriture & Relecture">Réécriture & Relecture</option>
                      <option value="Autre demande">Autre projet sur-mesure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1A1A2E] mb-2">
                      Budget indicatif (Optionnel)
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#E5E0D8] bg-[#FAF8F4] text-[#1A1A2E] focus:outline-none focus:border-[#C75B39] transition-colors text-sm"
                    >
                      <option value="Moins de 1 000 €">Moins de 1 000 €</option>
                      <option value="1 000 € - 3 000 €">1 000 € - 3 000 €</option>
                      <option value="3 000 € - 7 000 €">3 000 € - 7 000 €</option>
                      <option value="Plus de 7 000 €">Plus de 7 000 €</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1A1A2E] mb-2">
                    Présentation de votre projet *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez brièvement vos attentes, vos objectifs, le public cible et le délai envisagé..."
                    className="w-full px-4 py-3 rounded-xl border border-[#E5E0D8] bg-[#FAF8F4] text-[#1A1A2E] focus:outline-none focus:border-[#C75B39] transition-colors text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.type === 'loading'}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#C75B39] hover:bg-[#B04A2A] text-white text-base font-semibold py-4 rounded-full shadow-soft hover:shadow-elevated transition-all duration-300 disabled:opacity-50"
                >
                  {status.type === 'loading' ? (
                    <span>Envoi en cours...</span>
                  ) : (
                    <>
                      <span>Envoyer ma demande</span>
                      <Send className="w-5 h-5" />
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
