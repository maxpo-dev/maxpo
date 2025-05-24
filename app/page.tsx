"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Globe, Lightbulb, Users, Building, Award, Calendar, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Navbar from "@/app/components/navbar"
import { Typewriter } from "react-simple-typewriter"

// import { useState } from "react"
// import Footer from "@/app/components/footer"

export default function Home() {
  

  // Sample upcoming events data
  const upcomingEvents = [
    {
      id: 1,
      title: "GMEC India 2025",
      date: "June 20-22, 2025",
      location: "Palace Ground, Bengaluru",
      image: "/images/events/gmec.jpeg",
      description: "GMEC INDIA 2025 is a premier international platform dedicated to advancing healthcare innovation by bringing together key stakeholders across the medical and healthcare industry. Our platform unites medical professionals, manufacturers, suppliers, policymakers, and innovators, fostering connections that drive impactful solutions to global healthcare challenges.",
      category: "Exhibition",
      website: "https://gmecexhibitions.in/",
    },
    // {
    //   id: 2,
    //   title: "Gulf News presents India Property Show",
    //   date: "17-18 May 2025",
    //   location: "Crowne Plaza, Sheikh Zayed Road, Dubai",
    //   image: "/images/events/WhatsApp Image 2025-03-21 at 11.58.43 AM (1).jpeg",
    //   description: "India’s real estate sector remain key economic growth pillars, offering immense opportunities for investors and homebuyers. A premier real estate exhibition brings together top developers, real estate experts, and investors under one roof, offering unparalleled opportunities to explore the best properties of India in Dubai for the NRIs over there",
    //   category: "Exhibition",
    //   website: "",
    // },
    {
      id: 3,
      title: "Future Digitech Summit & Awards 2025",
      date: "28-29 May 2025",
      location: "Pullman, Kuala Lumpur City Centre, Malaysia",
      image: "/images/events/WhatsApp Image 2025-03-21 at 4.06.56 PM (1).jpeg",
      description: "Future DigiTech Summit 2025 in Kuala Lumpur, where industry leaders, innovators, and visionaries come together to explore the latest trends and technologies shaping our digital future. This two-day event promises insightful discussions, hands-on workshops, and unparalleled networking opportunities.",
      category: "Conference and Awards",
      website:"https://www.futureproptechsummit.com/",
    },
        {
      id: 4,
      title: "Future Proptech Summit",
      date: "14-15 October 2025",
      location: "Le Méridien Hotel, Airport Road, Dubai",
      description:
        "The Future Proptech Summit is designed for professionals, entrepreneurs, and organizations seeking to understand and invest in the future of real estate technology. ",
      category: "Conferences",
      image: "/images/events/WhatsApp Image 2025-03-21 at 6.14.29 PM.jpeg",
      website: "https://www.futureproptechsummit.com/",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden bg-blue-950 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Exhibition hall"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto flex flex-col items-center px-4 py-32 text-center md:py-48">
          {/* Motion effect for h1 */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl pb-10"
          >
            Transforming Business Events with Innovation & Excellence
          </motion.h1>

          {/* Typewriter effect for p */}
          <p className="mb-8 max-w-3xl text-lg text-gray-300 md:text-xl">
            <Typewriter
              words={[
                "Seamlessly Designed, Perfectly Delivered. Redefining the business event landscape through innovation and collaboration.",
              ]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </p>

          <Link href="/events">
            <Button size="lg" className="rounded-full bg-white px-8 text-black hover:bg-gray-200">
              Discover Our Events <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="relative py-24 bg-gray-100 overflow-hidden">
      {/* Background Image */}
      {/* <div className="absolute inset-0">
        <Image
          src=""
          alt="Maxpo Exhibition"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="opacity-30"
        />
      </div> */}

      <div className="relative container mx-auto px-6 md:px-12 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">
          {/* Animated Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
              Maxpo Exhibitions
            </h2>

            {/* Styled Paragraph */}
            <p className="mb-4 text-lg leading-relaxed text-gray-800 md:text-xl">
              Maxpo Exhibitions is redefining the business event landscape by creating dynamic trade shows, conferences,
              and immersive experiences. Our focus on
              <span className="font-semibold text-black"> innovation </span> and
              <span className="font-semibold text-black"> collaboration </span> provides a platform for global leaders
              and decision-makers to shape the future of business.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-gray-800 md:text-xl">
              We are committed to <span className="font-semibold">Quality</span> and <span className="font-semibold"> Engagement</span>,
              reimagining how industries connect while fostering new opportunities.
            </p>

            {/* Call to Action Button */}
            {/* <motion.a
              href="#contact"
              className="inline-block bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
              whileHover={{ scale: 1.05 }}
            >
              Learn More
            </motion.a> */}
          </motion.div>
        </div>
      </div>
    </section>

      <section className="relative bg-gradient-to-b from-gray-100 to-white py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Title */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl mb-4">
              Upcoming <span className="text-blue-600">Events</span>
            </h2>
            <p className="text-lg text-gray-600 md:text-xl">
              Join us at our next world-class exhibitions and conferences
            </p>
          </motion.div>
        </div>

        {/* Event Cards Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
  {upcomingEvents.map((event, index) => (
    <motion.div
      key={event.id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-[250px] overflow-hidden rounded-t-3xl">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className=" w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-xs font-medium py-1 px-3 rounded-full shadow-md">
          {event.category}
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-grow p-6 bg-white backdrop-blur-lg rounded-b-3xl">
        <h3 className="mb-3 text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
          {event.title}
        </h3>
        <p className="mb-4 text-gray-600 flex-grow">{event.description}</p>

        {/* Event Details */}
        <div className="space-y-2 text-sm text-gray-500">
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4 text-blue-600" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="mr-2 h-4 w-4 text-blue-600" />
            <span>{event.location}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-auto flex justify-between items-center pt-4">
          <Link href={event.website}>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Visit Site
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  ))}
</div>


        {/* View All Events Button */}
        <div className="mt-16 text-center">
          <Link href="/events">
            <Button className="rounded-full bg-blue-950 px-8 py-6 text-white hover:bg-blue-900 transition-all duration-300 shadow-lg">
              View All Events <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>


  

    

      {/* Our Essence */}
      <section className="bg-blue-950 py-24 text-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          {/* Section Header */}
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
                Our Essence: <span className="text-blue-400">Why Choose Maxpo?</span>
              </h2>
              <p className="mb-16 text-lg text-gray-300 md:text-xl leading-relaxed">
                Maxpo isn&apos;t just about hosting trade shows—we build thriving business ecosystems that spark innovation,
                foster powerful connections, and unlock global opportunities.
              </p>
            </motion.div>
          </div>

          {/* Grid Section */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Shaping the Future",
                text: "Innovation isn't a buzzword for us—it's our foundation. We curate events that showcase game-changing ideas, emerging trends, and transformative solutions to help industries evolve.",
                icon: <Lightbulb className="h-6 w-6 text-blue-600" />,
              },
              {
                title: "Connecting the Right People",
                text: "Business success starts with the right connections. Our platforms bring together industry leaders, visionaries, and decision-makers, creating high-impact networking opportunities.",
                icon: <Users className="h-6 w-6 text-blue-600" />,
              },
              {
                title: "Enabling Global Expansion",
                text: "Breaking into new markets can be challenging—Maxpo makes it seamless. We bridge industries across borders, opening doors to international collaborations and partnerships.",
                icon: <Globe className="h-6 w-6 text-blue-600" />,
              },
              {
                title: "Setting the Standard for Excellence",
                text: "Every detail matters. From flawless event execution to premium experiences, we set the bar high, ensuring each trade show delivers maximum impact for businesses and industries alike.",
                icon: <Award className="h-6 w-6 text-blue-600" />,
              },
              {
                title: "Creating Limitless Possibilities",
                text: "Maxpo isn't just an event—it's a launchpad for success. Whether you're a startup or an industry giant, we provide the platform, exposure, and connections to turn ambitions into achievements.",
                icon: <Building className="h-6 w-6 text-blue-600" />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-2xl bg-blue-900 p-8 shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md">
                  {item.icon}
                </div>
                <h3 className="mb-4 text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-gray-300">{item.text}</p>
              </motion.div>
            ))}

            {/* Call to Action Block */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center justify-center rounded-2xl bg-blue-900 p-10 text-center text-white shadow-lg"
            >
              <p className="text-xl font-semibold italic leading-relaxed">
                Maxpo isn&apos;t just where industries meet—it&apos;s where they grow, evolve, and redefine the future.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl py-12">
                Message from the Chairman
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative rounded-3xl bg-white p-8 shadow-xl md:p-12"
            >
              <div className="absolute -top-12 left-1/2 h-24 w-24 -translate-x-1/2 overflow-hidden rounded-full border-4 border-white shadow-lg">
                <Image src="/images/Layer 1.jpg" alt="M. Inayat Sait" fill className="object-cover" />
              </div>
              <div className="mt-12 space-y-4 text-gray-700">
                <p className="text-lg italic">
                  &quot;At Maxpo, we don&apos;t just organize trade shows—we build platforms for progress. Our mission
                  is to spark innovation, cultivate meaningful connections, and open new doors for businesses
                  worldwide.&quot;
                </p>
                <p className="text-lg font-medium">
                  &quot;Maxpo is where ideas take flight, industries converge, and businesses grow. We look forward to
                  continuing this journey with you.&quot;
                </p>
                <p className="text-right font-semibold">— M. Inayat Sait, Chairman & Founder</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-950 py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">Get in Touch</h2>
              <p className="mb-12 text-lg text-gray-300">
                Ready to create exceptional business experiences? Let&apos;s connect.
              </p>
            </motion.div>
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Link
                  href="/contact"
                  className="flex flex-col items-center justify-center rounded-2xl bg-white p-8 text-black transition-transform duration-300 hover:-translate-y-2"
                >
                  <h3 className="mb-2 text-xl font-semibold">Contact Us</h3>
                  <p className="text-gray-600">Reach out to our team</p>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Link
                  href="/events"
                  className="flex flex-col items-center justify-center rounded-2xl bg-white p-8 text-black transition-transform duration-300 hover:-translate-y-2"
                >
                  <h3 className="mb-2 text-xl font-semibold">Upcoming Events</h3>
                  <p className="text-gray-600">Discover our next exhibitions</p>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

