import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Headphones, Bot, Monitor, Lock, Cloud, Mail, CheckCircle, Clock, Zap, Users } from "lucide-react"
import Link from "next/link"
import { SiteHeader } from "../../components/ui/site-header"
import { Footer } from "../../components/footer"

export default function ServicesPage() {
  const coreServices = [
    {
      icon: Monitor,
      title: "🖥️ 1. IT Helpdesk & Ticketing System",
      description:
        "Submit, manage, and track your support requests with ease. Our intuitive dashboard allows users to report issues, upload files, and receive timely updates from our certified IT specialists.",
      highlight: "Stay in control with transparent, trackable ticketing support.",
      color: "blue",
    },
    {
      icon: Bot,
      title: "🤖 2. Instant AI-Powered Tech Support",
      description:
        "Need help fast? Our smart AI chatbot is integrated directly into the platform — providing immediate answers, step-by-step fixes, and automated troubleshooting 24/7.",
      highlight: "Get instant support for common issues without waiting in line.",
      color: "purple",
    },
    {
      icon: Headphones,
      title: "💻 3. Remote Technical Assistance",
      description:
        "Our experts can remotely diagnose and resolve software, system, and hardware problems. No need to wait for on-site support — we fix most issues in real-time using secure remote tools.",
      highlight: "Ideal for businesses and users working from anywhere.",
      color: "green",
    },
    {
      icon: Lock,
      title: "🔐 4. Cybersecurity & Malware Protection",
      description:
        "Protect your digital assets with professional-grade virus removal, firewall setup, and cybersecurity consultations. Our proactive alerts and scans help you stay one step ahead of threats.",
      highlight: "Peace of mind with always-on digital protection.",
      color: "red",
    },
    {
      icon: Cloud,
      title: "☁️ 5. Cloud Device & Network Monitoring",
      description:
        "Easily manage multiple devices, users, and system performance through our centralized cloud dashboard. Get notified about potential issues before they become problems.",
      highlight: "Designed for scalable, remote-friendly IT environments.",
      color: "sky",
    },
    {
      icon: Mail,
      title: "🧩 6. Email & Software Troubleshooting",
      description:
        "Having issues with Outlook, Gmail, Microsoft Teams, or Zoom? We help you resolve login issues, sync errors, crashes, and more — fast.",
      highlight: "Your favorite tools, back online — no frustration.",
      color: "orange",
    },
  ]

  const whyChooseUs = [
    {
      icon: Zap,
      title: "24/7 Expert Support",
      description:
        "Round-the-clock assistance from real IT experts and our AI chatbot, ensuring you're never left without help.",
      color: "blue",
    },
    {
      icon: Lock,
      title: "Encrypted & Secure",
      description: "Enterprise-grade security with encrypted communications and secure cloud-hosted infrastructure.",
      color: "green",
    },
    {
      icon: Clock,
      title: "Real-Time Tracking",
      description: "Monitor your support tickets with live updates, progress tracking, and transparent communication.",
      color: "purple",
    },
    {
      icon: Bot,
      title: "AI-Powered Solutions",
      description: "Smart chatbot assistance for immediate help with common issues, available 24/7 without waiting.",
      color: "orange",
    },
    {
      icon: Users,
      title: "Scalable Support",
      description:
        "Solutions that grow with your needs, perfect for individuals, startups, and enterprise teams alike.",
      color: "red",
    },
    {
      icon: CheckCircle,
      title: "Mobile-Friendly",
      description: "Access support from any device with our responsive platform designed for on-the-go assistance.",
      color: "teal",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <SiteHeader currentPath="/services" />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              IT Support Services Built for Speed, Simplicity, and Smart Solutions
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Welcome to <span className="font-semibold text-blue-600">Tech Solution ltd</span> — your trusted provider of
              fast, reliable, and expert <strong>online IT support</strong> to businesses, teams, and individuals across
              the globe.
            </p>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mt-4">
              From helpdesk ticketing to remote tech support, our platform ensures your IT problems are solved
              efficiently, securely, and with a human (or AI) touch.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">⚙️ Our Core Services</h2>
            <p className="text-lg text-gray-600">Comprehensive IT support solutions for businesses and individuals</p>
          </div>

          {coreServices.map((service, index) => (
            <div key={index} className="mb-16">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
                <div
                  className={`w-16 h-16 bg-${service.color}-100 rounded-full flex items-center justify-center flex-shrink-0`}
                >
                  <service.icon className={`h-8 w-8 text-${service.color}-600`} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  <p className="text-lg text-gray-700 mt-2">{service.description}</p>
                </div>
              </div>
              <Card className={`border-l-4 border-l-${service.color}-500 bg-${service.color}-50`}>
                <CardContent className="p-4">
                  <p className={`text-${service.color}-800 flex items-center`}>
                    <CheckCircle className={`h-5 w-5 mr-2 text-${service.color}-600`} />
                    <span className="italic">{service.highlight}</span>
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🌟 Why Choose Us?</h2>
            <p className="text-lg text-gray-600">What makes TechSupport Pro the right choice for your IT needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 bg-${feature.color}-100 rounded-full flex items-center justify-center mr-4`}
                  >
                    <feature.icon className={`h-6 w-6 text-${feature.color}-600`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Support Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">🧠 Smart Support That Works for You</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Whether you're facing a slow laptop, a hacked email, or a company-wide connectivity issue, our hybrid
              approach — combining <strong>live IT professionals</strong> with an <strong>AI chatbot assistant</strong>{" "}
              — means you get the right help, at the right time.
            </p>
          </div>

          <div className="bg-blue-700 p-6 rounded-lg text-center">
            <p className="text-xl text-blue-100 italic">
              "Let our AI handle the simple stuff. Let our experts handle the complex."
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">📞 Ready to Get Support?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/client/submit-ticket">
              <Button size="lg" className="w-full sm:w-auto">
                Submit a Ticket
              </Button>
            </Link>
            <Link href="/chat">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Chat with AI Assistant
              </Button>
            </Link>
          </div>
          <p className="text-lg text-gray-700">
            Or contact us at:{" "}
            <a href="mailto:support@techsupportpro.com" className="text-blue-600 font-semibold hover:underline">
              support@techsupportpro.com
            </a>
          </p>
        </div>
      </section>

      {/* Final Tagline */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl font-semibold text-gray-900">
            <span className="text-blue-600">Tech Solution ltd</span> — powering the future of IT support, one solved issue
            at a time.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
