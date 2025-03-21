"use client";

import { motion } from "framer-motion";

export default function Timeline() {
  const timelineData = [
    { year: "2003", title: "The Beginning", description: "Maxpo Exhibitions was founded in Dubai..." },
    { year: "2008", title: "International Expansion", description: "Expanded operations internationally..." },
    { year: "2013", title: "India Office", description: "Established our office in India..." },
    { year: "2018", title: "Digital Transformation", description: "Embraced digital technologies..." },
    { year: "2023", title: "20 Years of Excellence", description: "Celebrating two decades of innovation..." }
  ];

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Our Journey</h2>
          <p className="mb-16 text-lg text-gray-600">
            Maxpo: 20 Years of Excellence, 15 Years of Global Impact...
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* Vertical line in center */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gray-200" />

          <div className="space-y-24">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Year Bubble */}
                <div className="absolute left-1/2 top-0 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue-950 text-white">
                  <span className="text-sm font-bold ">{item.year}</span>
                </div>

                {/* Timeline Card */}
                <div
                  className={`w-5/12 rounded-xl bg-gray-50 p-6 shadow-md md:p-8 ${
                    index % 2 === 0 ? "ml-auto mr-8" : "ml-8"
                  }`}
                >
                  <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
