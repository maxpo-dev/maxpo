"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    "first-name": "",
    "last-name": "",
    company: "",
    email: "",
    phone: "",
    interestedIn: "trade-show",
    budget: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, interestedIn: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, budget: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setFormSubmitted(true)
        toast({
          title: "Success!",
          description: "Your message has been sent successfully.",
        })
      } else {
        throw new Error(data.message || "Something went wrong")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[100vh] pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact/WhatsApp Image 2025-03-21 at 6.00.08 PM.jpeg"
            alt="Contact Us"
            fill
            className=""
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Send Us a Message</h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>
            </div>

            {formSubmitted ? (
              <div className="rounded-xl bg-white p-8 text-center shadow-md">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Send className="h-8 w-8" />
                </div>
                <h3 className="mb-4 text-2xl font-semibold">Message Sent!</h3>
                <p className="mb-6 text-gray-600">Thank you for reaching out. Our team will get back to you shortly.</p>
                <Button
                  onClick={() => setFormSubmitted(false)}
                  className="rounded-full bg-black px-8 text-white hover:bg-gray-800"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-xl bg-white p-8 shadow-md">
                <div className="mb-8 space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input
                        id="first-name"
                        placeholder="John"
                        required
                        value={formData["first-name"]}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input
                        id="last-name"
                        placeholder="Doe"
                        required
                        value={formData["last-name"]}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your Company" value={formData.company} onChange={handleChange} />
                  </div>

                  <div className="space-y-2">
                    <Label>I&apos;m interested in</Label>
                    <RadioGroup value={formData.interestedIn} onValueChange={handleRadioChange}>
                      <div className="flex flex-wrap gap-6">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="trade-show" id="trade-show" />
                          <Label htmlFor="trade-show">Trade Show</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="conference" id="conference" />
                          <Label htmlFor="conference">Conference</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="corporate-event" id="corporate-event" />
                          <Label htmlFor="corporate-event">Corporate Event</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other" />
                          <Label htmlFor="other">Other</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select value={formData.budget} onValueChange={handleSelectChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-50k">Under $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                        <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                        <SelectItem value="over-500k">Over $500,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project or inquiry"
                      className="min-h-[150px]"
                      required
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-full bg-black px-8 text-white hover:bg-gray-800"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

