"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GitPullRequest, Star, ExternalLink } from "lucide-react"
import SectionHeading from "./section-heading"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function OpenSource() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const contributions = [
        {
            project: "Kestra",
            role: "Open Source Data Orchestration Platform",
            description: "Engineered the Dropbox plugin from scratch, implementing 9+ file management tasks (List, Download, Upload, Delete, Search) using the Dropbox Java SDK.",
            details: [
                "Implemented robust data handling logic, including flexible path inputs (String or Kestra URI) and scalable retrieval options (FETCH ONE, FETCH, STORE).",
                "Resolved a global UI bug by fixing CSS overflows in notification components and refactored the blueprint browser with a responsive, multi-column Flexbox grid.",
            ],
            tags: ["Java", "Vue.js", "SCSS", "Open Source"],
            link: "https://github.com/kestra-io/kestra",
        },
    ]

    return (
        <section id="open-source" className="py-20 bg-muted/30">
            <div className="container px-4 md:px-6 mx-auto">
                <SectionHeading title="Open Source Contributions" subtitle="Giving back to the community" />

                <div ref={ref} className="mt-12 max-w-4xl mx-auto">
                    {contributions.map((contribution, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg">
                                <CardHeader>
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                                <GitPullRequest className="h-6 w-6 text-primary" />
                                            </div>
                                            <div>
                                                <CardTitle className="text-xl font-bold">{contribution.project}</CardTitle>
                                                <CardDescription className="text-base">{contribution.role}</CardDescription>
                                            </div>
                                        </div>
                                        <Link href={contribution.link} target="_blank" rel="noopener noreferrer">
                                            <Button variant="outline" size="sm" className="gap-2">
                                                <Star size={16} className="text-yellow-500" /> View Project <ExternalLink size={14} />
                                            </Button>
                                        </Link>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">{contribution.description}</p>
                                    <ul className="space-y-2 list-disc list-outside ml-4 text-muted-foreground text-sm mb-6 marker:text-primary">
                                        {contribution.details.map((detail, i) => (
                                            <li key={i} className="pl-1">{detail}</li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-wrap gap-2">
                                        {contribution.tags.map((tag) => (
                                            <Badge key={tag} variant="secondary" className="text-xs">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
