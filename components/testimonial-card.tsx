"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { cn } from "@/lib/utils"

interface TestimonialCardProps {
  name: string
  position: string
  content: string
  image: string
}

export default function TestimonialCard({ name, position, content, image }: TestimonialCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={cn(
        "relative rounded-xl p-6 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 h-full transition-all duration-300",
        isHovered && "bg-zinc-900/80",
      )}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      {/* Gradient background for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/80 to-black/90 rounded-xl -z-10"></div>

      <div
        className={cn(
          "absolute -inset-px bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-xl opacity-0 transition-opacity duration-300",
          isHovered && "opacity-100",
        )}
      />

      {/* Subtle floating elements for depth */}
      <motion.div
        className="absolute w-20 h-20 rounded-full bg-cyan-500/5 blur-xl -z-5"
        animate={{
          x: [0, 10, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ top: "20%", right: "10%", opacity: isHovered ? 0.8 : 0.3 }}
      />

      <div className="relative z-10">
        <Quote className="h-8 w-8 text-cyan-400 mb-4 opacity-50" />

        <p className="text-zinc-300 mb-6 italic">{content}</p>

        <div className="flex items-center">
          <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4 border-2 border-zinc-700">
            <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </div>

          <div>
            <h4 className="font-medium text-white">{name}</h4>
            <p className="text-sm text-zinc-400">{position}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
