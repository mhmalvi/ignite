'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { MobileMenu } from './mobile-menu'
import { Phone } from 'lucide-react'

export function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/classes', label: 'Classes' },
    { href: '/trainers', label: 'Trainers' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      

      {/* Main Navigation - Fixed below top bar */}
      <header className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex py-8 items-center justify-between h-10">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold text-white">
              IGNITE
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm transition-colors ${
                    pathname === item.href
                      ? 'text-red-500'
                      : 'text-white hover:text-red-500'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
            
              <Button 
                className="
                  bg-gradient-to-r from-gray-900 to-black 
                  hover:from-black hover:to-gray-900
                  text-white 
                  border-2 border-transparent
                  [background-clip:padding-box]
                  relative
                  after:absolute after:inset-0 
                  after:p-[2px] 
                  after:bg-gradient-to-r after:from-red-500 after:to-orange-500 
                  after:-z-10 after:rounded-md
                  transition-all duration-300 
                  hover:scale-105
                "
                asChild
              >
                <Link href="/signup">Book Now</Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from hiding under fixed headers */}
      <div className="h-[104px]" /> {/* 40px (top bar) + 64px (main nav) */}
    </>
  )
} 