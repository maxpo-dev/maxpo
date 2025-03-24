"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function Values() {
  const values = [
    { number: "1", title: "Excellence in Execution", description: "We aim for perfection in each project..." },
    { number: "2", title: "Innovation and Adaptability", description: "We stay ahead of industry trends..." },
    { number: "3", title: "Integrity and Transparency", description: "We maintain the highest levels of integrity..." },
    { number: "4", title: "Client-Centric Approach", description: "Understanding our client's needs..." },
    { number: "5", title: "Collaboration and Teamwork", description: "Believing in the power of teamwork..." },
    {
      number: "6",
      title: "Culture of Energy & Fun",
      description: "A mix of collaboration, ambition, and celebration...",
    },
  ]

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
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

  const circleVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3 },
    },
  }

  return (
    <section className="bg-white py-24" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Our Values</h2>
          <p className="mb-16 text-lg text-gray-600">
            The principles that guide everything we do at Maxpo Exhibitions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.3 },
              }}
              className="rounded-xl border border-gray-200 p-8 text-center shadow-sm"
            >
              {/* Circle Number with animation */}
              <motion.div
                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-950"
                variants={circleVariants}
                whileHover="hover"
              >
                <span className="text-2xl text-white font-bold">{value.number}</span>
              </motion.div>

              {/* Title with animation */}
              <motion.h3
                className="mb-4 text-xl font-semibold"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                {value.title}
              </motion.h3>

              {/* Description with animation */}
              <motion.p
                className="text-gray-600"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                {value.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

