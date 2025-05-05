"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Database, GitBranch, Cpu } from "lucide-react"
import { TechIcon } from "./tech-icons"
import { motion } from "framer-motion"

export default function Skills() {
  const skillCategories = [
    {
      id: "languages",
      name: "Languages",
      icon: <Code className="h-5 w-5" />,
      skills: ["Python", "JavaScript", "Node.js", "React"],
    },
    {
      id: "databases",
      name: "Databases",
      icon: <Database className="h-5 w-5" />,
      skills: ["MongoDB", "PostgreSQL"],
    },
    {
      id: "devtools",
      name: "Dev Tools",
      icon: <GitBranch className="h-5 w-5" />,
      skills: ["Git", "Supabase", "AWS", "Google Cloud"],
    },
    {
      id: "specialties",
      name: "Specialties",
      icon: <Cpu className="h-5 w-5" />,
      skills: [
        "Telegram Bot Development",
        "Backend Web Development",
        "API Design",
        "System Architecture",
        "Chatbot Integration",
      ],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 subtle-grid"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-4">
            My Skills
          </Badge>
          <h2 className="premium-text-gradient mb-4">Technical Expertise</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50 mx-auto"></div>
        </div>

        <Tabs defaultValue="languages" className="w-full">
          <div className="flex justify-center mb-8 overflow-x-auto pb-2">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 shadow-premium">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                  {category.icon}
                  <span className="hidden md:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <Card className="premium-glass shadow-premium dark:shadow-premium-dark border-0">
                <CardContent className="p-6 md:p-8">
                  <div className="mb-6 flex items-center">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                  </div>

                  {/* Skill icons with premium styling */}
                  <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 mb-8"
                  >
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill}
                        variants={item}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        className="transform transition-transform duration-200"
                      >
                        <TechIcon key={skill} name={skill} />
                      </motion.div>
                    ))}
                  </motion.div>

                  <div className="font-mono text-xs md:text-sm rounded-lg bg-white/50 dark:bg-black/20 p-4 md:p-5 overflow-x-auto border border-white/20 dark:border-white/5 shadow-sm">
                    <div className="flex items-center mb-3 text-muted-foreground">
                      <div className="flex space-x-1 mr-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                      </div>
                      <span>skills.{category.id}.js</span>
                    </div>

                    <div className="space-y-1 md:space-y-2 min-w-[300px]">
                      <div className="text-foreground/80">
                        <span className="text-blue-500 dark:text-blue-400">const</span>{" "}
                        <span className="text-green-500 dark:text-green-400">{category.id}</span>{" "}
                        <span className="text-foreground/80">=</span>{" "}
                        <span className="text-yellow-500 dark:text-yellow-400">[</span>
                      </div>

                      {category.skills.map((skill, index) => (
                        <div key={skill} className="pl-6 md:pl-8">
                          <span className="text-amber-500 dark:text-amber-400">&quot;{skill}&quot;</span>
                          {index < category.skills.length - 1 ? <span className="text-foreground/80">,</span> : null}
                        </div>
                      ))}

                      <div className="text-yellow-500 dark:text-yellow-400">];</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
