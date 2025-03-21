import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about/WhatsApp Image 2025-03-21 at 12.44.08 PM.jpeg"
          alt="About Maxpo"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>
      <div className="container relative z-10 mx-auto px-4 py-32 text-white md:py-40">
        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">Our Story</h1>
        <p className="max-w-2xl text-lg text-gray-300 md:text-xl">
        From Vision to Reality: Crafting Unforgettable Events, Exhibitions, Conferences and Awards and Recognition
        </p>
      </div>
    </section>
  )
}
