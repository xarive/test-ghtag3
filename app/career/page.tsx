import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageHero } from "@/components/shared/page-hero"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Briefcase, Users, BookOpen, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Career | MEG Consult Sdn Bhd",
  description: "Join our team of Professional Engineers. Explore career opportunities at MEG Consult.",
}

const benefits = [
  {
    icon: Briefcase,
    title: "Career Growth",
    description: "Clear career progression paths with opportunities to lead major projects and develop expertise.",
  },
  {
    icon: BookOpen,
    title: "Learning & Development",
    description: "Continuous training programs, certifications support, and exposure to global best practices.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work alongside experienced Professional Engineers in a supportive team environment.",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "Flexible arrangements and comprehensive benefits to support your wellbeing.",
  },
]

const openings = [
  {
    title: "Electrical Engineer ",
    department: "M&E",
    location: "Penang",
    type: "Full-time",
    experience: "Fresh Graduate",
    description:
      "Excellent opportunity for engineering graduates to kickstart their career in consulting engineering.",
  },
  {
    title: "Mechanical Engineer",
    department: "M&E",
    location: "Penang",
    type: "Full-time",
    experience: "Fresh Graduate",
    description: "Excellent opportunity for engineering graduates to kickstart their career in consulting engineering.",
  },
]

export default function CareerPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero title="JOIN OUR TEAM" subtitle="Build Your Career with Industry Leaders" />

        {/* Intro Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-light tracking-wide text-foreground mb-6">
                  WHY JOIN MEG CONSULT?
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We believe our people are our greatest asset. We offer a dynamic work environment
                    where talented engineers can grow their careers.
                  </p>
                  <p>
                    Join a team of experienced Professional Engineers who are leaders in their respective fields. Work
                    on prestigious projects for global clients.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?key=z3d2g" alt="MEG Consult Team" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-light tracking-wide text-foreground text-center mb-12">
              WHAT WE OFFER
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="bg-background p-8 rounded-lg shadow-sm text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-light tracking-wide text-foreground text-center mb-4">
              CURRENT OPENINGS
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Explore opportunities to join our growing team of engineering professionals.
            </p>

            <div className="space-y-6">
              {openings.map((job) => (
                <div
                  key={job.title}
                  className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-medium text-foreground mb-2">{job.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Briefcase className="w-4 h-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </span>
                        <Badge variant="secondary">{job.experience}</Badge>
                      </div>
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground shrink-0 bg-transparent"
                    >
                      <Link href={`/contact?job=${encodeURIComponent(job.title)}`}>Apply Now</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-[#1a3a5c]">
          <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-light tracking-wide text-primary-foreground mb-6">
              DON'T SEE A SUITABLE ROLE?
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed mb-8">
              We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in
              mind for future opportunities.
            </p>
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground px-8 py-6 text-sm tracking-widest"
            >
              <Link href="/contact">SEND YOUR RESUME</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
