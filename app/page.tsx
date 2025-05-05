import type { Metadata } from "next"
import SimpleHero from "@/components/simple-hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"

export const metadata: Metadata = {
  title: "Tegegn Wukainos | Backend Developer & Automation Expert",
  description:
    "Portfolio of Tegegn Wukainos, a Backend Developer and Automation Expert specializing in Python, Node.js, and Telegram Bot Development.",
  keywords: ["backend developer", "automation expert", "python", "node.js", "telegram bot", "portfolio"],
}

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <SimpleHero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
