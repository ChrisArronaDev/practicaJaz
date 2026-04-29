"use client"

import { useEffect, useRef, useState } from "react"
import { FileText, Search, CheckCircle, Handshake, Banknote, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Solicitud",
    description: "Completa tu solicitud en linea o visitanos en nuestras oficinas. Solo necesitas identificacion oficial y comprobantes basicos.",
    details: ["Identificacion oficial vigente", "Comprobante de domicilio", "Comprobante de ingresos"],
  },
  {
    icon: Search,
    step: "02",
    title: "Analisis",
    description: "Nuestro equipo evalua tu perfil crediticio y capacidad de pago para ofrecerte las mejores condiciones posibles.",
    details: ["Evaluacion crediticia", "Analisis de capacidad de pago", "Verificacion de documentos"],
  },
  {
    icon: CheckCircle,
    step: "03",
    title: "Aprobacion",
    description: "Recibes tu pre-aprobacion en 24-48 horas con las condiciones especificas de tu credito: monto, tasa y plazo.",
    details: ["Respuesta en 24-48 hrs", "Condiciones personalizadas", "Sin compromiso inicial"],
  },
  {
    icon: Handshake,
    step: "04",
    title: "Formalizacion",
    description: "Firmamos el contrato de credito con total transparencia. Te explicamos cada clausula y condicion del prestamo.",
    details: ["Contrato transparente", "Asesoria personalizada", "Sin letras pequenas"],
  },
  {
    icon: Banknote,
    step: "05",
    title: "Dispersion",
    description: "Una vez firmado el contrato, los fondos se depositan en tu cuenta bancaria en un maximo de 24 horas habiles.",
    details: ["Deposito en 24 hrs", "Transferencia electronica", "Confirmacion inmediata"],
  },
]

export function Process() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState<number | null>(null)
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
    <section ref={sectionRef} id="proceso" className="py-24 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-ocean-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-20 w-72 h-72 bg-crimson/10 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-crimson/20 text-crimson text-sm font-medium mb-4 border border-crimson/30">
            Pasos de la SOFOM
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Tu Credito en{" "}
            <span className="bg-gradient-to-r from-maroon via-crimson to-ocean-blue bg-clip-text text-transparent">
              5 Sencillos Pasos
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Hemos simplificado el proceso de constitucion y otorgamiento de credito 
            para que obtengas tu financiamiento de forma rapida, transparente y sin complicaciones.
          </p>
        </div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block">
          {/* Progress line */}
          <div className="relative">
            <div 
              className={`absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-ocean-blue via-dark-teal to-crimson rounded-full transition-all duration-1000 ${
                isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
              style={{ transformOrigin: "left", transitionDelay: "400ms" }}
            />
            
            {/* Steps */}
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => (
                <div 
                  key={step.step} 
                  className={`relative transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${500 + index * 150}ms` }}
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  {/* Connector dot */}
                  <div 
                    className={`absolute left-1/2 top-16 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-card border-4 shadow-lg transition-all duration-300 ${
                      activeStep === index 
                        ? "border-ocean-blue scale-150 shadow-ocean-blue/50" 
                        : "border-ocean-blue/70"
                    }`}
                  />
                  
                  {/* Card */}
                  <div className="pt-24">
                    <div 
                      className={`p-6 rounded-2xl bg-secondary/50 border border-border transition-all duration-500 h-full cursor-default ${
                        activeStep === index 
                          ? "bg-card border-ocean-blue/50 shadow-xl shadow-ocean-blue/10 scale-105 -translate-y-2" 
                          : "hover:bg-card hover:border-border"
                      }`}
                    >
                      <div 
                        className={`h-14 w-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 shadow-lg ${
                          index % 2 === 0 
                            ? "bg-gradient-to-br from-ocean-blue to-dark-teal shadow-ocean-blue/30" 
                            : "bg-gradient-to-br from-maroon to-crimson shadow-crimson/30"
                        } ${activeStep === index ? "scale-110 rotate-6" : ""}`}
                      >
                        <step.icon className="h-7 w-7 text-white" />
                      </div>
                      
                      <span className={`text-sm font-bold transition-colors duration-300 ${
                        activeStep === index ? "text-ocean-blue" : "text-ocean-blue/70"
                      }`}>
                        Paso {step.step}
                      </span>
                      <h3 className={`text-xl font-bold mt-1 mb-3 transition-colors duration-300 ${
                        activeStep === index ? "text-ocean-blue" : "text-foreground"
                      }`}>
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li 
                            key={detail} 
                            className={`flex items-center gap-2 text-xs transition-all duration-300 ${
                              activeStep === index ? "text-foreground translate-x-1" : "text-muted-foreground"
                            }`}
                            style={{ transitionDelay: `${detailIndex * 50}ms` }}
                          >
                            <div className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                              activeStep === index ? "bg-ocean-blue scale-150" : "bg-ocean-blue/50"
                            }`} />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline - Mobile/Tablet */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <div 
              key={step.step} 
              className={`relative flex gap-4 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Vertical line */}
              {index < steps.length - 1 && (
                <div className="absolute left-7 top-16 bottom-0 w-0.5 bg-gradient-to-b from-ocean-blue to-crimson" />
              )}
              
              {/* Icon */}
              <div 
                className={`flex-shrink-0 h-14 w-14 rounded-xl flex items-center justify-center z-10 shadow-lg transition-all duration-500 hover:scale-110 hover:rotate-6 ${
                  index % 2 === 0 
                    ? "bg-gradient-to-br from-ocean-blue to-dark-teal shadow-ocean-blue/30" 
                    : "bg-gradient-to-br from-maroon to-crimson shadow-crimson/30"
                }`}
              >
                <step.icon className="h-7 w-7 text-white" />
              </div>
              
              {/* Content */}
              <div className="flex-1 pb-8">
                <span className="text-sm font-bold text-ocean-blue">Paso {step.step}</span>
                <h3 className="text-xl font-bold text-foreground mt-1 mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {step.description}
                </p>
                <ul className="space-y-1.5">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-ocean-blue" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div 
          className={`mt-16 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "1200ms" }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-ocean-blue/10 to-crimson/10 border border-border hover:border-ocean-blue/50 transition-all duration-500">
            <div className="text-center sm:text-left">
              <p className="font-semibold text-foreground">Listo para comenzar?</p>
              <p className="text-sm text-muted-foreground">Inicia tu solicitud hoy mismo</p>
            </div>
            <a 
              href="#contacto"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-ocean-blue to-dark-teal text-white font-medium hover:from-dark-teal hover:to-ocean-blue transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-ocean-blue/30 group"
            >
              Comenzar Ahora
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
