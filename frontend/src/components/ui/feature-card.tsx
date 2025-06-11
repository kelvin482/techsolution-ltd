import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  content: string
  iconColor?: string
  hoverColor?: string
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  content,
  iconColor = "text-blue-600",
  hoverColor = "hover:border-blue-200",
}: FeatureCardProps) {
  return (
    <Card className={`border-2 ${hoverColor} transition-colors`}>
      <CardHeader>
        <div className={`w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4`}>
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{content}</p>
      </CardContent>
    </Card>
  )
}
