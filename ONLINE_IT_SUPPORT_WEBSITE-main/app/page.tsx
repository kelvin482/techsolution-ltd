import { Clock, Users, Bot, CheckCircle, Shield, Headphones } from "lucide-react"
import { SiteHeader } from "@/components/ui/site-header"
import { HeroSection } from "@/components/sections/hero-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { FeatureCard } from "@/components/ui/feature-card"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  const features = [
    {
      icon: Clock,
      title: "Real-Time Ticket Tracking",
      description: "Monitor your support requests every step of the way",
      content:
        "Get instant updates on ticket status, see when technicians are working on your issue, and track resolution progress in real-time.",
      iconColor: "text-blue-600",
      hoverColor: "hover:border-blue-200",
    },
    {
      icon: Users,
      title: "Expert Support Staff",
      description: "Certified IT professionals at your service",
      content:
        "Our team of certified technicians has years of experience solving complex IT issues across all major platforms and systems.",
      iconColor: "text-green-600",
      hoverColor: "hover:border-green-200",
    },
    {
      icon: Bot,
      title: "Email Notifications",
      description: "Stay informed without constantly checking",
      content:
        "Receive automatic email updates when your ticket status changes, when technicians respond, or when your issue is resolved.",
      iconColor: "text-purple-600",
      hoverColor: "hover:border-purple-200",
    },
    {
      icon: Shield,
      title: "Secure & Cloud-Hosted",
      description: "Enterprise-grade security and reliability",
      content:
        "Your data is protected with bank-level encryption and hosted on secure cloud infrastructure with 99.9% uptime guarantee.",
      iconColor: "text-orange-600",
      hoverColor: "hover:border-orange-200",
    },
    {
      icon: Headphones,
      title: "Mobile-Friendly",
      description: "Get support anywhere, anytime",
      content: "Access your tickets, chat with support, and get help from any device - desktop, tablet, or smartphone.",
      iconColor: "text-teal-600",
      hoverColor: "hover:border-teal-200",
    },
    {
      icon: CheckCircle,
      title: "AI-Powered Support",
      description: "Instant answers and smart routing",
      content:
        "Get immediate help from our AI assistant for common issues, plus intelligent ticket routing to the right specialist.",
      iconColor: "text-indigo-600",
      hoverColor: "hover:border-indigo-200",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <SiteHeader currentPath="/" />

      <HeroSection
        title="Instant IT Support"
        subtitle="When You Need It Most"
        description="Submit tickets, track progress, and chat with certified IT experts — all in one place."
        primaryCta={{ text: "Get Started", href: "/get-started" }}
        secondaryCta={{ text: "View Our Services", href: "/services" }}
        additionalCta={{ text: "See Dashboard in Action", href: "/dashboard" }}
      />

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Get IT support in just 3 simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                emoji: "📝",
                title: "Submit a Ticket",
                description:
                  "Describe your IT issue in detail. Our smart system will categorize and prioritize your request automatically.",
                color: "bg-blue-600",
              },
              {
                step: 2,
                emoji: "🧑‍💻",
                title: "Assigned to an IT Expert",
                description:
                  "Your ticket is instantly routed to the most qualified technician based on the issue type and urgency level.",
                color: "bg-green-600",
              },
              {
                step: 3,
                emoji: "✅",
                title: "Get Your Issue Resolved",
                description:
                  "Track progress in real-time and communicate directly with your assigned expert until the issue is fully resolved.",
                color: "bg-purple-600",
              },
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">{step.emoji}</span>
                </div>
                <div className="mb-4">
                  <span
                    className={`inline-flex items-center justify-center w-8 h-8 ${step.color} text-white rounded-full text-sm font-semibold mb-2`}
                  >
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/get-started">
              <Button size="lg" className="mr-4">
                Start Now - It's Free
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Tech Solution Ltd</h2>
            <p className="text-lg text-gray-600">Everything you need for professional IT support</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                content={feature.content}
                iconColor={feature.iconColor}
                hoverColor={feature.hoverColor}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/get-started">
              <Button size="lg" className="mr-4">
                Try All Features Free
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline" size="lg">
                See Dashboard Preview
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Bot className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Powered by Advanced AI</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI assistant provides instant support, automates routine tasks, and helps resolve issues faster than
              ever before.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Intelligent Support Features</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: Clock,
                    title: "24/7 Availability",
                    description: "AI never sleeps, providing round-the-clock support",
                  },
                  {
                    icon: Bot,
                    title: "Smart Ticket Routing",
                    description: "Automatically categorize and assign tickets to the right team",
                  },
                  {
                    icon: CheckCircle,
                    title: "Instant Solutions",
                    description: "Get immediate answers to common IT problems",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <feature.icon className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="border-b pb-4 mb-4">
                <h4 className="font-semibold text-gray-900">AI Assistant Preview</h4>
              </div>
              <div className="space-y-3">
                <div className="bg-gray-100 rounded-lg p-3">
                  <p className="text-sm text-gray-700">
                    <strong>User:</strong> My computer won't start up
                  </p>
                </div>
                <div className="bg-blue-100 rounded-lg p-3">
                  <p className="text-sm text-gray-700">
                    <strong>AI:</strong> I'll help you troubleshoot this. Let's start with basic checks: 1. Is the power
                    cable connected? 2. Are there any lights on the computer? 3. Do you hear any fans running?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
