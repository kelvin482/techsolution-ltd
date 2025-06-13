import { Button } from "../../../components/ui/button"
import Image from "next/image"
import { SiteHeader } from "../../../components/ui/site-header"

export default function StaffDashboardPage() {
  // Mock staff profile data
  const staffProfile = {
    name: "Jane Doe",
    email: "jane.doe@techsupport.com",
    phone: "+1-555-123-4567",
    role: "IT Support Staff",
    avatar: "/images/staff-avatar.png", // Use a placeholder or your own image
    status: "Active",
    joined: "2023-01-15",
  }

  // Mock assigned tasks
  const assignedTasks = [
    { id: 1, title: "Resolve network outage", status: "In Progress", session: "Morning", due: "2025-06-14" },
    { id: 2, title: "Install antivirus on HR PCs", status: "Pending", session: "Afternoon", due: "2025-06-15" },
    { id: 3, title: "Assist user with printer setup", status: "Completed", session: "Evening", due: "2025-06-12" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <SiteHeader currentPath="/staff/dashboard" showBackButton={true} backButtonText="Back to Home" backButtonHref="/" />
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar Navigation */}
          <aside className="md:col-span-1 bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
            <Image
              src={staffProfile.avatar}
              alt={staffProfile.name}
              width={100}
              height={100}
              className="rounded-full border-4 border-blue-200 mb-4"
            />
            <h2 className="text-xl font-bold text-gray-900 mb-1">{staffProfile.name}</h2>
            <p className="text-blue-600 font-medium mb-2">{staffProfile.role}</p>
            <p className="text-gray-500 text-sm mb-1">{staffProfile.email}</p>
            <p className="text-gray-500 text-sm mb-4">{staffProfile.phone}</p>
            <span className="inline-block px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 mb-2">{staffProfile.status}</span>
            <span className="text-xs text-gray-400">Joined: {staffProfile.joined}</span>
          </aside>

          {/* Main Content */}
          <main className="md:col-span-2 flex flex-col gap-8">
            {/* Assigned Tasks */}
            <section className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Assigned Tasks</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="text-left text-gray-600 border-b">
                      <th className="py-2 pr-4">Task</th>
                      <th className="py-2 pr-4">Session</th>
                      <th className="py-2 pr-4">Due Date</th>
                      <th className="py-2 pr-4">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {assignedTasks.map((task) => (
                      <tr key={task.id} className="border-b last:border-0">
                        <td className="py-2 pr-4 font-medium text-gray-900">{task.title}</td>
                        <td className="py-2 pr-4">{task.session}</td>
                        <td className="py-2 pr-4">{task.due}</td>
                        <td className="py-2 pr-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            task.status === "Completed"
                              ? "bg-green-100 text-green-700"
                              : task.status === "In Progress"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-gray-100 text-gray-700"
                          }`}>
                            {task.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Profile Quick Actions */}
            <section className="bg-blue-50 rounded-xl shadow-md p-6 flex flex-col md:flex-row gap-6 items-center justify-between">
              <div>
                <h4 className="text-md font-semibold text-blue-900 mb-2">Profile Actions</h4>
                <p className="text-blue-700 text-sm mb-2">Update your profile or check your assigned sessions.</p>
              </div>
              <div className="flex gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">Edit Profile</Button>
                <Button className="bg-green-600 hover:bg-green-700 text-white">View Sessions</Button>
              </div>
            </section>
          </main>
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