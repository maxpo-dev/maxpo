"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { ArrowRight, Send } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"

// Create motion-wrapped components
const MotionInput = motion(Input)
const MotionTextarea = motion(Textarea)
const MotionButton = motion(Button)

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  }
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    }
  }
}

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
        <motion.div 
          className="absolute inset-0 z-0"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <Image
            src="/images/contact/WhatsApp Image 2025-03-21 at 6.00.08 PM.jpeg"
            alt="Contact Us"
            fill
            className="object-cover"
            priority
          />
          <motion.div 
            className="absolute inset-0 bg-black/60"
            variants={fadeIn}
          />
        </motion.div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="mx-auto max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div className="mb-12 text-center" variants={itemVariants}>
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Send Us a Message</h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>
            </motion.div>

            {formSubmitted ? (
              <motion.div 
                className="rounded-xl bg-white p-8 text-center shadow-md"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <motion.div 
                  className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 0.6,
                    ease: "easeInOut"
                  }}
                >
                  <Send className="h-8 w-8" />
                </motion.div>
                <h3 className="mb-4 text-2xl font-semibold">Message Sent!</h3>
                <p className="mb-6 text-gray-600">Thank you for reaching out. Our team will get back to you shortly.</p>
                <MotionButton
                  onClick={() => setFormSubmitted(false)}
                  className="rounded-full bg-black px-8 text-white hover:bg-gray-800"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Another Message
                </MotionButton>
              </motion.div>
            ) : (
              <motion.form 
                onSubmit={handleSubmit} 
                className="rounded-xl bg-white p-8 shadow-md"
                variants={containerVariants}
              >
                <div className="mb-8 space-y-6">
                  <motion.div className="grid gap-6 md:grid-cols-2" variants={containerVariants}>
                    <motion.div className="space-y-2" variants={itemVariants}>
                      <Label htmlFor="first-name">First Name</Label>
                      <MotionInput
                        id="first-name"
                        placeholder="John"
                        required
                        value={formData["first-name"]}
                        onChange={handleChange}
                        whileFocus={{ scale: 1.02 }}
                      />
                    </motion.div>
                    <motion.div className="space-y-2" variants={itemVariants}>
                      <Label htmlFor="last-name">Last Name</Label>
                      <MotionInput
                        id="last-name"
                        placeholder="Doe"
                        required
                        value={formData["last-name"]}
                        onChange={handleChange}
                        whileFocus={{ scale: 1.02 }}
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div className="grid gap-6 md:grid-cols-2" variants={containerVariants}>
                    <motion.div className="space-y-2" variants={itemVariants}>
                      <Label htmlFor="email">Email</Label>
                      <MotionInput
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        whileFocus={{ scale: 1.02 }}
                      />
                    </motion.div>
                    <motion.div className="space-y-2" variants={itemVariants}>
                      <Label htmlFor="phone">Phone</Label>
                      <MotionInput
                        id="phone"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={handleChange}
                        whileFocus={{ scale: 1.02 }}
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div className="space-y-2" variants={itemVariants}>
                    <Label htmlFor="company">Company</Label>
                    <MotionInput 
                      id="company" 
                      placeholder="Your Company" 
                      value={formData.company} 
                      onChange={handleChange} 
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>

                  <motion.div className="space-y-2" variants={itemVariants}>
                    <Label>I&apos;m interested in</Label>
                    <RadioGroup value={formData.interestedIn} onValueChange={handleRadioChange}>
                      <div className="flex flex-wrap gap-6">
                        {["trade-show", "conference", "corporate-event", "other"].map((option) => (
                          <motion.div 
                            key={option}
                            className="flex items-center space-x-2"
                            whileHover={{ scale: 1.05 }}
                          >
                            <RadioGroupItem value={option} id={option} />
                            <Label htmlFor={option}>
                              {option.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                            </Label>
                          </motion.div>
                        ))}
                      </div>
                    </RadioGroup>
                  </motion.div>

                  <motion.div className="space-y-2" variants={itemVariants}>
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select value={formData.budget} onValueChange={handleSelectChange}>
                      <motion.div whileHover={{ scale: 1.02 }}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a budget range" />
                        </SelectTrigger>
                      </motion.div>
                      <SelectContent>
                        {[
                          { value: "under-50k", label: "Under $50,000" },
                          { value: "50k-100k", label: "$50,000 - $100,000" },
                          { value: "100k-250k", label: "$100,000 - $250,000" },
                          { value: "250k-500k", label: "$250,000 - $500,000" },
                          { value: "over-500k", label: "Over $500,000" }
                        ].map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            <motion.div whileHover={{ scale: 1.02 }}>
                              {item.label}
                            </motion.div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </motion.div>

                  <motion.div className="space-y-2" variants={itemVariants}>
                    <Label htmlFor="message">Message</Label>
                    <MotionTextarea
                      id="message"
                      placeholder="Tell us about your project or inquiry"
                      className="min-h-[150px]"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      whileFocus={{ scale: 1.01 }}
                    />
                  </motion.div>
                </div>

                <MotionButton
                  type="submit"
                  className="w-full rounded-full bg-black px-8 text-white hover:bg-gray-800"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                </MotionButton>
              </motion.form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  )
}