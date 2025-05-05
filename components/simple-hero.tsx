"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Code2, Terminal } from "lucide-react"
import Link from "next/link"
import { TechIcon } from "./tech-icons"
import { motion } from "framer-motion"

export default function SimpleHero() {
  const techIcons = [
    { name: "Node.js" },
    { name: "MongoDB" },
    { name: "Telegram Bot Development" },
    { name: "System Architecture" },
    { name: "Git" },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 subtle-grid"></div>

      {/* Premium background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto z-10 relative px-4">
        <motion.div
          initial="hidden"
          animate="show"
          variants={container}
          className="relative w-full max-w-4xl mx-auto p-8 md:p-12 rounded-xl premium-glass shadow-premium dark:shadow-premium-dark transition-all duration-300 premium-border"
        >
          <motion.div variants={item} className="text-sm font-mono text-primary mb-4 flex items-center">
            <Code2 className="mr-2 h-4 w-4" />
            &lt;Hello World /&gt;
          </motion.div>

          <motion.h1 variants={item} className="premium-text-gradient mb-4">
            Tegegn Wukainos
          </motion.h1>

          <motion.div variants={item} className="flex items-center mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-primary to-primary/50 mr-4"></div>
            <h2 className="text-xl md:text-2xl text-foreground/80 flex items-center">
              <Terminal className="mr-2 h-5 w-5 text-primary" />
              Backend Developer & Automation Expert
            </h2>
          </motion.div>

          <motion.p
            variants={item}
            className="text-foreground/70 max-w-2xl mb-8 bg-white/50 dark:bg-black/20 p-6 rounded-lg border border-white/20 dark:border-white/5 shadow-sm"
          >
            Crafting robust backend solutions and automation systems that power modern applications. Specialized in
            Python, Node.js, and Telegram Bot development with a focus on scalable, maintainable architectures.
          </motion.p>

          {/* Tech icons with premium styling */}
          <motion.div variants={item} className="grid grid-cols-3 sm:grid-cols-5 gap-4 mb-10">
            {techIcons.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="transform transition-transform duration-200"
              >
                <TechIcon name={tech.name} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="premium-button group">
              <Link href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary/20 hover:border-primary/50 backdrop-blur-sm group"
            >
              <Link href="mailto:tegegnw1997@gmail.com">
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                Contact Me
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
