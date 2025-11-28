import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Data Centre Development & Construction Engineering Consulting Services",
    image: "/modern-data-center-server-room-with-blue-lighting-.jpg",
    href: "/services/data-centre",
  },
  {
    title: "M&E Engineering Expertise & Solutions",
    image: "/engineers-with-hard-hats-working-on-industrial-equ.jpg",
    href: "/services/me-engineering",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide text-foreground text-center mb-12">
          TAILOR MADE SOLUTIONS FOR YOUR BUSINESS
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.title} className="group">
              <div className="relative h-64 md:h-80 overflow-hidden mb-6">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-medium tracking-wide text-foreground mb-4 uppercase">{service.title}</h3>
              <Button
                asChild
                variant="outline"
                className="border-foreground text-foreground hover:bg-foreground hover:text-background px-6 py-5 text-sm tracking-widest bg-transparent"
              >
                <Link href={service.href}>VIEW MORE</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
