import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, User, Clock, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"


export default function Blog() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=600&width=1920" alt="Maxpo Blog" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-32 text-white md:py-40">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">Maxpo Blog</h1>
          <p className="max-w-2xl text-lg text-gray-300 md:text-xl">
            Insights, trends, and expert perspectives on the exhibition industry and business events.
          </p>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="relative max-w-md">
              <Input type="text" placeholder="Search articles..." className="pl-10 pr-4 py-2" />
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="rounded-full px-4 py-2">
                All Topics
              </Badge>
              <Badge variant="outline" className="rounded-full bg-gray-100 px-4 py-2">
                Exhibition Trends
              </Badge>
              <Badge variant="outline" className="rounded-full bg-gray-100 px-4 py-2">
                Event Technology
              </Badge>
              <Badge variant="outline" className="rounded-full bg-gray-100 px-4 py-2">
                Industry Insights
              </Badge>
              <Badge variant="outline" className="rounded-full bg-gray-100 px-4 py-2">
                Success Stories
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="overflow-hidden rounded-2xl bg-gray-900">
            <div className="grid md:grid-cols-2">
              <div className="relative h-[300px] md:h-auto">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="The Future of Trade Shows in a Digital World"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 text-white md:p-12">
                <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">Featured</Badge>
                <h2 className="mb-4 text-3xl font-bold">The Future of Trade Shows in a Digital World</h2>
                <div className="mb-6 flex flex-wrap gap-4 text-sm text-gray-300">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>June 15, 2023</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>By Sarah Johnson</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>8 min read</span>
                  </div>
                </div>
                <p className="mb-8 text-gray-300">
                  As digital technologies continue to evolve, the exhibition industry is adapting to create hybrid
                  experiences that combine the best of physical and virtual worlds. In this article, we explore how
                  trade shows are embracing digital transformation and what this means for exhibitors and attendees.
                </p>
                <Button className="rounded-full bg-white px-6 text-black hover:bg-gray-200">
                  Read Article <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold">Latest Articles</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Article 1 */}
            <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="5 Key Trends Shaping the Exhibition Industry in 2023"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <Badge className="bg-white/20 text-white hover:bg-white/30">Exhibition Trends</Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">5 Key Trends Shaping the Exhibition Industry in 2023</h3>
                <div className="mb-4 flex flex-wrap gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>May 28, 2023</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>6 min read</span>
                  </div>
                </div>
                <p className="mb-6 text-gray-600">
                  From sustainability initiatives to immersive technologies, discover the trends that are transforming
                  how exhibitions are designed, executed, and experienced.
                </p>
                <Link href="#" className="inline-flex items-center text-sm font-medium text-black">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Article 2 */}
            <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="How to Maximize ROI from Your Exhibition Participation"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <Badge className="bg-white/20 text-white hover:bg-white/30">Exhibitor Tips</Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">How to Maximize ROI from Your Exhibition Participation</h3>
                <div className="mb-4 flex flex-wrap gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>May 15, 2023</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>7 min read</span>
                  </div>
                </div>
                <p className="mb-6 text-gray-600">
                  Practical strategies and actionable tips to help exhibitors get the most value from their investment
                  in trade shows and exhibitions.
                </p>
                <Link href="#" className="inline-flex items-center text-sm font-medium text-black">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Article 3 */}
            <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="The Art of Exhibition Stand Design: Creating Memorable Experiences"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <Badge className="bg-white/20 text-white hover:bg-white/30">Design</Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">
                  The Art of Exhibition Stand Design: Creating Memorable Experiences
                </h3>
                <div className="mb-4 flex flex-wrap gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>April 30, 2023</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>9 min read</span>
                  </div>
                </div>
                <p className="mb-6 text-gray-600">
                  Explore how innovative stand design can help brands stand out, engage visitors, and create lasting
                  impressions at trade shows.
                </p>
                <Link href="#" className="inline-flex items-center text-sm font-medium text-black">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Article 4 */}
            <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Sustainable Exhibitions: Reducing Environmental Impact"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <Badge className="bg-white/20 text-white hover:bg-white/30">Sustainability</Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Sustainable Exhibitions: Reducing Environmental Impact</h3>
                <div className="mb-4 flex flex-wrap gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>April 18, 2023</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>5 min read</span>
                  </div>
                </div>
                <p className="mb-6 text-gray-600">
                  How the exhibition industry is embracing sustainability and implementing eco-friendly practices to
                  reduce its environmental footprint.
                </p>
                <Link href="#" className="inline-flex items-center text-sm font-medium text-black">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Article 5 */}
            <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Networking at Exhibitions: Building Meaningful Business Relationships"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <Badge className="bg-white/20 text-white hover:bg-white/30">Networking</Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">
                  Networking at Exhibitions: Building Meaningful Business Relationships
                </h3>
                <div className="mb-4 flex flex-wrap gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>April 5, 2023</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>6 min read</span>
                  </div>
                </div>
                <p className="mb-6 text-gray-600">
                  Tips and strategies for effective networking at trade shows and exhibitions to create lasting business
                  connections.
                </p>
                <Link href="#" className="inline-flex items-center text-sm font-medium text-black">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Article 6 */}
            <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="The Role of Data Analytics in Modern Exhibition Management"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <Badge className="bg-white/20 text-white hover:bg-white/30">Technology</Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">
                  The Role of Data Analytics in Modern Exhibition Management
                </h3>
                <div className="mb-4 flex flex-wrap gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>March 22, 2023</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>8 min read</span>
                  </div>
                </div>
                <p className="mb-6 text-gray-600">
                  How data analytics is transforming exhibition management, from attendee tracking to ROI measurement
                  and personalized experiences.
                </p>
                <Link href="#" className="inline-flex items-center text-sm font-medium text-black">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="rounded-full bg-black px-8 text-white hover:bg-gray-800">
              Load More Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Popular Topics</h2>
            <p className="mb-16 text-lg text-gray-600">
              Explore our most popular content categories and industry insights.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Topic 1 */}
            <Link href="#" className="group">
              <div className="relative h-60 overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Exhibition Trends"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:opacity-70" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
                  <h3 className="mb-2 text-xl font-semibold">Exhibition Trends</h3>
                  <p className="text-sm text-gray-200">15 articles</p>
                </div>
              </div>
            </Link>

            {/* Topic 2 */}
            <Link href="#" className="group">
              <div className="relative h-60 overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Event Technology"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:opacity-70" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
                  <h3 className="mb-2 text-xl font-semibold">Event Technology</h3>
                  <p className="text-sm text-gray-200">12 articles</p>
                </div>
              </div>
            </Link>

            {/* Topic 3 */}
            <Link href="#" className="group">
              <div className="relative h-60 overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Exhibitor Tips"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:opacity-70" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
                  <h3 className="mb-2 text-xl font-semibold">Exhibitor Tips</h3>
                  <p className="text-sm text-gray-200">18 articles</p>
                </div>
              </div>
            </Link>

            {/* Topic 4 */}
            <Link href="#" className="group">
              <div className="relative h-60 overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Industry Insights"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:opacity-70" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
                  <h3 className="mb-2 text-xl font-semibold">Industry Insights</h3>
                  <p className="text-sm text-gray-200">20 articles</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-black py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Subscribe to Our Newsletter</h2>
            <p className="mb-8 text-lg text-gray-300">
              Stay updated with the latest industry insights, trends, and expert perspectives delivered directly to your
              inbox.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-full border-none bg-white/10 px-6 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button className="rounded-full bg-white px-8 text-black hover:bg-gray-200">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}

