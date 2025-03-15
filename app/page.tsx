import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Globe, Lightbulb, Users, Building, Award, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/app/components/navbar"
import Footer from "@/app/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden bg-black text-white">
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
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Crafting Exceptional Experiences
          </h1>
          <p className="mb-8 max-w-3xl text-lg text-gray-300 md:text-xl">
            Seamlessly Designed, Perfectly Delivered. Redefining the business event landscape through innovation and
            collaboration.
          </p>
          <Button size="lg" className="rounded-full bg-white px-8 text-black hover:bg-gray-200">
            Discover Our Events <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <ChevronDown className="h-8 w-8 animate-bounce text-white opacity-70" />
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
              20 Years of Excellence, 15 Years of Global Impact
            </h2>
            <p className="mb-12 text-lg text-gray-600">
              For two decades, Maxpo has been at the forefront of the trade exhibition industry, creating transformative
              business experiences. Over the past 15 years, we've expanded our expertise to international markets,
              delivering world-class exhibitions that drive growth, innovation, and lasting industry impact.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative h-[400px] overflow-hidden rounded-2xl">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Dubai Headquarters"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                <h3 className="text-xl font-semibold">Dubai Headquarters</h3>
                <p>Our central hub for global operations</p>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-2xl">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="India Office"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                <h3 className="text-xl font-semibold">India Office</h3>
                <p>Supporting our regional and international initiatives</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chairman Message */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
              Message from the Chairman
            </h2>
            <div className="relative rounded-3xl bg-white p-8 shadow-xl md:p-12">
              <div className="absolute -top-12 left-1/2 h-24 w-24 -translate-x-1/2 overflow-hidden rounded-full border-4 border-white shadow-lg">
                <Image src="/placeholder.svg?height=200&width=200" alt="M. Inayat Sait" fill className="object-cover" />
              </div>
              <div className="mt-12 space-y-4 text-gray-700">
                <p className="text-lg italic">
                  "At Maxpo, we don't just organize trade shows—we build platforms for progress. Our mission is to spark
                  innovation, cultivate meaningful connections, and open new doors for businesses worldwide."
                </p>
                <p>
                  "Every event we create is designed to empower industries, drive collaboration, and shape the future of
                  global commerce. Our vision is to transform trade shows into catalysts for industry evolution, making
                  them more than just networking spaces but powerful engines for innovation and global impact."
                </p>
                <p>
                  "We see a world where exhibitions inspire breakthroughs, foster industry transformation, and generate
                  lasting opportunities for businesses of all sizes. As we expand our global reach, our focus remains
                  the same—delivering world-class experiences that fuel success and create value for every participant."
                </p>
                <p className="text-lg font-medium">
                  "Maxpo is where ideas take flight, industries converge, and businesses grow. We look forward to
                  continuing this journey with you."
                </p>
                <p className="text-right font-semibold">— M. Inayat Sait, Chairman & Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Essence */}
      <section className="bg-black py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Our Essence: Why Choose Maxpo?</h2>
            <p className="mb-16 text-lg text-gray-300">
              Maxpo isn't just about hosting trade shows—we build thriving business ecosystems that spark innovation,
              foster powerful connections, and unlock global opportunities.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded-2xl bg-gray-900 p-8 transition-transform duration-300 hover:-translate-y-2">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-xl font-semibold">Shaping the Future</h3>
              <p className="text-gray-400">
                Innovation isn't a buzzword for us—it's our foundation. We curate events that showcase game-changing
                ideas, emerging trends, and transformative solutions to help industries evolve.
              </p>
            </div>

            <div className="group rounded-2xl bg-gray-900 p-8 transition-transform duration-300 hover:-translate-y-2">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-xl font-semibold">Connecting the Right People</h3>
              <p className="text-gray-400">
                Business success starts with the right connections. Our platforms bring together industry leaders,
                visionaries, and decision-makers, creating high-impact networking opportunities.
              </p>
            </div>

            <div className="group rounded-2xl bg-gray-900 p-8 transition-transform duration-300 hover:-translate-y-2">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-xl font-semibold">Enabling Global Expansion</h3>
              <p className="text-gray-400">
                Breaking into new markets can be challenging—Maxpo makes it seamless. We bridge industries across
                borders, opening doors to international collaborations and partnerships.
              </p>
            </div>

            <div className="group rounded-2xl bg-gray-900 p-8 transition-transform duration-300 hover:-translate-y-2">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-xl font-semibold">Setting the Standard for Excellence</h3>
              <p className="text-gray-400">
                Every detail matters. From flawless event execution to premium experiences, we set the bar high,
                ensuring each trade show delivers maximum impact for businesses and industries alike.
              </p>
            </div>

            <div className="group rounded-2xl bg-gray-900 p-8 transition-transform duration-300 hover:-translate-y-2">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">
                <Building className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-xl font-semibold">Creating Limitless Possibilities</h3>
              <p className="text-gray-400">
                Maxpo isn't just an event—it's a launchpad for success. Whether you're a startup or an industry giant,
                we provide the platform, exposure, and connections to turn ambitions into achievements.
              </p>
            </div>

            <div className="flex items-center justify-center rounded-2xl bg-white p-8 text-center text-black">
              <p className="text-xl font-semibold italic">
                Maxpo isn't just where industries meet—it's where they grow, evolve, and redefine the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">The Team at Maxpo</h2>
            <p className="mb-16 text-lg text-gray-600">Passionate, Proactive, and Always Innovating</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative h-[500px] overflow-hidden rounded-2xl">
              <Image src="/placeholder.svg?height=1000&width=800" alt="Maxpo Team" fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-semibold">Where Ideas Come to Life</h3>
                <p className="text-gray-600">
                  Innovation drives everything we do. Brainstorming sessions at Maxpo are dynamic, fast-paced, and
                  filled with fresh perspectives. We challenge conventional thinking, explore new possibilities, and
                  turn ambitious ideas into reality.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold">Staying Ahead, Always</h3>
                <p className="text-gray-600">
                  We operate in a world that's constantly evolving, and we embrace that change. Our team stays ahead of
                  industry trends, new technologies, and market shifts to ensure our events remain relevant, impactful,
                  and future-focused.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold">Exceeding Expectations, Every Time</h3>
                <p className="text-gray-600">
                  At Maxpo, we don't settle for average. Whether it's perfecting event logistics, enhancing attendee
                  experiences, or supporting our clients beyond the event itself, we believe in going the extra mile.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold">A Culture of Energy, Growth & Fun</h3>
                <p className="text-gray-600">
                  We work hard, but we also know how to keep the energy high. The Maxpo culture is a mix of
                  collaboration, ambition, and celebration. We support each other, push each other to do better, and
                  celebrate our successes together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Careers at Maxpo</h2>
            <p className="mb-8 text-lg text-gray-600">Your Future Starts Here!</p>
            <p className="mb-12 text-gray-600">
              At Maxpo, we believe in talent, ambition, and fresh perspectives. Whether you're a young mind eager to
              innovate, a seasoned expert ready to make an impact, or an intern looking to gain hands-on experience,
              there's a place for you here.
            </p>
            <p className="mb-8 text-gray-600">
              We thrive on creativity, collaboration, and continuous growth. If you're someone who loves challenges,
              enjoys thinking outside the box, and wants to be part of a dynamic team shaping the future of global trade
              shows, we want to hear from you!
            </p>
            <Button size="lg" className="rounded-full bg-black px-8 text-white hover:bg-gray-800">
              Join Our Team <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-black py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">Get in Touch</h2>
            <p className="mb-12 text-lg text-gray-300">
              Ready to create exceptional business experiences? Let's connect.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <Link
                href="/contact"
                className="flex flex-col items-center justify-center rounded-2xl bg-white p-8 text-black transition-transform duration-300 hover:-translate-y-2"
              >
                <h3 className="mb-2 text-xl font-semibold">Contact Us</h3>
                <p className="text-gray-600">Reach out to our team</p>
              </Link>
              <Link
                href="/events"
                className="flex flex-col items-center justify-center rounded-2xl bg-white p-8 text-black transition-transform duration-300 hover:-translate-y-2"
              >
                <h3 className="mb-2 text-xl font-semibold">Upcoming Events</h3>
                <p className="text-gray-600">Discover our next exhibitions</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

