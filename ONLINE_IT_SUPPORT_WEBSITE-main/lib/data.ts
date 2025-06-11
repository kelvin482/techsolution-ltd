import type { TestimonialData, StatsData } from "@/types"
import { Users, Clock, Shield, Bot } from "lucide-react"

export const TESTIMONIALS: TestimonialData[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "IT Manager",
    company: "TechCorp",
    content:
      "This platform resolved our network issues in under an hour. The AI assistant provided instant guidance, and when we needed human help, the technician was incredibly knowledgeable.",
    rating: 5,
    initials: "SM",
    bgColor: "bg-blue-100 text-blue-600",
  },
  {
    id: "2",
    name: "Michael Johnson",
    role: "CTO",
    company: "InnovateLab",
    content:
      "Outstanding support! Our server went down at 2 AM and their team had us back online within 30 minutes. The real-time tracking kept us informed throughout the entire process.",
    rating: 5,
    initials: "MJ",
    bgColor: "bg-green-100 text-green-600",
  },
  {
    id: "3",
    name: "Emily Chen",
    role: "Operations Director",
    company: "DataFlow Inc",
    content:
      "The mobile app is fantastic! I can submit tickets and track progress from anywhere. The email notifications keep me updated without being overwhelming.",
    rating: 5,
    initials: "EC",
    bgColor: "bg-purple-100 text-purple-600",
  },
  {
    id: "4",
    name: "David Wilson",
    role: "CFO",
    company: "CloudSync",
    content:
      "We've reduced our IT support costs by 40% while improving response times. The AI handles routine questions perfectly, and complex issues get routed to experts immediately.",
    rating: 5,
    initials: "DW",
    bgColor: "bg-orange-100 text-orange-600",
  },
  {
    id: "5",
    name: "Lisa Rodriguez",
    role: "CISO",
    company: "SecureNet",
    content:
      "Security is our top priority, and TechSupport Pro delivers. Bank-level encryption, detailed audit logs, and compliance with all our industry standards.",
    rating: 5,
    initials: "LR",
    bgColor: "bg-teal-100 text-teal-600",
  },
]

export const TRUST_STATS: StatsData[] = [
  { icon: Shield, value: "99.9%", label: "Uptime Guarantee", color: "text-blue-600" },
  { icon: Clock, value: "<15min", label: "Avg Response Time", color: "text-green-600" },
  { icon: Users, value: "10,000+", label: "Happy Customers", color: "text-purple-600" },
  { icon: Bot, value: "24/7", label: "Support Available", color: "text-orange-600" },
]

export const COMPANY_LOGOS = ["TechCorp", "InnovateLab", "DataFlow Inc", "CloudSync", "SecureNet", "GlobalTech"]

export const MOCK_TICKETS = [
  {
    id: "TK-001",
    title: "Email not working",
    description: "Unable to send emails from Outlook. Getting error message...",
    priority: "High" as const,
    status: "Resolved" as const,
    assignedTo: "John Smith",
    createdAt: "2 hours ago",
    resolvedAt: "30 min ago",
    statusColor: "bg-green-500",
    badgeColor: "bg-green-100 text-green-800",
  },
  {
    id: "TK-002",
    title: "Printer connection issues",
    description: "Network printer not responding. Can't print documents...",
    priority: "Medium" as const,
    status: "In Progress" as const,
    assignedTo: "Sarah Johnson",
    createdAt: "1 hour ago",
    updatedAt: "15 min ago",
    statusColor: "bg-orange-500",
    badgeColor: "bg-orange-100 text-orange-800",
  },
  {
    id: "TK-003",
    title: "Software installation help",
    description: "Need help installing Adobe Creative Suite on new laptop...",
    priority: "Low" as const,
    status: "Open" as const,
    assignedTo: "Mike Davis",
    createdAt: "30 minutes ago",
    statusColor: "bg-blue-500",
    badgeColor: "bg-blue-100 text-blue-800",
  },
  {
    id: "TK-004",
    title: "Server downtime",
    description: "Main server is not responding. All users affected...",
    priority: "Critical" as const,
    status: "Critical" as const,
    assignedTo: "Alex Thompson",
    createdAt: "5 minutes ago",
    statusColor: "bg-red-500",
    badgeColor: "bg-red-100 text-red-800",
  },
]
