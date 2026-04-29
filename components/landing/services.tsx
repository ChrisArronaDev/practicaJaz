"use client"

import { useEffect, useRef, useState } from "react"
import { Building2, User, Briefcase, Home, Car, CreditCard, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

const services = [
  {
    icon: Building2,
    title: "Credito Empresarial",
    description: "Financiamiento para capital de trabajo, expansion y proyectos de inversion empresarial.",
    features: [
      "Sin comision por apertura",
      "Esquemas de pago flexibles",
      "Analisis financiero personalizado",
      "Respuesta en 48 horas",
    ],
    featured: true,
  },
  {
    icon: User,
    title: "Credito Personal",
    description: "Prestamos personales para consolidacion de deudas, gastos medicos o proyectos personales.",
    features: [
      "Requisitos minimos",
      "Sin aval requerido",
      "Dispersion inmediata",
      "Atencion personalizada",
    ],
    featured: false,
  },
  {
    icon: Briefcase,
    title: "Credito PyME",
    description: "Soluciones disenadas especificamente para pequenas y medianas empresas en crecimiento.",
    features: [
      "Lineas de credito revolvente",
      "Financiamiento de inventario",
      "Capital para nomina",
      "Asesoria empresarial incluida",
    ],
    featured: false,
  },
  {
    icon: Home,
    title: "Credito con Garantia",
    description: "Tasas preferenciales respaldando tu credito con bienes inmuebles o vehiculos.",
    features: [
      "Las mejores tasas del mercado",
      "Plazos extendidos",
      "Valuacion sin costo",
      "Proceso simplificado",
    ],
    featured: false,
  },
  {
    icon: Car,
    title: "Credito Automotriz",
    description: "Adquiere tu vehiculo nuevo o seminuevo con las mejores condiciones de financiamiento.",
    features: [
      "Enganche desde 10%",
      "Seguro incluido opcional",
      "Aprobacion express",
      "Amplia red de agencias",
    ],
    featured: false,
  },
  {
    icon: CreditCard,
    title: "Linea de Credito",
    description: "Disponibilidad de recursos cuando los necesites, solo pagas intereses por lo que uses.",
    features: [
      "Uso a tu conveniencia",
      "Intereses sobre saldo usado",
      "Renovacion automatica",
      "Sin pagos fijos mensuales",
    ],
    featured: false,
  },
]

export function Services() {
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

  return (
    <section 
      ref={sectionRef}
      id="servicios" 
      className="py-24 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-ocean-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-crimson/10 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-ocean-blue/20 text-ocean-blue text-sm font-medium mb-4 border border-ocean-blue/30">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Soluciones de Credito{" "}
            <span className="bg-gradient-to-r from-ocean-blue via-dark-teal to-crimson bg-clip-text text-transparent">
              a tu Medida
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Ofrecemos una amplia gama de productos financieros disenados para satisfacer 
            las necesidades especificas de cada cliente, con condiciones flexibles.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`relative overflow-hidden bg-card border-border hover:border-ocean-blue/50 transition-all duration-500 group ${
                service.featured 
                  ? "border-ocean-blue shadow-lg shadow-ocean-blue/20 ring-1 ring-ocean-blue/30" 
                  : ""
              } ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-ocean-blue/5 to-crimson/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {service.featured && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-ocean-blue to-dark-teal text-white text-xs font-medium animate-pulse">
                    Mas Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="pb-4 relative">
                <div className={`h-14 w-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${
                  service.featured 
                    ? "bg-gradient-to-br from-ocean-blue to-dark-teal shadow-lg shadow-ocean-blue/30" 
                    : "bg-gradient-to-br from-maroon to-crimson shadow-lg shadow-crimson/30"
                }`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-ocean-blue transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4 relative">
                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={feature} 
                      className="flex items-start gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                      style={{ transitionDelay: `${featureIndex * 50}ms` }}
                    >
                      <div className="h-5 w-5 rounded-full bg-ocean-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-ocean-blue/30 transition-colors duration-300">
                        <Check className="h-3 w-3 text-ocean-blue" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="relative">
                <Button 
                  className={`w-full gap-2 transition-all duration-500 group-hover:scale-105 ${
                    service.featured 
                      ? "bg-gradient-to-r from-ocean-blue to-dark-teal hover:from-dark-teal hover:to-ocean-blue text-white shadow-lg shadow-ocean-blue/30" 
                      : "bg-gradient-to-r from-maroon to-crimson hover:from-crimson hover:to-maroon text-white shadow-lg shadow-crimson/30"
                  }`}
                >
                  Solicitar Informacion
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div 
          className={`mt-16 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <p className="text-muted-foreground mb-4">
            No encuentras lo que buscas? Contactanos para una solucion personalizada.
          </p>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-ocean-blue/50 text-ocean-blue hover:bg-ocean-blue hover:text-white gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-ocean-blue/30 group"
          >
            Hablar con un Asesor
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
