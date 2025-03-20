"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/90 text-black shadow-md backdrop-blur-md" : "bg-blue-950 text-white"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Dynamic Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-32">
            <Image
              src={isScrolled ? "/Maxpo_Logo_Black.png" : "/Maxpo.png"} // Change logo based on scroll
              alt="Maxpo Logo"
              fill
              className="object-contain transition-all duration-300"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium">
              About <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/about" className="w-full">Our Story</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/team" className="w-full">Our Team</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/leadership" className="w-full">Leadership</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium">
              Events <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/upcoming-events" className="w-full">Upcoming Events</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/past-events" className="w-full">Past Events</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/testimonials" className="w-full">Testimonials</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/services" className="text-sm font-medium">Services</Link>
          <Link href="/careers" className="text-sm font-medium">Careers</Link>
          <Link href="/contact" className="text-sm font-medium">Contact</Link>
          <Link href="/blog" className="text-sm font-medium">Blog</Link>
        </nav>

        {/* Desktop Get in Touch Button */}
        <div className="hidden md:block">
          <Link href="/contact">
          <Button
            className={`rounded-full  px-6 py-2 transition-all duration-300 ${
              isScrolled 
                ? "bg-black text-white border-black hover:bg-gray-800"
                : "bg-white text-black border-black hover:bg-gray-200"
            }`}
          >
            Get in Touch
          </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 top-20 z-50 w-full bg-white px-4 py-6 shadow-lg md:hidden">
          <nav className="flex flex-col gap-4">
            <div className="border-b pb-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">About</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="mt-2 flex flex-col gap-2 pl-4">
                <Link href="/about" className="text-sm text-gray-600">Our Story</Link>
                <Link href="/team" className="text-sm text-gray-600">Our Team</Link>
                <Link href="/leadership" className="text-sm text-gray-600">Leadership</Link>
              </div>
            </div>

            <div className="border-b pb-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Events</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="mt-2 flex flex-col gap-2 pl-4">
                <Link href="/upcoming-events" className="text-sm text-gray-600">Upcoming Events</Link>
                <Link href="/past-events" className="text-sm text-gray-600">Past Events</Link>
                <Link href="/testimonials" className="text-sm text-gray-600">Testimonials</Link>
              </div>
            </div>

            <Link href="/services" className="border-b pb-2 text-sm font-medium">Services</Link>
            <Link href="/careers" className="border-b pb-2 text-sm font-medium">Careers</Link>
            <Link href="/contact" className="border-b pb-2 text-sm font-medium">Contact</Link>
            <Link href="/blog" className="border-b pb-2 text-sm font-medium">Blog</Link>

            {/* Mobile Get in Touch Button */}
            <Link href="/contact">
            <Button
              className={`mt-4 w-full rounded-full border-2 transition-all duration-300 ${
                isScrolled 
                  ? "bg-black text-white border-black hover:bg-gray-800"
                  : "bg-white text-black border-black hover:bg-gray-200"
              }`}
            >
              Get in Touch
            </Button>
            </Link>
           
          </nav>
        </div>
      )}
    </header>
  )
}
