"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import SectionHeading from "./section-heading"

const skillCategories = [
  {
    name: "Languages",
    skills: ["Java (OOPs, DSA)", "Python", "JavaScript", "TypeScript", "SQL", "HTML", "CSS", "C/C++"],
  },
  {
    name: "Frontend",
    skills: ["Next.js", "React.js", "Zustand", "Redux", "Tanstack Query", "Tailwind CSS", "Material-UI", "Bootstrap"],
  },
  {
    name: "Backend",
    skills: ["FastAPI", "Spring Boot", "Spring MVC", "Spring REST", "Spring Security", "Spring Data JPA", "Jakarta EE"],
  },
  {
    name: "Database",
    skills: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    name: "Tools",
    skills: ["Git", "GitHub", "Docker", "Redis", "Celery"],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Technical Skills" subtitle="Technologies I work with" />

        <div ref={ref} className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-card rounded-lg p-6 shadow-sm border border-primary/10"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="bg-muted rounded-full px-3 py-1 text-sm"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-muted rounded-full px-4 py-2">Teamwork</div>
            <div className="bg-muted rounded-full px-4 py-2">Communication</div>
            <div className="bg-muted rounded-full px-4 py-2">Leadership</div>
            <div className="bg-muted rounded-full px-4 py-2">Problem Solving</div>
            <div className="bg-muted rounded-full px-4 py-2">Time Management</div>
            <div className="bg-muted rounded-full px-4 py-2">Adaptability</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
