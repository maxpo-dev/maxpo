import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Linkedin, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"


export default function Leadership() {
  return (
    <div className="flex min-h-screen flex-col">

      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=600&width=1920" alt="Leadership" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-32 text-white md:py-40">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">Leadership</h1>
          <p className="max-w-2xl text-lg text-gray-300 md:text-xl">
            Meet the visionaries guiding Maxpo Exhibitions to new heights of excellence and innovation.
          </p>
        </div>
      </section>

      {/* Chairman Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="relative h-[500px] overflow-hidden rounded-2xl">
              <Image src="/placeholder.svg?height=1000&width=800" alt="M. Inayat Sait" fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">M. Inayat Sait</h2>
              <p className="mb-6 text-xl text-gray-500">Chairman & Founder</p>
              <div className="mb-8 space-y-4 text-gray-600">
                <p>
                  M. Inayat Sait founded Maxpo Exhibitions with a vision to transform how businesses connect through
                  trade shows and exhibitions. With over 25 years of experience in the industry, he has led the company
                  from its humble beginnings to becoming a global leader in exhibition management.
                </p>
                <p>
                  Under his leadership, Maxpo has expanded its operations internationally, pioneered innovative
                  exhibition formats, and built a reputation for excellence and innovation.
                </p>
                <p>
                  Inayat&apos;s vision continues to drive the company forward, as he leads Maxpo&apos;s strategic initiatives and
                  global expansion efforts.
                </p>
              </div>
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
      </section>

      {/* Executive Team */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Executive Team</h2>
            <p className="mb-16 text-lg text-gray-600">
              Our executive team brings together decades of experience in the exhibition industry, with a shared
              commitment to innovation, excellence, and client success.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Executive 1 */}
            <div className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Aisha Rahman"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-semibold">Aisha Rahman</h3>
                <p className="mb-4 text-gray-500">Chief Executive Officer</p>
                <p className="mb-6 text-gray-600">
                  Aisha leads Maxpo&apos;s global operations with a focus on strategic growth, innovation, and operational
                  excellence. Her leadership has been instrumental in the company&apos;s expansion into new markets.
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

            {/* Executive 2 */}
            <div className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Robert Kim"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-semibold">Robert Kim</h3>
                <p className="mb-4 text-gray-500">Chief Financial Officer</p>
                <p className="mb-6 text-gray-600">
                  Robert oversees Maxpo&apos;s financial strategy and operations, ensuring the company&apos;s continued growth and
                  financial health. His expertise in financial management has been key to our success.
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

            {/* Executive 3 */}
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
                  and innovation, ensuring flawless execution of every event.
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

            {/* Executive 4 */}
            <div className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Carlos Mendez"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-semibold">Carlos Mendez</h3>
                <p className="mb-4 text-gray-500">Chief Marketing Officer</p>
                <p className="mb-6 text-gray-600">
                  Carlos leads our marketing and brand strategy, leveraging his creativity and industry knowledge to
                  position Maxpo as a leader in the global exhibition market.
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

            {/* Executive 5 */}
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
                <p className="mb-4 text-gray-500">Chief Technology Officer</p>
                <p className="mb-6 text-gray-600">
                  Michael leads our digital transformation, integrating cutting-edge technology into our exhibition
                  experiences to create innovative and engaging events.
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

            {/* Executive 6 */}
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
                  growth across markets and industries.
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

      {/* Board of Directors */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Board of Directors</h2>
            <p className="mb-16 text-lg text-gray-600">
              Our board brings together industry leaders and visionaries who provide strategic guidance and oversight to
              Maxpo Exhibitions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Board Member 1 */}
            <div className="text-center">
              <div className="mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Dr. James Wilson"
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-lg font-semibold">Dr. James Wilson</h3>
              <p className="text-gray-500">Board Chairman</p>
            </div>

            {/* Board Member 2 */}
            <div className="text-center">
              <div className="mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Fatima Al-Mansoori"
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-lg font-semibold">Fatima Al-Mansoori</h3>
              <p className="text-gray-500">Board Member</p>
            </div>

            {/* Board Member 3 */}
            <div className="text-center">
              <div className="mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Richard Thompson"
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-lg font-semibold">Richard Thompson</h3>
              <p className="text-gray-500">Board Member</p>
            </div>

            {/* Board Member 4 */}
            <div className="text-center">
              <div className="mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Sophia Chen"
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-lg font-semibold">Sophia Chen</h3>
              <p className="text-gray-500">Board Member</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Connect with Our Leadership</h2>
            <p className="mb-8 text-lg text-gray-300">
              Interested in learning more about Maxpo&apos;s leadership or exploring partnership opportunities? Get in touch
              with our team.
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

