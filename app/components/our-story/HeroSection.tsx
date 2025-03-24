"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] pt-20 overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Image
          src="/images/about/WhatsApp Image 2025-03-21 at 12.44.08 PM.jpeg"
          alt="About Maxpo"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/80" />
      </motion.div>
      <div className="container relative z-10 mx-auto px-4 py-32 text-white md:py-40">
        <motion.h1 
          className="mb-6 text-4xl font-bold tracking-tight md:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our Story
        </motion.h1>
        <motion.p 
          className="max-w-2xl text-lg text-gray-300 md:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          From Vision to Reality: Crafting Unforgettable Events, Exhibitions, Conferences and Awards and Recognition
        </motion.p>
      </div>
    </section>
  )
}
