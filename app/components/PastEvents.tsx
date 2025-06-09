'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const pastEvents = [
  {
    id: 2,
    title: 'Gulf News presents India Property Show',
    date: '17-18 May 2025',
    location: 'Crowne Plaza, Sheikh Zayed Road, Dubai',
    image: '/images/events/WhatsApp Image 2025-03-21 at 11.58.43 AM (1).jpeg',
    description: 'India’s real estate sector remains a key economic growth pillar, attracting global investors and NRIs seeking high returns...',
    category: 'Exhibition',
    website: 'https://www.indiapropertyshow.in/',
  },
  {
    id: 1,
    title: 'Future Digitech Summit & Awards 2025',
    date: '28-29 May 2025',
    location: 'Pullman, Kuala Lumpur City Centre, Malaysia',
    image: '/images/events/WhatsApp Image 2025-03-21 at 4.06.56 PM (1).jpeg',
    description: 'Future DigiTech Summit 2025 in Kuala Lumpur, where industry leaders gathered to explore AI, PropTech, and the future of innovation...',
    category: 'Conference and Awards',
    website: 'https://www.futuredigitechsummit.com/',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function PastEvents() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
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
              A look back at our most recent impactful events
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pastEvents.map((event, index) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-xl cursor-pointer"
              whileHover={{
                y: -10,
                boxShadow:
                  '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                transition: { duration: 0.3 },
              }}
              onClick={() => {
                if (event.website) window.open(event.website, '_blank')
              }}
            >
              <div className="relative h-80 overflow-hidden">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} className="h-full w-full">
                  <Image
                    src={event.image}
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
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{event.location}</span>
                  </div>
                </div>

                <p className="mb-6 text-gray-600">
                  {event.description.split(' ').slice(0, 20).join(' ')}
                  {event.description.split(' ').length > 20 ? '...' : ''}
                </p>

                {event.website && (
                  <motion.a
                    href={event.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-black"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Recap{' '}
                    <motion.div whileHover={{ x: 3 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </motion.div>
                  </motion.a>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
