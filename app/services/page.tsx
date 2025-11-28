import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageHero } from "@/components/shared/page-hero"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Services | MEG Consult Sdn Bhd",
  description:
    "Comprehensive engineering consulting services including Data Centre Development and M&E Engineering solutions.",
}

const services = [
  {
    title: "Data Centre Development & Construction Engineering Consulting Services",
    description:
      "We provide comprehensive data centre engineering consulting services from feasibility studies to commissioning, covering all aspects of data centre infrastructure including power, cooling, fire protection, and security systems.",
    image: "/placeholder.svg?key=1s87e",
    href: "/services/data-centre",
    features: [
      "Feasibility Studies & Site Selection",
      "Concept Design & Master Planning",
      "Detailed Engineering Design",
      "Construction Supervision",
      "Testing & Commissioning",
      "Operations & Maintenance Advisory",
    ],
  },
  {
    title: "M&E Engineering Expertise & Solutions",
    description:
      "Our mechanical and electrical engineering team provides expert solutions for commercial, industrial, and residential developments, ensuring energy-efficient and sustainable building systems.",
    image: "/placeholder.svg?key=20fao",
    href: "/services/me-engineering",
    features: [
      "HVAC System Design",
      "Electrical Distribution Systems",
      "Fire Protection Engineering",
      "Plumbing & Sanitary Systems",
      "Building Automation Systems",
      "Green Building Consultancy",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero title="OUR SERVICES" subtitle="Tailor Made Solutions for Your Business" />

        {/* Services Overview */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl md:text-3xl font-light tracking-wide text-foreground mb-6">
                COMPREHENSIVE ENGINEERING SOLUTIONS
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                With diverse expertise among our principals, we provide comprehensive multi-disciplinary services
                tailored to meet your specific project requirements. Our team of experienced Professional Engineers
                ensures the highest quality delivery for every project.
              </p>
            </div>

            <div className="space-y-20">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <h3 className="text-xl md:text-2xl font-light tracking-wide text-foreground mb-4 uppercase">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                    <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      variant="outline"
                      className="border-foreground text-foreground hover:bg-foreground hover:text-background px-6 py-5 text-sm tracking-widest bg-transparent"
                    >
                      <Link href={service.href}>
                        LEARN MORE
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div
                    className={`relative h-[350px] md:h-[450px] rounded-lg overflow-hidden ${index % 2 === 1 ? "lg:order-1" : ""}`}
                  >
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-[#1a3a5c]">
          <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-light tracking-wide text-primary-foreground mb-6">
              READY TO START YOUR PROJECT?
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed mb-8">
              Contact our team of experienced engineers to discuss your project requirements and discover how we can
              help bring your vision to life.
            </p>
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground px-8 py-6 text-sm tracking-widest"
            >
              <Link href="/contact">GET IN TOUCH</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
