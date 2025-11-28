"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const navigation = [
  { name: "HOME", href: "/" },
  {
    name: "ABOUT US",
    href: "/about",
    children: [
      { name: "Our Story", href: "/about" },
      { name: "Our Team", href: "/about#team" },
      { name: "Certifications", href: "/about#certifications" },
    ],
  },
  {
    name: "SERVICES",
    href: "/services",
    children: [
      { name: "Data Centre Development", href: "/services/data-centre" },
      { name: "M&E Engineering", href: "/services/me-engineering" },
    ],
  },
  { name: "PROJECTS", href: "/projects" },
  { name: "CAREER", href: "/career" },
  { name: "NEWS", href: "/news" },
  { name: "CONTACT US", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-background sticky top-0 z-50 border-b border-border/50 shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">MEG Consult</span>
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 120 40" className="h-10 w-auto" aria-hidden="true">
                <path
                  d="M10 8 L10 32 M10 8 L25 20 L10 20 M25 20 L40 8 L40 32"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  className="text-primary"
                />
                <path
                  d="M50 8 L50 32 M50 8 L70 8 M50 20 L65 20 M50 32 L70 32"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  className="text-primary"
                />
                <path
                  d="M80 20 A12 12 0 1 1 80 20.01"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  className="text-accent"
                />
                <path
                  d="M92 20 L104 14 M92 20 L104 20"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  className="text-accent"
                />
              </svg>
              <span className="text-xs text-muted-foreground tracking-tight hidden sm:block">CONSULT SDN. BHD.</span>
            </div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) =>
            item.children ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium tracking-wide text-foreground hover:text-primary transition-colors">
                  {item.name}
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {item.children.map((child) => (
                    <DropdownMenuItem key={child.name} asChild>
                      <Link href={child.href}>{child.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium tracking-wide text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ),
          )}
        </div>

        {/* Search icon */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 bg-foreground/20" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">MEG Consult</span>
                <div className="text-xl font-bold text-primary">MEG</div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-foreground hover:bg-muted"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.children && (
                        <div className="ml-4 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="-mx-3 block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
