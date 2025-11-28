"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageHero } from "@/components/shared/page-hero"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content:
      "Suite 10-3, Level 10, Menara Sentral Vista, 150 Jalan Sultan Abdul Samad, Brickfields, 50470 Kuala Lumpur, Malaysia",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+603-2276 6322",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@meg.com.my",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Monday - Friday: 9:00 AM - 6:00 PM",
  },
]

const inquiryTypes = [
  "General Inquiry",
  "Data Centre Project",
  "M&E Engineering Project",
  "Career Opportunity",
  "Partnership",
  "Other",
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiryType: "",
    subject: "",
    message: "",
    captcha: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <>
      <Header />
      <main>
        <PageHero title="CONTACT US" subtitle="Get in Touch with Our Team" />

        {/* Contact Info Cards */}
        <section className="py-16 bg-muted">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="bg-background p-6 rounded-lg shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-2">{info.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{info.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <h2 className="text-2xl md:text-3xl font-light tracking-wide text-foreground mb-6">
                  SEND US A MESSAGE
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>

                {submitted ? (
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-medium text-foreground mb-2">Thank You!</h3>
                    <p className="text-muted-foreground">
                      Your message has been received. We'll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-sm text-muted-foreground">
                          Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="mt-1"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="company" className="text-sm text-muted-foreground">
                          Company
                        </Label>
                        <Input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email" className="text-sm text-muted-foreground">
                          Email Address <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="mt-1"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-sm text-muted-foreground">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="inquiryType" className="text-sm text-muted-foreground">
                        Inquiry Type <span className="text-destructive">*</span>
                      </Label>
                      <Select
                        value={formData.inquiryType}
                        onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-sm text-muted-foreground">
                        Subject <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="mt-1"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm text-muted-foreground">
                        Message <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="mt-1 min-h-32"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="captcha" className="text-sm text-muted-foreground">
                        11 + 3 = <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="captcha"
                        type="text"
                        value={formData.captcha}
                        onChange={(e) => setFormData({ ...formData, captcha: e.target.value })}
                        className="mt-1 w-32"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-sm tracking-widest"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "SENDING..." : "SUBMIT"}
                    </Button>
                  </form>
                )}
              </div>

              {/* Map & Social */}
              <div>
                <h2 className="text-2xl md:text-3xl font-light tracking-wide text-foreground mb-6">FIND US</h2>

                {/* Map Placeholder */}
                <div className="relative h-[400px] rounded-lg overflow-hidden mb-8 bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.957389849456!2d101.68666!3d3.1266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMDcnMzUuOCJOIDEwMcKwNDEnMTIuMCJF!5e0!3m2!1sen!2smy!4v1635000000000!5m2!1sen!2smy"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="MEG Consult Location"
                  />
                </div>

                {/* Social Links */}
                <div className="bg-muted rounded-lg p-6">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                      <span className="sr-only">Facebook</span>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                      <span className="sr-only">Twitter</span>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-[#1a3a5c]">
          <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-light tracking-wide text-primary-foreground mb-6">
              READY TO START YOUR PROJECT?
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed mb-8">
              Our team of experienced Professional Engineers is ready to help you with your data centre or M&E
              engineering project. Contact us today to discuss your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+60322766322"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground transition-colors rounded-md text-sm tracking-widest"
              >
                <Phone className="w-4 h-4" />
                CALL US NOW
              </a>
              <a
                href="mailto:info@meg.com.my"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground text-foreground hover:bg-primary-foreground/90 transition-colors rounded-md text-sm tracking-widest"
              >
                <Mail className="w-4 h-4" />
                EMAIL US
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
