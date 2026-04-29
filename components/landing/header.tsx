"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Inicio", href: "#hero" },
  { name: "Servicios", href: "#servicios" },
  { name: "Contacto", href: "#contacto" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-card/95 backdrop-blur-md border-b border-border shadow-lg shadow-black/20" 
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <a 
            href="#hero" 
            className="-m-1.5 p-1.5 flex items-center gap-3 group"
          >
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-ocean-blue to-dark-teal flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <span className="text-white font-bold text-lg">SF</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-ocean-blue to-crimson bg-clip-text text-transparent">
              SOFOM
            </span>
          </a>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground transition-transform duration-200 hover:scale-110"
          >
            <span className="sr-only">Abrir menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6 animate-in spin-in-90" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-sm font-medium text-foreground/80 hover:text-ocean-blue transition-colors duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-ocean-blue to-crimson transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4">
          <Button 
            variant="outline" 
            size="sm" 
            className="gap-2 border-border/50 hover:border-ocean-blue hover:bg-ocean-blue/10 transition-all duration-300"
          >
            <Phone className="h-4 w-4" />
            <span>477 123 4567</span>
          </Button>
          <Button 
            size="sm" 
            className="bg-gradient-to-r from-ocean-blue to-dark-teal hover:from-dark-teal hover:to-ocean-blue text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-ocean-blue/30"
          >
            Agendar Cita
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-card/95 backdrop-blur-md border-t border-border px-4 py-4">
          <div className="space-y-1">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-foreground hover:bg-secondary hover:text-ocean-blue rounded-xl transition-all duration-300"
                style={{ 
                  transitionDelay: mobileMenuOpen ? `${index * 50}ms` : "0ms",
                  transform: mobileMenuOpen ? "translateX(0)" : "translateX(-20px)",
                  opacity: mobileMenuOpen ? 1 : 0
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="pt-4 mt-4 border-t border-border flex flex-col gap-3">
            <Button variant="outline" className="w-full gap-2 border-border/50">
              <Phone className="h-4 w-4" />
              <span>477 123 4567</span>
            </Button>
            <Button className="w-full bg-gradient-to-r from-ocean-blue to-dark-teal hover:from-dark-teal hover:to-ocean-blue text-white">
              Agendar Cita
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
