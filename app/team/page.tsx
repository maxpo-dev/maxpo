import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Twitter, Linkedin } from "lucide-react"

import { Button } from "@/components/ui/button"


export default function OurTeam() {
  return (
    <div className="flex min-h-screen flex-col">
      

      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=600&width=1920" alt="Our Team" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-32 text-white md:py-40">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">Our Team</h1>
          <p className="max-w-2xl text-lg text-gray-300 md:text-xl">
            Passionate, proactive, and always innovating. Meet the people behind Maxpo&apos;s success.
          </p>
        </div>
      </section>

      {/* Team Culture */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Our Culture</h2>
            <p className="mb-16 text-lg text-gray-600">
              At Maxpo, we believe that great events start with great people. Our team is a diverse group of strategic
              thinkers, creative minds, and problem-solvers who share a passion for delivering world-class trade shows
              and conferences.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <div className="relative h-[400px] overflow-hidden rounded-2xl">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Team Collaboration"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h3 className="mb-3 text-2xl font-semibold">Where Ideas Come to Life</h3>
                <p className="text-gray-600">
                  Innovation drives everything we do. Brainstorming sessions at Maxpo are dynamic, fast-paced, and
                  filled with fresh perspectives. We challenge conventional thinking, explore new possibilities, and
                  turn ambitious ideas into reality. Every project starts with a vision—one that our team refines,
                  strengthens, and transforms into an exceptional experience.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-2xl font-semibold">Staying Ahead, Always</h3>
                <p className="text-gray-600">
                  We operate in a world that&apos;s constantly evolving, and we embrace that change. Our team stays ahead of
                  industry trends, new technologies, and market shifts to ensure our events remain relevant, impactful,
                  and future-focused. From digital innovations to emerging business strategies, we are always learning,
                  adapting, and improving.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-6 md:order-2">
              <div>
                <h3 className="mb-3 text-2xl font-semibold">Exceeding Expectations, Every Time</h3>
                <p className="text-gray-600">
                  At Maxpo, we don&apos;t settle for average. Whether it&apos;s perfecting event logistics, enhancing attendee
                  experiences, or supporting our clients beyond the event itself, we believe in going the extra mile. We
                  anticipate needs before they arise, solve challenges before they become problems, and deliver results
                  that speak for themselves.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-2xl font-semibold">A Culture of Energy, Growth & Fun</h3>
                <p className="text-gray-600">
                  We work hard, but we also know how to keep the energy high. The Maxpo culture is a mix of
                  collaboration, ambition, and celebration. We support each other, push each other to do better, and
                  celebrate our successes together. Every challenge is an opportunity, and every project is a chance to
                  grow.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-2xl md:order-1">
              <Image src="/placeholder.svg?height=800&width=600" alt="Team Celebration" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Meet Our Team</h2>
            <p className="mb-16 text-lg text-gray-600">
              The talented individuals who make Maxpo Exhibitions a leader in the industry.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Team Member 1 */}
            <div className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Sarah Johnson"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-semibold">Sarah Johnson</h3>
                <p className="mb-4 text-gray-500">Chief Operations Officer</p>
                <p className="mb-6 text-gray-600">
                  With over 15 years of experience in the exhibition industry, Sarah leads our operations with precision
                  and innovation.
                </p>
                <div className="flex gap-4">
                  <Link href="#" className="rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href="#" className="rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="David Chen"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-semibold">David Chen</h3>
                <p className="mb-4 text-gray-500">Creative Director</p>
                <p className="mb-6 text-gray-600">
                  David&apos;s creative vision has transformed our exhibitions into immersive experiences that captivate and
                  inspire.
                </p>
                <div className="flex gap-4">
                  <Link href="#" className="rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href="#" className="rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Priya Patel"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-semibold">Priya Patel</h3>
                <p className="mb-4 text-gray-500">Head of Global Partnerships</p>
                <p className="mb-6 text-gray-600">
                  Priya builds and nurtures our global network of partners, creating opportunities for collaboration and
                  growth.
                </p>
                <div className="flex gap-4">
                  <Link href="#" className="rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href="#" className="rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Michael Rodriguez"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-semibold">Michael Rodriguez</h3>
                <p className="mb-4 text-gray-500">Technology Director</p>
                <p className="mb-6 text-gray-600">
                  Michael leads our digital transformation, integrating cutting-edge technology into our exhibition
                  experiences.
                </p>
                <div className="flex gap-4">
                  <Link href="#" className="rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href="#" className="rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Team Member 5 */}
            <div className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Emma Wilson"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-semibold">Emma Wilson</h3>
                <p className="mb-4 text-gray-500">Client Success Manager</p>
                <p className="mb-6 text-gray-600">
                  Emma ensures our clients receive exceptional service and support throughout their journey with Maxpo.
                </p>
                <div className="flex gap-4">
                  <Link href="#" className="rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href="#" className="rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Team Member 6 */}
            <div className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Ahmed Al-Farsi"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-semibold">Ahmed Al-Farsi</h3>
                <p className="mb-4 text-gray-500">Regional Director, Middle East</p>
                <p className="mb-6 text-gray-600">
                  Ahmed oversees our operations in the Middle East, leveraging his deep understanding of the regional
                  market.
                </p>
                <div className="flex gap-4">
                  <Link href="#" className="rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href="#" className="rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="bg-black py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Join Our Team</h2>
            <p className="mb-8 text-lg text-gray-300">
              We&apos;re always looking for talented individuals who are passionate about creating exceptional exhibition
              experiences. Explore our current opportunities and become part of our dynamic team.
            </p>
            <Button size="lg" className="rounded-full bg-white px-8 text-black hover:bg-gray-200">
              View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      
    </div>
  )
}

