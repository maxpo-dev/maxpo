import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star, Quote } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"


export default function Testimonials() {
  return (
    <div className="flex min-h-screen flex-col">
    

      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Testimonials"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-32 text-white md:py-40">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">Client Testimonials</h1>
          <p className="max-w-2xl text-lg text-gray-300 md:text-xl">
            Hear what our clients have to say about their experience working with Maxpo Exhibitions.
          </p>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Success Stories</h2>
            <p className="mb-16 text-lg text-gray-600">
              Our clients&apos; success is our success. Here&apos;s what they have to say about their experience with Maxpo.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            {/* Testimonial 1 */}
            <div className="rounded-2xl bg-gray-50 p-8 shadow-md md:p-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Sarah Johnson"
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Sarah Johnson</h3>
                  <p className="text-gray-500">CEO, TechInnovate</p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <div className="relative">
                <Quote className="absolute -left-2 -top-2 h-8 w-8 text-gray-200" />
                <p className="mb-6 text-gray-600">
                  &quot;Working with Maxpo for our annual tech conference was a game-changer. Their attention to detail,
                  innovative approach, and seamless execution exceeded our expectations. The event attracted more
                  attendees than ever before, and the feedback was overwhelmingly positive. We&apos;ve already booked them
                  for next year&apos;s event!&quot;
                </p>
              </div>
              <div className="flex items-center justify-between">
                <Badge className="bg-gray-200 text-gray-700">Tech Conference</Badge>
                <span className="text-sm text-gray-500">Dubai, 2023</span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="rounded-2xl bg-gray-50 p-8 shadow-md md:p-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Ahmed Al-Farsi"
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Ahmed Al-Farsi</h3>
                  <p className="text-gray-500">Marketing Director, Global Foods</p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <div className="relative">
                <Quote className="absolute -left-2 -top-2 h-8 w-8 text-gray-200" />
                <p className="mb-6 text-gray-600">
                  &quot;Maxpo&apos;s expertise in organizing food and beverage exhibitions is unmatched. They understood our
                  vision and brought it to life with creativity and precision. The exhibition attracted high-quality
                  visitors, resulting in numerous business opportunities for our company. Their team was professional,
                  responsive, and a pleasure to work with.&quot;
                </p>
              </div>
              <div className="flex items-center justify-between">
                <Badge className="bg-gray-200 text-gray-700">Food & Beverage Expo</Badge>
                <span className="text-sm text-gray-500">Dubai, 2022</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonial */}
      <section className="bg-black py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Hear From Our Clients</h2>
            <p className="mb-16 text-lg text-gray-300">Watch video testimonials from our satisfied clients.</p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="Video Testimonial"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform duration-300 hover:scale-110">
                  <svg className="h-10 w-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-8 text-center">
              <h3 className="text-xl font-semibold">How Maxpo Transformed Our Exhibition Experience</h3>
              <p className="mt-2 text-gray-400">
                Featuring testimonials from TechInnovate, Global Foods, and HealthPlus
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Grid */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">What Our Clients Say</h2>
            <p className="mb-16 text-lg text-gray-600">
              Read testimonials from clients across different industries and regions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mb-6 text-gray-600">
                &quot;Maxpo&apos;s team went above and beyond to ensure our exhibition was a success. Their attention to detail
                and proactive approach made the entire process smooth and stress-free.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="John Smith"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">John Smith</h3>
                  <p className="text-sm text-gray-500">Event Manager, BuildTech</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mb-6 text-gray-600">
                &quot;The level of professionalism and expertise demonstrated by Maxpo was exceptional. They understood our
                industry and created an event that perfectly aligned with our objectives.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Priya Patel"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Priya Patel</h3>
                  <p className="text-sm text-gray-500">Marketing Director, HealthPlus</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mb-6 text-gray-600">
                &quot;Working with Maxpo was a pleasure from start to finish. Their creative ideas and flawless execution
                resulted in an event that exceeded our expectations and delivered real business value.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Mohammed Al-Qasim"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Mohammed Al-Qasim</h3>
                  <p className="text-sm text-gray-500">CEO, Energy Solutions</p>
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mb-6 text-gray-600">
                &quot;Maxpo&apos;s digital integration for our hybrid event was impressive. They seamlessly combined physical and
                virtual elements, creating an engaging experience for all participants.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Lisa Chen"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Lisa Chen</h3>
                  <p className="text-sm text-gray-500">Digital Director, TechFusion</p>
                </div>
              </div>
            </div>

            {/* Testimonial 5 */}
            <div className="rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mb-6 text-gray-600">
                &quot;The ROI from our exhibition with Maxpo was outstanding. The quality of attendees and the business
                opportunities generated far exceeded our previous events with other organizers.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Robert Johnson"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Robert Johnson</h3>
                  <p className="text-sm text-gray-500">Sales Director, Global Retail</p>
                </div>
              </div>
            </div>

            {/* Testimonial 6 */}
            <div className="rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mb-6 text-gray-600">
                &quot;Maxpo&apos;s understanding of our industry and target audience was impressive. They created an event that
                attracted exactly the right people, resulting in valuable connections and partnerships.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Fatima Al-Mansoori"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Fatima Al-Mansoori</h3>
                  <p className="text-sm text-gray-500">Business Development, Finance Hub</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="rounded-full bg-black px-8 text-white hover:bg-gray-800">
              View More Testimonials <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Client Success Stories</h2>
            <p className="mb-16 text-lg text-gray-600">
              Explore detailed case studies of how we&apos;ve helped our clients achieve their exhibition goals.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Case Study 1 */}
            <div className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="relative h-60 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Tech Expo 2023"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <Badge className="bg-white/20 text-white hover:bg-white/30">Technology</Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Tech Expo 2023</h3>
                <p className="mb-4 text-gray-600">
                  How we helped TechInnovate create a flagship event that attracted over 5,000 attendees and generated
                  significant business opportunities.
                </p>
                <Link href="#" className="inline-flex items-center text-sm font-medium text-black">
                  Read Case Study <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="relative h-60 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Healthcare Summit"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <Badge className="bg-white/20 text-white hover:bg-white/30">Healthcare</Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Healthcare Summit</h3>
                <p className="mb-4 text-gray-600">
                  A hybrid conference that connected healthcare professionals from around the world, featuring 50
                  speakers and 30 sessions.
                </p>
                <Link href="#" className="inline-flex items-center text-sm font-medium text-black">
                  Read Case Study <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="relative h-60 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Global Food Expo"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <Badge className="bg-white/20 text-white hover:bg-white/30">Food & Beverage</Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Global Food Expo</h3>
                <p className="mb-4 text-gray-600">
                  An international food exhibition that showcased products from 300 exhibitors and attracted 15,000
                  visitors over three days.
                </p>
                <Link href="#" className="inline-flex items-center text-sm font-medium text-black">
                  Read Case Study <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Ready to Create Your Success Story?</h2>
            <p className="mb-8 text-lg text-gray-300">
              Let&apos;s work together to create an exceptional exhibition experience that drives business growth and fosters
              meaningful connections.
            </p>
            <Button size="lg" className="rounded-full bg-white px-8 text-black hover:bg-gray-200">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      
    </div>
  )
}

