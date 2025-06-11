import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Shield, UserPlus, Settings, Headphones, CheckCircle, ArrowRight, Users, Bot, Clock } from "lucide-react"
import Link from "next/link"
import { SiteHeader } from "../../components/ui/site-header"
import { HeroSection } from "../../components/sections/hero-section"
import { Footer } from "../../components/footer"

export default function GetStartedPage() {
  const gettingStartedSteps = [
    {
      step: 1,
      icon: UserPlus,
      title: "Create Your Account",
      description: "Sign up for free in under 2 minutes",
      color: "blue",
      features: ["Choose your account type (Client or Staff)", "Verify your email address", "Set up your profile"],
      cta: { text: "Sign Up Now", href: "/auth/register" },
    },
    {
      step: 2,
      icon: Settings,
      title: "Set Up Your Workspace",
      description: "Customize your dashboard and preferences",
      color: "green",
      features: [
        "Configure notification preferences",
        "Add team members (if applicable)",
        "Explore the dashboard features",
      ],
      cta: { text: "Preview Dashboard", href: "/dashboard", variant: "outline" as const },
    },
    {
      step: 3,
      icon: Headphones,
      title: "Start Getting Support",
      description: "Submit your first ticket or chat with AI",
      color: "purple",
      features: [
        "Submit your first support ticket",
        "Try our AI assistant for quick help",
        "Connect with expert technicians",
      ],
      cta: { text: "Submit First Ticket", href: "/client/submit-ticket", variant: "outline" as const },
    },
  ]

  const accountTypes = [
    {
      type: "client",
      icon: Users,
      title: "Client Account",
      description: "Perfect for individuals and businesses needing IT support",
      price: "Free",
      subtitle: "No setup fees • Pay per ticket",
      color: "blue",
      features: [
        "Submit unlimited support tickets",
        "Real-time ticket tracking",
        "24/7 AI assistant access",
        "Email notifications",
        "Mobile-friendly dashboard",
      ],
      cta: { text: "Create Client Account", href: "/auth/register?type=client" },
    },
    {
      type: "staff",
      icon: Headphones,
      title: "Staff Account",
      description: "For IT professionals providing technical support",
      price: "Apply",
      subtitle: "Subject to approval • Earn per ticket",
      color: "green",
      features: [
        "Access to support ticket queue",
        "Advanced ticketing tools",
        "Performance analytics",
        "Team collaboration features",
        "Flexible working schedule",
      ],
      cta: { text: "Apply as Staff", href: "/auth/register?type=staff", variant: "outline" as const },
    },
  ]

  const quickStartGuides = [
    {
      type: "clients",
      icon: Users,
      title: "For Clients",
      description: "Getting help with your IT issues",
      color: "blue",
      steps: [
        {
          title: "Submit a Ticket",
          description: "Describe your issue in detail with screenshots or files if needed",
        },
        {
          title: "Track Progress",
          description: "Monitor your ticket status and communicate with assigned technicians",
        },
        {
          title: "Get Resolved",
          description: "Receive solutions and confirm when your issue is fully resolved",
        },
      ],
    },
    {
      type: "staff",
      icon: Headphones,
      title: "For Staff",
      description: "Providing excellent IT support",
      color: "green",
      steps: [
        {
          title: "Browse Tickets",
          description: "View available tickets and choose ones that match your expertise",
        },
        {
          title: "Provide Solutions",
          description: "Communicate with clients and work towards resolving their issues",
        },
        {
          title: "Earn & Grow",
          description: "Build your reputation and earn money by solving IT problems",
        },
      ],
    },
  ]

  const whyStartFeatures = [
    {
      icon: Clock,
      title: "Fast Setup",
      description: "Get started in under 5 minutes with our streamlined onboarding process.",
      color: "blue-500",
    },
    {
      icon: Bot,
      title: "AI-Powered",
      description: "Smart assistance and automated routing ensure you get help faster than ever.",
      color: "blue-500",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee for peace of mind.",
      color: "blue-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <SiteHeader currentPath="/get-started" />

      <HeroSection
        title="Get Started with"
        subtitle="TechSupport Pro"
        description="Join thousands of satisfied customers and experience professional IT support in just a few simple steps. No setup fees, no long-term contracts — just reliable support when you need it."
        primaryCta={{ text: "Create Free Account", href: "/auth/register" }}
        secondaryCta={{ text: "Already Have Account? Login", href: "/auth/login" }}
      />

      {/* Getting Started Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your IT Support Journey</h2>
            <p className="text-lg text-gray-600">Follow these simple steps to get up and running</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {gettingStartedSteps.map((step) => (
              <Card key={step.step} className={`border-2 hover:border-${step.color}-200 transition-colors relative`}>
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 bg-${step.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <step.icon className={`h-8 w-8 text-${step.color}-600`} />
                  </div>
                  <div
                    className={`absolute -top-3 -right-3 w-8 h-8 bg-${step.color}-600 text-white rounded-full flex items-center justify-center font-bold`}
                  >
                    {step.step}
                  </div>
                  <CardTitle>{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {step.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <Link href={step.cta.href}>
                      <Button className="w-full" variant={step.cta.variant || "default"}>
                        {step.cta.text}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Account Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Account Type</h2>
            <p className="text-lg text-gray-600">Select the option that best fits your needs</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {accountTypes.map((account) => (
              <Card key={account.type} className={`border-2 hover:border-${account.color}-300 transition-colors`}>
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 bg-${account.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <account.icon className={`h-8 w-8 text-${account.color}-600`} />
                  </div>
                  <CardTitle className="text-2xl">{account.title}</CardTitle>
                  <CardDescription>{account.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center mb-6">
                      <div className={`text-3xl font-bold text-${account.color}-600 mb-2`}>{account.price}</div>
                      <div className="text-sm text-gray-500">{account.subtitle}</div>
                    </div>
                    <ul className="space-y-3">
                      {account.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4">
                      <Link href={account.cta.href}>
                        <Button className="w-full" size="lg" variant={account.cta.variant || "default"}>
                          {account.cta.text}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Start Guide</h2>
            <p className="text-lg text-gray-600">Everything you need to know to get the most out of TechSupport Pro</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {quickStartGuides.map((guide) => (
              <Card key={guide.type} className={`border-2 border-${guide.color}-200`}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <guide.icon className={`h-6 w-6 text-${guide.color}-600 mr-2`} />
                    {guide.title}
                  </CardTitle>
                  <CardDescription>{guide.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {guide.steps.map((step, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div
                          className={`w-6 h-6 bg-${guide.color}-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1`}
                        >
                          <span className={`text-xs font-bold text-${guide.color}-600`}>{index + 1}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                          <p className="text-sm text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Start with Tech Solution ltd?</h2>
            <p className="text-xl text-blue-100">Join the platform that's revolutionizing IT support</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyStartFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div
                  className={`w-16 h-16 bg-${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your IT Support Experience?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of satisfied users who trust Tech Solution ltd for their IT needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/register">
              <Button size="lg" className="w-full sm:w-auto">
                Create Free Account
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Learn More About Our Services
              </Button>
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-4">No credit card required • Free to start • Cancel anytime</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
