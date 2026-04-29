"use client"

import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react"

const footerLinks = {
  servicios: [
    { name: "Credito Empresarial", href: "#servicios" },
    { name: "Credito Personal", href: "#servicios" },
    { name: "Credito PyME", href: "#servicios" },
    { name: "Credito con Garantia", href: "#servicios" },
    { name: "Linea de Credito", href: "#servicios" },
  ],
  empresa: [
    { name: "Inicio", href: "#hero" },
    { name: "Servicios", href: "#servicios" },
    { name: "Contacto", href: "#contacto" },
    { name: "Aviso de Privacidad", href: "#" },
    { name: "Terminos y Condiciones", href: "#" },
  ],
  legal: [
    { name: "CONDUSEF", href: "https://www.condusef.gob.mx" },
    { name: "CNBV", href: "https://www.gob.mx/cnbv" },
    { name: "Buro de Credito", href: "https://www.burodecredito.com.mx" },
  ],
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { 
    name: "TikTok", 
    icon: () => (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    ), 
    href: "https://tiktok.com" 
  },
]

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-maroon to-[#2D0104] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-crimson/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-ocean-blue/10 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <a href="#hero" className="flex items-center gap-3 mb-4 group">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-ocean-blue to-dark-teal flex items-center justify-center shadow-lg shadow-ocean-blue/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <span className="text-white font-bold text-xl">SF</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                SOFOM
              </span>
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Sociedad Financiera de Objeto Multiple comprometida con el crecimiento 
              financiero de empresas y familias mexicanas.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-11 w-11 rounded-full bg-white/10 hover:bg-ocean-blue flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-ocean-blue/30"
                  aria-label={social.name}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link, index) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-white/60 hover:text-ocean-blue text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                    style={{ transitionDelay: `${index * 30}ms` }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-white/60 hover:text-ocean-blue text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                    style={{ transitionDelay: `${index * 30}ms` }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Reguladores</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-ocean-blue text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                    style={{ transitionDelay: `${index * 30}ms` }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/60 group cursor-default">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-ocean-blue transition-transform duration-300 group-hover:scale-110" />
                <span className="group-hover:text-white transition-colors duration-300">
                  Blvd. Adolfo Lopez Mateos 1234, Leon, Gto.
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60 group cursor-default">
                <Phone className="h-5 w-5 flex-shrink-0 text-ocean-blue transition-transform duration-300 group-hover:scale-110" />
                <span className="group-hover:text-white transition-colors duration-300">
                  (477) 123-4567
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60 group cursor-default">
                <Mail className="h-5 w-5 flex-shrink-0 text-ocean-blue transition-transform duration-300 group-hover:scale-110" />
                <span className="group-hover:text-white transition-colors duration-300">
                  contacto@sofom.mx
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50">
              {new Date().getFullYear()} SOFOM. Todos los derechos reservados.
            </p>
            <p className="text-xs text-white/30">
              SOFOM E.N.R. regulada por la Ley General de Organizaciones y Actividades Auxiliares del Credito
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
