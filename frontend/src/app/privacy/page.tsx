import { Button } from "../../components/ui/button"
import { Shield, Lock, FileText, Mail, AlertCircle } from "lucide-react"
import Link from "next/link"
import { Footer } from "../../components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">Tech Solution ltd</span>
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
              <Link href="/about">
                <Button variant="ghost" size="sm">
                  About Us
                </Button>
              </Link>
              <Link href="/auth/login">
                <Button>Login</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Privacy Policy Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header Banner */}
          <div className="bg-blue-600 px-6 py-8 text-white">
            <div className="flex items-center justify-center mb-4">
              <Lock className="h-10 w-10 mr-3" />
              <h1 className="text-3xl font-bold">Privacy Policy</h1>
            </div>
            <p className="text-center text-blue-100">Tech Solution ltd</p>
            <p className="text-center text-blue-100 text-sm mt-2">Effective Date: June 1, 2025</p>
          </div>

          {/* Introduction */}
          <div className="px-6 py-8">
            <p className="text-gray-700 mb-8">
              At <span className="font-semibold text-blue-600">Tech Solution ltd</span>, we value your privacy and are
              committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and
              safeguard your data when you use our <strong>online IT support platform</strong> and related services.
            </p>

            <div className="border-t border-gray-200 my-8"></div>

            {/* Section 1 */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  1
                </span>
                Information We Collect
              </h2>
              <div className="pl-11">
                <p className="text-gray-700 mb-4">
                  When you use our platform, we may collect the following information:
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Name, email address, and contact details</li>
                  <li>Support ticket content and communication history</li>
                  <li>Technical data (browser, IP address, device type)</li>
                  <li>Cookies and usage analytics</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 my-8"></div>

            {/* Section 2 */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  2
                </span>
                How We Use Your Information
              </h2>
              <div className="pl-11">
                <p className="text-gray-700 mb-4">Your data helps us:</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>
                    Provide fast and efficient <strong>IT helpdesk services</strong>
                  </li>
                  <li>Improve our platform and user experience</li>
                  <li>Communicate with you regarding support tickets or updates</li>
                  <li>Monitor and protect our system from unauthorized access or misuse</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 my-8"></div>

            {/* Section 3 */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  3
                </span>
                Data Security
              </h2>
              <div className="pl-11">
                <p className="text-gray-700 mb-4">
                  We use modern encryption, secure servers, and access control to protect your data. Our{" "}
                  <strong>remote IT support system</strong> is built with security as a priority.
                </p>
                <p className="text-gray-700 font-medium">
                  We do <strong>not sell, rent, or share your data</strong> with third parties unless required by law or
                  with your explicit consent.
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 my-8"></div>

            {/* Section 4 */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  4
                </span>
                Cookies
              </h2>
              <div className="pl-11">
                <p className="text-gray-700 mb-4">Our website uses cookies to:</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Track user preferences</li>
                  <li>Enhance performance and analytics</li>
                  <li>Remember login sessions</li>
                </ul>
                <p className="text-gray-700 mt-4">You can control cookie settings through your browser preferences.</p>
              </div>
            </div>

            <div className="border-t border-gray-200 my-8"></div>

            {/* Section 5 */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  5
                </span>
                Your Rights
              </h2>
              <div className="pl-11">
                <p className="text-gray-700 mb-4">You have the right to:</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Access or request a copy of your personal data</li>
                  <li>Request corrections or deletion of your data</li>
                  <li>Opt out of certain data uses</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  To make a request, please contact us at{" "}
                  <a href="mailto:privacy@techsupportpro.com" className="text-blue-600 hover:underline">
                    privacy@techsupportpro.com
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 my-8"></div>

            {/* Section 6 */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  6
                </span>
                Changes to This Policy
              </h2>
              <div className="pl-11">
                <p className="text-gray-700">
                  We may update this Privacy Policy to reflect changes in our services or legal obligations. Updates
                  will be posted on this page with a new effective date.
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 my-8"></div>

            {/* Section 7 */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  7
                </span>
                Contact Us
              </h2>
              <div className="pl-11">
                <p className="text-gray-700 mb-4">
                  For questions or concerns about this Privacy Policy or your personal data, contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Mail className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="font-medium">Email:</span>
                    <a href="mailto:privacy@techsupportpro.com" className="text-blue-600 hover:underline ml-2">
                      privacy@techsupportpro.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="font-medium">Website:</span>
                    <a href="https://www.techsupportpro.com" className="text-blue-600 hover:underline ml-2">
                      www.techsupportpro.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 my-8"></div>

            {/* Conclusion */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-700">
                Thank you for trusting <span className="font-semibold text-blue-600">Tech Solution ltd</span> with your IT
                support needs. We're committed to keeping your data safe while providing secure, efficient, and expert
                technical support.
              </p>
            </div>

            {/* Last Updated */}
            <div className="mt-8 text-sm text-gray-500 text-center">
              <p>Last updated: June 1, 2025</p>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <AlertCircle className="h-5 w-5 text-blue-600 mr-2" />
              Additional Privacy Resources
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/terms" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <h4 className="font-semibold text-gray-900 mb-1">Terms of Service</h4>
                <p className="text-sm text-gray-600">
                  Read our terms and conditions for using Tech Solution ltd services.
                </p>
              </Link>
              <Link href="/security" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <h4 className="font-semibold text-gray-900 mb-1">Security Practices</h4>
                <p className="text-sm text-gray-600">Learn about our security measures and data protection.</p>
              </Link>
              <Link href="/compliance" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <h4 className="font-semibold text-gray-900 mb-1">Compliance Information</h4>
                <p className="text-sm text-gray-600">Details about our regulatory compliance and certifications.</p>
              </Link>
              <Link href="/contact" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <h4 className="font-semibold text-gray-900 mb-1">Contact Support</h4>
                <p className="text-sm text-gray-600">Get help with privacy-related questions or concerns.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
