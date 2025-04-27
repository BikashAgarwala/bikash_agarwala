"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

interface Shape {
  id: number
  x: string
  y: string
  size: number
  rotation: number
  duration: number
  delay: number
  type: "square" | "circle" | "triangle" | "code"
}

export default function FloatingShapes() {
  const isMobile = useMobile()
  const shapesRef = useRef<Shape[]>([])

  useEffect(() => {
    const shapeCount = isMobile ? 8 : 15
    const shapes: Shape[] = []

    for (let i = 0; i < shapeCount; i++) {
      shapes.push({
        id: i,
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
        size: Math.random() * 30 + 10,
        rotation: Math.random() * 360,
        duration: Math.random() * 20 + 20,
        delay: Math.random() * 5,
        type: ["square", "circle", "triangle", "code"][Math.floor(Math.random() * 4)] as Shape["type"],
      })
    }

    shapesRef.current = shapes
  }, [isMobile])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapesRef.current.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute opacity-10"
          style={{
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
          }}
          animate={{
            x: ["-20px", "20px", "-20px"],
            y: ["-20px", "20px", "-20px"],
            rotate: [shape.rotation, shape.rotation + 180, shape.rotation + 360],
          }}
          transition={{
            duration: shape.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: shape.delay,
            ease: "linear",
          }}
        >
          {shape.type === "square" && <div className="w-full h-full border border-primary/30 rounded-sm" />}
          {shape.type === "circle" && <div className="w-full h-full border border-primary/30 rounded-full" />}
          {shape.type === "triangle" && (
            <div className="w-0 h-0 border-l-[15px] border-l-transparent border-b-[25px] border-b-primary/30 border-r-[15px] border-r-transparent" />
          )}
          {shape.type === "code" && <div className="text-primary/30 text-xs">{`{ }`}</div>}
        </motion.div>
      ))}
    </div>
  )
}
