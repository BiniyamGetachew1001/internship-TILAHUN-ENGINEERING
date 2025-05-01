"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import { cn } from "@/lib/utils"

// Gallery data
const galleryItems = [
  {
    id: 1,
    title: "Industrial Manufacturing Plant",
    category: "Industrial",
    image: "/placeholder.svg?height=600&width=800",
    description: "Complete metal fabrication and installation for a major manufacturing facility in Addis Ababa.",
  },
  {
    id: 2,
    title: "Custom Steel Bridge",
    category: "Infrastructure",
    image: "/placeholder.svg?height=600&width=800",
    description: "Design and construction of a custom steel bridge connecting two industrial complexes.",
  },
  {
    id: 3,
    title: "Precision Machinery Components",
    category: "Custom Work",
    image: "/placeholder.svg?height=600&width=800",
    description: "Fabrication of high-precision components for specialized industrial machinery.",
  },
  {
    id: 4,
    title: "Automated Production Line",
    category: "Industrial Automation",
    image: "/placeholder.svg?height=600&width=800",
    description: "Design and implementation of a fully automated food processing production line.",
  },
  {
    id: 5,
    title: "Solar Power Support Structure",
    category: "Renewable Energy",
    image: "/placeholder.svg?height=600&width=800",
    description: "Design and fabrication of support structures for a 5MW solar power installation.",
  },
  {
    id: 6,
    title: "Hospital Expansion Project",
    category: "Healthcare",
    image: "/placeholder.svg?height=600&width=800",
    description: "Structural engineering and metal fabrication for a major hospital expansion.",
  },
  {
    id: 7,
    title: "Water Treatment Facility",
    category: "Infrastructure",
    image: "/placeholder.svg?height=600&width=800",
    description: "Design and fabrication of structural components for a municipal water treatment facility.",
  },
  {
    id: 8,
    title: "Commercial Building Retrofit",
    category: "Commercial",
    image: "/placeholder.svg?height=600&width=800",
    description: "Structural retrofit and modernization of a 12-story commercial building.",
  },
  {
    id: 9,
    title: "Industrial Equipment Installation",
    category: "Industrial",
    image: "/placeholder.svg?height=600&width=800",
    description: "Installation and commissioning of specialized industrial equipment for manufacturing.",
  },
  {
    id: 10,
    title: "Custom Metal Artwork",
    category: "Custom Work",
    image: "/placeholder.svg?height=600&width=800",
    description: "Design and fabrication of custom metal artwork for corporate headquarters.",
  },
  {
    id: 11,
    title: "Robotic Welding System",
    category: "Industrial Automation",
    image: "/placeholder.svg?height=600&width=800",
    description: "Implementation of automated robotic welding system for high-volume production.",
  },
  {
    id: 12,
    title: "Wind Turbine Components",
    category: "Renewable Energy",
    image: "/placeholder.svg?height=600&width=800",
    description: "Fabrication of precision components for wind turbine installations.",
  },
  {
    id: 13,
    title: "Medical Equipment Supports",
    category: "Healthcare",
    image: "/placeholder.svg?height=600&width=800",
    description: "Custom-designed support structures for specialized medical equipment.",
  },
  {
    id: 14,
    title: "Highway Overpass",
    category: "Infrastructure",
    image: "/placeholder.svg?height=600&width=800",
    description: "Structural engineering and fabrication for a major highway overpass project.",
  },
  {
    id: 15,
    title: "Retail Store Fixtures",
    category: "Commercial",
    image: "/placeholder.svg?height=600&width=800",
    description: "Custom metal fixtures and displays for high-end retail environments.",
  },
]

// Available categories for filtering
const categories = [
  "All",
  "Industrial",
  "Infrastructure",
  "Custom Work",
  "Industrial Automation",
  "Renewable Energy",
  "Healthcare",
  "Commercial",
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(galleryItems)

  const heroRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const galleryInView = useInView(galleryRef, { once: true, amount: 0.1 })

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return

      switch (e.key) {
        case "Escape":
          setLightboxOpen(false)
          break
        case "ArrowLeft":
          navigateLightbox("prev")
          break
        case "ArrowRight":
          navigateLightbox("next")
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxOpen, currentImageIndex])

  // Filter gallery items based on category
  useEffect(() => {
    if (selectedCategory === "All") {
      setVisibleItems(galleryItems)
    } else {
      setVisibleItems(galleryItems.filter((item) => item.category === selectedCategory))
    }
  }, [selectedCategory])

  // Open lightbox with specific image
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = "hidden"
  }

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = "auto"
  }

  // Navigate through lightbox images
  const navigateLightbox = (direction: "next" | "prev") => {
    if (direction === "next") {
      setCurrentImageIndex((prev) => (prev + 1) % visibleItems.length)
    } else {
      setCurrentImageIndex((prev) => (prev - 1 + visibleItems.length) % visibleItems.length)
    }
  }

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.15),transparent_70%)]" />

        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Project
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"> Gallery</span>
            </h1>
            <p className="text-lg text-zinc-300 mb-8">
              Explore our portfolio of engineering projects showcasing our expertise in metalwork, structural
              engineering, and innovative solutions across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} className="w-full py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.08),transparent_70%)]" />

        <div className="container relative">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={galleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-2 justify-center mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "rounded-full text-sm whitespace-nowrap",
                  selectedCategory === category
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700"
                    : "border-zinc-700 text-zinc-400 hover:bg-zinc-800 hover:text-white",
                )}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={galleryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="group relative cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300 blur-sm"></div>
                <div className="relative bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="p-3 rounded-full bg-zinc-900/80 backdrop-blur-sm">
                        <ZoomIn className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 bg-zinc-800 rounded-full text-xs text-zinc-300">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-zinc-400 text-sm line-clamp-2">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty state */}
          {visibleItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-xl p-8 text-center"
            >
              <p className="text-zinc-300 mb-4">No projects found in this category.</p>
              <Button
                onClick={() => setSelectedCategory("All")}
                variant="outline"
                className="border-zinc-700 text-zinc-400 hover:bg-zinc-800 hover:text-white"
              >
                View All Projects
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div className="absolute top-4 right-4 z-10">
              <Button
                variant="ghost"
                size="icon"
                onClick={closeLightbox}
                className="rounded-full bg-zinc-900/50 hover:bg-zinc-800 text-white"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            <div className="absolute left-4 z-10">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigateLightbox("prev")}
                className="rounded-full bg-zinc-900/50 hover:bg-zinc-800 text-white"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </div>

            <div className="absolute right-4 z-10">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigateLightbox("next")}
                className="rounded-full bg-zinc-900/50 hover:bg-zinc-800 text-white"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            <div className="w-full max-w-5xl">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={visibleItems[currentImageIndex].image || "/placeholder.svg"}
                  alt={visibleItems[currentImageIndex].title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-4 bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 rounded-lg p-4">
                <h3 className="text-xl font-bold text-white mb-1">{visibleItems[currentImageIndex].title}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-zinc-800 rounded-full text-xs text-zinc-300">
                    {visibleItems[currentImageIndex].category}
                  </span>
                </div>
                <p className="text-zinc-300">{visibleItems[currentImageIndex].description}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
