import { Shield, Building2, Copyright, Landmark, Lock, ShieldCheck, Wifi, Globe, Leaf } from "lucide-react"

const benefits = [
  { icon: Shield, label: "Information Freedom" },
  { icon: Building2, label: "Business Sophistication" },
  { icon: Copyright, label: "Copyright Protection" },
  { icon: Landmark, label: "Government Regulatory" },
  { icon: Lock, label: "Privacy" },
  { icon: ShieldCheck, label: "Cybersecurity" },
  { icon: Wifi, label: "Broadband Quality" },
  { icon: Globe, label: "International Connectivity" },
  { icon: Leaf, label: "Sustainability" },
]

export function WhyMalaysiaSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide text-foreground text-center mb-8">
          WHY CHOOSE MALAYSIA FOR YOUR DATA CENTRE?
        </h2>

        <p className="max-w-4xl mx-auto text-center text-muted-foreground leading-relaxed mb-16">
          We serve many global data centre owners and operators from the US, Europe, Australia, China, Hong Kong,
          Singapore and Malaysia. We also serve many public-listed and private property developers in Malaysia. Our
          clients include many successful developers like SP Setia, Sunrise, UEM Land, MRCB, Loh & Loh, Tan Chong, UOA
          Development, Skyworld, Titijaya Land, Dergahayu, MK Land, See Hoy Chan, Perdana Parkcity and Bukit Kiara
          Property.
        </p>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6 lg:gap-4">
          {benefits.map((benefit) => (
            <div key={benefit.label} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              </div>
              <span className="text-xs md:text-sm text-foreground font-medium">{benefit.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
