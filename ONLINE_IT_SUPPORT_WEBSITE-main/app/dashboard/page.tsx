import { Button } from "@/components/ui/button"
import { Users, Clock, CheckCircle, Bot } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/ui/site-header"
import { MOCK_TICKETS } from "@/lib/data"

export default function DashboardPage() {
  const dashboardStats = [
    { label: "Open Tickets", value: "3", change: "+1 from yesterday", icon: Clock, color: "blue" },
    { label: "Resolved", value: "12", change: "+3 this week", icon: CheckCircle, color: "green" },
    { label: "In Progress", value: "2", change: "Being worked on", icon: Users, color: "orange" },
    { label: "Avg Response", value: "15m", change: "Faster than usual", icon: Bot, color: "purple" },
  ]

  const activityFeed = [
    { user: "John Smith", action: "marked ticket #TK-001 as resolved", time: "2 min ago", color: "green" },
    { user: "Alex Chen", action: "submitted new ticket #TK-004", time: "5 min ago", color: "blue" },
    { user: "Sarah Johnson", action: "updated ticket #TK-002 status", time: "8 min ago", color: "orange" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <SiteHeader currentPath="/dashboard" showBackButton={true} backButtonText="Back to Home" backButtonHref="/" />

      {/* Dashboard Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">See Your Dashboard in Action</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Stay updated with real-time support ticket status and activity logs. Experience the power of our
              comprehensive IT support platform.
            </p>
          </div>

          {/* Dashboard Mockup */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden border">
              {/* Dashboard Header */}
              <div className="bg-gray-900 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Image src="/images/logo.png" alt="Tech Solution Ltd" width={24} height={24} className="h-6 w-auto" />
                  <span className="text-white font-semibold">Tech Solution Ltd</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6">
                {/* Welcome Section */}
                <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h2 className="text-lg font-semibold text-blue-900 mb-2">Welcome back, John!</h2>
                  <p className="text-blue-700">You have 2 active tickets and 1 pending response.</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                  {dashboardStats.map((stat, index) => (
                    <div key={index} className={`bg-${stat.color}-50 p-6 rounded-lg border border-${stat.color}-200`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className={`text-${stat.color}-600 text-sm font-medium`}>{stat.label}</p>
                          <p className={`text-3xl font-bold text-${stat.color}-900`}>{stat.value}</p>
                          <p className={`text-xs text-${stat.color}-600 mt-1`}>{stat.change}</p>
                        </div>
                        <stat.icon className={`h-10 w-10 text-${stat.color}-600`} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recent Tickets Table */}
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-gray-900">Recent Support Tickets</h3>
                    <Button size="sm">Create New Ticket</Button>
                  </div>
                  <div className="space-y-4">
                    {MOCK_TICKETS.map((ticket) => (
                      <div
                        key={ticket.id}
                        className="bg-white p-5 rounded-lg border shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div
                              className={`w-3 h-3 ${ticket.statusColor} rounded-full ${ticket.status === "In Progress" ? "animate-pulse" : ""}`}
                            ></div>
                            <div>
                              <p className="font-semibold text-gray-900">
                                #{ticket.id} - {ticket.title}
                              </p>
                              <p className="text-sm text-gray-500">
                                Priority: {ticket.priority} • Assigned to: {ticket.assignedTo} • Created:{" "}
                                {ticket.createdAt}
                              </p>
                              <p className="text-sm text-gray-600 mt-1">"{ticket.description}"</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className={`px-3 py-1 ${ticket.badgeColor} text-xs font-medium rounded-full`}>
                              {ticket.status}
                            </span>
                            <p className="text-xs text-gray-500 mt-1">
                              {ticket.resolvedAt
                                ? `Resolved ${ticket.resolvedAt}`
                                : ticket.updatedAt
                                  ? `Updated ${ticket.updatedAt}`
                                  : ticket.status === "Critical"
                                    ? "Just created"
                                    : "Awaiting assignment"}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Live Activity Feed */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                    Live Activity Feed
                  </h3>
                  <div className="space-y-3">
                    {activityFeed.map((activity, index) => (
                      <div key={index} className="flex items-center space-x-3 text-sm bg-white p-3 rounded-lg">
                        <span className={`text-${activity.color}-600 font-bold`}>•</span>
                        <span className="text-gray-700">
                          <strong>{activity.user}</strong> {activity.action}
                        </span>
                        <span className="text-gray-400 ml-auto">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Experience This Dashboard?</h3>
            <p className="text-lg text-gray-600 mb-6">
              Join thousands of users who manage their IT support efficiently with our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-started">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started Now
                </Button>
              </Link>
              <Link href="/auth/login">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Try Demo Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
