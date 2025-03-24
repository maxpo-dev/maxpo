"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Globe, Users, Calendar, Lightbulb, BarChart, Megaphone } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

import { Button } from "@/components/ui/button"

export default function Services() {
  // Animation variants
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: custom * 0.1, ease: "easeOut" },
    }),
  }

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 },
    },
  }

  const processStepRef = useRef(null)
  const isProcessInView = useInView(processStepRef, { once: true, amount: 0.3 })

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section with parallax effect */}
      <section className="relative h-[80vh] pt-20 overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src="/images/services/WhatsApp Image 2025-03-21 at 12.29.44 PM.jpeg"
            alt="Our Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
        <div className="container relative z-10 mx-auto px-4 py-32 text-white md:py-40">
          <motion.h1
            className="mb-6 text-4xl font-bold tracking-tight md:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="max-w-2xl text-lg text-gray-300 md:text-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Comprehensive exhibition solutions designed to create exceptional business experiences and drive meaningful
            connections.
          </motion.p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUpVariants}
            custom={0}
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Comprehensive Exhibition Solutions</h2>
            <p className="mb-16 text-lg text-gray-600">
              At Maxpo, we offer a full range of services to create exceptional exhibition experiences that drive
              business growth and foster meaningful connections.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Service Cards */}
            {[
              {
                icon: <Globe className="h-6 w-6" />,
                title: "Trade Show Management",
                description:
                  "End-to-end management of trade shows and exhibitions, from concept development to execution and post-event analysis.",
                features: [
                  "Venue selection and management",
                  "Exhibitor and sponsor recruitment",
                  "Floor plan design and optimization",
                  "On-site logistics and coordination",
                ],
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "Conference Organization",
                description:
                  "Comprehensive conference planning and management services, creating engaging and informative events for industry professionals.",
                features: [
                  "Program development and speaker management",
                  "Registration and attendee management",
                  "Audio-visual production",
                  "Networking events and activities",
                ],
              },
              {
                icon: <Calendar className="h-6 w-6" />,
                title: "Corporate Events",
                description:
                  "Tailored corporate event solutions, from product launches and annual meetings to team-building activities and client appreciation events.",
                features: [
                  "Event concept and theme development",
                  "Venue selection and management",
                  "Catering and entertainment coordination",
                  "Branding and experiential design",
                ],
              },
              {
                icon: <Lightbulb className="h-6 w-6" />,
                title: "Exhibition Design & Build",
                description:
                  "Creative and innovative exhibition stand design and construction services, creating impactful brand experiences.",
                features: [
                  "Custom stand design and visualization",
                  "Modular and custom build solutions",
                  "Graphics production and installation",
                  "Furniture and equipment rental",
                ],
              },
              {
                icon: <BarChart className="h-6 w-6" />,
                title: "Digital & Hybrid Events",
                description:
                  "Innovative digital and hybrid event solutions that combine the best of physical and virtual experiences.",
                features: [
                  "Virtual exhibition platforms",
                  "Live streaming and on-demand content",
                  "Virtual networking and matchmaking",
                  "Data analytics and reporting",
                ],
              },
              {
                icon: <Megaphone className="h-6 w-6" />,
                title: "Marketing & Promotion",
                description:
                  "Comprehensive marketing and promotional services to maximize event visibility, attendance, and engagement.",
                features: [
                  "Event branding and identity development",
                  "Digital marketing campaigns",
                  "Public relations and media outreach",
                  "Social media management and content creation",
                ],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group rounded-xl border border-gray-200 p-8 transition-all duration-300"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div
                  className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-950 text-white"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="mb-4 text-xl font-semibold">{service.title}</h3>
                <p className="mb-6 text-gray-600">{service.description}</p>
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * featureIndex }}
                    >
                      <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                      <span className="text-gray-600">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Link href="/contact" className="inline-flex items-center text-sm font-medium text-black">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section with animated steps */}
      <section className="bg-gray-50 py-24" ref={processStepRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Our Process</h2>
            <p className="mb-16 text-lg text-gray-600">
              We follow a structured approach to ensure every event we create delivers exceptional results and exceeds
              expectations.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Process Steps with sequential animation */}
            {[
              {
                number: "1",
                title: "Discovery",
                description:
                  "We begin by understanding your goals, target audience, and vision for the event, establishing clear objectives and success metrics.",
              },
              {
                number: "2",
                title: "Planning",
                description:
                  "Our team develops a comprehensive event plan, including venue selection, program development, marketing strategy, and budget management.",
              },
              {
                number: "3",
                title: "Execution",
                description:
                  "We manage all aspects of event execution, from logistics and setup to on-site management and troubleshooting, ensuring a flawless experience.",
              },
              {
                number: "4",
                title: "Evaluation",
                description:
                  "After the event, we conduct a thorough analysis of results, gathering feedback and data to measure success and identify opportunities for improvement.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="relative rounded-xl bg-white p-8 shadow-md"
                initial={{ opacity: 0, y: 30 }}
                animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <motion.div
                  className="absolute -top-6 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-blue-950 text-white"
                  initial={{ scale: 0 }}
                  animate={isProcessInView ? { scale: 1 } : { scale: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.3 + index * 0.2,
                  }}
                >
                  <span className="text-lg font-bold">{step.number}</span>
                </motion.div>
                <h3 className="mb-4 mt-6 text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-24 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl text-blue-950">
              Ready to Create an Exceptional Event?
            </h2>
            <p className="mb-8 text-lg text-black">
              Let&apos;s work together to create an exhibition experience that drives business growth and fosters
              meaningful connections.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="rounded-full bg-white px-8 text-black hover:bg-gray-300">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white px-8 text-black hover:bg-gray-300 hover:text-black"
                >
                  View Our Portfolio
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

