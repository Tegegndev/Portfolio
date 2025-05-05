"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Linkedin, Github, Mail, MessageCircle, Twitter } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Contact() {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/tegegn-wukianos-1a6469290?trk=contact-info",
      username: "Tegegn Wukianos",
    },
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/tegegndev",
      username: "@tegegndev",
    },
    {
      name: "Telegram",
      icon: <MessageCircle className="h-5 w-5" />,
      url: "https://t.me/tegegndev",
      username: "@tegegndev",
    },
    {
      name: "X / Twitter",
      icon: <Twitter className="h-5 w-5" />,
      url: "https://x.com/tegegndev",
      username: "@tegegndev",
    },
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      url: "mailto:tegegnw1997@gmail.com",
      username: "tegegnw1997@gmail.com",
    },
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 subtle-grid"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
          variants={fadeIn}
        >
          <Badge variant="outline" className="mb-4">
            Get In Touch
          </Badge>
          <h2 className="premium-text-gradient mb-4">Let's Connect</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <Card className="h-full premium-glass shadow-premium dark:shadow-premium-dark border-0">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-primary" />
                  Send Me a Message
                </h3>

                <form className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      required
                      className="bg-white/50 dark:bg-black/20 border-white/20 dark:border-white/10 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      required
                      className="bg-white/50 dark:bg-black/20 border-white/20 dark:border-white/10 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Subject"
                      required
                      className="bg-white/50 dark:bg-black/20 border-white/20 dark:border-white/10 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      required
                      className="min-h-[150px] bg-white/50 dark:bg-black/20 border-white/20 dark:border-white/10 focus:border-primary"
                    />
                  </div>
                  <Button type="submit" className="premium-button w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <Card className="h-full premium-glass shadow-premium dark:shadow-premium-dark border-0">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2 text-primary" />
                  Connect With Me
                </h3>

                <p className="text-foreground/80 mb-6 leading-relaxed">
                  Feel free to reach out through any of these platforms. I'm always open to discussing new projects,
                  creative ideas, or opportunities to be part of your vision.
                </p>

                <div className="space-y-3">
                  {socialLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 rounded-lg bg-white/50 dark:bg-black/20 hover:bg-primary/5 transition-colors duration-300 border border-white/20 dark:border-white/10"
                    >
                      <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mr-4">
                        {link.icon}
                      </div>
                      <div>
                        <h4 className="font-medium">{link.name}</h4>
                        <p className="text-sm text-foreground/60">{link.username}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
