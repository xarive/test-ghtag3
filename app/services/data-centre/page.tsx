import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageHero } from "@/components/shared/page-hero"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Server, Zap, Wind, Shield, Settings, ClipboardCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Data Centre Development | MEG Consult Sdn Bhd",
  description:
    "Industry leading data centre consulting engineer providing comprehensive services from feasibility studies to commissioning.",
}

const services = [
  {
    icon: ClipboardCheck,
    title: "Feasibility Studies & Site Selection",
    description:
      "Comprehensive site assessment and feasibility analysis to identify the optimal location for your data centre, considering power availability, connectivity, and environmental factors.",
  },
  {
    icon: Settings,
    title: "Concept Design & Master Planning",
    description:
      "Strategic master planning and concept design that aligns with your business objectives, ensuring scalability and future growth requirements.",
  },
  {
    icon: Server,
    title: "Detailed Engineering Design",
    description:
      "Complete detailed engineering design for all critical infrastructure systems including electrical, mechanical, fire protection, and security systems.",
  },
  {
    icon: Zap,
    title: "Power Infrastructure",
    description:
      "Design of robust power distribution systems including HV/LV systems, UPS, generators, and redundancy configurations to ensure maximum uptime.",
  },
  {
    icon: Wind,
    title: "Cooling Systems",
    description:
      "Innovative cooling solutions including precision air conditioning, chilled water systems, and free cooling options optimized for Malaysia's tropical climate.",
  },
  {
    icon: Shield,
    title: "Testing & Commissioning",
    description:
      "Rigorous testing and commissioning protocols to ensure all systems perform as designed, including integrated systems testing and documentation.",
  },
]

const tiers = [
  { tier: "Tier I", uptime: "99.671%", description: "Basic site infrastructure" },
  { tier: "Tier II", uptime: "99.741%", description: "Redundant capacity components" },
  { tier: "Tier III", uptime: "99.982%", description: "Concurrently maintainable" },
  { tier: "Tier IV", uptime: "99.995%", description: "Fault tolerant" },
]

export default function DataCentrePage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="DATA CENTRE DEVELOPMENT"
          subtitle="Industry Leading Data Centre Consulting Engineer"
          backgroundImage="/placeholder.svg?key=f8fqq"
        />

        {/* Introduction */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-light tracking-wide text-foreground mb-6">
                  COMPREHENSIVE DATA CENTRE SOLUTIONS
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    As industry-leading data centre consulting engineers, we provide end-to-end engineering solutions
                    for data centre development and construction. Our experienced team has delivered projects for global
                    data centre owners and operators from the US, Europe, Australia, China, Hong Kong, Singapore, and
                    Malaysia.
                  </p>
                  <p>
                    We specialize in all aspects of data centre infrastructure design, from initial feasibility studies
                    to final commissioning, ensuring your facility meets the highest standards of reliability,
                    efficiency, and scalability.
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    "100+ Data Centre Projects",
                    "Global Client Base",
                    "All Tier Classifications",
                    "Green Building Expertise",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?key=2qsz5" alt="Data Centre Interior" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-light tracking-wide text-foreground text-center mb-12">
              OUR DATA CENTRE SERVICES
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.title} className="bg-background p-8 rounded-lg shadow-sm">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tier Classification */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-light tracking-wide text-foreground text-center mb-4">
              DATA CENTRE TIER CLASSIFICATION
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              We design data centres across all tier classifications based on your specific requirements and business
              needs.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {tiers.map((tier) => (
                <div
                  key={tier.tier}
                  className="border border-border rounded-lg p-6 text-center hover:border-primary transition-colors"
                >
                  <h3 className="text-xl font-semibold text-primary mb-2">{tier.tier}</h3>
                  <p className="text-3xl font-light text-foreground mb-2">{tier.uptime}</p>
                  <p className="text-sm text-muted-foreground">Uptime</p>
                  <p className="text-sm text-foreground mt-4">{tier.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-[#1a3a5c]">
          <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-light tracking-wide text-primary-foreground mb-6">
              PLAN YOUR DATA CENTRE PROJECT
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed mb-8">
              Whether you're building a new data centre or upgrading existing infrastructure, our team is ready to help
              you achieve your goals.
            </p>
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground px-8 py-6 text-sm tracking-widest"
            >
              <Link href="/contact">CONTACT US</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
