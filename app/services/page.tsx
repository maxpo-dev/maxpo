import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Globe, Users, Calendar, Lightbulb, BarChart, Megaphone } from "lucide-react"

import { Button } from "@/components/ui/button"


export default function Services() {
  return (
    <div className="flex min-h-screen flex-col">
      

      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Our Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-32 text-white md:py-40">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">Our Services</h1>
          <p className="max-w-2xl text-lg text-gray-300 md:text-xl">
            Comprehensive exhibition solutions designed to create exceptional business experiences and drive meaningful
            connections.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Comprehensive Exhibition Solutions</h2>
            <p className="mb-16 text-lg text-gray-600">
              At Maxpo, we offer a full range of services to create exceptional exhibition experiences that drive
              business growth and foster meaningful connections.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <div className="group rounded-xl border border-gray-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-xl font-semibold">Trade Show Management</h3>
              <p className="mb-6 text-gray-600">
                End-to-end management of trade shows and exhibitions, from concept development to execution and
                post-event analysis.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                  <span className="text-gray-600">Venue selection and management</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                  <span className="text-gray-600">Exhibitor and sponsor recruitment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                  <span className="text-gray-600">Floor plan design and optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                  <span className="text-gray-600">On-site logistics and coordination</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center text-sm font-medium text-black">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="group rounded-xl border border-gray-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-xl font-semibold">Conference Organization</h3>
              <p className="mb-6 text-gray-600">
                Comprehensive conference planning and management services, creating engaging and informative events for
                industry professionals.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                  <span className="text-gray-600">Program development and speaker management</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                  <span className="text-gray-600">Registration and attendee management</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                  <span className="text-gray-600">Audio-visual production</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                  <span className="text-gray-600">Networking events and activities</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center text-sm font-medium text-black">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="group rounded-xl border border-gray-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-xl font-semibold">Corporate Events</h3>
              <p className="mb-6 text-gray-600">
                Tailored corporate event solutions, from product launches and annual meetings to team-building
                activities and client appreciation events.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                  <span className="text-gray-600">Event concept and theme development</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                  <span className="text-gray-600">Venue selection and management</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                  <span className="text-gray-600">Catering and entertainment coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                  <span className="text-gray-600">Branding and experiential design</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center text-sm font-medium text-black">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Service 4 */}
            <div className="group rounded-xl border border-gray-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-xl font-semibold">Exhibition Design & Build</h3>
              <p className="mb-6 text-gray-600">
                Creative and innovative exhibition stand design and construction services, creating impactful brand
                experiences.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                  <span className="text-gray-600">Custom stand design and visualization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                  <span className="text-gray-600">Modular and custom build solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                  <span className="text-gray-600">Graphics production and installation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                  <span className="text-gray-600">Furniture and equipment rental</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center text-sm font-medium text-black">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Service 5 */}
            <div className="group rounded-xl border border-gray-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                <BarChart className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-xl font-semibold">Digital & Hybrid Events</h3>
              <p className="mb-6 text-gray-600">
                Innovative digital and hybrid event solutions that combine the best of physical and virtual experiences.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                  <span className="text-gray-600">Virtual exhibition platforms</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                  <span className="text-gray-600">Live streaming and on-demand content</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                  <span className="text-gray-600">Virtual networking and matchmaking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                  <span className="text-gray-600">Data analytics and reporting</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center text-sm font-medium text-black">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Service 6 */}
            <div className="group rounded-xl border border-gray-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                <Megaphone className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-xl font-semibold">Marketing & Promotion</h3>
              <p className="mb-6 text-gray-600">
                Comprehensive marketing and promotional services to maximize event visibility, attendance, and
                engagement.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                  <span className="text-gray-600">Event branding and identity development</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                  <span className="text-gray-600">Digital marketing campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                  <span className="text-gray-600">Public relations and media outreach</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
                  <span className="text-gray-600">Social media management and content creation</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center text-sm font-medium text-black">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Our Process</h2>
            <p className="mb-16 text-lg text-gray-600">
              We follow a structured approach to ensure every event we create delivers exceptional results and exceeds
              expectations.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Step 1 */}
            <div className="relative rounded-xl bg-white p-8 shadow-md">
              <div className="absolute -top-6 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                <span className="text-lg font-bold">1</span>
              </div>
              <h3 className="mb-4 mt-6 text-xl font-semibold">Discovery</h3>
              <p className="text-gray-600">
                We begin by understanding your goals, target audience, and vision for the event, establishing clear
                objectives and success metrics.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative rounded-xl bg-white p-8 shadow-md">
              <div className="absolute -top-6 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                <span className="text-lg font-bold">2</span>
              </div>
              <h3 className="mb-4 mt-6 text-xl font-semibold">Planning</h3>
              <p className="text-gray-600">
                Our team develops a comprehensive event plan, including venue selection, program development, marketing
                strategy, and budget management.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative rounded-xl bg-white p-8 shadow-md">
              <div className="absolute -top-6 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                <span className="text-lg font-bold">3</span>
              </div>
              <h3 className="mb-4 mt-6 text-xl font-semibold">Execution</h3>
              <p className="text-gray-600">
                We manage all aspects of event execution, from logistics and setup to on-site management and
                troubleshooting, ensuring a flawless experience.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative rounded-xl bg-white p-8 shadow-md">
              <div className="absolute -top-6 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                <span className="text-lg font-bold">4</span>
              </div>
              <h3 className="mb-4 mt-6 text-xl font-semibold">Evaluation</h3>
              <p className="text-gray-600">
                After the event, we conduct a thorough analysis of results, gathering feedback and data to measure
                success and identify opportunities for improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Success Stories</h2>
            <p className="mb-16 text-lg text-gray-600">
              Explore how our services have helped clients achieve their business objectives through exceptional
              exhibition experiences.
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
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Tech Expo 2023</h3>
                <p className="mb-4 text-gray-600">
                  A global technology exhibition that attracted over 10,000 attendees and 500 exhibitors from 50
                  countries.
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
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
              Ready to Create an Exceptional Event?
            </h2>
            <p className="mb-8 text-lg text-gray-300">
              Let's work together to create an exhibition experience that drives business growth and fosters meaningful
              connections.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" className="rounded-full bg-white px-8 text-black hover:bg-gray-200">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-white px-8 text-white hover:bg-white hover:text-black"
              >
                View Our Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}

