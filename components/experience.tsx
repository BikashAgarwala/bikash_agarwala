"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { MapPin } from "lucide-react"
import SectionHeading from "./section-heading"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Work Experience" subtitle="My professional journey so far" />

        <div className="mt-12 max-w-4xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="relative pl-8 border-l border-primary/20"
          >
            <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-primary -translate-x-1/2"></div>

            <div className="mb-8">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold">Software Development Intern</h3>
                <Badge variant="outline" className="font-normal">
                  August 2024 - Present
                </Badge>
              </div>

              <div className="flex items-center text-muted-foreground mb-4">
                <h4 className="font-medium">Komfy Trip LLP</h4>
                <span className="mx-2">•</span>
                <div className="flex items-center">
                  <MapPin size={14} className="mr-1" />
                  <span>Remote</span>
                </div>
              </div>

              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li> Built flight, hotel, and holiday booking modules for 10,000+ monthly users, enhancing user experience.</li>
                <li>Integrated secure payments and WhatsApp automation, boosting engagement by 30%.</li>
                <li>Developed scalable backends with FastAPI, MongoDB, Redis, and Celery, reducing latency by 25%.</li>
                <li>Optimized database queries and async tasks, achieving 40% faster processing during peak traffic.</li>
                <li>Collaborated with designers, QA, and marketing teams, ensuring on-time feature rollouts.</li>
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="secondary">FastAPI</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">MongoDB</Badge>
                <Badge variant="secondary">Redis</Badge>
                <Badge variant="secondary">Celery</Badge>
                <Badge variant="secondary">Razorpay</Badge>
                <Badge variant="secondary">PhonePe</Badge>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
