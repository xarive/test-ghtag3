import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/home/hero-section"
import { AboutSection } from "@/components/home/about-section"
import { ServicesSection } from "@/components/home/services-section"
import { StatsSection } from "@/components/home/stats-section"
import { WhyMalaysiaSection } from "@/components/home/why-malaysia-section"
import { GlobalReachSection } from "@/components/home/global-reach-section"
import { ContactFormSection } from "@/components/home/contact-form-section"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <StatsSection />
        <WhyMalaysiaSection />
        <GlobalReachSection />
        <ContactFormSection />
      </main>
      <Footer />
    </>
  )
}
