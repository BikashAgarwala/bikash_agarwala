"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail, ArrowRight } from "lucide-react"
import { TypeAnimation } from "react-type-animation"
import AnimatedBackground from "./animated-background"
import FloatingShapes from "./floating-shapes"
import me from "@/public/me.jpg"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Hero() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Bikash_Agarwala_Resume.pdf";
    link.click();
  };

  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20 md:pt-0">
      <div className="absolute inset-0 z-0">
        <AnimatedBackground />
        <FloatingShapes />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 flex flex-col items-start text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
              Available for hire
            </span>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-tight">
              Hi, I&apos;m <span className="text-primary">Bikash</span>
              <br />
              <span className="text-foreground/80 text-2xl md:text-5xl block mt-2">Full Stack Developer</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-2xl font-medium text-muted-foreground h-8"
          >
            <TypeAnimation
              sequence={[
                "Building scalable systems",
                1000,
                "Crafting user experiences",
                1000,
                "Solving complex problems",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-lg text-muted-foreground text-lg leading-relaxed"
          >
            I transform ideas into robust, production-ready applications.
            Specializing in modern web technologies and cloud architecture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Button onClick={() => router.push("#contact")} size="lg" className="gap-2 text-base">
              Get in Touch <ArrowRight size={16} />
            </Button>
            <Button onClick={handleDownload} variant="outline" size="lg" className="gap-2 text-base">
              <Download size={16} /> Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-4 pt-8"
          >
            <a href="https://github.com/BikashAgarwala" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/bikashagarwala0" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:bikash@example.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={24} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 flex justify-center md:justify-end relative"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <Image
                src={me || "/placeholder.svg?height=400&width=400"}
                alt="Bikash Agarwala"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-muted-foreground rounded-full animate-scroll"></div>
        </div>
      </motion.div>
    </section>
  )
}