import { TestimonialCard } from "@/components/ui/testimonial-card"
import { StatsGrid } from "@/components/ui/stats-grid"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TESTIMONIALS, TRUST_STATS, COMPANY_LOGOS } from "@/lib/data"

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by 10,000+ Organizations</h2>
          <p className="text-lg text-gray-600">See what our customers say about their experience</p>
        </div>

        {/* Company Logos */}
        <div className="mb-16">
          <p className="text-center text-sm text-gray-500 mb-8">Trusted by leading companies worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
            {COMPANY_LOGOS.map((company) => (
              <div key={company} className="flex justify-center">
                <div className="bg-gray-200 rounded-lg px-6 py-3 text-gray-600 font-semibold text-sm">{company}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {TESTIMONIALS.slice(0, 3).map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Additional Testimonials Row */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {TESTIMONIALS.slice(3, 5).map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Trust Stats */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <StatsGrid stats={TRUST_STATS} />
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Thousands of Satisfied Customers</h3>
          <p className="text-lg text-gray-600 mb-6">Start your free trial today and experience the difference</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started">
              <Button size="lg" className="w-full sm:w-auto">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
