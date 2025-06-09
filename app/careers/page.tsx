"use client"

import type React from "react"

import { useState, memo, useCallback, useMemo } from "react"
import Image from "next/image"
import { ArrowRight, CheckCircle, Briefcase, MapPin, Clock, DollarSign } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { JobApplicationForm } from "@/app/components/job-application-form"

// Optimized animation variants - moved outside component to prevent recreation
const ANIMATION_VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        ease: "easeOut",
      },
    },
  },
  scaleUp: {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },
  slideUp: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
} as const

// Types
interface JobPosition {
  id: string
  title: string
  location: string
  type: string
  timing: string
  description: string
  responsibilities: string[]
  qualifications: string[]
  salary?: string
}

interface BenefitCard {
  id: number
  title: string
  description: string
}

interface AnimatedCardProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

// Optimized AnimatedCard component
const AnimatedCard = memo(({ children, delay = 0, className = "" }: AnimatedCardProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "50px 0px",
  })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={ANIMATION_VARIANTS.fadeIn}
      transition={{ delay }}
      className={`h-full ${className}`}
    >
      {children}
    </motion.div>
  )
})

AnimatedCard.displayName = "AnimatedCard"

// Optimized BenefitCard component
const BenefitCard = memo(({ benefit, delay }: { benefit: BenefitCard; delay: number }) => (
  <AnimatedCard delay={delay}>
    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      <CardContent className="p-6">
        <motion.div
          className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-950 text-white"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <span className="text-lg font-bold">{benefit.id}</span>
        </motion.div>
        <h3 className="mb-4 text-xl font-semibold">{benefit.title}</h3>
        <p className="text-gray-600">{benefit.description}</p>
      </CardContent>
    </Card>
  </AnimatedCard>
))

BenefitCard.displayName = "BenefitCard"

