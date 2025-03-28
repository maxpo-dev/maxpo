"use client"

import type React from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, ArrowRight, Calendar, Check, MapPin } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

// Define event types
type EventType = "All Events" | "Exhibition" | "Conferences" | "Conference and Awards"

// Define event interface
interface Event {
  id: number
  title: string
  date: string
  location: string
  description: string
  category: string
  image: string
  website: string
}

export default function UpcomingEvents() {
  // Events data
  const eventsData: Event[] = [
    {
      id: 1,
      title: "GMEC India 2025",
      date: "April 25-27, 2025",
      location: "Palace Ground, Bengaluru",
      image: "/images/events/WhatsApp Image 2025-03-21 at 4.06.22 PM (1).jpeg",
      description:
        "GMEC INDIA 2025 is a premier international platform dedicated to advancing healthcare innovation by bringing together key stakeholders across the medical and healthcare industry. Our platform unites medical professionals, manufacturers, suppliers, policymakers, and innovators, fostering connections that drive impactful solutions to global healthcare challenges.",
      category: "Exhibition",
      website: "https://gmecexhibitions.in/",
    },
    {
      id: 2,
      title: "Gulf News presents India Property Show",
      date: "17-18 May 2025",
      location: "Crowne Plaza, Sheikh Zayed Road, Dubai",
      image: "/images/events/WhatsApp Image 2025-03-21 at 11.58.43 AM (1).jpeg",
      description:
        "India's real estate sector remain key economic growth pillars, offering immense opportunities for investors and homebuyers. A premier real estate exhibition brings together top developers, real estate experts, and investors under one roof, offering unparalleled opportunities to explore the best properties of India in Dubai for the NRIs over there",
      category: "Exhibition",
      website: "https://www.indiapropertyshow.in/",
    },
    {
      id: 3,
      title: "Future Digitech Summit & Awards 2025",
      date: "28-29 May 2025",
      location: "Pullman, Kuala Lumpur City Centre, Malaysia",
      image: "/images/events/WhatsApp Image 2025-03-21 at 4.06.56 PM (1).jpeg",
      description:
        "Future DigiTech Summit 2025 in Kuala Lumpur, where industry leaders, innovators, and visionaries come together to explore the latest trends and technologies shaping our digital future. This two-day event promises insightful discussions, hands-on workshops, and unparalleled networking opportunities.",
      category: "Conference and Awards",
      website: "https://www.futuredigitechsummit.com/",
    },
    {
      id: 4,
      title: "Future Proptech Summit",
      date: "14-15 October 2025",
      location: "Le Méridien Hotel, Airport Road, Dubai",
      description:
        "The Future Proptech Summit is designed for professionals, entrepreneurs, and organizations seeking to understand and invest in the future of real estate technology. ",
      category: "Conferences",
      image: "/images/events/WhatsApp Image 2025-03-21 at 6.14.29 PM.jpeg",
      website: "https://www.futureproptechsummit.com/",
    },
  ]

  // State for active filter and sorted events
  const [activeFilter, setActiveFilter] = useState<EventType>("All Events")
  const [expandedDescriptions, setExpandedDescriptions] = useState<number[]>([])
  // const sortOption = "Date: Nearest first"
  const [, setIsLoaded] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)

  // Animation scroll effects
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.2])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  // Filter events based on active filter
  const filteredEvents = eventsData.filter((event) => activeFilter === "All Events" || event.category === activeFilter)

  // Maintain the exact order specified by the user
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    // Custom order based on the event IDs to match the requested sequence
    return a.id - b.id
  })

  // Handle filter change
  const handleFilterChange = (filter: EventType) => {
    setActiveFilter(filter)
  }

  // Toggle description expansion
  const toggleDescription = (eventId: number, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setExpandedDescriptions((prev) =>
      prev.includes(eventId) ? prev.filter((id) => id !== eventId) : [...prev, eventId],
    )
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage("")

    try {
      const formData = new FormData()
      formData.append("email", email)

      const response = await fetch("/api/action", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (response.ok) {
        setIsSuccess(true)
        setMessage(data.message)
        setEmail("")
      } else {
        setMessage(data.message || "Something went wrong")
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setMessage("Network error. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }
  
  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isSuccess) {
      timer = setTimeout(() => {
        setIsSuccess(false)
        setMessage("")
      }, 7000) // 7 seconds delay before showing form again
    }
    return () => clearTimeout(timer)
  }, [isSuccess])


  // Set loaded state after component mounts
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const heroTextVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const filterVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    tap: { scale: 0.95 },
    hover: { scale: 1.05 },
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section with Parallax Effect */}
      <motion.section className="relative h-[80vh] flex items-center justify-center mb-12 md:mb-20 lg:mb-24" style={{ opacity, scale }}>
        {/* Background Image with Parallax */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-full w-full"
          >
            <Image
              src="/images/events/WhatsApp Image 2025-03-21 at 12.07.40 PM.jpeg"
              alt="Upcoming Events"
              fill
              
              priority
            />
            <motion.div
              className="absolute inset-0 bg-black/60"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 1.2 }}
            />
          </motion.div>
        </div>

        <div className="relative text-center text-white px-6 md:px-12 z-10">
          <motion.h1
            className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl"
            variants={heroTextVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block"
            >
              Events
            </motion.span>
          </motion.h1>
          <motion.p
            className="max-w-2xl mx-auto mt-6 text-lg text-gray-300 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
           Unlock exclusive exhibitions and conferences worldwide—where the future of your industry takes shape!

          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-8"
          >
            <Button size="lg" className="rounded-full bg-white text-black hover:bg-gray-200" asChild>
              <motion.a
                href="#events"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Explore Events <ArrowDown className="ml-2 h-4 w-4" />
              </motion.a>
            </Button>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Explore Events card  */}
      <motion.section
      className="bg-gray-100 p-8 md:p-12 rounded-2xl max-w-5xl mx-auto shadow-md text-center mb-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h3
        className="text-2xl md:text-3xl font-bold mb-4"
        animate={{
          textShadow: [
            "0 0 0px rgba(0,0,0,0)",
            "0 0 10px rgba(0,0,0,0.1)",
            "0 0 0px rgba(0,0,0,0)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        Explore Events
      </motion.h3>
      <motion.p
        className="text-gray-600 text-base md:text-lg leading-relaxed mb-3"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Step into a world of innovation, networking, and opportunity. Discover our globally curated exhibitions and
        conferences designed to connect industry leaders, showcase cutting-edge trends, and create unforgettable
        experiences. Stay ahead—explore what’s next!
      </motion.p>
      <motion.p
        className="text-gray-600 text-base md:text-lg leading-relaxed"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Stay updated with the latest events, industry trends, and exclusive opportunities—don’t miss a moment!
      </motion.p>
    </motion.section>



      {/* Events Filter with Animation */}
      <motion.section
        className="bg-white py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        id="events"
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-wrap items-center justify-between gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-wrap gap-2">
              {["All Events", "Exhibition", "Conferences", "Conference and Awards"].map((filter) => (
                <motion.div
                  key={filter}
                  variants={filterVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  whileTap="tap"
                  transition={{ duration: 0.2 }}
                >
                  <Badge
                    variant={activeFilter === filter ? "default" : "outline"}
                    className={`rounded-full px-4 py-2 cursor-pointer ${
                      activeFilter === filter ? "bg-blue-950 text-white" : "bg-gray-100"
                    }`}
                    onClick={() => handleFilterChange(filter as EventType)}
                  >
                    {filter}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Upcoming Events List with Staggered Animation */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            {sortedEvents.length === 0 ? (
              <motion.div
                className="py-16 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                key="no-events"
              >
                  <h3 className="text-xl font-semibold">No events found matching your filter</h3>
                <p className="mt-2 text-gray-600">Try selecting a different category or clear your filters</p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" className="mt-4 rounded-full" onClick={() => setActiveFilter("All Events")}>
                    Show All Events
                  </Button>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                key="events-grid"
              >
                {sortedEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    variants={itemVariants}
                    custom={index}
                    className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-xl cursor-pointer"
                    whileHover={{
                      y: -10,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                      transition: { duration: 0.3 },
                    }}
                    onClick={() => {
                      if (event.website) {
                        window.open(event.website, "_blank")
                      }
                    }}
                  >
                    <div className="relative h-80 overflow-hidden">
                      
                      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} className="h-full w-full">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-xs font-medium py-1 px-3 rounded-full shadow-md">
          {event.category}
        </div>
                      

                    </div>
                    <motion.div
                      className="p-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 * index, duration: 0.5 }}
                    >
                      <h3 className="mb-2 text-xl font-semibold">{event.title}</h3>
                      <div className="mb-4 space-y-2">
                        <div className="flex items-center gap-2">
                          <motion.div
                            whileHover={{ rotate: 15, scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                          >
                            <Calendar className="h-4 w-4 text-gray-400" />
                          </motion.div>
                          <span className="text-sm text-gray-600">{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                          >
                            <MapPin className="h-4 w-4 text-gray-400" />
                          </motion.div>
                          <span className="text-sm text-gray-600">{event.location}</span>
                        </div>
                      </div>
                      <AnimatePresence mode="wait">
                        <motion.p
                          key={`desc-${event.id}-${expandedDescriptions.includes(event.id)}`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mb-6 text-gray-600"
                        >
                          {expandedDescriptions.includes(event.id)
                            ? event.description
                            : `${event.description.split(" ").slice(0, 20).join(" ")}${event.description.split(" ").length > 20 ? "..." : ""}`}
                        </motion.p>
                      </AnimatePresence>
                      {event.description.split(" ").length > 20 && (
                        <motion.button
                          onClick={(e) => toggleDescription(event.id, e)}
                          className="inline-flex items-center text-sm font-medium text-black"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          {expandedDescriptions.includes(event.id) ? "Show Less" : "Learn More"}{" "}
                          <motion.div
                            animate={
                              expandedDescriptions.includes(event.id) ? { rotate: 90, x: 0 } : { rotate: 0, x: 0 }
                            }
                            transition={{ duration: 0.3 }}
                          >
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </motion.div>
                        </motion.button>
                      )}
                      {event.website && event.description.split(" ").length <= 20 && (
                        <motion.a
                          href={event.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-medium text-black"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          Learn More{" "}
                          <motion.div
                            whileHover={{ x: 3 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </motion.div>
                        </motion.a>
                      )}
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {sortedEvents.length > 0 && (
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {/* <Button size="lg" className="rounded-full bg-black px-8 text-white hover:bg-gray-800">
                  Load More Events <ArrowRight className="ml-2 h-4 w-4" />
                </Button> */}
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Event Calendar with Reveal Animation */}
      {/* <motion.section
        className="bg-gray-50 py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Event Calendar</h2>
            <p className="mb-16 text-lg text-gray-600">Plan your schedule with our comprehensive event calendar.</p>
          </motion.div>

          <motion.div
            className="rounded-xl bg-white p-6 shadow-md md:p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative h-[600px] overflow-hidden rounded-lg">
              <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Image
                  src="/placeholder.svg?height=1200&width=1600"
                  alt="Event Calendar"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section> */}

      {/* Newsletter with Floating Animation */}
      <motion.section
        className="bg-gray-100 py-24 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="mb-6 text-3xl font-bold tracking-tight md:text-4xl text-blue-950"
              animate={{
                textShadow: [
                  "0 0 0px rgba(255,255,255,0)",
                  "0 0 10px rgba(255,255,255,0.5)",
                  "0 0 0px rgba(255,255,255,0)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              Stay Updated
            </motion.h2>
            <p className="mb-8 text-lg text-black ">
              Subscribe to our newsletter to receive updates on upcoming events, early bird discounts, and industry
              insights.
            </p>
            <div className="w-full max-w-lg mx-auto min-h-[150px]">
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div className="flex-1" whileFocus={{ scale: 1.02 }}>
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-full border-none bg-black/10 px-6 py-3 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button 
                  type="submit" 
                  className="w-full sm:w-auto rounded-full bg-white px-8 text-black hover:bg-gray-200"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                  {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              </motion.div>
            </div>
            
            {message && (
              <motion.div 
                className="text-center text-red-500 w-full"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {message}
              </motion.div>
            )}
          </motion.form>
        ) : (
          <motion.div
            key="success-message"
            className="flex flex-col items-center justify-center gap-4 p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <Check className="w-8 h-8 text-green-600" />
            </motion.div>
            <motion.h3 
              className="text-xl font-semibold text-center text-green-600"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {message}
            </motion.h3>
            <motion.p
              className="text-gray-600 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              The form will reappear shortly...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

