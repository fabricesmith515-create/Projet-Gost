import React from 'react';
import Link from 'next/link';
import { Feather, Mail, MessageCircle, ShieldCheck, Linkedin, Twitter } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A2E] text-[#FAF8F4] pt-16 pb-12 border-t border-[#2B2B40]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#C75B39] text-white flex items-center justify-center">
                <Feather className="w-4 h-4" />
              </div>
              <span className="font-editorial text-2xl font-bold tracking-tight text-white">
                Prête<span className="text-[#C75B39] font-normal italic">Plume</span>
              </span>
            </Link>
            <p className="text-sm text-[#8A8A9E] leading-relaxed">
              Le service de ghostwriting sur-mesure pour entrepreneurs, dirigeants et esprits inspirés. Vos idées prennent forme sous la plume d'un expert discret.
            </p>
            <div className="flex items-center gap-3 text-xs text-[#B08D57] bg-[#2B2B40] px-3 py-1.5 rounded-full w-fit">
              <ShieldCheck className="w-4 h-4 text-[#B08D57]" />
              <span>100% Confidentialité garantie par NDA</span>
            </div>
          </div>

          {/* Navigation Col */}
          <div>
            <h4 className="font-editorial text-lg font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm text-[#8A8A9E]">
              <li>
                <Link href="/" className="hover:text-[#C75B39] transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#C75B39] transition-colors">
                  Services de rédaction
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="hover:text-[#C75B39] transition-colors">
                  À propos du ghostwriter
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#C75B39] transition-colors">
                  Blog & Articles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C75B39] transition-colors">
                  Prendre contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="font-editorial text-lg font-semibold text-white mb-4">Prestations</h4>
            <ul className="space-y-2.5 text-sm text-[#8A8A9E]">
              <li>
                <Link href="/services#ebooks" className="hover:text-[#C75B39] transition-colors">
                  Ebooks & Livres d'expert
                </Link>
              </li>
              <li>
                <Link href="/services#biographies" className="hover:text-[#C75B39] transition-colors">
                  Biographies & Récits de vie
                </Link>
              </li>
              <li>
                <Link href="/services#discours" className="hover:text-[#C75B39] transition-colors">
                  Discours & Prises de parole
                </Link>
              </li>
              <li>
                <Link href="/services#livres-blancs" className="hover:text-[#C75B39] transition-colors">
                  Rapports & Livres blancs
                </Link>
              </li>
              <li>
                <Link href="/services#reecriture" className="hover:text-[#C75B39] transition-colors">
                  Réécriture & Relecture
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-editorial text-lg font-semibold text-white mb-4">Échangez directement</h4>
            <p className="text-sm text-[#8A8A9E] mb-4">
              Chaque projet commence par une discussion bienveillante et confidentielle.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2 text-[#FAF8F4] hover:text-[#C75B39] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#C75B39]" />
                <span>{SITE_CONFIG.email}</span>
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#FAF8F4] hover:text-[#25D366] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Discussion WhatsApp rapide</span>
              </a>
            </div>
            <div className="flex items-center gap-3 mt-5">
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#2B2B40] hover:bg-[#C75B39] text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#2B2B40] hover:bg-[#C75B39] text-white flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#2B2B40] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A8A9E]">
          <p>© {currentYear} PrêtePlume. Tous droits réservés. Vos mots, votre nom.</p>
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
