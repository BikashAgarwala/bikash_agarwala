"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import SectionHeading from "./section-heading"
import FoodEase from "@/public/FoodEase.avif"
import Chatify from "@/public/Chatify.avif"
import HealthyMe from "@/public/HealthyMe.avif"
import Stash from "@/public/Stash.png"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Stash",
    description: "Universal content management system for personal data.",
    details:
      "A centralized hub for organizing notes, images, and links. Built for scalability and ease of use.",
    image: Stash,
    tags: ["Next.js", "FastAPI", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/BikashAgarwala/project-stash",
    demo: "#",
  },
  {
    id: 2,
    title: "FoodEase",
    description: "Restaurant management and food ordering system.",
    details:
      "Features live menu updates, order management, and real-time status tracking for customers.",
    image: FoodEase,
    tags: ["Spring Boot", "Next.js", "MySQL", "Redis"],
    github: "https://github.com/BikashAgarwala/FoodEase",
    demo: "#",
  },
  {
    id: 3,
    title: "Chatify",
    description: "Real-time chat platform with WebSocket support.",
    details: "Supports custom rooms, instant messaging, and seamless user experience.",
    image: Chatify,
    tags: ["Spring Boot", "WebSocket", "JavaScript"],
    github: "https://github.com/BikashAgarwala/Chatify",
    demo: "#",
  },
  {
    id: 4,
    title: "HealthyMe",
    description: "AI-powered medical assistant and health tracker.",
    details: "Includes health challenges, rewards system, and secure OAuth authentication.",
    image: HealthyMe,
    tags: ["React.js", "Tailwind CSS", "AI Integration"],
    github: "https://github.com/BikashAgarwala/Healthy-me",
    demo: "https://healthy-me-me.vercel.app/",
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <SectionHeading title="Featured Projects" subtitle="Showcasing my technical skills through real-world applications" />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden group hover:shadow-2xl transition-all duration-300 border-primary/10 hover:border-primary/30 bg-background/50 backdrop-blur-sm">
                <div className="relative overflow-hidden h-48 w-full">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                    <div className="flex gap-2">
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Github size={16} />
                        </Button>
                      </Link>
                      {project.demo !== "#" && (
                        <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <ExternalLink size={16} />
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                  <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{project.details}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link href="https://github.com/BikashAgarwala" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="gap-2 group">
              View All Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}