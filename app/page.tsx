import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import OpenSource from "@/components/open-source"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Achievements from "@/components/achievements"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/80 overflow-hidden">
      <Hero />
      <About />
      <Experience />
      <OpenSource />
      <Projects />
      <Skills />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  )
}
