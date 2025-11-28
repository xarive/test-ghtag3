import Link from "next/link"
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about#team" },
    { name: "Career", href: "/career" },
    { name: "News", href: "/news" },
  ],
  services: [
    { name: "Data Centre Development", href: "/services/data-centre" },
    { name: "M&E Engineering", href: "/services/me-engineering" },
    { name: "Projects", href: "/projects" },
  ],
  support: [
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#1a3a5c] text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg viewBox="0 0 120 40" className="h-10 w-auto" aria-hidden="true">
                <path
                  d="M10 8 L10 32 M10 8 L25 20 L10 20 M25 20 L40 8 L40 32"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  className="text-primary-foreground"
                />
                <path
                  d="M50 8 L50 32 M50 8 L70 8 M50 20 L65 20 M50 32 L70 32"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  className="text-primary-foreground"
                />
                <path
                  d="M80 20 A12 12 0 1 1 80 20.01"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  className="text-cyan-400"
                />
                <path
                  d="M92 20 L104 14 M92 20 L104 20"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  className="text-cyan-400"
                />
              </svg>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-6 leading-relaxed">
              Consulting Mechanical and Electrical Engineers
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-cyan-400 mt-0.5 shrink-0" />
                <span className="text-sm text-primary-foreground/70">
                  5-4-11, Hunza Complex, Jalan Gangsa, Greenlane 11600 Penang
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-cyan-400 shrink-0" />
                <span className="text-sm text-primary-foreground/70">+603-2276 6322</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-cyan-400 shrink-0" />
                <span className="text-sm text-primary-foreground/70">admin@ghtag.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm text-primary-foreground/60">
            &copy; {new Date().getFullYear()} GH TAG Sdn. Bhd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
