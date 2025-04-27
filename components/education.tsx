"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { MapPin } from "lucide-react"
import SectionHeading from "./section-heading"
import { Badge } from "@/components/ui/badge"

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Education" subtitle="My academic background" />

        <div className="mt-12 max-w-3xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="relative pl-8 border-l border-primary/20"
          >
            <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-primary -translate-x-1/2"></div>

            <div className="mb-12">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold">Bachelor of Technology in Information Technology</h3>
                <Badge variant="outline" className="font-normal">
                  2022 - 2026
                </Badge>
              </div>

              <div className="flex items-center text-muted-foreground mb-4">
                <h4 className="font-medium">Asansol Engineering College</h4>
                <span className="mx-2">•</span>
                <div className="flex items-center">
                  <MapPin size={14} className="mr-1" />
                  <span>West Bengal, India</span>
                </div>
              </div>

              <p className="text-muted-foreground">
                Currently pursuing my bachelor&apos;s degree with a focus on software development, data structures,
                algorithms, and web technologies.
              </p>

              <div className="mt-4">
                <span className="text-sm font-medium">Relevant Coursework:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="secondary">Data Structures</Badge>
                  <Badge variant="secondary">Algorithms</Badge>
                  <Badge variant="secondary">Object-Oriented Programming</Badge>
                  <Badge variant="secondary">Database Management</Badge>
                  <Badge variant="secondary">Web Development</Badge>
                </div>
              </div>
            </div>

            <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-primary -translate-x-1/2 mt-[200px]"></div>

            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold">Higher Secondary (PCM)</h3>
                <Badge variant="outline" className="font-normal">
                  2019 - 2021
                </Badge>
              </div>

              <div className="flex items-center text-muted-foreground mb-4">
                <h4 className="font-medium">S.H.M.S Inter Mahavidyalaya</h4>
                <span className="mx-2">•</span>
                <div className="flex items-center">
                  <MapPin size={14} className="mr-1" />
                  <span>Dhanbad, India</span>
                </div>
              </div>

              <p className="text-muted-foreground">
                Completed higher secondary education with a focus on Physics, Chemistry, and Mathematics.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
