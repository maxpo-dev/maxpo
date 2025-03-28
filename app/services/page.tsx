"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle,  Landmark, Theater, Ribbon, Trophy, IdCard, ChartCandlestick } from "lucide-react"
import { motion, useInView, useAnimation } from "framer-motion"
import { useRef, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Add this interface for ProcessCard props at the top of the file, before the Services component
interface ProcessCardProps {
  step: number
  title: string
  description: string
  isInView: boolean
  delay: number
}

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
              At Maxpo, we design immersive exhibition experiences that captivate, connect, and drive business growth.
              From concept to execution, we bring your brand to life on the big stage
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
                icon:  <Landmark className="h-6 w-6"/>,
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
                icon: <Theater className="h-6 w-6"/>,
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
                icon: <Ribbon className="h-6 w-6"/>,
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
                icon: <Trophy className="h-6 w-6"/>,
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
                icon: <IdCard className="h-6 w-6"/>,
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
                icon: <ChartCandlestick className="h-6 w-6"/>,
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

      {/* Process Section with animated circular progress bars */}
      <section className="bg-white py-24" ref={processStepRef}>
        <div className="container mx-auto px-4">
          <div className="flex mb-16 justify-center">
            <div className="flex flex-col gap-2 mr-6">{/* Dots removed as per original */}</div>
            <motion.h2
              className="text-5xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Process
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Process Steps with Circular Progress Bars */}
            {[
              {
                step: 1,
                title: "Analyze",
                // percentage: 25,
                description:
                  "We study the market extensively and analyze trends and consumer behavior to identify exactly what your branding already has and what more it needs.",
              },
              {
                step: 2,
                title: "Design",
                // percentage: 50,
                description:
                  "Using the insights, we employ a strategic approach to achieve the aesthetic, functional, economic, and sociopolitical dimensions.",
              },
              {
                step: 3,
                title: "Execute",
                // percentage: 75,
                description:
                  "We work systematically, outlining and achieving milestones with each step, from idea generation to implementation.",
              },
              {
                step: 4,
                title: "Evaluate",
                // percentage: 100,
                description:
                  "Carefully sifting through all our data, we provide you with actionable insights to enable you to reflect and assist in the identification of future change.",
              },
            ].map((process, index) => (
              <ProcessCard
                key={index}
                step={process.step}
                title={process.title}
                // percentage={process.percentage}
                description={process.description}
                isInView={isProcessInView}
                delay={index * 0.2}/>
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
            <p className="mb-8 text-lg text-black">Reach out and let&apos;s create something exceptional together!</p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact">
                  <Button size="lg" className="rounded-full bg-blue-950 px-8 text-white hover:bg-blue-900">
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
              {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white px-8 text-black hover:bg-gray-300 hover:text-black"
                >
                  View Our Portfolio
                </Button>
              </motion.div> */}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// Replace the ProcessCard function with this properly typed version
function ProcessCard({ step, title, description, isInView, delay }: ProcessCardProps) {
  const controls = useAnimation()
  const radius = 120 // Circle radius
  const circumference = 2 * Math.PI * radius
  // Fixed percentage based on step (25%, 50%, 75%, 100%)
  const percentage = step * 25
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  useEffect(() => {
    if (isInView) {
      // Animate the circle
      controls.start({
        strokeDashoffset,
        transition: { duration: 1.5, ease: "easeInOut" },
      })
    }
  }, [isInView, strokeDashoffset, controls])

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="w-full max-w-xs shadow-lg hover:shadow-xl transition-shadow duration-300 h-[500px] flex flex-col">
        <CardContent className="p-6 flex flex-col items-center justify-between h-full">
          <div className="relative w-64 h-64 flex items-center justify-center mb-4">
            {/* Background circle */}
            <svg width="260" height="260" viewBox="0 0 260 260" className="absolute">
              <circle cx="130" cy="130" r={radius} fill="none" stroke="#E5E7EB" strokeWidth="8" />
            </svg>

            {/* Progress circle */}
            <svg
              width="260"
              height="260"
              viewBox="0 0 260 260"
              className="absolute"
              style={{ transform: "rotate(-90deg)" }}
            >
              <motion.circle
                cx="130"
                cy="130"
                r={radius}
                fill="none"
                stroke="#172554" // blue-950
                strokeWidth="8"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                animate={controls}
                strokeLinecap="round"
              />
            </svg>

            {/* Content in the center */}
            <div className="z-10 text-center">
              <motion.span
                className="text-7xl font-light text-blue-950 leading-none block"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.5, delay: delay + 0.3 }}
              >
                {step}
              </motion.span>
              <motion.p
                className="text-blue-950 text-2xl mt-2 font-medium"
                initial={{ y: 10, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                transition={{ duration: 0.5, delay: delay + 0.5 }}
              >
                {title}
              </motion.p>
            </div>
          </div>

          <p className="text-gray-700 text-center mt-4">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

