import { Button } from "@/components/ui/button"
import Link from "next/link"

interface HeroSectionProps {
  title: string
  subtitle: string
  description: string
  primaryCta: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  additionalCta?: {
    text: string
    href: string
  }
}

export function HeroSection({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  additionalCta,
}: HeroSectionProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          {title}
          <span className="text-blue-600"> {subtitle}</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={primaryCta.href}>
            <Button size="lg" className="w-full sm:w-auto">
              {primaryCta.text}
            </Button>
          </Link>
          {secondaryCta && (
            <Link href={secondaryCta.href}>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                {secondaryCta.text}
              </Button>
            </Link>
          )}
        </div>

        {additionalCta && (
          <div className="mt-8">
            <Link href={additionalCta.href}>
              <Button variant="ghost" className="text-blue-600 hover:text-blue-700">
                {additionalCta.text} →
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
