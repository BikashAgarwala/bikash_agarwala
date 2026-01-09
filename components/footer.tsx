"use client"

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="border-t border-border bg-muted/20">
      <div className="container px-4 md:px-6 py-12 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold">Bikash Agarwala</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Building digital experiences that matter.
            </p>
          </div>

          <div className="flex gap-4">
            <Link href="https://github.com/bikashagarwala0" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
                <Github size={20} />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/bikashagarwala0" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
                <Linkedin size={20} />
              </Button>
            </Link>
            <Link href="mailto:bikash.agarwala.01@gmail.com">
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
                <Mail size={20} />
              </Button>
            </Link>
          </div>

          <div className="text-center md:text-right text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Bikash Agarwala.</p>
            <p>All rights reserved.</p>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Button variant="outline" size="icon" onClick={scrollToTop} className="rounded-full">
            <ArrowUp size={16} />
          </Button>
        </div>
      </div>
    </footer>
  )
}
