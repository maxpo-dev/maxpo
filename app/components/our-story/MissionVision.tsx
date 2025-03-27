"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function MissionVision() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        delay: custom * 0.2,
        ease: [0.215, 0.61, 0.355, 1] // Cubic bezier for a nice easing
      }
    })
  }

  return (
    <section className="py-24 bg-white text-black" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div 
            className="rounded-2xl bg-gray-100 p-8 md:p-12 shadow-md"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0}
            whileHover={{ 
              y: -10, 
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3 
              className="mb-6 text-2xl font-bold"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Our Mission
            </motion.h3>
            <motion.p 
              className="text-gray-600"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Our mission is to spark innovation, cultivate meaningful connections, and open
new doors for businesses worldwide. Every event we create is designed to empower industries, drive collaboration, and shape the future of global commerce.

            </motion.p>
          </motion.div>
          
          <motion.div 
            className="rounded-2xl bg-gray-100 p-8 md:p-12 shadow-md"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={1}
            whileHover={{ 
              y: -10, 
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3 
              className="mb-6 text-2xl font-bold"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Our Vision
            </motion.h3>
            <motion.p 
              className="text-gray-600"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Our vision is to transform trade shows into catalysts for industry evolution,
making them more than just networking spaces but powerful engines for
innovation and global impact.

            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
