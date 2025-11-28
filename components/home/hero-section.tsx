import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/data-center-server-room-with-colorful-led-lights-p.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-background tracking-wide leading-tight text-balance">
              INDUSTRY LEADING DATA
              <br />
              CENTRE CONSULTING ENGINEER
            </h1>
            <div className="mt-8">
              <Button
                asChild
                variant="outline"
                className="bg-transparent border-background text-background hover:bg-background hover:text-foreground px-8 py-6 text-sm tracking-widest"
              >
                <Link href="/about">LEARN MORE</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
