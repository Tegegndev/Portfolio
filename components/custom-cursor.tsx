"use client"

export default function CustomCursor() {
  // Disable custom cursor completely for now to eliminate potential errors
  return null

  /* Original implementation commented out to prevent errors
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined" || typeof document === "undefined") return

    // Define event handlers
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      // Check if cursor is over a clickable element
      if (e.target) {
        const target = e.target as HTMLElement
        const isClickable =
          target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          (target.closest && (target.closest("button") || target.closest("a"))) ||
          window.getComputedStyle(target).cursor === "pointer"

        setIsPointer(isClickable)
      }
      setIsVisible(true)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    // Safely add event listeners
    try {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mousedown", handleMouseDown)
      window.addEventListener("mouseup", handleMouseUp)
      window.addEventListener("mouseleave", handleMouseLeave)
      window.addEventListener("mouseenter", handleMouseEnter)
    } catch (error) {
      console.error("Error adding event listeners:", error)
    }

    // Cleanup function
    return () => {
      try {
        window.removeEventListener("mousemove", handleMouseMove)
        window.removeEventListener("mousedown", handleMouseDown)
        window.removeEventListener("mouseup", handleMouseUp)
        window.removeEventListener("mouseleave", handleMouseLeave)
        window.removeEventListener("mouseenter", handleMouseEnter)
      } catch (error) {
        console.error("Error removing event listeners:", error)
      }
    }
  }, [])

  // Only show custom cursor on desktop
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    // Initial check
    checkMobile()

    // Add event listener safely
    try {
      window.addEventListener("resize", checkMobile)
    } catch (error) {
      console.error("Error adding resize event listener:", error)
    }

    // Cleanup
    return () => {
      try {
        window.removeEventListener("resize", checkMobile)
      } catch (error) {
        console.error("Error removing resize event listener:", error)
      }
    }
  }, [])

  if (isMobile) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary z-50 pointer-events-none mix-blend-difference"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isPointer ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
          mass: 0.5,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary z-50 pointer-events-none mix-blend-difference"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isClicking ? 0.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 300,
          mass: 0.2,
        }}
      />
    </>
  )
  */
}
