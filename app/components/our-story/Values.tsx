"use client";

import { motion } from "framer-motion";

export default function Values() {
  const values = [
    { number: "1", title: "Excellence in Execution", description: "We aim for perfection in each project..." },
    { number: "2", title: "Innovation and Adaptability", description: "We stay ahead of industry trends..." },
    { number: "3", title: "Integrity and Transparency", description: "We maintain the highest levels of integrity..." },
    { number: "4", title: "Client-Centric Approach", description: "Understanding our client’s needs..." },
    { number: "5", title: "Collaboration and Teamwork", description: "Believing in the power of teamwork..." },
    { number: "6", title: "Culture of Energy & Fun", description: "A mix of collaboration, ambition, and celebration..." }
  ];

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Our Values</h2>
          <p className="mb-16 text-lg text-gray-600">The principles that guide everything we do at Maxpo Exhibitions.</p>
        </div>

        {/* Motion Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ y: 100, scale: 0.8, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2, type: "spring" }}
              className="rounded-xl border border-gray-200 p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Circle Number */}
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-950">
                <span className="text-2xl text-white font-bold">{value.number}</span>
              </div>

              {/* Title & Description */}
              <h3 className="mb-4 text-xl font-semibold">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
