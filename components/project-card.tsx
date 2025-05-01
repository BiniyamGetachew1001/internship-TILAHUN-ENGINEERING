"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  category: string
  image: string
  description: string
}

export default function ProjectCard({ title, category, image, description }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="group relative rounded-xl overflow-hidden bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 h-full"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className={cn("object-cover transition-transform duration-700", isHovered && "scale-110")}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

        <div className="absolute top-4 left-4 px-3 py-1 bg-cyan-500/90 backdrop-blur-sm rounded-full text-xs font-medium text-white glass-effect">
          {category}
        </div>

        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 opacity-0 transition-opacity duration-300",
            isHovered && "opacity-100",
          )}
        />

        {/* Depth elements */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent"
          style={{
            opacity: isHovered ? 0.9 : 0.7,
            transition: "opacity 0.3s ease",
          }}
        />
      </div>

      <div className="p-6 relative bg-gradient-to-b from-zinc-900/90 to-black/80">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-zinc-400 mb-4">{description}</p>

        <Link
          href={`/projects/${title.toLowerCase().replace(/\s+/g, "-")}`}
          className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          View Project Details
          <ArrowRight className={cn("ml-1 h-4 w-4 transition-transform duration-300", isHovered && "translate-x-1")} />
        </Link>
      </div>

      <div
        className={cn(
          "absolute top-3 right-3 p-2 bg-zinc-900/80 backdrop-blur-sm rounded-full opacity-0 transition-opacity duration-300 glass-effect",
          isHovered && "opacity-100",
        )}
      >
        <Link href={`/projects/${title.toLowerCase().replace(/\s+/g, "-")}`}>
          <ExternalLink className="h-4 w-4 text-white" />
        </Link>
      </div>
    </motion.div>
  )
}
