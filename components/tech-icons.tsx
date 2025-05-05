"use client"

import { techIconsMap } from "./tech-stack-icons"
import { motion } from "framer-motion"

interface TechIconProps {
  name: string
  size?: "sm" | "md" | "lg"
}

export function TechIcon({ name, size = "md" }: TechIconProps) {
  const IconComponent = techIconsMap[name] || null

  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16 md:w-18 md:h-18",
    lg: "w-20 h-20 md:w-24 md:h-24",
  }

  const iconSizeClasses = {
    sm: "h-5 w-5",
    md: "h-7 w-7 md:h-8 md:w-8",
    lg: "h-9 w-9 md:h-10 md:w-10",
  }

  return (
    <div className="flex flex-col items-center">
      <motion.div
        whileHover={{ y: -5 }}
        className={`${sizeClasses[size]} bg-white dark:bg-black/40 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-xl flex items-center justify-center shadow-premium dark:shadow-premium-dark mb-3 transition-all duration-300 hover:border-primary/30 group`}
      >
        {IconComponent ? (
          <IconComponent
            className={`${iconSizeClasses[size]} text-primary group-hover:scale-110 transition-transform duration-300`}
          />
        ) : (
          <span className="text-lg font-semibold text-primary">{name.charAt(0)}</span>
        )}
      </motion.div>
      <span className="text-xs md:text-sm text-foreground/70 text-center font-medium">{name}</span>
    </div>
  )
}
