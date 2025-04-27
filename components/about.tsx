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
      <div className="container px-4 md:px-6">
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
              className="relative rounded-2xl object-cover w-[400]"
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
              Hello! I&apos;m <span className="font-semibold text-primary">Bikash Agarwala</span>, a passionate software
              developer based in Asansol, West Bengal, India. I&apos;m currently pursuing my Bachelor&apos;s degree in Information
              Technology at Asansol Engineering College.
            </p>

            <p>
              As a fresher in the tech industry, I&apos;ve already gained valuable experience through my internship at Komfy
              Trip LLP, where I&apos;ve been working on full-stack development using FastAPI, Next.js, MongoDB, and other
              modern technologies.
            </p>

            <p>
              I&apos;m particularly interested in building scalable web applications and solving complex problems through
              elegant code. My experience spans both frontend and backend development, with a focus on creating
              responsive, user-friendly interfaces backed by robust server-side logic.
            </p>

            <p>
              Outside of coding, I love diving into new technologies, experimenting with personal projects, and constantly learning about the latest innovations in tech. I&apos;m proud to be actively involved in tech communities as the Web Technology Lead for GDG on Campus AEC.

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
