'use client';

import React, { useState } from 'react';
import { SITE_CONFIG } from '@/lib/metadata';
import {
  CreditCard,
  Lock,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Sparkles,
  User,
  Mail,
  FileText,
  DollarSign,
  Info,
  Building2,
  HelpCircle,
} from 'lucide-react';

export default function PaiementPage() {
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    reference: '',
    amount: '500',
    presetType: 'custom',
    description: 'Règlement de prestation littéraire / Acompte PrêtePlume',
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const presets = [
    { id: 'acompte_300', label: 'Acompte initial', amount: '300', desc: 'Réservation planning & démarrage du projet' },
    { id: 'acompte_500', label: 'Acompte standard', amount: '500', desc: 'Acompte classique de cadrage & écriture' },
    { id: 'acompte_1000', label: 'Acompte grand récit', amount: '1000', desc: 'Engagement sur projet long terme' },
    { id: 'custom', label: 'Montant libre sur devis', amount: '', desc: 'Saisissez le montant exact figurant sur votre devis' },
  ];

  const handlePresetSelect = (preset: typeof presets[0]) => {
    if (preset.id === 'custom') {
      setFormData((prev) => ({ ...prev, presetType: 'custom', amount: '' }));
    } else {
      setFormData((prev) => ({
        ...prev,
        presetType: preset.id,
        amount: preset.amount,
        description: `Acompte de ${preset.amount} € — PrêtePlume`,
      }));
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const numAmount = parseFloat(formData.amount);
    if (isNaN(numAmount) || numAmount <= 0) {
      setErrorMsg('Veuillez indiquer un montant valide en Euros (€).');
      return;
    }

    if (!formData.customerEmail || !formData.customerEmail.includes('@')) {
      setErrorMsg('Veuillez saisir une adresse e-mail valide.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: numAmount,
          customerName: formData.customerName,
          customerEmail: formData.customerEmail,
          reference: formData.reference,
          description: formData.description,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Erreur lors de l\'initialisation du paiement.');
      }

      if (data.checkoutUrl) {
        // Option 1: Redirection vers le guichet sécurisé Dodo Payments
        window.location.href = data.checkoutUrl;
      } else {
        throw new Error('URL de checkout introuvable.');
      }
    } catch (err: any) {
      console.error('Erreur Paiement:', err);
      setErrorMsg(err.message || 'Impossible de joindre le système de paiement Dodo Payments.');
      setLoading(false);
    }
  };

  return (
    <div className="pt-28 pb-20">
      {/* Header section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto glass-panel rounded-[2.5rem] p-8 sm:p-12 border border-white/15 shadow-glass">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#F6A028]/30 text-[#F6A028] text-xs font-semibold uppercase tracking-wider mb-4">
            <Lock className="w-3.5 h-3.5" />
            Espace de Règlement Sécurisé Dodo Payments
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Régler votre prestation ou acompte
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Effectuez le règlement de votre devis en toute confiance via notre partenaire de paiement homologué <strong>Dodo Payments</strong> (Carte bancaire, Apple Pay, Google Pay).
          </p>
        </div>
      </section>

      {/* Main Payment Container */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Payment Form */}
          <div className="lg:col-span-7 glass-panel-darker p-8 sm:p-10 rounded-[2.5rem] border border-white/20 shadow-glass">
            <div className="flex items-center justify-between border-b border-white/15 pb-6 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#F6A028] block mb-1">
                  Paiement par carte bancaire
                </span>
                <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-white">
                  Détails du règlement
                </h2>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#F6A028] flex items-center justify-center border border-white/15">
                <CreditCard className="w-6 h-6" />
              </div>
            </div>

            {errorMsg && (
              <div className="mb-6 p-4 bg-red-900/40 border border-red-500 text-white rounded-2xl flex items-start gap-3 text-sm">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-400" />
                <p>{errorMsg}</p>
              </div>
            )}

            {/* Presets buttons */}
            <div className="mb-8">
              <label className="block text-xs font-bold uppercase tracking-wider text-white/90 mb-3">
                Sélectionnez la formule d'acompte ou montant libre :
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {presets.map((p) => {
                  const isSelected = formData.presetType === p.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => handlePresetSelect(p)}
                      className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'border-[#F6A028] bg-[#F6A028]/15 text-white shadow-md'
                          : 'border-white/15 bg-white/5 text-white/80 hover:border-white/30 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-1">
                        <span className="text-xs font-bold text-white">{p.label}</span>
                        {p.amount ? (
                          <span className="text-xs font-extrabold text-[#F6A028]">{p.amount} €</span>
                        ) : (
                          <span className="text-[10px] uppercase font-bold text-white/60">Sur devis</span>
                        )}
                      </div>
                      <span className="text-[11px] text-white/60 line-clamp-1">{p.desc}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <form onSubmit={handlePay} className="space-y-6">
              {/* Montant en Euros */}
              <div>
                <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/90 mb-2">
                  <DollarSign className="w-4 h-4 text-[#F6A028]" />
                  Montant à régler (€ EUR) *
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="amount"
                    step="0.01"
                    min="1"
                    required
                    value={formData.amount}
                    onChange={handleChange}
                    placeholder="ex. 500"
                    className="w-full pl-4 pr-12 py-3.5 rounded-xl border border-white/15 bg-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#F6A028] transition-colors text-lg font-bold"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 font-bold text-sm">
                    € EUR
                  </span>
                </div>
              </div>

              {/* Nom & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/90 mb-2">
                    <User className="w-4 h-4 text-[#F6A028]" />
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="customerName"
                    required
                    value={formData.customerName}
                    onChange={handleChange}
                    placeholder="ex. Jean Dupont"
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
                    name="customerEmail"
                    required
                    value={formData.customerEmail}
                    onChange={handleChange}
                    placeholder="ex. jean.dupont@email.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-white/15 bg-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#F6A028] transition-colors text-sm"
                  />
                </div>
              </div>

              {/* Référence Devis & Description */}
              <div>
                <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/90 mb-2">
                  <FileText className="w-4 h-4 text-[#F6A028]" />
                  Référence du Devis / Intitulé du projet (optionnel)
                </label>
                <input
                  type="text"
                  name="reference"
                  value={formData.reference}
                  onChange={handleChange}
                  placeholder="ex. DEV-2026-084 ou Rédaction Roman"
                  className="w-full px-4 py-3.5 rounded-xl border border-white/15 bg-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#F6A028] transition-colors text-sm mb-4"
                />
              </div>

              {/* Bouton de règlement */}
              <button
                type="submit"
                disabled={loading}
                className="btn-white-pill w-full py-4 text-base font-bold flex items-center justify-center gap-3 text-[#2A1B12] shadow-pill hover:scale-[1.01] transition-transform"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-[#2A1B12] border-t-transparent rounded-full animate-spin"></span>
                    Initialisation du paiement sécurisé...
                  </span>
                ) : (
                  <>
                    <Lock className="w-5 h-5 text-[#2A1B12]" />
                    <span>Payer {formData.amount ? `${formData.amount} €` : ''} via Dodo Payments</span>
                    <ArrowRight className="w-5 h-5 text-[#2A1B12]" />
                  </>
                )}
              </button>
            </form>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#25D366]" />
                Transaction chiffrée SSL 256-bits
              </span>
              <span>Merchant of Record: Dodo Payments</span>
            </div>
          </div>

          {/* Right Column: Reassurance & Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Box Récapitulatif & Garanties */}
            <div className="glass-panel p-6 sm:p-8 rounded-[2.5rem] border border-white/15 shadow-glass space-y-6">
              <h3 className="font-editorial text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#F6A028]" />
                Garanties PrêtePlume
              </h3>

              <ul className="space-y-4 text-xs sm:text-sm text-white/80">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F6A028] shrink-0 mt-0.5" />
                  <span><strong>Accord NDA & Confidentialité :</strong> Votre identité et vos écrits restent 100% confidentiels.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F6A028] shrink-0 mt-0.5" />
                  <span><strong>Facture officielle :</strong> Un reçu de paiement détaillé et une facture acquittée vous seront transmis.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F6A028] shrink-0 mt-0.5" />
                  <span><strong>Moyens de paiement acceptés :</strong> Cartes bancaires (Visa, Mastercard, AMEX), Apple Pay & Google Pay.</span>
                </li>
              </ul>
            </div>

            {/* Box Dodo Payments Details */}
            <div className="glass-panel-darker p-6 rounded-[2rem] border border-white/10 text-xs text-white/70 space-y-3">
              <div className="flex items-center gap-2 text-white font-bold">
                <Building2 className="w-4 h-4 text-[#F6A028]" />
                <span>À propos de Dodo Payments</span>
              </div>
              <p className="leading-relaxed">
                Dodo Payments est une plateforme de paiement internationale hautement sécurisée qui gère les transactions pour notre atelier. Vos données bancaires ne transitent jamais en clair sur notre serveur.
              </p>
            </div>

            {/* Assistance directe */}
            <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10 text-center space-y-3">
              <div className="flex items-center justify-center gap-2 text-xs text-white/80">
                <HelpCircle className="w-4 h-4 text-[#F6A028]" />
                <span>Besoin d'aide pour régler votre devis ?</span>
              </div>
              <p className="text-xs text-white/60">
                Contactez notre atelier par courriel à{' '}
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#F6A028] underline">
                  {SITE_CONFIG.email}
                </a>
              </p>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
