"use client"

import type React from "react"

import Image from "next/image"
import { ArrowRight, CheckCircle, Briefcase, MapPin, Clock, DollarSign } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 },
  },
}

interface AnimatedCardProps {
  children: React.ReactNode
  delay?: number
}

const AnimatedCard = ({ children, delay = 0 }: AnimatedCardProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      transition={{ delay }}
      className="h-full"
    >
      {children}
    </motion.div>
  )
}

export default function Careers() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <motion.section className="relative h-[80vh] pt-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
  <motion.div
    initial={{ scale: 1.1 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1.5, ease: "easeOut" }}
    className="absolute inset-0 h-full w-full"
  >
    <Image
      src="/images/careers/WhatsApp Image 2025-03-21 at 2.33.02 PM.jpeg"
      alt="Careers at Maxpo"
      fill
      priority
    />
    <div className="absolute inset-0 bg-black/60" />
  </motion.div>
</div>

        <motion.div
          className="container relative z-10 mx-auto px-4 py-32 text-white md:py-40"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="mb-6 text-4xl font-bold tracking-tight md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Careers at Maxpo
          </motion.h1>
          <motion.p
            className="max-w-2xl text-lg text-gray-300 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Join our team of passionate professionals and help shape the future of the exhibition industry.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Why Join Us */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Why Join Maxpo?</h2>
            <p className="mb-16 text-lg text-gray-600">
              At Maxpo, we believe in talent, ambition, and fresh perspectives. We offer a dynamic work environment
              where creativity thrives and innovation is encouraged.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Benefit 1 */}
            <AnimatedCard delay={0.1}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <CardContent className="p-6">
                  <motion.div
                    className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-950 text-white"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span className="text-lg font-bold">1</span>
                  </motion.div>
                  <h3 className="mb-4 text-xl font-semibold">Innovation Culture</h3>
                  <p className="text-gray-600">
                    We foster a culture of innovation where new ideas are welcomed and creativity is encouraged. Our
                    team members have the freedom to explore new approaches and contribute to the evolution of our
                    industry.
                  </p>
                </CardContent>
              </Card>
            </AnimatedCard>

            {/* Benefit 2 */}
            <AnimatedCard delay={0.2}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <CardContent className="p-6">
                  <motion.div
                    className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-950 text-white"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span className="text-lg font-bold">2</span>
                  </motion.div>
                  <h3 className="mb-4 text-xl font-semibold">Global Opportunities</h3>
                  <p className="text-gray-600">
                    With offices in Dubai and India, and projects around the world, Maxpo offers global career
                    opportunities and the chance to work with diverse teams and clients across different markets and
                    cultures.
                  </p>
                </CardContent>
              </Card>
            </AnimatedCard>

            {/* Benefit 3 */}
            <AnimatedCard delay={0.3}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <CardContent className="p-6">
                  <motion.div
                    className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-950 text-white"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span className="text-lg font-bold">3</span>
                  </motion.div>
                  <h3 className="mb-4 text-xl font-semibold">Professional Growth</h3>
                  <p className="text-gray-600">
                    We invest in our team&apos;s development through training programs, mentorship opportunities, and
                    challenging projects that push boundaries and develop new skills.
                  </p>
                </CardContent>
              </Card>
            </AnimatedCard>

            {/* Benefit 4 */}
            <AnimatedCard delay={0.4}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <CardContent className="p-6">
                  <motion.div
                    className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-950 text-white"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span className="text-lg font-bold">4</span>
                  </motion.div>
                  <h3 className="mb-4 text-xl font-semibold">Collaborative Environment</h3>
                  <p className="text-gray-600">
                    Our team works collaboratively, sharing knowledge and expertise to create exceptional exhibition
                    experiences. We believe in the power of teamwork and the value of diverse perspectives.
                  </p>
                </CardContent>
              </Card>
            </AnimatedCard>

            {/* Benefit 5 */}
            <AnimatedCard delay={0.5}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <CardContent className="p-6">
                  <motion.div
                    className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-950 text-white"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span className="text-lg font-bold">5</span>
                  </motion.div>
                  <h3 className="mb-4 text-xl font-semibold">Work-Life Balance</h3>
                  <p className="text-gray-600">
                    We understand the importance of balance and offer flexible work arrangements, competitive benefits,
                    and a supportive environment that prioritizes wellbeing.
                  </p>
                </CardContent>
              </Card>
            </AnimatedCard>

            {/* Benefit 6 */}
            <AnimatedCard delay={0.6}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <CardContent className="p-6">
                  <motion.div
                    className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-950 text-white"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span className="text-lg font-bold">6</span>
                  </motion.div>
                  <h3 className="mb-4 text-xl font-semibold">Impactful Work</h3>
                  <p className="text-gray-600">
                    At Maxpo, your work has a direct impact on the success of our events and the experiences of
                    thousands of attendees. We create platforms that drive business growth and foster meaningful
                    connections.
                  </p>
                </CardContent>
              </Card>
            </AnimatedCard>
          </motion.div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid gap-12 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div className="relative h-[400px] overflow-hidden rounded-2xl md:h-auto" variants={scaleUp}>
              <Image
                src="/images/careers/WhatsApp Image 2025-03-21 at 2.34.40 PM.jpeg"
                alt="Maxpo Team Culture"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div className="flex flex-col justify-center" variants={fadeIn}>
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Our Culture</h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  At Maxpo, we work hard, but we also know how to keep the energy high. Our culture is a mix of
                  collaboration, ambition, and celebration. We support each other, push each other to do better, and
                  celebrate our successes together.
                </p>
                <p>
                  Innovation drives everything we do. Brainstorming sessions at Maxpo are dynamic, fast-paced, and
                  filled with fresh perspectives. We challenge conventional thinking, explore new possibilities, and
                  turn ambitious ideas into reality.
                </p>
                <p>
                  We operate in a world that&apos;s constantly evolving, and we embrace that change. Our team stays
                  ahead of industry trends, new technologies, and market shifts to ensure our events remain relevant,
                  impactful, and future-focused.
                </p>
                <p>
                  At the core of it all, Maxpo is more than a team—we&apos;re a force for change in the industry,
                  shaping the future of global trade shows and business connections.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Open Positions</h2>
            <p className="mb-16 text-lg text-gray-600">
              Explore our current opportunities and find your perfect role at Maxpo.
            </p>
          </motion.div>

          <Tabs defaultValue="dubai" className="mx-auto max-w-4xl">
            <TabsList className="mb-8 grid w-full grid-cols-2">
              <TabsTrigger value="dubai">Dubai Office</TabsTrigger>
              <TabsTrigger value="india">India Office</TabsTrigger>
            </TabsList>

            <TabsContent value="dubai" className="space-y-6">
              {/* Job 1 */}
              <motion.div
                className="rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">Event Manager</h3>
                    <div className="mb-4 flex flex-wrap gap-3">
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800">
                        <Briefcase className="mr-1 h-3 w-3" /> Full-time
                      </span>
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800">
                        <MapPin className="mr-1 h-3 w-3" /> Dubai, UAE
                      </span>
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800">
                        <Clock className="mr-1 h-3 w-3" /> Immediate
                      </span>
                    </div>
                    <p className="mb-4 text-gray-600">
                      We&apos;re looking for an experienced Event Manager to plan and execute trade shows and
                      exhibitions, managing all aspects from concept to completion.
                    </p>
                    <div className="mb-4">
                      <h4 className="mb-2 font-medium">Key Responsibilities:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                          <span className="text-gray-600">Manage end-to-end event planning and execution</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                          <span className="text-gray-600">Coordinate with vendors, exhibitors, and sponsors</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                          <span className="text-gray-600">Develop and manage event budgets</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="rounded-full bg-blue-950 px-6 text-white hover:bg-gray-800">
                      Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Job 2 */}
              <motion.div
                className="rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">Marketing Specialist</h3>
                    <div className="mb-4 flex flex-wrap gap-3">
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800">
                        <Briefcase className="mr-1 h-3 w-3" /> Full-time
                      </span>
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800">
                        <MapPin className="mr-1 h-3 w-3" /> Dubai, UAE
                      </span>
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800">
                        <Clock className="mr-1 h-3 w-3" /> Immediate
                      </span>
                    </div>
                    <p className="mb-4 text-gray-600">
                      We&apos;re seeking a creative and data-driven Marketing Specialist to develop and implement
                      marketing strategies for our exhibitions and events.
                    </p>
                    <div className="mb-4">
                      <h4 className="mb-2 font-medium">Key Responsibilities:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                          <span className="text-gray-600">Develop and execute marketing campaigns</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                          <span className="text-gray-600">Manage social media and digital marketing initiatives</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                          <span className="text-gray-600">Analyze campaign performance and optimize strategies</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="rounded-full bg-blue-950 px-6 text-white hover:bg-gray-800">
                      Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="india" className="space-y-6">
              {/* Job 3 */}
              <motion.div
                className="rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">Exhibition Designer</h3>
                    <div className="mb-4 flex flex-wrap gap-3">
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800">
                        <Briefcase className="mr-1 h-3 w-3" /> Full-time
                      </span>
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800">
                        <MapPin className="mr-1 h-3 w-3" /> Mumbai, India
                      </span>
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800">
                        <Clock className="mr-1 h-3 w-3" /> Immediate
                      </span>
                    </div>
                    <p className="mb-4 text-gray-600">
                      We&apos;re looking for a talented Exhibition Designer to create innovative and impactful
                      exhibition stands and spaces for our clients.
                    </p>
                    <div className="mb-4">
                      <h4 className="mb-2 font-medium">Key Responsibilities:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                          <span className="text-gray-600">Design exhibition stands and spaces</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                          <span className="text-gray-600">Create 3D visualizations and renderings</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                          <span className="text-gray-600">
                            Collaborate with clients to understand their brand and objectives
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="rounded-full bg-black px-6 text-white hover:bg-gray-800">
                      Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Job 4 */}
              <motion.div
                className="rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">Business Development Manager</h3>
                    <div className="mb-4 flex flex-wrap gap-3">
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800">
                        <Briefcase className="mr-1 h-3 w-3" /> Full-time
                      </span>
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800">
                        <MapPin className="mr-1 h-3 w-3" /> Mumbai, India
                      </span>
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800">
                        <DollarSign className="mr-1 h-3 w-3" /> Competitive
                      </span>
                    </div>
                    <p className="mb-4 text-gray-600">
                      We&apos;re seeking an experienced Business Development Manager to drive growth in the Indian
                      market and expand our client base.
                    </p>
                    <div className="mb-4">
                      <h4 className="mb-2 font-medium">Key Responsibilities:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                          <span className="text-gray-600">Identify and pursue new business opportunities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                          <span className="text-gray-600">Build and maintain client relationships</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                          <span className="text-gray-600">
                            Develop proposals and presentations for potential clients
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="rounded-full bg-black px-6 text-white hover:bg-gray-800">
                      Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="mb-6 text-gray-600">
              Don&apos;t see a position that matches your skills? We&apos;re always looking for talented individuals to
              join our team.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="rounded-full bg-blue-950 px-8 text-white hover:bg-gray-800">
                Submit Your Resume <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Internship Program */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Internship Program</h2>
            <p className="mb-16 text-lg text-gray-600">
              Gain hands-on experience in the exhibition industry through our comprehensive internship program.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div className="relative h-[400px] overflow-hidden rounded-2xl md:h-auto" variants={scaleUp}>
              <Image
                src="/images/careers/WhatsApp Image 2025-03-21 at 2.46.38 PM.jpeg"
                alt="Maxpo Interns"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div className="flex flex-col justify-center space-y-6" variants={fadeIn}>
              <div>
                <h3 className="mb-3 text-2xl font-semibold">Learn from Industry Experts</h3>
                <p className="text-gray-600">
                  Our internship program offers a unique opportunity to work alongside experienced professionals and
                  gain valuable insights into the exhibition industry. You&apos;ll be involved in real projects and
                  contribute to the success of our events.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-2xl font-semibold">Develop Practical Skills</h3>
                <p className="text-gray-600">
                  From event planning and marketing to design and client management, our internships provide hands-on
                  experience in various aspects of the exhibition business, helping you build a strong foundation for
                  your career.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-2xl font-semibold">Potential for Full-Time Roles</h3>
                <p className="text-gray-600">
                  Many of our full-time team members started as interns. We&apos;re committed to identifying and
                  nurturing talent, with opportunities for exceptional interns to join our team permanently.
                </p>
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="mt-4 rounded-full bg-blue-950 px-8 text-white hover:bg-gray-800">
                  Apply for Internship <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

      </section>
      {/* CTA Section */}
      <section className="bg-gray-100 py-24 text-blue-950">
        <div className="container mx-auto px-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Ready to Join Our Team?</h2>
            <p className="mb-8 text-lg text-black">
              Explore our current opportunities and take the next step in your career with Maxpo.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button size="lg" className="rounded-full bg-white px-8 text-black hover:bg-gray-200 cursor-pointer">
                  View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white px-8 text-black hover:bg-white hover:text-black cursor-pointer"
                >
                  Submit Your Resume
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

