"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const pastEvent = {
  id: 2,
  title: "Gulf News presents India Property Show",
  date: "17-18 May 2025",
  location: "Crowne Plaza, Sheikh Zayed Road, Dubai",
  image: "/images/events/WhatsApp Image 2025-03-21 at 11.58.43 AM (1).jpeg",
  description:
    "India’s real estate sector remains a key economic growth pillar, offering immense opportunities for investors and homebuyers. This premier real estate exhibition brings together top developers, real estate experts, and investors under one roof, offering unparalleled opportunities to explore the best properties of India in Dubai for the NRIs over there.",
  category: "Exhibition",
  website: "",
}

export default function PastEvents() {
  return (
    <section className="relative bg-white py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Title */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl mb-4">
              Past <span className="text-blue-600">Events</span>
            </h2>
            <p className="text-lg text-gray-600 md:text-xl">
              A look back at one of our most recent impactful events
            </p>
          </motion.div>
        </div>

        {/* Single Event Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="group relative flex flex-col overflow-hidden rounded-3xl bg-gray-100 shadow-md hover:shadow-xl transition-all duration-300 max-w-xl mx-auto"
        >
          {/* Image */}
          <div className="relative h-[250px] md:h-[300px] overflow-hidden rounded-t-3xl">
            <Image
              src={pastEvent.image}
              alt={pastEvent.title}
              fill
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-xs font-medium py-1 px-3 rounded-full shadow-md">
              {pastEvent.category}
            </div>
          </div>

          {/* Card Content */}
          <div className="flex flex-col p-6 bg-white rounded-b-3xl">
            <h3 className="mb-3 text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              {pastEvent.title}
            </h3>
            <p className="mb-4 text-gray-600">{pastEvent.description}</p>

            <div className="space-y-2 text-sm text-gray-500">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-blue-600" />
                <span>{pastEvent.date}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4 text-blue-600" />
                <span>{pastEvent.location}</span>
              </div>
            </div>

            {/* Button if website exists */}
            {pastEvent.website && (
              <div className="mt-6 text-left">
                <Link href={pastEvent.website}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    View Recap
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
