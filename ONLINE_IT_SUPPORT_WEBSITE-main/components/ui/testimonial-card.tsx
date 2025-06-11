import { Card, CardContent } from "@/components/ui/card"
import type { TestimonialData } from "@/types"

interface TestimonialCardProps {
  testimonial: TestimonialData
  className?: string
}

export function TestimonialCard({ testimonial, className = "" }: TestimonialCardProps) {
  return (
    <Card className={`border-2 hover:border-blue-200 transition-colors ${className}`}>
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          {Array.from({ length: testimonial.rating }, (_, i) => (
            <span key={i} className="text-yellow-400 text-lg">
              ⭐
            </span>
          ))}
        </div>
        <blockquote className="text-gray-700 mb-4">"{testimonial.content}"</blockquote>
        <div className="flex items-center">
          <div className={`w-10 h-10 ${testimonial.bgColor} rounded-full flex items-center justify-center mr-3`}>
            <span className="font-semibold text-sm">{testimonial.initials}</span>
          </div>
          <div>
            <p className="font-semibold text-gray-900">{testimonial.name}</p>
            <p className="text-sm text-gray-600">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
