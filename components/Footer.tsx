import React from "react"
import CurrentYear from "@/components/current-year"
import { SOUS_SERVICES_DEBARRAS } from "@/lib/sous-services/debarras-maison"
import { servicePath } from "@/lib/site"
import Image from 'next/image';
import { Phone, MapPin } from 'lucide-react';

interface PhoneConfig {
  tel: string;
  display: string;
}

interface FooterProps {
  phoneConfig: PhoneConfig;
}

const Footer: React.FC<FooterProps> = ({ phoneConfig }) => {
  return (
    <footer id="contact" className="bg-gradient-to-r from-[#0E2452] to-[#0E2452] text-white py-16 pt-5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info with Logo */}
          <div className="lg:col-span-1 flex flex-col items-center md:items-start">
            <Image
              src="/images/logo-debarras-proximite-blanc.png"
              alt="Débarras Proximité Logo"
              width={226}
              height={56}
              className="h-14 w-auto mb-6"
                  style={{ width: "auto" }}
                />
            <p className="text-gray-400 text-sm leading-relaxed mb-6 text-justify">
              Débarras Proximité, spécialiste du débarras de logements et locaux partout en France. Vidage complet, succession, cave, grenier et encombrants : un service rapide, soigné et responsable.
            </p>

            <div className="flex gap-4 items-center justify-center">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#FFC629] rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#FFC629] rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#FFC629] rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.02 4.02 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.645 8.645 0 0 1-2.019 2.083z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services rapides */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Nos Services</h4>
            <ul className="space-y-3 text-sm">
              {[
                // « Débarras de maison » en premier, puis les autres prestations
                { href: servicePath("debarras-maison"), label: "Débarras de maison" },
                ...SOUS_SERVICES_DEBARRAS.filter((ss) => ss.slug !== "debarras-maison").map((ss) => ({
                  href: servicePath(ss.slug),
                  label: ss.label,
                })),
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-[#FFC629] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#FFC629] rounded-full"></span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Liens utiles */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Liens Utiles</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/a-propos"
                  className="text-gray-400 hover:text-[#FFC629] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#FFC629] rounded-full"></span>À propos
                </a>
              </li>
              <li>
                <a
                  href="/tarifs"
                  className="text-gray-400 hover:text-[#FFC629] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#FFC629] rounded-full"></span>
                  Tarifs
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-gray-400 hover:text-[#FFC629] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#FFC629] rounded-full"></span>
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/zone-intervention"
                  className="text-gray-400 hover:text-[#FFC629] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#FFC629] rounded-full"></span>
                  Zones d'intervention
                </a>
              </li>
              <li>
                <a
                  href="/temoignages"
                  className="text-gray-400 hover:text-[#FFC629] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#FFC629] rounded-full"></span>
                  Avis clients
                </a>
              </li>
              <li>
                <a
                  href="/foire-aux-questions"
                  className="text-gray-400 hover:text-[#FFC629] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#FFC629] rounded-full"></span>
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#FFC629]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#FFC629]" />
                </div>
                <div>
                  <p className="text-blue-200 text-xs mb-1">Téléphone</p>
                  <a href={`tel:${phoneConfig.tel}`} className="text-white hover:text-[#FFC629] font-semibold">
                    {phoneConfig.display}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#FFC629]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#FFC629]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-blue-200 text-xs mb-1">Email</p>
                  <a href="mailto:contact@debarras-proximite.fr" className="text-white hover:text-[#FFC629] font-semibold">
                    contact@debarras-proximite.fr
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#FFC629]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#FFC629]" />
                </div>
                <div>
                  <p className="text-blue-200 text-xs mb-1">Service disponible</p>
                  <p className="text-white font-semibold">Partout en France</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Legal Links */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © <CurrentYear /> DÉBARRAS PROXIMITÉ. Tous droits réservés. Débarras de logements et locaux partout en France.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="/mentions-legales" className="text-gray-400 hover:text-[#FFC629] transition-colors">
                Mentions légales
              </a>
              <a href="/politique-confidentialite" className="text-gray-400 hover:text-[#FFC629] transition-colors">
                Politique de confidentialité
              </a>
              <a href="/cgu" className="text-gray-400 hover:text-[#FFC629] transition-colors">
                CGU
              </a>
              <a href="/cgv" className="text-gray-400 hover:text-[#FFC629] transition-colors">
                CGV
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-[#FFC629] transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
