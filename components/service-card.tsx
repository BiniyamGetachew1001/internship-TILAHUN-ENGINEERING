"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  color: string
}

export default function ServiceCard({ title, description, icon, color }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={cn(
        "relative group rounded-xl p-6 h-full bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 overflow-hidden transition-all duration-300",
        isHovered && "border-opacity-0",
      )}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      {/* Gradient Border on Hover */}
      <div
        className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-300 rounded-xl",
          isHovered && "opacity-100",
        )}
        style={{
          background: `linear-gradient(to right, rgb(34, 211, 238, 0.2), rgb(37, 99, 235, 0.2))`,
          padding: "1px",
        }}
      />

      {/* Enhanced Glow Effect */}
      <div
        className={cn(
          "absolute -inset-px bg-gradient-to-r opacity-0 blur-xl transition-opacity duration-300 rounded-xl",
          color,
          isHovered && "opacity-20",
        )}
      />

      {/* Depth background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/80 to-black/90 rounded-xl z-0"></div>

      <div className="relative z-10">
        <div className={cn("p-3 rounded-lg inline-block mb-4 bg-gradient-to-r text-white glass-effect", color)}>
          {icon}
        </div>

        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-zinc-400 mb-4">{description}</p>

        <Link
          href={`/services#${title.toLowerCase().replace(/\s+/g, "-")}`}
          className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          Learn More
          <ArrowRight className={cn("ml-1 h-4 w-4 transition-transform duration-300", isHovered && "translate-x-1")} />
        </Link>
      </div>
    </motion.div>
  )
}
