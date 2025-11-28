"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    captcha: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-2xl px-4 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide text-foreground text-center mb-12">
          GET IN TOUCH
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name" className="text-sm text-muted-foreground">
              Name
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

          <div>
            <Label htmlFor="email" className="text-sm text-muted-foreground">
              Email Address
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
            <Label htmlFor="subject" className="text-sm text-muted-foreground">
              Subject
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
              Message
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
              11 + 3 =
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
          >
            SUBMIT
          </Button>
        </form>
      </div>
    </section>
  )
}
