import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MEG Consult Sdn Bhd | Data Centre Consulting Engineers",
  description:
    "Industry leading data centre consulting engineer. Malaysian consultant firm established in 2007, providing comprehensive multi-disciplinary engineering services.",
  keywords: ["data centre", "consulting engineer", "M&E engineering", "Malaysia", "MEG Consult"],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
