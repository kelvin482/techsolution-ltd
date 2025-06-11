import { Mail, MessageCircle, Facebook, Twitter, Linkedin, Github, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants"

export function Footer() {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/dashboard", label: "Dashboard Preview" },
    { href: "/about", label: "About Us" },
    { href: "/pricing", label: "Pricing" },
    { href: "/features", label: "Features" },
    { href: "/contact", label: "Contact" },
  ]

  const supportLinks = [
    { href: "/auth/login", label: "Login" },
    { href: "/auth/register", label: "Sign Up" },
    { href: "/client/submit-ticket", label: "Submit Ticket" },
    { href: "/help", label: "Help Center" },
    { href: "/faq", label: "FAQ" },
    { href: "/status", label: "System Status" },
  ]

  const legalLinks = [
    { href: "/privacy", label: "Privacy Policy", featured: true },
    { href: "/terms", label: "Terms of Service" },
    { href: "/security", label: "Security" },
    { href: "/compliance", label: "Compliance" },
  ]

  const socialIcons = [
    { href: SOCIAL_LINKS.twitter, icon: Twitter, color: "hover:bg-blue-600" },
    { href: SOCIAL_LINKS.linkedin, icon: Linkedin, color: "hover:bg-blue-700" },
    { href: SOCIAL_LINKS.facebook, icon: Facebook, color: "hover:bg-blue-800" },
    { href: SOCIAL_LINKS.github, icon: Github, color: "hover:bg-gray-600" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/images/logo.png" alt={SITE_CONFIG.name} width={40} height={40} className="h-10 w-auto" />
              <span className="text-xl font-bold">{SITE_CONFIG.name}</span>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">{SITE_CONFIG.description}</p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-blue-400" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-gray-400 hover:text-white transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-blue-400" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="text-gray-400 hover:text-white transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">{SITE_CONFIG.location}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal & Contact</h3>
            <ul className="space-y-3 mb-6">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-gray-400 hover:text-white transition-colors text-sm ${
                      link.featured ? "font-medium bg-blue-600/10 px-2 py-1 rounded" : ""
                    }`}
                  >
                    {link.label} {link.featured && "⭐"}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Live Chat Link */}
            <div className="mb-6">
              <Link
                href="/chat"
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Live Chat</span>
              </Link>
            </div>

            {/* Social Icons */}
            <div>
              <h4 className="text-sm font-semibold mb-3 text-gray-300">Follow Us</h4>
              <div className="flex space-x-3">
                {socialIcons.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-8 h-8 bg-gray-800 ${social.color} rounded-full flex items-center justify-center transition-colors`}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">© 2024 {SITE_CONFIG.name}. All rights reserved.</div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors font-medium">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
