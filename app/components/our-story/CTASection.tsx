"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  const router = useRouter();

  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-blue-950 tracking-tight md:text-4xl">
            Be Part of Our Story
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            Join us as we continue to shape the future of exhibitions and create
            exceptional business experiences.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            {/* Navigate to Events Page */}
            <Button
              size="lg"
              className="rounded-full bg-blue-950 px-8 text-white hover:bg-gray-800 flex items-center cursor-pointer"
              onClick={() => router.push("/events")}
            >
              Upcoming Events <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            {/* Navigate to Contact Us Page */}
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 cursor-pointer"
              onClick={() => router.push("/contact")}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
