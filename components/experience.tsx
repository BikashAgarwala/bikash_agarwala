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
      <div className="container px-4 md:px-6 mx-auto">
        <SectionHeading title="Work Experience" subtitle="My professional journey so far" />

        <div className="mt-12 max-w-5xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="relative pl-8 border-l border-primary/20 mb-12"
          >
            <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-primary -translate-x-1/2"></div>

            <div className="mb-8">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold">Software Development Engineer</h3>
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
                <li>Built booking workflows (flights, hotels, holidays and activities) powering 20K+ monthly users.</li>
                <li>Designed and developed flight list and filter system improving search speed by 45% and ensured scalability.</li>
                <li>Enhanced search relevance and cut response times by 40% through query optimization, Redis caching, and background jobs.</li>
                <li>Developed and executed the &quot;Pandal Hopper&apos;s Digital Passport&quot; marketing campaign during Durga Puja 2025.</li>
                <li>Built an SEO-friendly, server-rendered layout for a &quot;sticker-hunt&quot; campaign using Next.js.</li>
                <li>Integrated Razorpay payments and WhatsApp API. Increased booking conversions by 30%.</li>
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="secondary">FastAPI</Badge>
                <Badge variant="secondary">Spring Boot</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">MongoDB</Badge>
                <Badge variant="secondary">Redis</Badge>
                <Badge variant="secondary">Celery</Badge>
                <Badge variant="secondary">Razorpay</Badge>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}