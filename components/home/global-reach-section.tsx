import Image from "next/image"

export function GlobalReachSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide text-foreground text-center mb-12">
          MEG CONSULT SERVING GLOBAL DATA CENTRE CLIENTS IN VARIOUS CITIES IN MALAYSIA
        </h2>

        <div className="relative w-full aspect-[2/1] max-w-5xl mx-auto">
          <Image
            src="/world-map-with-connection-lines-showing-malaysia-h.jpg"
            alt="Global reach map showing MEG Consult's international presence"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}
