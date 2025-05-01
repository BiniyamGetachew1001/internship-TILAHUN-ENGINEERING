"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function DepthLayers() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()

  const layer1Y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const layer2Y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const layer3Y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])

  const layer1Opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.15, 0.1, 0.05])
  const layer2Opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.07, 0.03])
  const layer3Opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.05, 0.03, 0.01])

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-screen overflow-hidden pointer-events-none z-0">
      {/* Layer 1 - Deepest, moves fastest */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          y: layer1Y,
          opacity: layer1Opacity,
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"></div>
      </motion.div>

      {/* Layer 2 - Middle depth */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{
          y: layer2Y,
          opacity: layer2Opacity,
        }}
      >
        <div className="absolute top-1/2 right-1/3 w-72 h-72 rounded-full bg-cyan-400/10 blur-2xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-blue-500/10 blur-2xl"></div>
      </motion.div>

      {/* Layer 3 - Closest to viewer, moves slowest */}
      <motion.div
        className="absolute inset-0 z-20"
        style={{
          y: layer3Y,
          opacity: layer3Opacity,
        }}
      >
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-cyan-300/10 blur-xl"></div>
        <div className="absolute bottom-1/2 left-1/4 w-56 h-56 rounded-full bg-blue-400/10 blur-xl"></div>
      </motion.div>
    </div>
  )
}
