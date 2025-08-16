"use client"

import type React from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, ArrowRight, Calendar, Check, MapPin } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import PastEvents from "../components/PastEvents"

// Define event types
type EventType = "All Events" | "Exhibition" | "Conferences" | "Conference and Awards"

// Define event interface
interface Event {
  id: number
  title: string
  date: string
  location: string
  description: string
  category: EventType // Changed to use EventType instead of string
  image: string
  website: string
}

// Events data - Fixed category consistency
const eventsData: Event[] = [
  {
    id: 2,
    title: "Global Fintech Summit",
    date: "October 08-09, 2025",
    location: "Johannesburg, South Africa",
    image: "/images/events/fintech-event.jpg",
    description:
      "Global Fintech Summit and Awards 2025 is a dedicated event to shape the future of finance through innovation, collaboration, and strategic dialogue. The summit brings together key stakeholders across the global financial ecosystem including banking leaders, fintech innovators, regulators, investors, and policymakers to explore transformative ideas and technologies.",
    category: "Conferences", // Fixed: was "Conference", now matches filter option
    website: "https://www.globalfintechsummit.net/",
  },
  {
    id: 4,
    title: "Revolution EV",
    date: "23-24 October, 2025",
    location: "WTC, KL, Malaysia",
    image: "/images/events/revolutionev.jpg",
    description:
      "Revolution EV Malaysia 2025 (#rev25) is the nation's premier EV event, uniting industry leaders, innovators, and policymakers to drive the future of electric mobility. Join us in Kuala Lumpur from 23–24 October 2025 for two dynamic days of showcases, insights, and collaboration.",
    category: "Conferences", // Fixed: was "Conference", now matches filter option
    website: "https://www.revolutionevmalaysia.com/",
  },
  {
    id: 3,
    title: "Future Proptech Summit",
    date: "14-15 October 2025",
    location: "Le Méridien Hotel, Airport Road, Dubai",
    description:
      "The Future Proptech Summit is designed for professionals, entrepreneurs, and organizations seeking to understand and invest in the future of real estate technology. ",
    category: "Conferences", // Fixed: was "Conference", now matches filter option
    image: "/images/events/WhatsApp Image 2025-03-21 at 6.14.29 PM.jpeg",
    website: "https://www.futureproptechsummit.com/",
  },

  {
  id: 6,
  title: "India Edu-Fair",
  date: "15-16 November, 2025",
  location: "Dubai",
  description:
    "The India Edu-Fair in Dubai is a premier platform for students and parents to explore higher education opportunities from India and across the globe. Featuring over 35 leading institutions, the event connects aspiring learners with top universities, colleges, and training institutes. Held biannually, the Edu-Fair provides personalized counseling sessions, workshops, and expert guidance on admissions, scholarships, and career pathways. Organized by Gulf News, the UAE’s most trusted media house, this event empowers the youth of Dubai with global academic opportunities and career insights.",
  category: "Exhibition",
  image: "/images/events/dubai-edu-fair.jpg",
  website: "#",
},
{
  id: 7,
  title: "Gulf News presents India Property Show",
  date: "15-16 November, 2025",
  location: "Singapore",
  description:
    "The India Property Show in Singapore brings together top Indian real estate developers under one roof, offering NRIs and global investors exclusive opportunities to explore residential and commercial properties across India. From luxury apartments to affordable housing and investment-ready plots, the exhibition provides transparent insights into India’s booming real estate sector. Visitors can interact directly with developers, explore financing options, and attend expert-led sessions on investment trends, property laws, and market forecasts. Backed by Gulf News Media, this exhibition strengthens the bridge between Singapore’s NRI community and India’s vibrant property market.",
  category: "Exhibition",
  image: "/images/events/singapore-ips.jpg",
  website: "#",
},
{
  id: 8,
  title: "India Edu-Fair",
  date: "22-23 November, 2025",
  location: "Abu Dhabi",
  description:
    "The India Edu-Fair in Abu Dhabi is a flagship education event that connects students with top Indian and international universities. Over two days, attendees can explore undergraduate, postgraduate, and professional programs, gain insights into scholarships, and receive one-on-one counseling from education experts. The fair also highlights career readiness programs and skill development opportunities tailored for the global job market. As part of Gulf News’ prestigious event portfolio, the Abu Dhabi Edu-Fair is a must-visit for students and families seeking quality education and career planning in the UAE.",
  category: "Exhibition",
  image: "/images/events/abudhabi-edu-fair.jpg",
  website: "#",
},
{
  id: 9,
  title: "Gulf News presents India Property Show",
  date: "06-07 December, 2025",
  location: "Dubai",
  description:
    "The India Property Show in Dubai is the ultimate destination for NRIs and global investors interested in India’s thriving real estate market. Showcasing premium residential, commercial, and investment properties from across India, the exhibition attracts top developers, financial institutions, and legal experts. Attendees gain exclusive insights into high-return projects, government policies, and financing solutions. Organized by Gulf News, this event is renowned for its credibility and scale, making it the go-to platform for buyers, investors, and industry professionals in the Gulf region.",
  category: "Exhibition",
  image: "/images/events/dubai-ips.jpg",
  website: "#",
},

          {
      id: 5,
      title: "ASIA Health-5",
      date: "December 2nd , 3rd and 4th 2025",
      location: "WTC,  KL- Malaysia",
      description:
        "Health-5 2025, Asia’s most anticipated international healthcare exhibition and conference. Over three dynamic days, the event will transform Kuala Lumpur into a global hub of medical innovation, industry collaboration, and forward-thinking dialogue.This premier gathering brings together global healthcare leaders, visionaries, and professionals across five core pillars of the sector including medical equipment, health IT, hospital infrastructure, diagnostics, and wellness.",
      category: "Exhibition", // Fixed: was "Conference", now matches filter option
      image: "/images/events/health5.jpg",
      website: "#",
    },
]

