"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import SectionHeading from "./section-heading"
import FoodEase from "@/public/FoodEase.avif"
import Chatify from "@/public/Chatify.avif"
import HealthyMe from "@/public/HealthyMe.avif"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "FoodEase",
    description: "An online food ordering system where restaurants manage menus, timings, and accept/reject orders.",
    details:
      "Built dynamic restaurant listing, live menu updates, and customer ordering experience with real-time status.",
    image: FoodEase,
    tags: ["Spring Boot", "Next.js", "MySQL", "Zustand", "Tanstack Query", "Tailwind CSS"],
    github: "https://github.com/BikashAgarwala/FoodEase",
    demo: "#",
  },
  {
    id: 2,
    title: "Chatify",
    description: "A real-time chat room platform supporting multiple users with seamless live messaging.",
    details: "Implemented custom room creation, joining, and instant updates using WebSocket communication.",
    image: Chatify,
    tags: ["Spring Boot", "WebSocket", "React.js", "Tailwind CSS"],
    github: "https://github.com/BikashAgarwala/Chatify",
    demo: "#",
  },
  {
    id: 3,
    title: "HealthyMe",
    description: "An AI-powered medical assistant offering medical query support and health challenges.",
    details: "Added features like health tracking, rewards system, and secure authentication via OAuth.",
    image: HealthyMe,
    tags: ["React.js", "Tailwind CSS", "AI Integration"],
    github: "https://github.com/BikashAgarwala/Healthy-me",
    demo: "healthy-me-me.vercel.app/",
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Projects" subtitle="Showcasing my technical skills through real-world applications" />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden group hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30">
                <div className="overflow-hidden h-48">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{project.details}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tags.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="ghost" size="sm" className="gap-1">
                    <Github size={16} />
                    Code
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <ExternalLink size={16} />
                    Demo
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button variant="outline" className="gap-2">
            See more projects
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  )
}
