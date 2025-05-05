"use client"

import { useRef } from "react"
import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Code2, Terminal } from "lucide-react"
import Link from "next/link"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Text, PerspectiveCamera } from "@react-three/drei"
import { TechIcon } from "./tech-icons"

// 3D Text component
function AnimatedText({ text, position, color, size = 0.5 }) {
  const textRef = useRef()

  useFrame(({ clock }) => {
    if (textRef.current) {
      textRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime()) * 0.05
    }
  })

  return (
    <Text
      ref={textRef}
      position={position}
      color={color}
      fontSize={size}
      font="/fonts/Inter_Bold.json"
      anchorX="center"
      anchorY="middle"
    >
      {text}
    </Text>
  )
}

// Floating cube component
function FloatingCube({ position, size, color, rotationSpeed = 0.01 }) {
  const meshRef = useRef()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed
      meshRef.current.rotation.y += rotationSpeed * 1.5
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
    </mesh>
  )
}

// Hero scene component
function HeroScene({ isDarkMode }) {
  return (
    <Canvas style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />

      <AnimatedText
        text="Backend Developer"
        position={[-3, 0, 0]}
        color={isDarkMode ? "#ffffff" : "#1a1a1a"}
        size={0.4}
      />
      <AnimatedText
        text="Automation Expert"
        position={[3, 0, 0]}
        color={isDarkMode ? "#ffffff" : "#1a1a1a"}
        size={0.4}
      />

      <FloatingCube position={[-4, 2, -2]} size={0.5} color="#8b5cf6" rotationSpeed={0.01} />
      <FloatingCube position={[4, -2, -3]} size={0.7} color="#8b5cf6" rotationSpeed={0.015} />
      <FloatingCube position={[2, 3, -1]} size={0.6} color="#8b5cf6" rotationSpeed={0.02} />
      <FloatingCube position={[-3, -1.5, -2]} size={0.4} color="#8b5cf6" rotationSpeed={0.025} />

      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  )
}

export default function Hero() {
  const controls = useAnimation()
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Detect dark mode
  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined" || typeof document === "undefined") return

    const checkDarkMode = () => {
      try {
        const isDark = document.documentElement && document.documentElement.classList.contains("dark")
        setIsDarkMode(isDark)
      } catch (error) {
        console.error("Error checking dark mode:", error)
      }
    }

    // Initial check
    checkDarkMode()

    // Set up observer safely
    try {
      if (document.documentElement) {
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.attributeName === "class") {
              checkDarkMode()
            }
          })
        })

        observer.observe(document.documentElement, { attributes: true })

        return () => {
          observer.disconnect()
        }
      }
    } catch (error) {
      console.error("Error setting up MutationObserver:", error)

      // Fallback: check periodically
      const intervalId = setInterval(checkDarkMode, 1000)
      return () => clearInterval(intervalId)
    }
  }, [])

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } })
  }, [controls])

  const techIcons = [
    { name: "Node.js" },
    { name: "MongoDB" },
    { name: "Telegram Bot Development" },
    { name: "System Architecture" },
    { name: "Git" },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <HeroScene isDarkMode={isDarkMode} />
      </div>

      {/* Web3-inspired geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-xl transform rotate-12 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-xl transform -rotate-12 blur-xl"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-xl transform rotate-45 blur-xl"></div>

      <div className="container mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={controls}
          className="relative w-full max-w-4xl mx-auto p-8 rounded-xl bg-background/30 dark:bg-background/10 backdrop-blur-lg border border-primary/10 shadow-lg transition-all duration-300"
        >
          {/* Premium gradient border */}
          <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-br from-primary/30 via-purple-500/20 to-blue-500/30 blur-[0.5px] -z-10"></div>

          {/* Content background */}
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/60 rounded-xl z-[-1]"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-sm font-mono text-primary mb-4 flex items-center"
          >
            <Code2 className="mr-2 h-4 w-4" />
            &lt;Hello World /&gt;
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500"
          >
            Tegegn Wukainos
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex items-center mb-6"
          >
            <div className="h-1 w-12 bg-gradient-to-r from-primary to-purple-500 mr-4"></div>
            <h2 className="text-xl md:text-2xl text-foreground/80 flex items-center">
              <Terminal className="mr-2 h-5 w-5 text-primary" />
              Backend Developer & Automation Expert
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-foreground/70 max-w-2xl mb-8 backdrop-blur-sm bg-background/20 p-4 rounded-lg border border-primary/10"
          >
            Crafting robust backend solutions and automation systems that power modern applications. Specialized in
            Python, Node.js, and Telegram Bot development.
          </motion.p>

          {/* Tech icons with square backgrounds */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-5 gap-4 mb-8"
          >
            {techIcons.map((tech, index) => (
              <TechIcon key={index} name={tech.name} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              asChild
              size="lg"
              className="group bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 border-0"
            >
              <Link href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group border-primary/20 hover:border-primary/50 backdrop-blur-sm"
            >
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
