"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

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
      image: "/images/events/WhatsApp Image 2025-03-20 at 6.01.11 PM.jpeg",
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
        "India’s real estate sector remain key economic growth pillars, offering immense opportunities for investors and homebuyers. A premier real estate exhibition brings together top developers, real estate experts, and investors under one roof, offering unparalleled opportunities to explore the best properties of India in Dubai for the NRIs over there",
      category: "Exhibition",
      website: "",
    },
    {
      id: 3,
      title: "Future Digitech Summit & Awards 2025",
      date: "28-29 May 2025",
      location: "Pullman, Kuala Lumpur City Centre, Malaysia",
      image: "/images/events/WhatsApp Image 2025-03-20 at 6.26.32 PM (2).jpeg",
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
        "The Future Proptech Summit is designed for professionals, entrepreneurs, and organizations seeking to understand and invest in the future of real estate technology.",
      category: "Conferences",
      image: "/images/events/WhatsApp Image 2025-03-21 at 11.58.43 AM.jpeg",
      website: "https://www.futureproptechsummit.com/",
    },
  ]

  // State for active filter and sorted events
  const [activeFilter, setActiveFilter] = useState<EventType>("All Events")
  const sortOption = "Date: Nearest first"

  // Filter events based on active filter
  const filteredEvents = eventsData.filter((event) => activeFilter === "All Events" || event.category === activeFilter)

  // Sort events based on selected sort option
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    if (sortOption === "Date: Nearest first") {
      return a.date.localeCompare(b.date)
    } else if (sortOption === "Date: Furthest first") {
      return b.date.localeCompare(a.date)
    } else if (sortOption === "Location: A-Z") {
      return a.location.localeCompare(b.location)
    } else {
      return a.category.localeCompare(b.category)
    }
  })

  // Handle filter change
  const handleFilterChange = (filter: EventType) => {
    setActiveFilter(filter)
  }

  // Handle sort change
  //   const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //     setSortOption(e.target.value)
  //   }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative  h-[80vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/events/WhatsApp Image 2025-03-21 at 12.07.40 PM.jpeg"
            alt="Upcoming Events"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative text-center text-white px-6 md:px-12">
          <motion.h1
            className="text-9xl font-bold tracking-tight md:text-6xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Events
          </motion.h1>
          <motion.p
            className="max-w-2xl mx-auto mt-4 text-lg text-gray-300 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Discover our upcoming exhibitions and conferences around the world.
          </motion.p>
        </div>
      </section>

      {/* Events Filter */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={activeFilter === "All Events" ? "default" : "outline"}
                className={`rounded-full px-4 py-2 cursor-pointer ${activeFilter === "All Events" ? "bg-black text-white" : "bg-gray-100"}`}
                onClick={() => handleFilterChange("All Events")}
              >
                All Events
              </Badge>
              <Badge
                variant={activeFilter === "Exhibition" ? "default" : "outline"}
                className={`rounded-full px-4 py-2 cursor-pointer ${activeFilter === "Exhibition" ? "bg-black text-white" : "bg-gray-100"}`}
                onClick={() => handleFilterChange("Exhibition")}
              >
                Exhibition
              </Badge>
              <Badge
                variant={activeFilter === "Conferences" ? "default" : "outline"}
                className={`rounded-full px-4 py-2 cursor-pointer ${activeFilter === "Conferences" ? "bg-black text-white" : "bg-gray-100"}`}
                onClick={() => handleFilterChange("Conferences")}
              >
                Conferences
              </Badge>
              <Badge
                variant={activeFilter === "Conference and Awards" ? "default" : "outline"}
                className={`rounded-full px-4 py-2 cursor-pointer ${activeFilter === "Conference and Awards" ? "bg-black text-white" : "bg-gray-100"}`}
                onClick={() => handleFilterChange("Conference and Awards")}
              >
                Conference and Awards
              </Badge>
            </div>
            {/* <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Sort by:</span>
              <select
                className="rounded-md border border-gray-200 bg-white px-3 py-1 text-sm"
                value={sortOption}
                onChange={handleSortChange}
              >
                <option>Date: Nearest first</option>
                <option>Date: Furthest first</option>
                <option>Location: A-Z</option>
                <option>Industry: A-Z</option>
              </select>
            </div> */}
          </div>
        </div>
      </section>

      {/* Featured Event */}
      {/* <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="overflow-hidden rounded-2xl bg-blue-950">
            <div className="grid md:grid-cols-2">
              <div className="relative h-[300px] md:h-auto">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Global Tech Summit 2023"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 text-white md:p-12">
                <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">Featured Event</Badge>
                <h2 className="mb-4 text-3xl font-bold">Global Tech Summit 2023</h2>
                <div className="mb-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    <span>October 15-17, 2023</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <span>Dubai World Trade Centre, UAE</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-gray-400" />
                    <span>Expected Attendance: 5,000+</span>
                  </div>
                </div>
                <p className="mb-8 text-gray-300">
                  Join industry leaders, innovators, and tech enthusiasts at the premier technology event in the Middle
                  East. Featuring keynote speeches, panel discussions, and hands-on workshops on AI, blockchain,
                  cybersecurity, and more.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="rounded-full bg-white px-6 text-black hover:bg-gray-200">
                    Register Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="rounded-full border-white px-6 text-white hover:bg-white/20">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Upcoming Events List */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          {sortedEvents.length === 0 ? (
            <div className="py-16 text-center">
              <h3 className="text-xl font-semibold">No events found matching your filter</h3>
              <p className="mt-2 text-gray-600">Try selecting a different category or clear your filters</p>
              <Button variant="outline" className="mt-4 rounded-full" onClick={() => setActiveFilter("All Events")}>
                Show All Events
              </Button>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {sortedEvents.map((event) => (
                <div
                  key={event.id}
                  className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <Badge className="bg-white/20 text-white hover:bg-white/30">{event.category}</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-semibold">{event.title}</h3>
                    <div className="mb-4 space-y-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{event.location}</span>
                      </div>
                    </div>
                    <p className="mb-6 text-gray-600">{event.description}</p>
                    <Link href={event.website} className="inline-flex items-center text-sm font-medium text-black">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {sortedEvents.length > 0 && (
            <div className="mt-12 text-center">
              <Button size="lg" className="rounded-full bg-black px-8 text-white hover:bg-gray-800">
                Load More Events <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Event Calendar */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Event Calendar</h2>
            <p className="mb-16 text-lg text-gray-600">Plan your schedule with our comprehensive event calendar.</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-md md:p-8">
            <div className="relative h-[600px] overflow-hidden">
              <Image src="/placeholder.svg?height=1200&width=1600" alt="Event Calendar" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-black py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Stay Updated</h2>
            <p className="mb-8 text-lg text-gray-300">
              Subscribe to our newsletter to receive updates on upcoming events, early bird discounts, and industry
              insights.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-full border-none bg-white/10 px-6 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button className="rounded-full bg-white px-8 text-black hover:bg-gray-200">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

