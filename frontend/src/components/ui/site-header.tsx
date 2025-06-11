import Link from "next/link"
import Image from "next/image"
import { Button } from "./button"
import { NAVIGATION_ITEMS, SITE_CONFIG } from "../../lib/constants"

interface SiteHeaderProps {
  currentPath?: string
  showBackButton?: boolean
  backButtonText?: string
  backButtonHref?: string
}

export function SiteHeader({
  currentPath,
  showBackButton = false,
  backButtonText = "Back to Home",
  backButtonHref = "/",
}: SiteHeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/images/logo.png" alt={SITE_CONFIG.name} width={40} height={40} className="h-10 w-auto" />
              <span className="text-xl font-bold text-gray-900">{SITE_CONFIG.name}</span>
            </Link>
          </div>

          <div className="flex space-x-4">
            {showBackButton && (
              <Link href={backButtonHref}>
                <Button variant="ghost" size="sm">
                  {backButtonText}
                </Button>
              </Link>
            )}

            {NAVIGATION_ITEMS.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button variant={currentPath === item.href ? "default" : "ghost"} size="sm">
                  {item.label}
                </Button>
              </Link>
            ))}

            <Link href="/auth/login">
              <Button>Login</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
