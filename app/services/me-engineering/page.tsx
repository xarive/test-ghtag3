import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageHero } from "@/components/shared/page-hero"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Thermometer, Zap, Flame, Droplets, Cpu, Leaf } from "lucide-react"

export const metadata: Metadata = {
  title: "M&E Engineering | MEG Consult Sdn Bhd",
  description:
    "Expert mechanical and electrical engineering solutions for commercial, industrial, and residential developments.",
}

const services = [
  {
    icon: Thermometer,
    title: "HVAC System Design",
    description:
      "Complete heating, ventilation, and air conditioning system design optimized for energy efficiency and occupant comfort in Malaysia's tropical climate.",
  },
  {
    icon: Zap,
    title: "Electrical Distribution",
    description:
      "Comprehensive electrical system design including power distribution, lighting, emergency systems, and lightning protection.",
  },
  {
    icon: Flame,
    title: "Fire Protection Engineering",
    description:
      "Design of fire detection, alarm, and suppression systems compliant with Malaysian fire codes and international standards.",
  },
  {
    icon: Droplets,
    title: "Plumbing & Sanitary",
    description:
      "Water supply, drainage, and sanitary system design with focus on water conservation and sustainable practices.",
  },
  {
    icon: Cpu,
    title: "Building Automation",
    description:
      "Integrated building management systems for optimal control, monitoring, and energy management of all building services.",
  },
  {
    icon: Leaf,
    title: "Green Building Consultancy",
    description:
      "Sustainable design solutions targeting GBI, LEED, or other green building certifications for environmentally responsible developments.",
  },
]

const sectors = [
  {
    title: "Commercial",
    projects: ["Office Buildings", "Shopping Malls", "Hotels & Resorts", "Mixed Developments"],
    image: "/placeholder.svg?key=q5jv9",
  },
  {
    title: "Industrial",
    projects: ["Manufacturing Facilities", "Warehouses", "Logistics Centers", "Clean Rooms"],
    image: "/placeholder.svg?key=d4qgy",
  },
  {
    title: "Residential",
    projects: ["High-Rise Condominiums", "Township Developments", "Serviced Apartments", "Landed Properties"],
    image: "/placeholder.svg?key=gbnpe",
  },
]

export default function MEEngineeringPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="M&E ENGINEERING"
          subtitle="Expert Mechanical & Electrical Solutions"
          backgroundImage="/placeholder.svg?key=gljy9"
        />

        {/* Introduction */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?key=w6rza" alt="M&E Engineering" fill className="object-cover" />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl md:text-3xl font-light tracking-wide text-foreground mb-6">
                  COMPREHENSIVE M&E SOLUTIONS
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Our mechanical and electrical engineering team provides expert solutions for commercial, industrial,
                    and residential developments. We serve many public-listed and private property developers in
                    Malaysia, including SP Setia, Sunrise, UEM Land, MRCB, and many more successful developers.
                  </p>
                  <p>
                    With a focus on energy efficiency, sustainability, and innovative design, we deliver building
                    services that enhance occupant comfort while minimizing environmental impact and operating costs.
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    "Energy Efficient Design",
                    "Green Building Certified",
                    "Cost Optimization",
                    "Quality Assurance",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-light tracking-wide text-foreground text-center mb-12">
              OUR M&E SERVICES
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

        {/* Sectors */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-light tracking-wide text-foreground text-center mb-4">
              SECTORS WE SERVE
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Our experience spans across various sectors, delivering tailored M&E solutions for diverse project types.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {sectors.map((sector) => (
                <div key={sector.title} className="group">
                  <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                    <Image
                      src={sector.image || "/placeholder.svg"}
                      alt={sector.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/50 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-2xl font-light text-background tracking-wide">{sector.title}</h3>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {sector.projects.map((project) => (
                      <li key={project} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {project}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-[#1a3a5c]">
          <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-light tracking-wide text-primary-foreground mb-6">
              START YOUR PROJECT WITH US
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed mb-8">
              Let our experienced M&E engineers help you create efficient, sustainable, and cost-effective building
              services for your next project.
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
