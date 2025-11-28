interface PageHeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
}

export function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative h-[300px] md:h-[400px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: backgroundImage ? `url('${backgroundImage}')` : `url('/professional-engineering-office-building.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative h-full flex items-center justify-center text-center">
        <div className="px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-background tracking-wide">{title}</h1>
          {subtitle && <p className="mt-4 text-lg text-background/80">{subtitle}</p>}
        </div>
      </div>
    </section>
  )
}
