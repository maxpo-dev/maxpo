"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Globe, Users, Calendar,  BarChart, Megaphone , Lightbulb  } from "lucide-react"
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
            Crafting Experiences, Delivering Success
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
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">360° Exhibition Solutions</h2>
            <p className="mb-16 text-lg text-gray-600">
            At Maxpo, we design immersive exhibition experiences that captivate, connect, and drive business growth. From concept to execution, we bring your brand to life on the big stage
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
                title: "Maxpo Exhibitions",
                description:
                  "At Maxpo, we specialize in creating impactful exhibition experiences that captivate audiences, foster meaningful connections, and drive business growth. With our end-to-end solutions, we ensure your brand stands out in a competitive landscape.",
                features: [
                  "Custom Exhibition Stands",
                  "Turnkey Solutions",
                  "Brand Engagement Strategies",
                  "Global Expertise",
                  "Technology Integration",
                ],
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "Maxpo Conferences",
                description:
                  "At Maxpo, we craft world-class conference experiences that engage, inform, and leave a lasting impact. Whether it's a corporate summit, industry forum, or thought leadership event, we bring innovation and precision to every detail. ",
                features: [
                  "End-to-End Conference Management",
                  "Seamless Event Production",
                  "Engaging Speaker & Content Curation",
                  "Audience Engagement Strategies",
                  "Global Reach, Local Expertise",
                ],
              },
              {
                icon: <Calendar className="h-6 w-6" />,
                title: "Maxpo Special Events",
                description:
                  "At Maxpo, we bring creativity, precision, and innovation to special events, making every moment extraordinary. Whether it's a product launch, gala dinner, award ceremony, or corporate celebration, we ensure flawless execution and lasting impact.",
                features: [
                  "Bespoke Event Planning",
                  "Seamless Execution",
                  "Immersive Experiences",
                  "Cutting-Edge Production",
                  "Global Expertise",
                ],
              },
              {
                icon: <Lightbulb className="h-6 w-6" />,
                title: "Maxpo Awards & Recognition",
                description:
                  "At Maxpo, we create prestigious award ceremonies that shine a spotlight on excellence, innovation, and success. From concept to execution, we ensure a seamless and memorable celebration that leaves a lasting impact. ",
                features: [
                  "End-to-End Award Ceremony Management",
                  "Elegant Stage & Set Design ",
                  "Seamless Nomination & Judging Process",
                  "Engaging Entertainment & Guest Experience",
                  "Global Standards, Local Expertise",
                ],
              },
              {
                icon: <BarChart className="h-6 w-6" />,
                title: "Maxpo Accreditations",
                description:
                  "At Maxpo, we provide efficient and secure accreditation solutions to ensure smooth access management for exhibitions, conferences, and special events. Our expertise guarantees a hassle-free experience for organizers, exhibitors, and attendees alike. ",
                features: [
                  "End-to-End Accreditation Management",
                  "Seamless Access Control",
                  "Customizable Solutions",
                  "Real-Time Data & Analytics",
                  "Global Standards Compliance",
                ],
              },
              {
                icon: <Megaphone className="h-6 w-6" />,
                title: "Maxpo Trade Shows",
                description:
                  "At Maxpo, we specialize in organizing and managing world-class trade shows that connect businesses, showcase innovation, and drive industry growth. Our comprehensive solutions ensure seamless execution and maximum impact.",
                features: [
                  "End-to-End Trade Show Management",
                  "Exhibitor & Visitor Engagement ",
                  "Seamless Logistics & Operations",
                  "Innovative Technology Integration",
                  "Global Expertise, Local Execution",
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
            Our structured approach ensures every event is meticulously planned, flawlessly executed, and designed to deliver exceptional impact, engagement, and lasting success. 
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Process Steps with sequential animation */}
            {[
              {
                number: "1",
                title: "Analyze",
                description:
                  "We study the market extensively and analyze trends and consumer behavior to identify exactly what your branding already has and what more it needs.",
              },
              {
                number: "2",
                title: "Design",
                description:
                  "Using the insights, we employ a strategic approach to achieve the aesthetic, functional, economic, and sociopolitical dimensions.",
              },
              {
                number: "3",
                title: "Execute",
                description:
                  "We work systematically, outlining and achieving milestones with each step, from idea generation to implementation.",
              },
              {
                number: "4",
                title: "Evaluate",
                description:
                  "Carefully sifting through all our data, we provide you with actionable insights to enable you to react and assist in the identification of future change.",
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
            Ready to bring your vision to life?
            </h2>
            <p className="mb-8 text-lg text-black">
              Reach out and let&apos;s create something exceptional together!
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