export default function UpcomingEvents() {
  // State for active filter and sorted events
  const [activeFilter, setActiveFilter] = useState<EventType>("All Events")
  const [expandedDescriptions, setExpandedDescriptions] = useState<number[]>([])
  const [, setIsLoaded] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)

  // Animation scroll effects
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.2])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  // Fixed filter events based on active filter
  const filteredEvents = eventsData.filter((event) => {
    if (activeFilter === "All Events") return true
    return event.category === activeFilter
  })

  // Maintain the exact order specified by the user
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    // Custom order based on the event IDs to match the requested sequence
    return a.id - b.id
  })

  // Handle filter change with debug logging
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
    } catch {
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
      }, 7000)
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
      <motion.section
        className="relative h-[80vh] flex items-center justify-center mb-12 md:mb-20 lg:mb-24"
        style={{ opacity, scale }}
      >
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
            textShadow: ["0 0 0px rgba(0,0,0,0)", "0 0 10px rgba(0,0,0,0.1)", "0 0 0px rgba(0,0,0,0)"],
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
          experiences. Stay ahead—explore what&apos;s next!
        </motion.p>
        <motion.p
          className="text-gray-600 text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Stay updated with the latest events, industry trends, and exclusive opportunities—don&apos;t miss a moment!
        </motion.p>
      </motion.section>

      <center>
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl mb-4">
          Upcoming <span className="text-blue-600">Events</span>
        </h2>
      </center>

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
              {(["All Events", "Exhibition", "Conferences", "Conference and Awards"] as EventType[]).map((filter) => (
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
                    className={`rounded-full px-4 py-2 cursor-pointer transition-all duration-200 ${
                      activeFilter === filter
                        ? "bg-blue-950 text-white shadow-md"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                    }`}
                    onClick={() => handleFilterChange(filter)}
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
                    <div className="relative h-82 overflow-hidden">
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

      <PastEvents />

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
