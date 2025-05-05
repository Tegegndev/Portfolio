"use client"

export default function ParticleBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/90"></div>

      {/* Dotted background pattern */}
      <div className="absolute inset-0 dotted-pattern opacity-70"></div>

      {/* Subtle gradient overlays */}
      <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-[15%] right-[10%] w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"></div>
      <div className="absolute top-[40%] right-[20%] w-40 h-40 rounded-full bg-blue-500/5 blur-3xl"></div>

      {/* Subtle geometric shapes */}
      <div className="absolute top-[20%] left-[20%] w-32 h-32 border border-primary/5 rounded-lg transform rotate-12 opacity-10"></div>
      <div className="absolute bottom-[30%] right-[25%] w-24 h-24 border border-purple-500/5 rounded-lg transform -rotate-12 opacity-10"></div>
      <div className="absolute top-[60%] left-[60%] w-40 h-40 border border-blue-500/5 rounded-lg transform rotate-45 opacity-10"></div>
    </div>
  )
}
