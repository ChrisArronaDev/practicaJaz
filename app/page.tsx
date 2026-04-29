import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { About } from "@/components/landing/about"
import { Services } from "@/components/landing/services"
import { Process } from "@/components/landing/process"
import { Contact } from "@/components/landing/contact"
import { Footer } from "@/components/landing/footer"
import { WhatsAppButton } from "@/components/landing/whatsapp-button"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
