import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide text-foreground mb-8">
          THE PREFERRED CONSULTING ENGINEER GROUP WITH MEG
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-10">
          We are a Malaysian consultant firm established in 2007, managed by experienced Professional Engineers. The
          company is registered with Lembaga Jurutera Malaysia and the Association of Consulting Engineers Malaysia. The
          firm emphasizes being leaders in their respective fields through teamwork and staying updated with global
          engineering and technology advancements. With diverse expertise among the principals, we provide comprehensive
          multi-disciplinary services.
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
