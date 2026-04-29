"use client"

import { useEffect, useRef, useState } from "react"
import { Target, Eye, Award, Users } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Mision",
    description: "Brindar soluciones financieras accesibles y transparentes que impulsen el crecimiento economico de nuestros clientes, con un servicio personalizado y comprometido.",
  },
  {
    icon: Eye,
    title: "Vision",
    description: "Ser la SOFOM lider en el Bajio, reconocida por nuestra integridad, innovacion y compromiso con el desarrollo financiero de empresas y familias mexicanas.",
  },
  {
    icon: Award,
    title: "Valores",
    description: "Transparencia, responsabilidad, compromiso social y excelencia en el servicio son los pilares que guian cada una de nuestras operaciones.",
  },
  {
    icon: Users,
    title: "Experiencia",
    description: "Mas de una decada atendiendo a empresarios y familias, construyendo relaciones de confianza que trascienden generaciones.",
  },
]

export function About() {
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
    <section ref={sectionRef} id="nosotros" className="py-24 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-ocean-blue/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "4s" }} />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-crimson/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "5s", animationDelay: "1s" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-crimson/20 text-crimson text-sm font-medium mb-4 border border-crimson/30">
            Nuestra Historia
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Una Trayectoria de{" "}
            <span className="bg-gradient-to-r from-maroon via-crimson to-ocean-blue bg-clip-text text-transparent">
              Confianza y Resultados
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Desde nuestra fundacion, nos hemos dedicado a democratizar el acceso al credito, 
            ofreciendo alternativas financieras justas y accesibles para quienes mas lo necesitan.
          </p>
        </div>

        {/* Story content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div 
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-ocean-blue/30 to-crimson/30 rounded-3xl blur-2xl animate-pulse" style={{ animationDuration: "3s" }} />
            <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-secondary to-card p-8 flex items-center justify-center border border-border hover:border-ocean-blue/50 transition-all duration-500 group">
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-24 w-24 rounded-2xl bg-gradient-to-br from-ocean-blue to-dark-teal mb-4 shadow-xl shadow-ocean-blue/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <span className="text-white font-bold text-3xl">SF</span>
                </div>
                <p className="text-2xl font-bold text-foreground mb-2">SOFOM</p>
                <p className="text-muted-foreground">Sociedad Financiera de Objeto Multiple</p>
                <div className="mt-6 flex items-center justify-center gap-4 text-sm">
                  <span className="px-4 py-2 rounded-full bg-ocean-blue/20 text-ocean-blue border border-ocean-blue/30 transition-all duration-300 hover:scale-105 cursor-default">
                    Regulada
                  </span>
                  <span className="px-4 py-2 rounded-full bg-crimson/20 text-crimson border border-crimson/30 transition-all duration-300 hover:scale-105 cursor-default">
                    Certificada
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div 
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <h3 className="text-2xl font-bold text-foreground">
              Mas de 10 anos transformando suenos en realidad
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Nacimos en Leon, Guanajuato, con la vision de crear una institucion financiera 
              diferente. Una que pusiera al cliente en el centro de cada decision. Hoy, despues 
              de mas de una decada, seguimos fieles a ese principio.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nuestra SOFOM se especializa en entender las necesidades unicas de cada cliente. 
              Ya sea que busques capital para expandir tu negocio, consolidar deudas o hacer 
              realidad un proyecto personal, estamos aqui para ayudarte.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Como entidad regulada, operamos bajo los mas altos estandares de transparencia 
              y cumplimiento normativo, garantizando la seguridad de cada operacion.
            </p>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className={`group p-6 rounded-2xl bg-secondary/50 hover:bg-card border border-border hover:border-ocean-blue/50 hover:shadow-xl hover:shadow-ocean-blue/10 transition-all duration-500 cursor-default ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div 
                className={`h-14 w-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg ${
                  index % 2 === 0 
                    ? "bg-gradient-to-br from-ocean-blue to-dark-teal shadow-ocean-blue/30" 
                    : "bg-gradient-to-br from-maroon to-crimson shadow-crimson/30"
                }`}
              >
                <value.icon className="h-7 w-7 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-ocean-blue transition-colors duration-300">
                {value.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
