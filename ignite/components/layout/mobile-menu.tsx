'use client'

import { Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function MobileMenu() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/classes', label: 'Classes' },
    { href: '/trainers', label: 'Trainers' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/about', label: 'About' },
  ]

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6 text-white" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] bg-gray-900 border-gray-800 p-0">
        <nav className="flex flex-col h-full divide-y divide-gray-800">
          <div className="p-6">
            <Link 
              href="/" 
              className="text-xl font-bold text-white hover:text-red-500 transition-colors"
            >
              IGNITE
            </Link>
          </div>
          <div className="flex-1 overflow-y-auto py-6 px-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-3 text-lg transition-colors ${
                  pathname === item.href
                    ? 'text-red-500'
                    : 'text-white hover:text-red-500'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="p-6 space-y-4">
            <Button variant="ghost" className="w-full justify-center" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button 
              className="w-full bg-red-500 hover:bg-red-600 justify-center" 
              asChild
            >
              <Link href="/signup">Join Now</Link>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
} 