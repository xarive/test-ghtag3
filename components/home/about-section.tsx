import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide text-foreground mb-8">
          CONSULTING MECHANICAL AND ELECTRICAL ENGINEERS
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-10">
          Established 2020, sophiscated design to your building needs.
        </p>
        <Button
          asChild
          variant="outline"
          className="border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-6 text-sm tracking-widest bg-transparent"
        >
          <Link href="/about">READ MORE</Link>
        </Button>
      </div>
    </section>
  )
}
