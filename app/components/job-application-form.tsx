"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

interface JobApplicationFormProps {
  isOpen: boolean
  onClose: () => void
  jobTitle: string
  jobLocation: string
}

export function JobApplicationForm({ isOpen, onClose, jobTitle, jobLocation }: JobApplicationFormProps) {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    resume: null as File | null,
    coverLetter: "",
  })
  const [showThankYou, setShowThankYou] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resume: e.target.files![0] }))
    }
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, experience: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      console.log("Preparing form data for submission")
      const formDataToSend = new FormData()
      formDataToSend.append("jobTitle", jobTitle)
      formDataToSend.append("jobLocation", jobLocation)

      // Add all form fields to FormData
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null) {
          formDataToSend.append(key, value)
          console.log(`Added ${key} to form data`)
        }
      })

      console.log("Submitting application form")
      const response = await fetch("/api/submit-application", {
        method: "POST",
        body: formDataToSend,
      })

      console.log("Response status:", response.status)

      // Check if the response is ok before parsing JSON
      if (!response.ok) {
        const errorText = await response.text()
        console.error("Error response:", errorText)
        throw new Error(`Server responded with status: ${response.status}`)
      }

      const data = await response.json()
      console.log("Response data:", data)

      if (data.success) {
        console.log("Application submitted successfully")
        toast({
          title: "Application Submitted",
          description: "Your application has been successfully submitted. We'll be in touch soon!",
        })

        // Show thank you message
        setShowThankYou(true)

        // Reset form after successful submission
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          experience: "",
          resume: null,
          coverLetter: "",
        })

        // Hide thank you message after 8 seconds and close the modal
        setTimeout(() => {
          setShowThankYou(false)
          onClose()
        }, 8000)
      } else {
        throw new Error(data.message || "Failed to submit application")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      toast({
        title: "Submission Failed",
        description:
          error instanceof Error ? error.message : "There was an error submitting your application. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl rounded-xl bg-white p-6 shadow-lg"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-1 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-6">
              <h2 className="text-2xl font-bold">Apply for: {jobTitle}</h2>
              <p className="text-gray-600">Location: {jobLocation}</p>
            </div>

            {showThankYou ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center py-10 text-center"
              >
                <div className="mb-4 rounded-full bg-green-100 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-gray-900">Thank You!</h3>
                <p className="mb-6 text-gray-600">
                  Your application has been successfully submitted. We&apos;ll review it and get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience">Years of Experience *</Label>
                      <Select onValueChange={handleSelectChange} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select experience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-1">0-1 years</SelectItem>
                          <SelectItem value="1-3">1-3 years</SelectItem>
                          <SelectItem value="3-5">3-5 years</SelectItem>
                          <SelectItem value="5-10">5-10 years</SelectItem>
                          <SelectItem value="10+">10+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="resume">Resume/CV (PDF) *</Label>
                    <Input
                      id="resume"
                      name="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="coverLetter">Cover Letter</Label>
                    <Textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleChange}
                      placeholder="Tell us why you're interested in this position and what makes you a great fit."
                      className="min-h-[120px]"
                    />
                  </div>
                </div>

                <div className="flex justify-end space-x-4">
                  <Button type="button" variant="outline" onClick={onClose}>
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-blue-950 hover:bg-blue-900" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

