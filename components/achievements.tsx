"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Award, Users, Trophy , Braces } from "lucide-react"
import SectionHeading from "./section-heading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const achievements = [
  {
    id: 1,
    title: "Ranked 12th in IHMMC",
    description: "Among 1100+ participants (235 teams)",
    icon: Trophy,
  },
  {
    id: 2,
    title: "Organized Events",
    description: "200+ participants learned showcased their innovative ideas and working prototypes",
    icon: Braces,
  },
  {
    id: 3,
    title: "Second Runner-up",
    description: "In Extempore competition",
    icon: Award,
  },
  {
    id: 4,
    title: "Web Technology Lead",
    description: "GDG on Campus AEC (2024–25)",
    icon: Users,
  },
  {
    id: 5,
    title: "Web Technology Facilitator",
    description: "GDSC AEC (2023–24)",
    icon: Users,
  },
  {
    id: 6,
    title: "Hardware Club Representative",
    description: "Asansol Engineering College",
    icon: Users,
  },
]

export default function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="achievements" className="py-20">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Achievements & Leadership" subtitle="Recognition and responsibilities" />

        <div ref={ref} className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-primary/10 hover:border-primary/30 transition-colors">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <achievement.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{achievement.title}</CardTitle>
                  <CardDescription>{achievement.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {achievement.id === 3 && (
                    <p className="text-sm text-muted-foreground">
                      Leading web technology initiatives and organizing workshops for students.
                    </p>
                  )}
                  {achievement.id === 4 && (
                    <p className="text-sm text-muted-foreground">
                      Facilitated web development sessions and mentored junior students.
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
