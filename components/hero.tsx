"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import { TypeAnimation } from "react-type-animation"
import AnimatedBackground from "./animated-background"
import FloatingShapes from "./floating-shapes"
import me from "@/public/me_suit.avif"
import Image from "next/image"

export default function Hero() {
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
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AnimatedBackground />
        <FloatingShapes />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 animate-gradient-xy"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl"
          >
            <Image src={me || "/placeholder.svg?height=128&width=128"} alt="Bikash Agarwala" className="object-cover" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Bikash Agarwala
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl font-medium text-muted-foreground h-12"
          >
            <TypeAnimation
              sequence={["Software Developer", 1000, "Full Stack Engineer", 1000, "Web Technology Lead", 1000]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-md text-muted-foreground"
          >
            Passionate developer building innovative solutions with modern technologies
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-3 justify-center mt-6"
          >
            <div className="flex gap-3">
              <Button onClick={handleDownload}  className="gap-2">
                <Download size={16} />
                Resume
              </Button>
              <Button variant="outline" className="gap-2">
                <Mail size={16} />
                Contact Me
              </Button>
            </div>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon">
                <Github size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin size={20} />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-down"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </a>
      </div>
    </section>
  )
}