// Optimized JobCard component
const JobCard = memo(
  ({
    job,
    onApply,
    delay = 0,
  }: {
    job: JobPosition
    onApply: (title: string, location: string) => void
    delay?: number
  }) => {
    const handleApply = useCallback(() => {
      onApply(job.title, job.location)
    }, [job.title, job.location, onApply])

    return (
      <motion.article
        className="rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:shadow-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="mb-2 text-xl font-semibold">{job.title}</h3>
            <div className="mb-4 flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800">
                <Briefcase className="mr-1 h-3 w-3" aria-hidden="true" /> {job.type}
              </span>
              <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800">
                <MapPin className="mr-1 h-3 w-3" aria-hidden="true" /> {job.location}
              </span>
              <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800">
                {job.salary ? (
                  <DollarSign className="mr-1 h-3 w-3" aria-hidden="true" />
                ) : (
                  <Clock className="mr-1 h-3 w-3" aria-hidden="true" />
                )}
                {job.salary || job.timing}
              </span>
            </div>
            <p className="mb-4 text-gray-600">{job.description}</p>
            <div className="mb-4">
              <h4 className="mb-2 font-medium">Key Responsibilities:</h4>
              <ul className="space-y-1" role="list">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-green-500 flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-600">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="mb-2 font-medium">Required Qualifications:</h4>
              <ul className="space-y-1" role="list">
                {job.qualifications.map((qualification, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-blue-500 flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-600">{qualification}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              className="rounded-full bg-blue-950 px-6 text-white hover:bg-gray-800 transition-colors"
              onClick={handleApply}
              aria-label={`Apply for ${job.title} position`}
            >
              Apply Now <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </motion.div>
        </div>
      </motion.article>
    )
  },
)

JobCard.displayName = "JobCard"

export default function Careers() {
  // Memoized data to prevent unnecessary re-renders
  const benefits = useMemo<BenefitCard[]>(
    () => [
      {
        id: 1,
        title: "Innovation Culture",
        description:
          "We foster a culture of innovation where new ideas are welcomed and creativity is encouraged. Our team members have the freedom to explore new approaches and contribute to the evolution of our industry.",
      },
      {
        id: 2,
        title: "Global Opportunities",
        description:
          "With offices in Dubai and India, and projects around the world, Maxpo offers global career opportunities and the chance to work with diverse teams and clients across different markets and cultures.",
      },
      {
        id: 3,
        title: "Professional Growth",
        description:
          "We invest in our team's development through training programs, mentorship opportunities, and challenging projects that push boundaries and develop new skills.",
      },
      {
        id: 4,
        title: "Collaborative Environment",
        description:
          "Our team works collaboratively, sharing knowledge and expertise to create exceptional exhibition experiences. We believe in the power of teamwork and the value of diverse perspectives.",
      },
      {
        id: 5,
        title: "Work-Life Balance",
        description:
          "We understand the importance of balance and offer flexible work arrangements, competitive benefits, and a supportive environment that prioritizes wellbeing.",
      },
      {
        id: 6,
        title: "Impactful Work",
        description:
          "At Maxpo, your work has a direct impact on the success of our events and the experiences of thousands of attendees. We create platforms that drive business growth and foster meaningful connections.",
      },
    ],
    [],
  )

  const dubaiJobs = useMemo<JobPosition[]>(
    () => [
      {
        id: "event-manager-dubai",
        title: "Event Manager",
        location: "Dubai, UAE",
        type: "Full-time",
        timing: "Immediate",
        description:
          "We're looking for an experienced Event Manager to plan and execute trade shows and exhibitions, managing all aspects from concept to completion.",
        responsibilities: [
          "Manage end-to-end event planning and execution",
          "Coordinate with vendors, exhibitors, and sponsors",
          "Develop and manage event budgets",
        ],
        qualifications: [
          "Bachelor's degree in Event Management, Marketing, or related field",
          "3+ years of experience in event planning and management",
          "Strong project management and organizational skills",
          "Excellent communication and negotiation abilities",
          "Proficiency in event management software and MS Office",
          "Ability to work under pressure and meet tight deadlines",
        ],
      },
      {
        id: "marketing-specialist-dubai",
        title: "Marketing Specialist",
        location: "Dubai, UAE",
        type: "Full-time",
        timing: "Immediate",
        description:
          "We're seeking a creative and data-driven Marketing Specialist to develop and implement marketing strategies for our exhibitions and events.",
        responsibilities: [
          "Develop and execute marketing campaigns",
          "Manage social media and digital marketing initiatives",
          "Analyze campaign performance and optimize strategies",
        ],
        qualifications: [
          "Bachelor's degree in Marketing, Communications, or related field",
          "2+ years of experience in digital marketing",
          "Proficiency in Google Analytics, social media platforms, and marketing tools",
          "Strong analytical and creative thinking skills",
          "Experience with content creation and graphic design",
          "Knowledge of SEO/SEM best practices",
        ],
      },
    ],
    [],
  )

  const indiaJobs = useMemo<JobPosition[]>(
    () => [
      {
        id: "Sales-Sponsorship-Associater-mumbai",
        title: "Sales Sponsorship Associate",
        location: "Frazer Town, Bangalore, India",
        type: "Full-time",
        timing: "Immediate",
        description:
          "We are seeking a proactive Sales Sponsorship Associate is responsible for identifying and securing sponsorship opportunities for events, ensuring alignment with clients' goals and brand objectives. This role requires developing and executing sponsorship proposals, maintaining strong client relationships, and managing the full lifecycle of sponsorship agreements. The ideal candidate will be knowledgeable in sponsorship and advertising, capable of handling last-minute changes or pullouts, and skilled in event execution and agreement tracking.",
        responsibilities: [
          "Identify and secure sponsorship opportunities for events",
          "Build and Maintain relationships with sponsors and stakeholders",
          "Develop and implement sponsorship proposals and agreements",
          "Coordinate with Internal teams to ensure successful event execution",
        ],
        qualifications: [
          "1 year of experience with a Graduation or MBA Preferred. Freshers are also encouraged to apply",
          ".Good communication, interpersonal, Organizational and Time Management Skills",
        ],
      },
      {
        id: "business-dev-mumbai",
        title: " Business Development Executive ",
        location: "Kashmir, Bangalore, India",
        type: "Full-time",
        salary: "Competitive",
        timing: "Immediate",
        description:
          "We are looking for ambitious and driven MBA graduates to join our dynamic team as Business Development Executive . This entry-level role is ideal for individuals seeking to kickstart their career in sales and business development. As a Business Development Associate, you will receive structured training and gain hands-on experience in client acquisition, relationship management, and strategic market expansion.",
        responsibilities: [
          "Identify and approach potential clients, sponsors, and exhibitors through lead generation methods including cold calling, market research, and industry networking.",
          "Promote and sell exhibition stall packages and sponsorship opportunities tailored to client needs and aligned with event themes",
          "Establish and nurture long-term relationships with clients to encourage repeat business and strategic partnerships",
          "Work closely with the sales team to meet individual and collective monthly and quarterly revenue and booking targets",
          "Represent the organization at industry events, trade shows, and client meetings to build market presence and enhance business knowledge",
          "Contribute to internal sales strategy discussions and participate in regular training sessions to refine selling techniques and product knowledge",
        ],
        qualifications: [
          "Freshers with MBA in Marketing, Sales, Business, or a related discipline",
          "Excellent verbal and written communication skills",
          "Strong interpersonal and negotiation abilities",
          "A proactive and goal-oriented mindset with a passion for business growth",
          "Ability to work independently as well as collaborate within a team environment",
          "Basic understanding of B2B sales processes and customer relationship management is an advantage",
        ],
      },
    ],
    [],
  )

  const [applicationForm, setApplicationForm] = useState({
    isOpen: false,
    jobTitle: "",
    jobLocation: "",
  })

  const openApplicationForm = useCallback((jobTitle: string, jobLocation: string) => {
    setApplicationForm({
      isOpen: true,
      jobTitle,
      jobLocation,
    })
  }, [])

  const closeApplicationForm = useCallback(() => {
    setApplicationForm((prev) => ({
      ...prev,
      isOpen: false,
    }))
  }, [])

  const scrollToPositions = useCallback(() => {
    document.getElementById("open-positions")?.scrollIntoView({ behavior: "smooth" })
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      {/* Application Form Modal */}
      <JobApplicationForm
        isOpen={applicationForm.isOpen}
        onClose={closeApplicationForm}
        jobTitle={applicationForm.jobTitle}
        jobLocation={applicationForm.jobLocation}
      />

      {/* Hero Section */}
      <motion.section
        className="relative h-[80vh] pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 h-full w-full"
          >
            <Image
              src="/images/careers/WhatsApp Image 2025-03-21 at 2.33.02 PM.jpeg?height=800&width=1200"
              alt="Careers at Maxpo - Team collaboration"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/60" />
          </motion.div>
        </div>

        <div className="container relative z-10 mx-auto px-4 py-32 text-white md:py-40">
          <motion.div
            variants={ANIMATION_VARIANTS.slideUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">Careers at Maxpo</h1>
            <p className="max-w-2xl text-lg text-gray-300 md:text-xl">
              Join our team of passionate professionals and help shape the future of the exhibition industry.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Join Us */}
      <section className="bg-white py-24" aria-labelledby="benefits-heading">
        <div className="container mx-auto px-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={ANIMATION_VARIANTS.fadeIn}
          >
            <h2 id="benefits-heading" className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
              Why Join Maxpo?
            </h2>
            <p className="mb-16 text-lg text-gray-600">
              At Maxpo, we believe in talent, ambition, and fresh perspectives. We offer a dynamic work environment
              where creativity thrives and innovation is encouraged.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr"
            variants={ANIMATION_VARIANTS.staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {benefits.map((benefit, index) => (
              <BenefitCard key={benefit.id} benefit={benefit} delay={index * 0.1} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="bg-gray-50 py-24" aria-labelledby="culture-heading">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid gap-12 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={ANIMATION_VARIANTS.staggerContainer}
          >
            <motion.div
              className="relative h-[400px] overflow-hidden rounded-2xl md:h-auto"
              variants={ANIMATION_VARIANTS.scaleUp}
            >
              <Image
                src="/images/careers/WhatsApp Image 2025-03-21 at 2.34.40 PM.jpeg?height=500&width=600"
                alt="Maxpo team culture - collaborative workspace"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div className="flex flex-col justify-center" variants={ANIMATION_VARIANTS.fadeIn}>
              <h2 id="culture-heading" className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                Our Culture
              </h2>
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
  We operate in a world that&apos;s constantly evolving, and we embrace that change. Our team stays ahead of
  industry trends, new technologies, and market shifts to ensure our events remain relevant, impactful,
  and future-focused.
</p>
<p>
  At the core of it all, Maxpo is more than a team—we&apos;re a force for change in the industry, shaping the
  future of global trade shows and business connections.
</p>

              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="bg-white py-24" aria-labelledby="positions-heading">
        <div className="container mx-auto px-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={ANIMATION_VARIANTS.fadeIn}
          >
            <h2 id="positions-heading" className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
              Open Positions
            </h2>
            <p className="mb-16 text-lg text-gray-600">
              Explore our current opportunities and find your perfect role at Maxpo.
            </p>
          </motion.div>

          <Tabs defaultValue="india" className="mx-auto max-w-4xl">
            <TabsList className="mb-8 grid w-full grid-cols-2">
              <TabsTrigger value="india">India Office</TabsTrigger>
              <TabsTrigger value="dubai">Dubai Office</TabsTrigger>
            </TabsList>

            <TabsContent value="india" className="space-y-6">
              {indiaJobs.map((job, index) => (
                <JobCard key={job.id} job={job} onApply={openApplicationForm} delay={index * 0.2} />
              ))}
            </TabsContent>

            <TabsContent value="dubai" className="space-y-6">
              {dubaiJobs.map((job, index) => (
                <JobCard key={job.id} job={job} onApply={openApplicationForm} delay={index * 0.2} />
              ))}
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
              {
                "Don't see a position that matches your skills? We're always looking for talented individuals to join our team."
              }
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="rounded-full bg-blue-950 px-8 text-white hover:bg-gray-800 transition-colors"
                onClick={() => openApplicationForm("General Application", "Any Location")}
                aria-label="Submit your resume for general consideration"
              >
                Submit Your Resume <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Internship Program */}
      <section className="bg-gray-50 py-24" aria-labelledby="internship-heading">
        <div className="container mx-auto px-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={ANIMATION_VARIANTS.fadeIn}
          >
            <h2 id="internship-heading" className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
              Internship Program
            </h2>
            <p className="mb-16 text-lg text-gray-600">
              Gain hands-on experience in the exhibition industry through our comprehensive internship program.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={ANIMATION_VARIANTS.staggerContainer}
          >
            <motion.div
              className="relative h-[400px] overflow-hidden rounded-2xl md:h-auto"
              variants={ANIMATION_VARIANTS.scaleUp}
            >
              <Image
                src="/images/careers/WhatsApp Image 2025-03-21 at 2.46.38 PM.jpeg?height=500&width=600"
                alt="Maxpo interns working on projects"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div className="flex flex-col justify-center space-y-6" variants={ANIMATION_VARIANTS.fadeIn}>
              <div>
                <h3 className="mb-3 text-2xl font-semibold">Learn from Industry Experts</h3>
                <p className="text-gray-600">
                  {
                    "Our internship program offers a unique opportunity to work alongside experienced professionals and gain valuable insights into the exhibition industry. You'll be involved in real projects and contribute to the success of our events."
                  }
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
                  {
                    "Many of our full-time team members started as interns. We're committed to identifying and nurturing talent, with opportunities for exceptional interns to join our team permanently."
                  }
                </p>
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="mt-4 rounded-full bg-blue-950 px-8 text-white hover:bg-gray-800 transition-colors"
                  onClick={() => openApplicationForm("Internship", "Dubai/Mumbai")}
                  aria-label="Apply for internship program"
                >
                  Apply for Internship <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-24 text-blue-950" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 id="cta-heading" className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
              Ready to Join Our Team?
            </h2>
            <p className="mb-8 text-lg text-black">
              Explore our current opportunities and take the next step in your career with Maxpo.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  size="lg"
                  className="rounded-full bg-white px-8 text-black hover:bg-gray-200 transition-colors"
                  onClick={scrollToPositions}
                  aria-label="View all open positions"
                >
                  View Open Positions <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
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
                  className="rounded-full border-white px-8 text-black hover:bg-white hover:text-black transition-colors"
                  onClick={() => openApplicationForm("General Application", "Any Location")}
                  aria-label="Submit your resume for general consideration"
                >
                  Submit Your Resume
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
