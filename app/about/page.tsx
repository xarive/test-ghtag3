import type { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageHero } from "@/components/shared/page-hero"
import { Award, Users, Target, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | GH TAG Sdn Bhd",
  description:
    "Incorporated and established in 2020 as a result of business expansion and restructure plan from GH TAG Consultancy formed in 2010",
}

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to delivering the highest quality engineering solutions that exceed client expectations.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description:
      "Fostering collaboration among diverse expertise to provide comprehensive multi-disciplinary services.",
  },
  {
    icon: Target,
    title: "Innovation",
    description:
      "Staying updated with global engineering and technology advancements to lead in our respective fields.",
  },
]

const certifications = [
  "Registered with Lembaga Jurutera Malaysia (BEM)",
]

const team = [
  {
    name: "Ir. Teh Khian Beng",
    position: "Director",
    image: "/professional-malaysian-male-engineer-portrait.jpg",
    qualifications: "PEPC, MIEM",
  },
  {
    name: "Ir. Tai Lian Pong",
    position: "Director",
    image: "/professional-asian-male-engineer-portrait.jpg",
    qualifications: "PEPC, MIEM",
  },
  {
    name: "Lim See Kong",
    position: "Director",
    image: "/professional-malaysian-female-engineer-portrait.jpg",
    qualifications: "",
  },
  {
    name: "Lee You Wan",
    position: "Associate",
    image: "/professional-asian-male-senior-engineer-portrait.jpg",
    qualifications: "",
  },  
  {
    name: "Foong Chia Sing",
    position: "Associate",
    image: "/professional-asian-male-senior-engineer-portrait.jpg",
    qualifications: "",
  },
  {
    name: "Ir Lim Yean Tit",
    position: "Associate",
    image: "/professional-asian-male-senior-engineer-portrait.jpg",
    qualifications: "PEPC, MIEM",
  },
  {
    name: "Ir Loh Wei Kiat",
    position: "Associate",
    image: "/professional-asian-male-senior-engineer-portrait.jpg",
    qualifications: "PE,MIEM",
  },
  {
    name: "Ng Kai He",
    position: "Engineer",
    image: "/professional-asian-male-senior-engineer-portrait.jpg",
    qualifications: "",
  },
  {
    name: "Sim Xuan Wei",
    position: "Engineer",
    image: "/professional-asian-male-senior-engineer-portrait.jpg",
    qualifications: "",
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero title="ABOUT US" subtitle="Consulting Mechanical and Electrical Engineers" />

        {/* Company Overview */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-light tracking-wide text-foreground mb-6">OUR STORY</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Incorporated and established in 2020 as a result of business expansion 
                    and restructure plan from GH TAG Consultancy, 
                    which was operated as sole proprietorship formed in 2010.
                  </p>
                  <p>
                    Consulting services includes feasibility studies, project management, master planning, infrastructure development and planning, 
                    existing installation due diligence, liaison with local authorities, conceptual development, preliminary design, detailed design, 
                    value engineering, quantity take-off and cost estimation, tender documentation and evaluation, construction supervision, 
                    contract administration and commissioning of plant and equipment.
                  </p>
                  <p>
                    Specialised skills and vast experience in the following development throughout these years of engineering practices:
                    Mechanical & Electrical Infrastructure | Mechanical & Electrical Facilities | Landed Residential Development | High Rise Residential Buildings | Commercial & Offices Buildings | Hypermarkets & Commercial Complexes | Industrial & Factory Buildings | Club House & Theme Parks | Resort & Hotel Development | Hospitals and Clinics | Stadiums & Sports Complexes | Interior Renovation & Retrofit | Network & ICT Infrastructures | Smart Home, Security & Extra Low Voltages Services
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image src="/modern-engineering-office-with-team-collaboration.jpg" alt="MEG Consult Office" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-light tracking-wide text-foreground text-center mb-12">
              OUR VALUES
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value) => (
                <div key={value.title} className="bg-background p-8 rounded-lg shadow-sm">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden">
                <Image src="/engineering-certifications-and-awards-display.jpg" alt="Certifications" fill className="object-cover" />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl md:text-3xl font-light tracking-wide text-foreground mb-6">
                  CERTIFICATIONS & AFFILIATIONS
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Our commitment to excellence is validated by our professional certifications and industry
                  affiliations, ensuring we deliver services that meet the highest international standards.
                </p>
                <ul className="space-y-4">
                  {certifications.map((cert) => (
                    <li key={cert} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-light tracking-wide text-foreground text-center mb-4">
              OUR LEADERSHIP TEAM
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Led by experienced Professional Engineers with diverse expertise and a shared commitment to excellence.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <div key={member.name} className="bg-background rounded-lg overflow-hidden shadow-sm group">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-medium text-foreground">{member.name}</h3>
                    <p className="text-primary text-sm mt-1">{member.position}</p>
                    <p className="text-muted-foreground text-xs mt-2">{member.qualifications}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-light tracking-wide text-foreground text-center mb-12">
              OUR JOURNEY
            </h2>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />

              {[
                { year: "2010", event: "GH TAG Consultancy established" },
                { year: "2020", event: "GH TAG Sdn. Bhd. incorporated" },
              ]
                {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center mb-8 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                    <div className="bg-muted p-4 rounded-lg">
                      <span className="text-primary font-semibold">{milestone.year}</span>
                      <p className="text-foreground mt-1">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
