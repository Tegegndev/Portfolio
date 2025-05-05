import type React from "react"
import { Database, GitBranch, Cloud, Server, MessageCircle, Cpu, Layers, Network, type LucideIcon } from "lucide-react"

// Define a type for our tech icons
export type TechIconComponent = LucideIcon | React.FC<{ className?: string }>

// Python Icon (custom)
export const PythonIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 9H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3" />
    <path d="M12 15h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3" />
    <path d="M8 9V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4" />
    <circle cx="9" cy="7" r="1" />
    <circle cx="15" cy="17" r="1" />
  </svg>
)

// JavaScript Icon (custom)
export const JavaScriptIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 9v8" />
    <path d="M15 9v8" />
    <path d="M9 13h3" />
    <path d="M12 17h3" />
  </svg>
)

// React Icon (custom)
export const ReactIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="2" />
    <path d="M12 6.5c4.5 0 8.5 2 8.5 5.5s-4 5.5-8.5 5.5-8.5-2-8.5-5.5 4-5.5 8.5-5.5z" />
    <path d="M12 17.5c-4.5 0-8.5-2-8.5-5.5s4-5.5 8.5-5.5 8.5 2 8.5 5.5-4 5.5-8.5 5.5z" transform="rotate(60 12 12)" />
    <path d="M12 17.5c-4.5 0-8.5-2-8.5-5.5s4-5.5 8.5-5.5 8.5 2 8.5 5.5-4 5.5-8.5 5.5z" transform="rotate(-60 12 12)" />
  </svg>
)

// MongoDB Icon (custom)
export const MongoDBIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 3v19" />
    <path d="M18 7c0 3.3-2.7 8-6 8S6 10.3 6 7s2.7-4 6-4 6 .7 6 4z" />
  </svg>
)

// PostgreSQL Icon (custom)
export const PostgreSQLIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 3C8.7 3 6 4.7 6 7c0 2.1 2.3 3.7 5 4v9c0 .6.4 1 1 1s1-.4 1-1v-9c2.7-.3 5-1.9 5-4 0-2.3-2.7-4-6-4z" />
    <path d="M10 12v.5c0 .8-.7 1.5-1.5 1.5h-1c-.8 0-1.5-.7-1.5-1.5v-3c0-.8.7-1.5 1.5-1.5h1c.8 0 1.5.7 1.5 1.5" />
    <path d="M18 9v3.5c0 .8-.7 1.5-1.5 1.5h-1c-.8 0-1.5-.7-1.5-1.5v-3c0-.8.7-1.5 1.5-1.5h1c.8 0 1.5.7 1.5 1.5z" />
  </svg>
)

// Map tech names to their respective icon components
export const techIconsMap: Record<string, TechIconComponent> = {
  // Languages
  Python: PythonIcon,
  JavaScript: JavaScriptIcon,
  "Node.js": Server,
  React: ReactIcon,

  // Databases
  MongoDB: MongoDBIcon,
  PostgreSQL: PostgreSQLIcon,

  // Dev Tools
  Git: GitBranch,
  Supabase: Database,
  AWS: Cloud,
  "Google Cloud": Cloud,

  // Specialties
  "Telegram Bot Development": MessageCircle,
  "Backend Web Development": Server,
  "API Design": Network,
  "System Architecture": Layers,
  "Chatbot Integration": MessageCircle,

  // Default fallbacks for categories
  Backend: Server,
  Databases: Database,
  Telegram: MessageCircle,
  Automation: Cpu,
  DevOps: GitBranch,
}
