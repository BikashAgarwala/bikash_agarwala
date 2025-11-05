"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import SectionHeading from "./section-heading"
import me from "@/public/me_white.avif"
import Image from "next/image"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <SectionHeading title="About Me" subtitle="Get to know me better" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <div className="absolute w-[410] inset-0 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 blur-2xl opacity-20"></div>
            <Image
              src={me || "/placeholder.svg?height=400&width=400"}
              alt="Bikash Agarwala"
              className="relative rounded-2xl object-cover w-[350]"
            />
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-lg">
              Hey there! I&apos;m <span className="font-semibold text-primary">Bikash Agarwala</span>, a <b>4th-year</b> student pursuing <b>Information Technology</b> at Asansol Engineering College. I&apos;m a full-stack developer passionate about turning complex problems into clean, scalable solutions, with a growing focus on <b>scalable systems and AI/ML</b>.
            </p>

            <p>
              I&apos;ve gained hands-on experience as a <b>Software Development Engineer (SDE) at KomfyTrip</b>, where I build and optimize production-ready web applications using modern technologies like <b>Spring Boot</b>, <b>FastAPI</b>, <b>Next.js</b>, <b>MongoDB</b>, and <b>Redis</b>.
            </p>

            <p>
              I&apos;m also a passionate <b>open-source contributor</b>. I actively participated in <b>Hacktoberfest 2025</b> and have contributed to <b>Kestra</b>, tackling bugs and improving features. I&apos;m always looking to collaborate and build in public.
            </p>

            <p>
              I&apos;ve also given back to the tech community, <b>formerly serving</b> as the Web Technology Lead for <b>GDGC-AEC</b>, where I helped others grow and stay on top of the latest in tech.
            </p>

            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <li>
                  <span className="font-medium">Name:</span> Bikash Agarwala
                </li>
                <li>
                  <span className="font-medium">Location:</span> Asansol, WB, India
                </li>
                <li>
                  <span className="font-medium">Email:</span> bikash.agarwala.01@gmail.com
                </li>
                <li>
                  <span className="font-medium">Phone:</span> +91 9382169706
                </li>
                <li>
                  <span className="font-medium">Languages:</span> English, Hindi, Bengali
                </li>
                <li>
                  <span className="font-medium">Availability:</span> Open to opportunities
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}