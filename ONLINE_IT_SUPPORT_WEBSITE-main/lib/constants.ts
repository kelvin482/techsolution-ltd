export const SITE_CONFIG = {
  name: "Tech Solution Ltd",
  description: "Professional IT support platform providing instant help, expert technicians, and AI-powered solutions",
  url: "https://techsolutionltd.com",
  email: "support@techsolutionltd.com",
  phone: "+1 (800) TECH-PRO",
  location: "San Francisco, CA",
} as const

export const NAVIGATION_ITEMS = [
  { href: "/services", label: "Services" },
  { href: "/dashboard", label: "Dashboard Preview" },
  { href: "/get-started", label: "Get Started" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/about", label: "About Us" },
] as const

export const DEMO_CREDENTIALS = {
  admin: { email: "admin@demo.com", password: "admin123" },
  staff: { email: "staff@demo.com", password: "staff123" },
  client: { email: "client@demo.com", password: "client123" },
} as const

export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/techsolutionltd",
  linkedin: "https://linkedin.com/company/techsolutionltd",
  facebook: "https://facebook.com/techsolutionltd",
  github: "https://github.com/techsolutionltd",
} as const
