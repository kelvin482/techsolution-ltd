import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Shield, Users, Clock, CheckCircle, Globe, Award, Headphones, Lock, Zap, Heart } from "lucide-react"
import Link from "next/link"
import { Footer } from "../../components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">TechSupport Pro</span>
              </Link>
            </div>
            <div className="flex space-x-4">
              {/* Rearranged Navigation Order */}
              <Link href="/services">
                <Button variant="ghost" size="sm">
                  Services
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="ghost" size="sm">
                  Dashboard Preview
                </Button>
              </Link>
              <Link href="/get-started">
                <Button variant="ghost" size="sm">
                  Get Started
                </Button>
              </Link>
              <Link href="/privacy">
                <Button variant="ghost" size="sm">
                  Privacy Policy
                </Button>
              </Link>
              <Link href="/auth/login">
                <Button>Login</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Us | Your Trusted Online IT Support Partner
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl mb-8">
              At <strong className="text-blue-600">TechSupport Pro</strong>, we specialize in providing fast, reliable,
              and expert <strong>online IT support</strong> to businesses, teams, and individuals across the globe.
            </p>

            <p className="mb-8">
              With over <strong className="text-blue-600">15 years</strong> of combined experience, our certified IT
              professionals are available 24/7 to solve your technical issues — from troubleshooting networks and
              software to resolving hardware errors and security concerns. Our mission is simple:{" "}
              <strong>deliver world-class IT helpdesk services without the hassle</strong>.
            </p>

            <p className="mb-8">
              We built our platform to simplify the way technical support is delivered. Through our{" "}
              <strong>remote IT support system</strong>, you can:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-12">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Submit support tickets online</h3>
                  <p className="text-gray-600 text-sm">Easy-to-use ticketing system for all your IT issues</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Headphones className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Chat with IT experts in real-time</h3>
                  <p className="text-gray-600 text-sm">Instant communication with certified technicians</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Track the status of your issues</h3>
                  <p className="text-gray-600 text-sm">Real-time updates on resolution progress</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Globe className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Access help from any device, anywhere</h3>
                  <p className="text-gray-600 text-sm">Mobile-friendly platform for support on the go</p>
                </div>
              </div>
            </div>

            <p className="mb-8">
              Whether you're a small business needing a virtual IT department or an enterprise looking for scalable
              support, we're here to help. Our commitment to <strong>quick response times</strong>,{" "}
              <strong>clear communication</strong>, and <strong>secure support</strong> makes us a top choice for IT
              support solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Thousands Worldwide</h2>
            <p className="text-lg text-gray-600">Our numbers speak for themselves</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">10,000+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50,000+</div>
              <div className="text-sm text-gray-600">Tickets Resolved</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{"<15min"}</div>
              <div className="text-sm text-gray-600">Avg Response Time</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
              <div className="text-sm text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-lg text-gray-600">What makes TechSupport Pro the right choice for your IT needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Trusted by professionals */}
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Trusted by Professionals</h3>
                <p className="text-gray-600">
                  From startups to Fortune 500 companies, professionals worldwide trust our expertise and reliability.
                </p>
              </CardContent>
            </Card>

            {/* Highly trained support agents */}
            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Highly Trained Support Agents</h3>
                <p className="text-gray-600">
                  Our certified technicians undergo continuous training to stay current with the latest technologies.
                </p>
              </CardContent>
            </Card>

            {/* Cloud-based platform */}
            <Card className="border-2 hover:border-purple-200 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">100% Cloud-Based & Mobile-Ready</h3>
                <p className="text-gray-600">
                  Access our platform from anywhere, on any device. No software installation required.
                </p>
              </CardContent>
            </Card>

            {/* Transparent and secure */}
            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparent & Secure Data Handling</h3>
                <p className="text-gray-600">
                  Bank-level encryption and transparent processes ensure your data is always protected and secure.
                </p>
              </CardContent>
            </Card>

            {/* No long waits */}
            <Card className="border-2 hover:border-teal-200 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">No Long Waits. No Jargon.</h3>
                <p className="text-gray-600">
                  Quick response times and clear, jargon-free communication. Just solutions that work.
                </p>
              </CardContent>
            </Card>

            {/* 24/7 availability */}
            <Card className="border-2 hover:border-indigo-200 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Availability</h3>
                <p className="text-gray-600">
                  Round-the-clock support when you need it most. Technical issues don't wait for business hours.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            To democratize access to expert IT support by providing fast, reliable, and affordable technical assistance
            to businesses and individuals worldwide, regardless of their size or location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/login">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Join Our Community
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-blue-600"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Need <span className="text-blue-600">Technical Support You Can Count On</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the growing number of users who trust TechSupport Pro for <strong>remote tech support services</strong>{" "}
            that work.
          </p>
          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Get Started Today and Experience Smarter IT Support
            </h3>
            <p className="text-gray-600 mb-6">
              No setup fees. No long-term contracts. Just reliable IT support when you need it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/register">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  View Live Demo
                </Button>
              </Link>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
            <div className="flex items-center justify-center space-x-2">
              <Shield className="h-5 w-5 text-green-600" />
              <span>Enterprise-Grade Security</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>99.9% Uptime Guarantee</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Clock className="h-5 w-5 text-green-600" />
              <span>24/7 Expert Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
