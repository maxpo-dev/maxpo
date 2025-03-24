"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full bg-blue-950 ">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        
        {/* Black Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/Maxpo_White_Logo.png" alt="Maxpo Logo" width={150} height={40} priority />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/about" className="text-sm font-medium text-white">About</Link>
          <Link href="/events" className="text-sm font-medium text-white">Events</Link>
          <Link href="/services" className="text-sm font-medium text-white">Services</Link>
          <Link href="/careers" className="text-sm font-medium text-white">Careers</Link>
        </nav>

        {/* Desktop "Get in Touch" Button */}
        <div className="hidden md:block">
          <Link href="/contact">
            <Button className="rounded-full bg-white text-black px-6 py-2 hover:bg-gray-800 hover:text-white">
              Get in Touch
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X className="h-6 w-6 bg-amber-50" /> : <Menu className="h-6 w-6 bg-amber-50" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 top-20 z-50 w-full bg-white px-4 py-6 shadow-lg md:hidden">
          <nav className="flex flex-col gap-4">
            <Link href="/about" className="border-b pb-2 text-sm font-medium text-gray-800">About</Link>
            <Link href="/events" className="border-b pb-2 text-sm font-medium text-gray-800">Events</Link>
            <Link href="/services" className="border-b pb-2 text-sm font-medium text-gray-800">Services</Link>
            <Link href="/careers" className="border-b pb-2 text-sm font-medium text-gray-800">Careers</Link>

            {/* Mobile "Get in Touch" Button */}
            <Link href="/contact">
            <Button className="mt-4 w-full rounded-full bg-black text-white py-2 hover:bg-gray-800 hover:text-white">
  Get in Touch
</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
