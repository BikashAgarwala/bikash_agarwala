"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import SectionHeading from "./section-heading"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    name: "Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "C++"],
  },
  {
    name: "Frontend",
    skills: ["Next.js", "React", "Vue.js", "Tailwind CSS", "Redux", "Zustand"],
  },
  {
    name: "Backend",
    skills: ["Spring Boot", "FastAPI", "Node.js", "Express", "Django"],
  },
  {
    name: "Database & Cloud",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Git"],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="">
      <div className="container px-4 md:px-6 mx-auto">
        <SectionHeading title="Technical Skills" subtitle="Technologies I work with" />

        <div ref={ref} className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-primary text-center">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap justify-center gap-2">
                    {category.skills.map((skill) => (
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">And a few soft skills I&apos;m proud of...</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Problem Solving", "Team Leadership", "Communication", "Adaptability"].map((skill, i) => (
              <span key={i} className="text-sm font-medium px-4 py-2 rounded-full bg-primary/5 text-primary border border-primary/10">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
