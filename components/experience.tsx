"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { MapPin, Calendar, Briefcase } from "lucide-react"
import SectionHeading from "./section-heading"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: "Software Development Engineer",
      company: "Komfy Trip LLP",
      location: "Remote",
      period: "August 2024 – November 2025",
      description: [
        "Spearheaded the end-to-end technical development for all core business verticals (flights, hotels, holidays, activities), shaping the product from initial concept to a full-scale, multi-service platform.",
        "Engineered scalable backend search services (FastAPI, Redis) for 10k+ daily flight queries, slashing API response times by 40% and increasing query throughput by 45%.",
        "Led the server-side re-engineering of the booking workflow using Celery and MongoDB, improving the booking success rate from 70% to 92% by automating ticketing and payment verification.",
        "Optimized frontend performance by 35% by implementing Next.js Server-Side Rendering (SSR) and integrating Zustand and TanStack Query for efficient server-state synchronization.",
      ],
      skills: ["FastAPI", "Redis", "Celery", "MongoDB", "Next.js", "Zustand", "TanStack Query"],
    },
  ]

  return (
    <section id="experience" className="py-10 md:py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <SectionHeading title="Work Experience" subtitle="My professional journey so far" />

        <div ref={ref} className="mt-12 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold">{exp.title}</CardTitle>
                        <CardDescription className="text-base font-medium text-foreground/80">{exp.company}</CardDescription>
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end gap-1 text-sm text-muted-foreground ml-16 md:ml-0">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 list-disc list-outside ml-4 text-muted-foreground text-sm mb-6 marker:text-primary">
                    {exp.description.map((item, i) => (
                      <li key={i} className="pl-1">{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-border/50">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}