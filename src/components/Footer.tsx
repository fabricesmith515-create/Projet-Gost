import React from 'react';
import Link from 'next/link';
import { Feather, Mail, MessageCircle, ShieldCheck, ExternalLink, Linkedin, Twitter, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#F6A028] text-[#2A1B12] flex items-center justify-center font-bold">
                <Feather className="w-4.5 h-4.5" />
              </div>
              <span className="logo-caps text-xl font-bold tracking-[0.18em] text-white">
                PRÊTE<span className="text-[#F6A028] font-normal">PLUME</span>
              </span>
            </Link>
            <p className="text-xs text-white/75 leading-relaxed">
              Atelier d'écriture & collectif de 5 plumes d'exception dirigé par son fondateur (Horizonrose). Romans, essais, nouvelles, contes enfants, ebooks, biographies & publication KDP.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-[#F6A028] bg-white/10 px-3 py-1.5 rounded-full w-fit border border-white/15">
              <ShieldCheck className="w-4 h-4" />
              <span>100% NDA & Cession des Droits</span>
            </div>

            <p className="text-[11px] text-white/60">
              Édité par <strong className="text-white">Digital Product World LTD</strong>
            </p>
          </div>

          {/* Navigation Col */}
          <div>
            <h4 className="font-editorial text-lg font-bold text-white mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-xs text-white/75">
              <li>
                <Link href="/" className="hover:text-[#F6A028] transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#F6A028] transition-colors">
                  Services & Prestations (11 genres)
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="hover:text-[#F6A028] transition-colors">
                  À propos du Fondateur & de l'Équipe
                </Link>
              </li>
              <li>
                <Link href="/#portfolio" className="hover:text-[#F6A028] transition-colors">
                  Portfolio & Extraits de Livres
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#F6A028] transition-colors">
                  Blog & Conseils Éditoriaux
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F6A028] transition-colors">
                  Contact & Demande de Devis
                </Link>
              </li>
              <li>
                <Link href="/paiement" className="hover:text-[#F6A028] font-bold text-[#F6A028] transition-colors flex items-center gap-1">
                  <span>Payer en ligne (Dodo Payments)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Genres Col */}
          <div>
            <h4 className="font-editorial text-lg font-bold text-white mb-4">Genres & KDP</h4>
            <ul className="space-y-2 text-xs text-white/75">
              <li>
                <Link href="/services#romans" className="hover:text-[#F6A028] transition-colors">
                  Romans (Romance, Thriller, Fantasy)
                </Link>
              </li>
              <li>
                <Link href="/services#essais" className="hover:text-[#F6A028] transition-colors">
                  Essais & Manifestes d'Expert
                </Link>
              </li>
              <li>
                <Link href="/services#enfants" className="hover:text-[#F6A028] transition-colors">
                  Livres pour Enfants & Contes
                </Link>
              </li>
              <li>
                <Link href="/services#kdp" className="hover:text-[#F6A028] transition-colors">
                  Publication Amazon KDP
                </Link>
              </li>
              <li>
                <Link href="/services#ebooks" className="hover:text-[#F6A028] transition-colors">
                  Ebooks & Livres d'Autorité
                </Link>
              </li>
              <li>
                <Link href="/services#biographies" className="hover:text-[#F6A028] transition-colors">
                  Biographies & Récits de Vie
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & ComeUp Col */}
          <div>
            <h4 className="font-editorial text-lg font-bold text-white mb-4">Atelier & Contact</h4>
            <div className="flex flex-col gap-3 text-xs mb-4">
              <div className="flex items-start gap-2 text-white/90">
                <MapPin className="w-4 h-4 text-[#F6A028] shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.address.full}</span>
              </div>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2 text-white/90 hover:text-[#F6A028] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#F6A028]" />
                <span>{SITE_CONFIG.email}</span>
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/90 hover:text-[#25D366] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Direct</span>
              </a>
              <a
                href={SITE_CONFIG.comeup}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#F6A028] hover:underline"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Profil ComeUp (Horizonrose)</span>
              </a>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[10px] text-white/70">
              Ciblage : France, Suisse (CHF), Belgique, Québec (CAD).
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {currentYear} PrêtePlume. Édité par Digital Product World LTD. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-de-confidentialite" className="hover:text-white transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
