"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ExternalLink, Github, Code } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const projects = [
    {
      id: 1,
      title: "University Student Portal",
      description:
        "A comprehensive platform for university students to access course materials, submit assignments, and track their academic progress.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Python", "PostgreSQL", "React", "API"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Telegram Bot Framework",
      description:
        "A modular framework for building Telegram bots with advanced features like conversation handling and inline queries.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Python", "Telegram API", "MongoDB"],
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      id: 3,
      title: "API Gateway Service",
      description:
        "A scalable API gateway that handles authentication, rate limiting, and request routing for microservices.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Node.js", "Express", "Redis", "Docker"],
      github: "#",
      demo: "#",
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 subtle-dots"></div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <Badge variant="outline" className="mb-4">
            My Work
          </Badge>
          <h2 className="premium-text-gradient mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="h-full overflow-hidden group premium-card border-0 shadow-premium dark:shadow-premium-dark hover:shadow-premium-hover transition-all duration-300">
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {project.featured && (
                    <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs py-1 px-3 rounded-full font-medium">
                      Featured
                    </div>
                  )}
                </div>
                <CardContent className="p-6 relative z-10">
                  <h3 className="text-xl font-semibold mb-2 flex items-center group-hover:text-primary transition-colors">
                    <Code className="h-5 w-5 mr-2 text-primary" />
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs font-medium">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between relative z-10">
                  <Button variant="outline" size="sm" asChild className="border-primary/20 hover:border-primary/50">
                    <Link href={project.github}>
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild className="premium-button">
                    <Link href={project.demo}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
