"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "../../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card"
import { Input } from "../../../components/ui/input"
import { Label } from "../../../components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select"
import { Shield, Eye, EyeOff, Users, Headphones, Settings } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Footer } from "../../../components/footer"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login process
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Redirect based on role
    if (role === "admin") {
      router.push("/admin/dashboard")
    } else if (role === "staff") {
      router.push("/staff/dashboard")
    } else if (role === "client") {
      router.push("/client/dashboard")
    } else {
      // Default redirect if no role selected
      router.push("/")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="flex items-center justify-center p-4 min-h-screen">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">TechSupport Pro</span>
            </Link>

            {/* Rearranged navigation links */}
            <div className="flex justify-center space-x-4 mb-4">
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
              <Link href="/about">
                <Button variant="ghost" size="sm">
                  About Us
                </Button>
              </Link>
            </div>

            <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
            <p className="text-gray-600">Sign in to your account</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Enter your credentials to access your portal</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">Login As</Label>
                  <Select value={role} onValueChange={setRole} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Administrator</SelectItem>
                      <SelectItem value="staff">Support Staff</SelectItem>
                      <SelectItem value="client">Client</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link href="/auth/register" className="text-blue-600 hover:underline">
                    Sign up
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Portal Access Cards */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Admin Portal */}
            <Card className="bg-blue-50 border-blue-200 hover:border-blue-400 transition-colors">
              <CardContent className="p-4 flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <Settings className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-blue-900">Admin Portal</h3>
                <p className="text-xs text-blue-700 mb-3 text-center">System management & configuration</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-white border-blue-200"
                  onClick={() => {
                    setRole("admin")
                    document.getElementById("email")?.setAttribute("value", "admin@demo.com")
                    document.getElementById("password")?.setAttribute("value", "admin123")
                  }}
                >
                  Login as Admin
                </Button>
              </CardContent>
            </Card>

            {/* Staff Portal */}
            <Card className="bg-green-50 border-green-200 hover:border-green-400 transition-colors">
              <CardContent className="p-4 flex flex-col items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <Headphones className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-green-900">Staff Portal</h3>
                <p className="text-xs text-green-700 mb-3 text-center">Ticket management & support</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-white border-green-200"
                  onClick={() => {
                    setRole("staff")
                    document.getElementById("email")?.setAttribute("value", "staff@demo.com")
                    document.getElementById("password")?.setAttribute("value", "staff123")
                  }}
                >
                  Login as Staff
                </Button>
              </CardContent>
            </Card>

            {/* Client Portal */}
            <Card className="bg-purple-50 border-purple-200 hover:border-purple-400 transition-colors">
              <CardContent className="p-4 flex flex-col items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-purple-900">Client Portal</h3>
                <p className="text-xs text-purple-700 mb-3 text-center">Submit tickets & get support</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-white border-purple-200"
                  onClick={() => {
                    setRole("client")
                    document.getElementById("email")?.setAttribute("value", "client@demo.com")
                    document.getElementById("password")?.setAttribute("value", "client123")
                  }}
                >
                  Login as Client
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Demo Credentials */}
          <Card className="mt-6 bg-yellow-50 border-yellow-200">
            #<CardContent className="pt-6">
              <h3 className="font-semibold text-yellow-800 mb-2">Demo Credentials</h3>
              <div className="text-sm text-yellow-700 space-y-1">
                <p>
                  <strong>Admin:</strong> admin@demo.com / admin123
                </p>
                <p>
                  <strong>Staff:</strong> staff@demo.com / staff123
                </p>
                <p>
                  <strong>Client:</strong> client@demo.com / client123
                </p>
              </div>
            </CardContent>#
          </Card>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
