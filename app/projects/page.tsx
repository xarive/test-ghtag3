import type { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageHero } from "@/components/shared/page-hero"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Projects | MEG Consult Sdn Bhd",
  description: "Explore our portfolio of data centre and M&E engineering projects across Malaysia and the region.",
}

const projects = [
  {
    title: "Cyberjaya Data Centre Campus",
    category: "data-centre",
    location: "Cyberjaya, Selangor",
    client: "Global Tech Corporation",
    capacity: "50MW",
    tier: "Tier III",
    year: "2023",
    image: "/placeholder.svg?key=4k2a4",
    description: "A state-of-the-art hyperscale data centre campus designed for maximum efficiency and sustainability.",
  },
  {
    title: "Johor Colocation Facility",
    category: "data-centre",
    location: "Iskandar Puteri, Johor",
    client: "Asia Pacific Data Services",
    capacity: "30MW",
    tier: "Tier III",
    year: "2023",
    image: "/placeholder.svg?key=crnb4",
    description: "Multi-tenant colocation facility serving regional cloud providers and enterprise clients.",
  },
  {
    title: "KL Financial District Tower",
    category: "commercial",
    location: "Kuala Lumpur",
    client: "UEM Land",
    size: "500,000 sqft",
    certification: "GBI Gold",
    year: "2022",
    image: "/placeholder.svg?key=sde2p",
    description: "Grade A office tower with advanced M&E systems and green building features.",
  },
  {
    title: "Penang Tech Park Data Centre",
    category: "data-centre",
    location: "Bayan Lepas, Penang",
    client: "Singapore Cloud Provider",
    capacity: "20MW",
    tier: "Tier IV",
    year: "2022",
    image: "/placeholder.svg?key=uuyis",
    description: "Fault-tolerant data centre supporting semiconductor and electronics manufacturing sector.",
  },
  {
    title: "Setia Alam Township",
    category: "residential",
    location: "Shah Alam, Selangor",
    client: "SP Setia",
    units: "2,500 units",
    certification: "GBI Certified",
    year: "2021",
    image: "/placeholder.svg?key=p3a0u",
    description: "Comprehensive M&E design for mixed residential township development.",
  },
  {
    title: "Sunway Medical Centre",
    category: "commercial",
    location: "Sunway City, Selangor",
    client: "Sunway Healthcare",
    size: "300,000 sqft",
    certification: "LEED Silver",
    year: "2021",
    image: "/placeholder.svg?key=0scne",
    description: "Healthcare facility with specialized M&E systems for medical operations.",
  },
  {
    title: "KLCC Edge Data Centre",
    category: "data-centre",
    location: "Kuala Lumpur",
    client: "Telecommunications Giant",
    capacity: "10MW",
    tier: "Tier III",
    year: "2020",
    image: "/placeholder.svg?key=vk5q9",
    description: "Urban edge data centre providing low-latency connectivity for financial services.",
  },
  {
    title: "Pavilion Bukit Jalil",
    category: "commercial",
    location: "Bukit Jalil, Kuala Lumpur",
    client: "Pavilion REIT",
    size: "1.8 million sqft",
    certification: "GBI Gold",
    year: "2020",
    image: "/placeholder.svg?key=xspvt",
    description: "Mega retail mall with integrated district cooling and energy management systems.",
  },
  {
    title: "Kuching Data Hub",
    category: "data-centre",
    location: "Kuching, Sarawak",
    client: "East Malaysia Data Corp",
    capacity: "15MW",
    tier: "Tier III",
    year: "2019",
    image: "/placeholder.svg?key=x4p2g",
    description: "Regional data centre serving East Malaysia's digital economy growth.",
  },
]

const categories = [
  { id: "all", label: "All Projects" },
  { id: "data-centre", label: "Data Centre" },
  { id: "commercial", label: "Commercial" },
  { id: "residential", label: "Residential" },
]

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero title="OUR PROJECTS" subtitle="100+ Successful Projects Delivered" />

        {/* Stats */}
        <section className="py-12 bg-[#1a3a5c]">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "100+", label: "Projects Completed" },
                { value: "50+", label: "Global Clients" },
                { value: "500MW+", label: "Data Centre Capacity" },
                { value: "17+", label: "Years Experience" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-light text-primary-foreground">{stat.value}</div>
                  <p className="mt-2 text-sm text-primary-foreground/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="w-full justify-start mb-12 bg-transparent border-b border-border rounded-none h-auto p-0 gap-8">
                {categories.map((cat) => (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 pb-4 text-sm tracking-wide"
                  >
                    {cat.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="all">
                <ProjectGrid projects={projects} />
              </TabsContent>
              <TabsContent value="data-centre">
                <ProjectGrid projects={projects.filter((p) => p.category === "data-centre")} />
              </TabsContent>
              <TabsContent value="commercial">
                <ProjectGrid projects={projects.filter((p) => p.category === "commercial")} />
              </TabsContent>
              <TabsContent value="residential">
                <ProjectGrid projects={projects.filter((p) => p.category === "residential")} />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-light tracking-wide text-foreground text-center mb-4">
              TRUSTED BY INDUSTRY LEADERS
            </h2>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              We serve many global data centre owners and operators as well as leading property developers in Malaysia,
              including SP Setia, Sunrise, UEM Land, MRCB, Loh & Loh, Tan Chong, UOA Development, Skyworld, Titijaya
              Land, and many more.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                <div key={i} className="w-24 h-12 bg-foreground/10 rounded flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">Client {i}</span>
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

function ProjectGrid({ projects }: { projects: typeof projects }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div
          key={project.title}
          className="group bg-background border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="relative h-56 overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4">
              <Badge variant="secondary" className="bg-background/90 text-foreground">
                {project.category === "data-centre"
                  ? "Data Centre"
                  : project.category === "commercial"
                    ? "Commercial"
                    : "Residential"}
              </Badge>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-medium text-foreground mb-2">{project.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Location:</span>
                <span className="text-foreground">{project.location}</span>
              </div>
              {project.capacity && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Capacity:</span>
                  <span className="text-foreground">{project.capacity}</span>
                </div>
              )}
              {project.tier && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tier:</span>
                  <span className="text-foreground">{project.tier}</span>
                </div>
              )}
              {project.size && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Size:</span>
                  <span className="text-foreground">{project.size}</span>
                </div>
              )}
              {project.certification && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Certification:</span>
                  <span className="text-foreground">{project.certification}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-muted-foreground">Year:</span>
                <span className="text-foreground">{project.year}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
