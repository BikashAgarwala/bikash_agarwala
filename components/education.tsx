"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { MapPin, Calendar, GraduationCap } from "lucide-react"
import SectionHeading from "./section-heading"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const education = [
    {
      degree: "B.Tech in Information Technology",
      school: "Asansol Engineering College",
      location: "West Bengal, India",
      period: "2022 - 2026",
      description: "Focus on software development, data structures, algorithms, and core CS concepts.",
      coursework: ["Data Structures", "Algorithms", "OOP", "DBMS", "Computer Networks", "Software Engineering"],
    },
    {
      degree: "Higher Secondary (PCM)",
      school: "S.H.M.S Inter Mahavidyalaya",
      location: "Dhanbad, India",
      period: "2019 - 2021",
      description: "Completed higher secondary education with a focus on Physics, Chemistry, and Mathematics.",
      coursework: [],
    },
  ]

  return (
    <section id="education" className="py-10 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto flex flex-col items-center">
        <SectionHeading title="Education" subtitle="My academic background" />

        <div className="mt-16 max-w-6xl mx-auto relative w-full">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-[9px] md:-translate-x-1/2 mt-6 ring-4 ring-background hidden md:block z-10"></div>

                {/* Mobile Timeline Dot */}
                <div className="md:hidden absolute left-8 w-3 h-3 bg-primary rounded-full -translate-x-[5.5px] top-6 ring-2 ring-primary/30 z-10"></div>

                {/* Mobile Line */}
                <div className="md:hidden absolute left-8 top-6 bottom-[-48px] w-px bg-border -translate-x-1/2 last:hidden"></div>

                <div className="flex-1 md:w-1/2 md:px-4">
                  <Card className="bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg h-full">
                    <CardHeader>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <CardTitle className="text-xl font-bold text-primary">{edu.degree}</CardTitle>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Calendar size={12} /> {edu.period}
                          </Badge>
                        </div>
                        <div className="lg:flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <GraduationCap size={14} /> {edu.school}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={14} /> {edu.location}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4">{edu.description}</p>
                      {edu.coursework.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course) => (
                            <Badge key={course} variant="secondary" className="text-xs">
                              {course}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>

                {/* Empty space for the other side of timeline */}
                <div className="hidden md:block flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div >
    </section >
  )
}
