import type { StatsData } from "@/types"

interface StatsGridProps {
  stats: StatsData[]
  className?: string
}

export function StatsGrid({ stats, className = "" }: StatsGridProps) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 text-center ${className}`}>
      {stats.map((stat, index) => (
        <div key={index}>
          <div className="text-3xl font-bold mb-2" style={{ color: stat.color.replace("text-", "") }}>
            {stat.value}
          </div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
