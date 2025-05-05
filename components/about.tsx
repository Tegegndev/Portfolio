"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 subtle-dots"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
          variants={fadeIn}
        >
          <Badge variant="outline" className="mb-4">
            About Me
          </Badge>
          <h2 className="premium-text-gradient mb-4">Backend Developer with a Passion for Automation</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <Card className="h-full premium-glass shadow-premium dark:shadow-premium-dark border-0 overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <span className="text-primary mr-2">&gt;</span> My Background
                </h3>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  I'm a backend developer and automation expert with a strong focus on creating efficient, scalable
                  systems. My journey in software development began with a fascination for solving complex problems and
                  automating repetitive tasks.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  With expertise in Python, Node.js, and database technologies, I build robust backend solutions that
                  power modern applications. I'm particularly passionate about API design, system architecture, and
                  creating seamless integrations.
                </p>
                <div className="mt-6 p-4 bg-white/50 dark:bg-black/20 rounded-lg border border-white/20 dark:border-white/5">
                  <p className="text-foreground/80">
                    <strong className="text-primary">Contact:</strong>{" "}
                    <a href="mailto:tegegnw1997@gmail.com" className="text-primary hover:underline">
                      tegegnw1997@gmail.com
                    </a>
                  </p>
                  <p className="text-foreground/80">
                    <strong className="text-primary">GitHub:</strong>{" "}
                    <a
                      href="https://github.com/tegegndev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      @tegegndev
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <Card className="h-full premium-glass shadow-premium dark:shadow-premium-dark border-0 overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <span className="text-primary mr-2">&gt;</span> Current Focus
                </h3>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  I'm currently working on a University Student Portal project, developing a comprehensive platform that
                  streamlines academic processes and enhances the student experience.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  This project involves designing RESTful APIs, implementing authentication systems, and creating
                  efficient database schemas. I'm leveraging my expertise in backend development to build a scalable and
                  maintainable solution.
                </p>
                <div className="mt-6 p-4 bg-white/50 dark:bg-black/20 rounded-lg border border-white/20 dark:border-white/5">
                  <p className="text-foreground/80">
                    <strong className="text-primary">Telegram:</strong>{" "}
                    <a
                      href="https://t.me/tegegndev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      @tegegndev
                    </a>
                  </p>
                  <p className="text-foreground/80">
                    <strong className="text-primary">LinkedIn:</strong>{" "}
                    <a
                      href="https://www.linkedin.com/in/tegegn-wukianos-1a6469290?trk=contact-info"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Tegegn Wukainos
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
