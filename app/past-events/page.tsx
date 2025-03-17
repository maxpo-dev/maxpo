import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function PastEvents() {
  return (
    <div className="flex min-h-screen flex-col">

      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Past Events"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-32 text-white md:py-40">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">Past Events</h1>
          <p className="max-w-2xl text-lg text-gray-300 md:text-xl">
            Explore our successful exhibitions and conferences from around the world.
          </p>
        </div>
      </section>

      {/* Events Filter */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="rounded-full px-4 py-2">
                All Events
              </Badge>
              <Badge variant="outline" className="rounded-full bg-gray-100 px-4 py-2">
                2023
              </Badge>
              <Badge variant="outline" className="rounded-full bg-gray-100 px-4 py-2">
                2022
              </Badge>
              <Badge variant="outline" className="rounded-full bg-gray-100 px-4 py-2">
                2021
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Sort by:</span>
              <select className="rounded-md border border-gray-200 bg-white px-3 py-1 text-sm">
                <option>Date: Newest first</option>
                <option>Date: Oldest first</option>
                <option>Location: A-Z</option>
                <option>Industry: A-Z</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Past Event */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="overflow-hidden rounded-2xl bg-gray-900">
            <div className="grid md:grid-cols-2">
              <div className="relative h-[300px] md:h-auto">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Tech Innovation Summit 2022"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 text-white md:p-12">
                <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">Flagship Event</Badge>
                <h2 className="mb-4 text-3xl font-bold">Tech Innovation Summit 2022</h2>
                <div className="mb-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    <span>October 10-12, 2022</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <span>Dubai World Trade Centre, UAE</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-gray-400" />
                    <span>Attendance: 4,500+</span>
                  </div>
                </div>
                <p className="mb-8 text-gray-300">
                  Our flagship technology event brought together industry leaders, innovators, and tech enthusiasts from
                  around the world. The summit featured keynote speeches, panel discussions, and hands-on workshops on
                  emerging technologies.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="rounded-full bg-white px-6 text-black hover:bg-gray-200">
                    View Event Highlights <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="rounded-full border-white px-6 text-white hover:bg-white/20">
                    Photo Gallery
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events List */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold">2023 Events</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Event 1 */}
            <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Healthcare Innovation Expo 2023"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <Badge className="bg-white/20 text-white hover:bg-white/30">Healthcare</Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Healthcare Innovation Expo 2023</h3>
                <div className="mb-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">May 15-17, 2023</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Mumbai Exhibition Centre, India</span>
                  </div>
                </div>
                <p className="mb-6 text-gray-600">
                  Showcased the latest advancements in healthcare technology, medical devices, and digital health
                  solutions.
                </p>
                <Link href="#" className="inline-flex items-center text-sm font-medium text-black">
                  View Event Details <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Event 2 */}
            <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Sustainable Construction Forum 2023"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <Badge className="bg-white/20 text-white hover:bg-white/30">Construction</Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Sustainable Construction Forum 2023</h3>
                <div className="mb-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">March 10-12, 2023</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Abu Dhabi National Exhibition Centre, UAE</span>
                  </div>
                </div>
                <p className="mb-6 text-gray-600">
                  Brought together architects, engineers, and construction professionals to explore sustainable building
                  practices.
                </p>
                <Link href="#" className="inline-flex items-center text-sm font-medium text-black">
                  View Event Details <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Event 3 */}
            <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Global Food & Beverage Expo 2023"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <Badge className="bg-white/20 text-white hover:bg-white/30">Food & Beverage</Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Global Food & Beverage Expo 2023</h3>
                <div className="mb-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">January 20-23, 2023</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Dubai Exhibition Centre, UAE</span>
                  </div>
                </div>
                <p className="mb-6 text-gray-600">
                  The largest food and beverage exhibition in the region, featuring products from over 100 countries.
                </p>
                <Link href="#" className="inline-flex items-center text-sm font-medium text-black">
                  View Event Details <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <h2 className="mb-8 mt-16 text-2xl font-bold">2022 Events</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Event 4 */}
            <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Digital Marketing Summit 2022"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <Badge className="bg-white/20 text-white hover:bg-white/30">Marketing</Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Digital Marketing Summit 2022</h3>
                <div className="mb-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">August 15-16, 2022</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Hyderabad International Convention Centre, India</span>
                  </div>
                </div>
                <p className="mb-6 text-gray-600">
                  A conference for marketing professionals featuring workshops on SEO, social media, content marketing,
                  and more.
                </p>
                <Link href="#" className="inline-flex items-center text-sm font-medium text-black">
                  View Event Details <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Event 5 */}
            <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Renewable Energy Conference 2022"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <Badge className="bg-white/20 text-white hover:bg-white/30">Energy</Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Renewable Energy Conference 2022</h3>
                <div className="mb-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">June 8-10, 2022</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Riyadh International Convention Center, Saudi Arabia</span>
                  </div>
                </div>
                <p className="mb-6 text-gray-600">
                  Explored the latest innovations in renewable energy technologies and sustainable power solutions.
                </p>
                <Link href="#" className="inline-flex items-center text-sm font-medium text-black">
                  View Event Details <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Event 6 */}
            <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Fintech Innovation Forum 2022"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <Badge className="bg-white/20 text-white hover:bg-white/30">Finance</Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Fintech Innovation Forum 2022</h3>
                <div className="mb-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">April 5-7, 2022</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Dubai International Financial Centre, UAE</span>
                  </div>
                </div>
                <p className="mb-6 text-gray-600">
                  A gathering of financial technology leaders, innovators, and investors exploring the future of
                  finance.
                </p>
                <Link href="#" className="inline-flex items-center text-sm font-medium text-black">
                  View Event Details <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="rounded-full bg-black px-8 text-white hover:bg-gray-800">
              Load More Events <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Event Gallery */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Event Gallery</h2>
            <p className="mb-16 text-lg text-gray-600">Explore photos and videos from our past events.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="relative h-64 overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Event Photo 1"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="relative h-64 overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Event Photo 2"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="relative h-64 overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Event Photo 3"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="relative h-64 overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Event Photo 4"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="relative h-64 overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Event Photo 5"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="relative h-64 overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Event Photo 6"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="rounded-full bg-black px-8 text-white hover:bg-gray-800">
              View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Ready for the Next Event?</h2>
            <p className="mb-8 text-lg text-gray-300">
              Explore our upcoming events and secure your spot at the next industry-leading exhibition or conference.
            </p>
            <Button size="lg" className="rounded-full bg-white px-8 text-black hover:bg-gray-200">
              View Upcoming Events <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

