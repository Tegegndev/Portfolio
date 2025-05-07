"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ExternalLink, Github, Code, Clock } from "lucide-react"
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
      title: "Amharic Text-to-Speech Bot",
      description:
        "A Telegram bot that converts Amharic text to natural-sounding speech, making content more accessible to those with visual impairments or reading difficulties.",
      image: "/placeholder.svg?height=400&width=600", // Replace with FreePik image
      tags: ["Python", "Telegram API", "Speech Synthesis", "NLP"],
      github: "#",
      demo: "https://t.me/amharic_tts_bot",
      featured: true,
    },
    {
      id: 2,
      title: "Pinterest Image Downloader",
      description:
        "A Telegram bot that allows users to download high-quality images from Pinterest by simply sharing a link. Supports batch downloading and various image formats.",
      image: "/placeholder.svg?height=400&width=600", // Replace with FreePik image
      tags: ["Python", "Telegram API", "Web Scraping", "Pinterest API"],
      github: "#",
      demo: "https://t.me/pinterest_dl_bot",
      featured: false,
    },
    {
      id: 3,
      title: "Grade 12 Exam Results Bot",
      description:
        "A Telegram bot that provides instant access to Grade 12 national exam results. Students can query their results by ID number, eliminating the need to navigate complex websites.",
      image: "/placeholder.svg?height=400&width=600", // Replace with FreePik image
      tags: ["Python", "Telegram API", "Web Scraping", "Database"],
      github: "#",
      demo: "https://t.me/grade12_results_bot",
      featured: false,
    },
    {
      id: 4,
      title: "Afan Oromo Chatbot",
      description:
        "An intelligent chatbot that communicates in Afan Oromo, providing information, answering questions, and helping users in their native language.",
      image: "/placeholder.svg?height=400&width=600", // Replace with FreePik image
      tags: ["Python", "NLP", "Machine Learning", "Telegram API"],
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Vision Assistant for the Blind",
      description:
        "An Android application that helps visually impaired individuals interact with their environment through advanced image recognition, text reading, and voice guidance.",
      image: "/placeholder.svg?height=400&width=600", // Replace with FreePik image
      tags: ["Android", "Java", "Computer Vision", "TensorFlow"],
      github: "#",
      demo: "#",
      featured: true,
      ongoing: true,
    },
    {
      id: 6,
      title: "Multilingual Voice Assistant",
      description:
        "A voice-controlled assistant supporting multiple Ethiopian languages, designed to bridge the digital divide for non-English speakers through natural language processing.",
      image: "/placeholder.svg?height=400&width=600", // Replace with FreePik image
      tags: ["Python", "NLP", "Speech Recognition", "AI"],
      github: "#",
      demo: "#",
      featured: false,
      ongoing: true,
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
                  <div className="absolute top-2 right-2 flex gap-2">
                    {project.featured && (
                      <div className="bg-primary text-primary-foreground text-xs py-1 px-3 rounded-full font-medium">
                        Featured
                      </div>
                    )}
                    {project.ongoing && (
                      <div className="bg-amber-500 text-white text-xs py-1 px-3 rounded-full font-medium flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        Ongoing
                      </div>
                    )}
                  </div>
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
                      {project.ongoing ? "Progress" : "Live Demo"}
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
