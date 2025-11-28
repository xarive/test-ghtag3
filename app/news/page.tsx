import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageHero } from "@/components/shared/page-hero"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "News | GH TAG Sdn Bhd",
  description:
    "Latest news, updates, and insights for engineering industry developments.",
}

const news = [
  {
    title: "GH TAG Sdn. Bhd. establishment",
    excerpt:
      "Established 2020 for business expansion and restructure plan",
    category: "All",
    image: "/placeholder.svg?key=nkkxr",
    slug: "",
  },
]

const categories = ["All", "Project News", "Company News", "Industry Insights", "Technical"]

export default function NewsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero title="NEWS & INSIGHTS" subtitle="Latest Updates from MEG Consult" />

        {/* Featured Article */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image src={news[0].image || "/placeholder.svg"} alt={news[0].title} fill className="object-cover" />
              </div>
              <div>
                <Badge variant="secondary" className="mb-4">
                  {news[0].category}
                </Badge>
                <h2 className="text-2xl md:text-3xl font-light tracking-wide text-foreground mb-4">{news[0].title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{news[0].excerpt}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                  <Calendar className="w-4 h-4" />
                  {news[0].date}
                </div>
                <Link
                  href={`/news/${news[0].slug}`}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-wrap gap-4 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className="px-4 py-2 text-sm rounded-full border border-border bg-background hover:border-primary hover:text-primary transition-colors"
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.slice(1).map((article) => (
                <article
                  key={article.slug}
                  className="bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-3">
                      {article.category}
                    </Badge>
                    <h3 className="text-lg font-medium text-foreground mb-2 line-clamp-2">{article.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </span>
                      <Link
                        href={`/news/${article.slug}`}
                        className="text-primary hover:text-primary/80 text-sm font-medium"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-2xl px-4 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-light tracking-wide text-foreground mb-4">STAY UPDATED</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest news, project updates, and industry insights.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm tracking-widest"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
