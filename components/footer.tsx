import Link from "next/link"
import { Github, Linkedin, MessageCircle, Twitter, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/tegegndev",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/tegegn-wukianos-1a6469290?trk=contact-info",
      label: "LinkedIn",
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      url: "https://t.me/tegegndev",
      label: "Telegram",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      url: "https://x.com/tegegndev",
      label: "X / Twitter",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      url: "mailto:tegegnw1997@gmail.com",
      label: "Email",
    },
  ]

  return (
    <footer className="bg-white/80 dark:bg-black/80 backdrop-blur-md border-t border-white/10 dark:border-white/5 py-10 relative">
      <div className="absolute inset-0 subtle-dots"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="#home" className="text-xl font-bold tracking-tighter hover:text-primary transition-colors">
              <span className="text-primary">&lt;</span>
              <span>TW</span>
              <span className="text-primary">/&gt;</span>
            </Link>
            <p className="text-sm text-foreground/60 mt-2 max-w-md">
              Crafting robust backend solutions and automation systems that power modern applications.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/5"
                  aria-label={link.label}
                >
                  {link.icon}
                </Link>
              ))}
            </div>

            <div className="text-sm text-foreground/60">&copy; {currentYear} Tegegn Wukainos. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
