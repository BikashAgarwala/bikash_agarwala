"use client"

import { useEffect, useRef, useState } from "react"
import { useMobile } from "@/hooks/use-mobile"

interface Point {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
  alpha: number
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const isMobile = useMobile()
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMouseInCanvas, setIsMouseInCanvas] = useState(false)
  const pointsRef = useRef<Point[]>([])
  const animationRef = useRef<number>(0)

  // Set up canvas dimensions
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && canvasRef.current.parentElement) {
        const { width, height } = canvasRef.current.parentElement.getBoundingClientRect()
        setDimensions({ width, height })
        canvasRef.current.width = width
        canvasRef.current.height = height
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Initialize points
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return

    const pointCount = isMobile ? 30 : 80
    const points: Point[] = []

    for (let i = 0; i < pointCount; i++) {
      points.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        color: "217, 91%, 60%", // Approximate primary color
        alpha: Math.random() * 0.3 + 0.1,
      })
    }

    pointsRef.current = points
  }, [dimensions, isMobile])

  // Mouse event handlers
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!canvasRef.current) return

      const rect = canvasRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    const handleMouseEnter = () => setIsMouseInCanvas(true)
    const handleMouseLeave = () => setIsMouseInCanvas(false)

    const canvas = canvasRef.current
    if (canvas) {
      canvas.addEventListener("mousemove", handleMouseMove)
      canvas.addEventListener("mouseenter", handleMouseEnter)
      canvas.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove)
        canvas.removeEventListener("mouseenter", handleMouseEnter)
        canvas.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  // Animation loop
  useEffect(() => {
    const animate = () => {
      const canvas = canvasRef.current
      if (!canvas) return

      const ctx = canvas.getContext("2d")
      if (!ctx) return

      ctx.clearRect(0, 0, dimensions.width, dimensions.height)

      // Update and draw points
      pointsRef.current.forEach((point, i) => {
        // Update position
        point.x += point.vx
        point.y += point.vy

        // Bounce off edges
        if (point.x < 0 || point.x > dimensions.width) point.vx *= -1
        if (point.y < 0 || point.y > dimensions.height) point.vy *= -1

        // Draw point
        ctx.beginPath()
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(217, 91%, 60%, ${point.alpha})`
        ctx.fill()

        // Draw connections
        if (isMouseInCanvas) {
          const distance = Math.sqrt(Math.pow(mousePosition.x - point.x, 2) + Math.pow(mousePosition.y - point.y, 2))
          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(point.x, point.y)
            ctx.lineTo(mousePosition.x, mousePosition.y)
            const opacity = 0.2 * (1 - distance / 150)
            ctx.strokeStyle = `hsla(217, 91%, 60%, ${opacity})`
            ctx.stroke()
          }
        }

        // Connect nearby points
        for (let j = i + 1; j < pointsRef.current.length; j++) {
          const otherPoint = pointsRef.current[j]
          const distance = Math.sqrt(Math.pow(otherPoint.x - point.x, 2) + Math.pow(otherPoint.y - point.y, 2))
          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(point.x, point.y)
            ctx.lineTo(otherPoint.x, otherPoint.y)
            const opacity = 0.15 * (1 - distance / 100)
            ctx.strokeStyle = `hsla(217, 91%, 60%, ${opacity})`
            ctx.stroke()
          }
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationRef.current)
  }, [dimensions, isMouseInCanvas, mousePosition])

  return <canvas ref={canvasRef} className="absolute inset-0" />
}
