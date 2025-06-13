import { Button } from "../../../components/ui/button"
import { Users, Settings, UserPlus, UserMinus, RefreshCw, Activity } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "../../../components/ui/site-header"

export default function AdminDashboardPage() {
  const adminStats = [
    { label: "Total Users", value: "120", icon: Users, color: "blue" },
    { label: "Staff Members", value: "15", icon: Settings, color: "green" },
    { label: "Active Sessions", value: "8", icon: Activity, color: "purple" },
    { label: "Pending Requests", value: "4", icon: RefreshCw, color: "orange" },
  ]

  const userManagementActions = [
    { label: "Add User", icon: UserPlus, color: "green" },
    { label: "Remove User", icon: UserMinus, color: "red" },
    { label: "Reset Password", icon: RefreshCw, color: "blue" },
  ]

  const recentActivity = [
    { admin: "Admin1", action: "added new staff member: Jane Doe", time: "5 min ago", color: "green" },
    { admin: "Admin2", action: "reset password for user: John Smith", time: "12 min ago", color: "blue" },
    { admin: "Admin1", action: "removed user: Alex Chen", time: "30 min ago", color: "red" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <SiteHeader currentPath="/admin/dashboard" showBackButton={true} backButtonText="Back to Home" backButtonHref="/" />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Manage users, staff, and system settings. Monitor activity and keep your IT support system running smoothly.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden border">
              {/* Dashboard Header */}
              <div className="bg-gray-900 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Image src="/images/logo.png" alt="TechSupport Pro" width={24} height={24} className="h-6 w-auto" />
                  <span className="text-white font-semibold">Admin Control Panel</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                  {adminStats.map((stat, index) => (
                    <div key={index} className={`bg-${stat.color}-50 p-6 rounded-lg border border-${stat.color}-200`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className={`text-${stat.color}-600 text-sm font-medium`}>{stat.label}</p>
                          <p className={`text-3xl font-bold text-${stat.color}-900`}>{stat.value}</p>
                        </div>
                        <stat.icon className={`h-10 w-10 text-${stat.color}-600`} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* User Management Actions */}
                <div className="bg-blue-50 rounded-lg p-6 mb-8 border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">User Management</h3>
                  <div className="flex flex-wrap gap-4">
                    {userManagementActions.map((action, idx) => (
                      <Button key={idx} className={`flex items-center gap-2 bg-${action.color}-600 hover:bg-${action.color}-700 text-white`}>
                        <action.icon className="h-5 w-5" />
                        {action.label}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Recent Activity Feed */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                    Recent Admin Activity
                  </h3>
                  <div className="space-y-3">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center space-x-3 text-sm bg-white p-3 rounded-lg">
                        <span className={`text-${activity.color}-600 font-bold`}>•</span>
                        <span className="text-gray-700">
                          <strong>{activity.admin}</strong> {activity.action}
                        </span>
                        <span className="text-gray-400 ml-auto">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="w-full bg-gray-900 text-gray-200 py-4 mt-8 border-t border-gray-800 text-center">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <span>&copy; {new Date().getFullYear()} Tech Solution Ltd. All rights reserved.</span>
          <a
            href="/dashboards_readme.md"
            className="text-blue-400 hover:underline mt-2 md:mt-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </footer>
    </div>
  )
} 