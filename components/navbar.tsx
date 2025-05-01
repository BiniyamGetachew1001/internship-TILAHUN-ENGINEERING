"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { Menu, X, Globe, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Primary navigation items
const primaryRoutes = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
]

// Secondary navigation items for the "More" dropdown
const secondaryRoutes = [
  { name: "Careers", path: "/careers", group: "Company" },
  { name: "Gallery", path: "/gallery", group: "Company" },
  { name: "Clients", path: "/clients", group: "Company" },
  { name: "Book Appointment", path: "/appointment", group: "Company" },
]

const languages = [
  { name: "English", code: "en" },
  { name: "Amharic", code: "am" },
  { name: "Afaan Oromo", code: "om" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState(languages[0])
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  // Group secondary routes by their group property
  const groupedSecondaryRoutes = secondaryRoutes.reduce(
    (acc, route) => {
      if (!acc[route.group]) {
        acc[route.group] = []
      }
      acc[route.group].push(route)
      return acc
    },
    {} as Record<string, typeof secondaryRoutes>,
  )

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-black/70 backdrop-blur-md border-b border-zinc-800/50 py-2" : "bg-transparent py-4",
      )}
    >
      {/* Add subtle gradient line at the bottom */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-800/30 to-transparent"></div>
      )}

      <div className="container flex items-center justify-between">
        <Link href="/" className="relative z-50">
          <span className="font-heading text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
            TILAHUN
            <span className="text-white"> ENGINEERING</span>
          </span>
        </Link>

        <div className="flex items-center gap-4">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {primaryRoutes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors",
                  pathname === route.path ? "text-cyan-400" : "text-zinc-400 hover:text-white",
                )}
              >
                {pathname === route.path && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-600"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {route.name}
              </Link>
            ))}

            {/* More Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="relative px-3 py-2 text-sm font-medium transition-colors text-zinc-400 hover:text-white"
                >
                  More
                  <ChevronDown className="ml-1 h-3 w-3 opacity-70 transition-transform duration-200 ease-in-out group-data-[state=open]:rotate-180" />
                  {secondaryRoutes.some((route) => pathname === route.path) && (
                    <motion.span
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-600"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-zinc-900 border-zinc-800">
                {Object.entries(groupedSecondaryRoutes).map(([group, routes]) => (
                  <div key={group}>
                    <DropdownMenuLabel className="text-xs text-zinc-500">{group}</DropdownMenuLabel>
                    <DropdownMenuGroup>
                      {routes.map((route) => (
                        <DropdownMenuItem key={route.path} asChild>
                          <Link
                            href={route.path}
                            className={cn("cursor-pointer", pathname === route.path && "text-cyan-400")}
                          >
                            {route.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuGroup>
                  </div>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="hidden md:flex items-center gap-1 text-zinc-400 hover:text-white"
              >
                <Globe className="h-4 w-4" />
                <span>{currentLanguage.name}</span>
                <ChevronDown className="h-3 w-3 opacity-50 transition-transform duration-200 ease-in-out group-data-[state=open]:rotate-180" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800">
              {languages.map((language) => (
                <DropdownMenuItem
                  key={language.code}
                  onClick={() => setCurrentLanguage(language)}
                  className={cn("cursor-pointer", currentLanguage.code === language.code && "text-cyan-400")}
                >
                  {language.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Contact Button */}
          <Button
            asChild
            className="hidden md:flex bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.65)] transition-all duration-300"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="lg:hidden relative z-50" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-zinc-400" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md lg:hidden pt-20"
          >
            <nav className="container flex flex-col gap-2 p-4">
              {/* Primary Routes */}
              {primaryRoutes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "py-3 px-4 text-lg border-l-2 transition-all duration-200",
                    pathname === route.path
                      ? "border-cyan-400 text-white bg-zinc-900/50 rounded-r-md"
                      : "border-transparent text-zinc-400 hover:text-white hover:bg-zinc-900/30 hover:border-zinc-700 rounded-r-md",
                  )}
                >
                  {route.name}
                </Link>
              ))}

              {/* Secondary Routes - Grouped */}
              {Object.entries(groupedSecondaryRoutes).map(([group, routes]) => (
                <div key={group} className="mt-2">
                  <div className="px-4 py-1 text-xs text-zinc-500 uppercase tracking-wider">{group}</div>
                  {routes.map((route) => (
                    <Link
                      key={route.path}
                      href={route.path}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "py-2 px-4 text-base border-l-2 transition-all duration-200",
                        pathname === route.path
                          ? "border-cyan-400 text-white bg-zinc-900/50 rounded-r-md"
                          : "border-transparent text-zinc-400 hover:text-white hover:bg-zinc-900/30 hover:border-zinc-700 rounded-r-md",
                      )}
                    >
                      {route.name}
                    </Link>
                  ))}
                </div>
              ))}

              <div className="mt-4 flex flex-col gap-3 px-4">
                <div className="flex items-center gap-2 text-zinc-400">
                  <Globe className="h-4 w-4" />
                  <span>Language:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {languages.map((language) => (
                    <Button
                      key={language.code}
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentLanguage(language)}
                      className={cn(
                        "border-zinc-800",
                        currentLanguage.code === language.code
                          ? "bg-zinc-800 text-cyan-400"
                          : "bg-transparent text-zinc-400",
                      )}
                    >
                      {language.name}
                    </Button>
                  ))}
                </div>
              </div>

              <Button
                asChild
                className="mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.65)] transition-all duration-300"
              >
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Contact Us
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
