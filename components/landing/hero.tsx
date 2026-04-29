"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, TrendingUp, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: TrendingUp,
    title: "Tasas Competitivas",
    description: "Las mejores del mercado",
  },
  {
    icon: Shield,
    title: "100% Confiable",
    description: "Regulados por CONDUSEF",
  },
  {
    icon: Clock,
    title: "Respuesta Rapida",
    description: "En 24-48 horas",
  },
]

export function Hero() {
  const graphRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bars = graphRef.current?.querySelectorAll(".graph-bar")
    bars?.forEach((bar, index) => {
      const el = bar as HTMLElement
      el.style.transitionDelay = `${800 + index * 100}ms`
      el.classList.add("animate-grow")
    })
  }, [])

  return (
    <section id="hero" className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ocean-blue/10 via-background to-maroon/10" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-ocean-blue/20 to-transparent rounded-bl-[100px] animate-pulse" style={{ animationDuration: "4s" }} />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-crimson/20 to-transparent rounded-tr-[100px] animate-pulse" style={{ animationDuration: "5s", animationDelay: "1s" }} />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-ocean-blue/30 animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          />
        ))}
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left column - Content */}
          <div className="space-y-8">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ocean-blue/20 text-ocean-blue text-sm font-medium border border-ocean-blue/30 animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <Shield className="h-4 w-4 animate-pulse" />
              <span>SOFOM Regulada por CONDUSEF</span>
            </div>
            
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              <span className="text-foreground">Impulsa tu </span>
              <span className="bg-gradient-to-r from-ocean-blue via-dark-teal to-crimson bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Crecimiento Financiero
              </span>
            </h1>
            
            <p 
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl text-pretty animate-fade-in-up"
              style={{ animationDelay: "600ms" }}
            >
              Somos tu socio financiero de confianza. Ofrecemos soluciones de credito 
              personalizadas para empresas y personas en Leon, Guanajuato y toda la Republica Mexicana.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
              style={{ animationDelay: "800ms" }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-ocean-blue to-dark-teal hover:from-dark-teal hover:to-ocean-blue text-white px-8 gap-2 shadow-lg shadow-ocean-blue/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-ocean-blue/40 group"
              >
                Agendar una Cita
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-crimson/50 text-crimson hover:bg-crimson hover:text-white px-8 transition-all duration-300 hover:scale-105 hover:border-crimson"
              >
                Conocer Servicios
              </Button>
            </div>
            
            {/* Stats */}
            <div 
              className="grid grid-cols-3 gap-6 pt-8 border-t border-border animate-fade-in-up"
              style={{ animationDelay: "1000ms" }}
            >
              {[
                { value: "500+", label: "Clientes Satisfechos", color: "text-ocean-blue" },
                { value: "$50M", label: "Creditos Otorgados", color: "text-crimson" },
                { value: "10+", label: "Anos de Experiencia", color: "text-dark-teal" },
              ].map((stat, index) => (
                <div key={stat.label} className="group cursor-default">
                  <p className={`text-3xl sm:text-4xl font-bold ${stat.color} transition-transform duration-300 group-hover:scale-110`}>
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right column - Visual */}
          <div 
            className="relative hidden lg:block animate-fade-in-up"
            style={{ animationDelay: "500ms" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-ocean-blue/30 to-crimson/30 rounded-3xl blur-3xl animate-pulse" style={{ animationDuration: "3s" }} />
            <div className="relative bg-card rounded-3xl shadow-2xl shadow-black/40 p-8 border border-border hover:border-ocean-blue/50 transition-all duration-500 hover:shadow-ocean-blue/20">
              {/* Feature cards */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div 
                    key={feature.title}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/50 hover:bg-ocean-blue/10 transition-all duration-500 cursor-pointer group hover:translate-x-2"
                    style={{ animationDelay: `${700 + index * 200}ms` }}
                  >
                    <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-ocean-blue to-dark-teal flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{feature.title}</p>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Graph illustration */}
              <div ref={graphRef} className="mt-6 p-4 rounded-2xl bg-gradient-to-br from-ocean-blue/10 to-crimson/10 border border-border/50">
                <div className="flex items-end justify-between h-32 gap-2">
                  {[40, 60, 45, 80, 65, 95, 75].map((height, index) => (
                    <div 
                      key={index}
                      className="graph-bar flex-1 rounded-t-lg bg-gradient-to-t from-ocean-blue to-dark-teal transition-all duration-700 ease-out hover:from-crimson hover:to-vibrant-red cursor-pointer"
                      style={{ 
                        height: "0%",
                        ["--target-height" as string]: `${height}%`,
                      }}
                    />
                  ))}
                </div>
                <p className="text-center text-sm text-muted-foreground mt-3">
                  Crecimiento de cartera crediticia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-gradient { animation: gradient 4s ease infinite; }
        .animate-fade-in-up { 
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-grow {
          height: var(--target-height) !important;
        }
      `}</style>
    </section>
  )
}
