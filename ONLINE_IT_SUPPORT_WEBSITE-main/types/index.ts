import type React from "react"
export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  role: "admin" | "staff" | "client"
  company?: string
  createdAt: Date
}

export interface Ticket {
  id: string
  title: string
  description: string
  priority: "low" | "medium" | "high" | "critical"
  status: "open" | "in-progress" | "resolved" | "closed"
  assignedTo?: string
  createdBy: string
  createdAt: Date
  updatedAt: Date
}

export interface NavigationItem {
  href: string
  label: string
  variant?: "default" | "ghost" | "outline"
}

export interface TestimonialData {
  id: string
  name: string
  role: string
  company: string
  content: string
  rating: number
  initials: string
  bgColor: string
}

export interface ServiceFeature {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  highlight: string
  color: string
}

export interface StatsData {
  icon: React.ComponentType<{ className?: string }>
  value: string
  label: string
  color: string
}
