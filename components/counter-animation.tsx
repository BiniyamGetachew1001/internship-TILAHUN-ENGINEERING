"use client"

import { useState, useEffect } from "react"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface CounterAnimationProps {
  value: number
  duration?: number
}

export default function CounterAnimation({ value, duration = 2 }: CounterAnimationProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrameId: number

    const startAnimation = (timestamp: number) => {
      startTime = timestamp
      animateCount(timestamp)
    }

    const animateCount = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      const currentCount = Math.floor(progress * value)

      setCount(currentCount)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateCount)
      } else {
        setCount(value)
      }
    }

    animationFrameId = requestAnimationFrame(startAnimation)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [value, duration, isInView])

  return <span ref={ref}>{count}</span>
}
