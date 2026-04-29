"use client"

import { useState, useEffect, useRef } from "react"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const contactInfo = [
  {
    icon: MapPin,
    title: "Direccion",
    details: ["Blvd. Adolfo Lopez Mateos 1234", "Col. Jardines del Moral", "Leon, Guanajuato, 37160"],
  },
  {
    icon: Phone,
    title: "Telefono",
    details: ["(477) 123-4567", "(477) 765-4321"],
  },
  {
    icon: Mail,
    title: "Correo Electronico",
    details: ["contacto@sofom.mx", "atencion@sofom.mx"],
  },
  {
    icon: Clock,
    title: "Horario de Atencion",
    details: ["Lunes a Viernes: 9:00 - 18:00", "Sabados: 9:00 - 14:00"],
  },
]

const loanTypes = [
  "Credito Empresarial",
  "Credito Personal",
  "Credito PyME",
  "Credito con Garantia",
  "Credito Automotriz",
  "Linea de Credito",
  "Otro",
]

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <section 
      ref={sectionRef}
      id="contacto" 
      className="py-24 bg-gradient-to-b from-secondary/20 via-background to-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-ocean-blue/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "4s" }} />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-crimson/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "5s", animationDelay: "1s" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-ocean-blue/20 text-ocean-blue text-sm font-medium mb-4 border border-ocean-blue/30">
            Contactanos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Agenda tu{" "}
            <span className="bg-gradient-to-r from-ocean-blue via-dark-teal to-crimson bg-clip-text text-transparent">
              Cita de Asesoria
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Estamos listos para ayudarte a encontrar la solucion financiera perfecta. 
            Completa el formulario y un asesor se pondra en contacto contigo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div 
            className={`bg-card rounded-2xl shadow-2xl shadow-black/20 p-6 sm:p-8 border border-border hover:border-ocean-blue/30 transition-all duration-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
                <div className="h-20 w-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6 animate-bounce">
                  <CheckCircle className="h-10 w-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Solicitud Enviada!</h3>
                <p className="text-muted-foreground mb-6 max-w-sm">
                  Gracias por tu interes. Un asesor se pondra en contacto contigo en las proximas 24 horas habiles.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="border-ocean-blue/50 text-ocean-blue hover:bg-ocean-blue hover:text-white transition-all duration-300"
                >
                  Enviar otra solicitud
                </Button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-foreground mb-6">Agendar Reunion</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2 group">
                      <Label htmlFor="nombre" className="group-focus-within:text-ocean-blue transition-colors">
                        Nombre completo *
                      </Label>
                      <Input 
                        id="nombre" 
                        placeholder="Juan Perez Garcia" 
                        required 
                        className="h-11 bg-secondary/50 border-border focus:border-ocean-blue focus:ring-ocean-blue/20 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2 group">
                      <Label htmlFor="telefono" className="group-focus-within:text-ocean-blue transition-colors">
                        Telefono *
                      </Label>
                      <Input 
                        id="telefono" 
                        type="tel" 
                        placeholder="(477) 123-4567" 
                        required 
                        className="h-11 bg-secondary/50 border-border focus:border-ocean-blue focus:ring-ocean-blue/20 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 group">
                    <Label htmlFor="email" className="group-focus-within:text-ocean-blue transition-colors">
                      Correo electronico *
                    </Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="juan@ejemplo.com" 
                      required 
                      className="h-11 bg-secondary/50 border-border focus:border-ocean-blue focus:ring-ocean-blue/20 transition-all duration-300"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="tipo">Tipo de credito *</Label>
                      <Select required>
                        <SelectTrigger className="h-11 bg-secondary/50 border-border focus:border-ocean-blue">
                          <SelectValue placeholder="Selecciona una opcion" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-border">
                          {loanTypes.map((type) => (
                            <SelectItem 
                              key={type} 
                              value={type.toLowerCase().replace(/\s+/g, "-")}
                              className="hover:bg-ocean-blue/10 focus:bg-ocean-blue/10"
                            >
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2 group">
                      <Label htmlFor="monto" className="group-focus-within:text-ocean-blue transition-colors">
                        Monto aproximado
                      </Label>
                      <Input 
                        id="monto" 
                        placeholder="$500,000" 
                        className="h-11 bg-secondary/50 border-border focus:border-ocean-blue focus:ring-ocean-blue/20 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 group">
                    <Label htmlFor="mensaje" className="group-focus-within:text-ocean-blue transition-colors">
                      Mensaje adicional
                    </Label>
                    <Textarea 
                      id="mensaje" 
                      placeholder="Cuentanos mas sobre tu proyecto o necesidades financieras..."
                      rows={4}
                      className="resize-none bg-secondary/50 border-border focus:border-ocean-blue focus:ring-ocean-blue/20 transition-all duration-300"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      id="privacidad" 
                      required 
                      className="mt-1 h-4 w-4 rounded border-border accent-ocean-blue"
                    />
                    <Label htmlFor="privacidad" className="text-sm text-muted-foreground font-normal">
                      Acepto el tratamiento de mis datos personales conforme al{" "}
                      <a href="#" className="text-ocean-blue hover:underline transition-colors">Aviso de Privacidad</a>.
                    </Label>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-ocean-blue to-dark-teal hover:from-dark-teal hover:to-ocean-blue text-white gap-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-ocean-blue/30 disabled:opacity-70"
                  >
                    {isLoading ? (
                      <>
                        <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Enviar Solicitud
                      </>
                    )}
                  </Button>
                </form>
              </>
            )}
          </div>

          {/* Contact Info & Map */}
          <div 
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            {/* Contact cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <div 
                  key={info.title}
                  className={`p-5 rounded-xl bg-card border border-border hover:border-ocean-blue/50 hover:shadow-lg hover:shadow-ocean-blue/10 transition-all duration-500 cursor-default group ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-ocean-blue to-dark-teal flex items-center justify-center mb-3 shadow-lg shadow-ocean-blue/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 group-hover:text-ocean-blue transition-colors duration-300">
                    {info.title}
                  </h4>
                  {info.details.map((detail, detailIndex) => (
                    <p 
                      key={detailIndex} 
                      className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                      style={{ transitionDelay: `${detailIndex * 50}ms` }}
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div 
              className={`relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-border hover:border-ocean-blue/50 transition-all duration-500 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "900ms" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-ocean-blue/20 to-crimson/20 group-hover:from-ocean-blue/30 group-hover:to-crimson/30 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="h-20 w-20 rounded-full bg-card shadow-xl shadow-black/20 flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:scale-110">
                    <MapPin className="h-10 w-10 text-crimson" />
                  </div>
                  <p className="font-semibold text-foreground">Leon, Guanajuato</p>
                  <p className="text-sm text-muted-foreground">Blvd. Adolfo Lopez Mateos 1234</p>
                  <a 
                    href="https://maps.google.com/?q=Leon+Guanajuato+Mexico" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-ocean-blue hover:underline mt-3 transition-all duration-300 hover:gap-2"
                  >
                    Ver en Google Maps
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Decorative map grid */}
              <div className="absolute inset-0 opacity-20">
                <div className="h-full w-full" style={{ 
                  backgroundImage: "linear-gradient(#03588C 1px, transparent 1px), linear-gradient(90deg, #03588C 1px, transparent 1px)",
                  backgroundSize: "40px 40px"
                }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
