import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"


export default function OurStory() {
  return (
    <div className="flex min-h-screen flex-col">
      

      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="About Maxpo"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-32 text-white md:py-40">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">Our Story</h1>
          <p className="max-w-2xl text-lg text-gray-300 md:text-xl">
            Two decades of innovation, excellence, and transforming the exhibition industry.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Our Journey</h2>
            <p className="mb-16 text-lg text-gray-600">
              From our humble beginnings to becoming a global leader in the exhibition industry, our journey has been
              defined by innovation, perseverance, and a commitment to excellence.
            </p>
          </div>

          <div className="relative mx-auto max-w-4xl">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gray-200" />

            {/* Timeline Items */}
            <div className="space-y-24">
              {/* 2003 */}
              <div className="relative">
                <div className="absolute left-1/2 top-0 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white">
                  <span className="text-sm font-bold">2003</span>
                </div>
                <div className="ml-auto mr-8 w-5/12 rounded-xl bg-gray-50 p-6 shadow-md md:p-8">
                  <h3 className="mb-3 text-xl font-semibold">The Beginning</h3>
                  <p className="text-gray-600">
                    Maxpo Exhibitions was founded in Dubai with a vision to transform how businesses connect through
                    trade shows and exhibitions.
                  </p>
                </div>
              </div>

              {/* 2008 */}
              <div className="relative">
                <div className="absolute left-1/2 top-0 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white">
                  <span className="text-sm font-bold">2008</span>
                </div>
                <div className="ml-8 w-5/12 rounded-xl bg-gray-50 p-6 shadow-md md:p-8">
                  <h3 className="mb-3 text-xl font-semibold">International Expansion</h3>
                  <p className="text-gray-600">
                    We expanded our operations internationally, bringing our innovative approach to exhibitions across
                    borders.
                  </p>
                </div>
              </div>

              {/* 2013 */}
              <div className="relative">
                <div className="absolute left-1/2 top-0 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white">
                  <span className="text-sm font-bold">2013</span>
                </div>
                <div className="ml-auto mr-8 w-5/12 rounded-xl bg-gray-50 p-6 shadow-md md:p-8">
                  <h3 className="mb-3 text-xl font-semibold">India Office</h3>
                  <p className="text-gray-600">
                    Established our office in India to strengthen our presence in the South Asian market and support our
                    growing operations.
                  </p>
                </div>
              </div>

              {/* 2018 */}
              <div className="relative">
                <div className="absolute left-1/2 top-0 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white">
                  <span className="text-sm font-bold">2018</span>
                </div>
                <div className="ml-8 w-5/12 rounded-xl bg-gray-50 p-6 shadow-md md:p-8">
                  <h3 className="mb-3 text-xl font-semibold">Digital Transformation</h3>
                  <p className="text-gray-600">
                    Embraced digital technologies to enhance our exhibitions, creating hybrid experiences that combine
                    physical and virtual elements.
                  </p>
                </div>
              </div>

              {/* 2023 */}
              <div className="relative">
                <div className="absolute left-1/2 top-0 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white">
                  <span className="text-sm font-bold">2023</span>
                </div>
                <div className="ml-auto mr-8 w-5/12 rounded-xl bg-gray-50 p-6 shadow-md md:p-8">
                  <h3 className="mb-3 text-xl font-semibold">20 Years of Excellence</h3>
                  <p className="text-gray-600">
                    Celebrating two decades of innovation and excellence in the exhibition industry, with a global
                    footprint and a reputation for creating exceptional business experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-black py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="rounded-2xl bg-gray-900 p-8 md:p-12">
              <h3 className="mb-6 text-2xl font-bold">Our Mission</h3>
              <p className="mb-6 text-gray-300">
                To spark innovation, cultivate meaningful connections, and open new doors for businesses worldwide
                through exceptional exhibition experiences.
              </p>
              <p className="text-gray-300">
                Every event we create is designed to empower industries, drive collaboration, and shape the future of
                global commerce.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-900 p-8 md:p-12">
              <h3 className="mb-6 text-2xl font-bold">Our Vision</h3>
              <p className="mb-6 text-gray-300">
                To transform trade shows into catalysts for industry evolution, making them more than just networking
                spaces but powerful engines for innovation and global impact.
              </p>
              <p className="text-gray-300">
                We see a world where exhibitions inspire breakthroughs, foster industry transformation, and generate
                lasting opportunities for businesses of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Our Values</h2>
            <p className="mb-16 text-lg text-gray-600">
              The principles that guide everything we do at Maxpo Exhibitions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-gray-200 p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="mb-4 text-xl font-semibold">Innovation</h3>
              <p className="text-gray-600">
                We constantly push boundaries and embrace new ideas to create exceptional exhibition experiences.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="mb-4 text-xl font-semibold">Excellence</h3>
              <p className="text-gray-600">
                We are committed to delivering the highest quality in everything we do, from event planning to
                execution.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="mb-4 text-xl font-semibold">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of working together, both within our team and with our clients and partners.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="mb-4 text-xl font-semibold">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty, transparency, and ethical standards in all our business dealings.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                <span className="text-2xl font-bold">5</span>
              </div>
              <h3 className="mb-4 text-xl font-semibold">Global Perspective</h3>
              <p className="text-gray-600">
                We embrace diversity and think globally, creating exhibitions that connect businesses across borders.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                <span className="text-2xl font-bold">6</span>
              </div>
              <h3 className="mb-4 text-xl font-semibold">Customer Focus</h3>
              <p className="text-gray-600">
                We put our clients at the center of everything we do, ensuring their success is our success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Be Part of Our Story</h2>
            <p className="mb-8 text-lg text-gray-600">
              Join us as we continue to shape the future of exhibitions and create exceptional business experiences.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" className="rounded-full bg-black px-8 text-white hover:bg-gray-800">
                Upcoming Events <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}

