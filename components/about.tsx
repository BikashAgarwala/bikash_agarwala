"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import SectionHeading from "./section-heading"
import me from "@/public/me_about.jpg"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone, Globe, Calendar, User } from "lucide-react"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const personalInfo = [
    { icon: User, label: "Name", value: "Bikash Agarwala" },
    { icon: MapPin, label: "Location", value: "Asansol, WB, India" },
    { icon: Mail, label: "Email", value: "bikash.agarwala.01@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 9382169706" },
    { icon: Globe, label: "Languages", value: "English, Hindi, Bengali" },
    { icon: Calendar, label: "Availability", value: "Open to opportunities" },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <SectionHeading title="About Me" subtitle="Get to know me better" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square max-w-md mx-auto lg:mx-0"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl"></div>
            <div className="relative h-full w-full rounded-2xl overflow-hidden border border-border shadow-2xl">
              <Image
                src={me || "/placeholder.svg?height=400&width=400"}
                alt="Bikash Agarwala"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Hey there! I&apos;m <span className="font-semibold text-primary">Bikash Agarwala</span>, a 4th-year IT student at Asansol Engineering College.
                I&apos;m a full-stack developer passionate about building scalable systems and exploring AI/ML.
              </p>
              <p>
                My journey involves hands-on experience as an SDE at KomfyTrip, contributing to open-source projects like Kestra,
                and leading tech communities. I love turning complex problems into elegant solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {personalInfo.map((item, index) => (
                <Card key={index} className="bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-colors">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="text-sm font-medium">{item.value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}