import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, DumbbellIcon, UsersIcon, PhoneIcon, FlameIcon, ZapIcon, LeafIcon, VideoIcon, TrophyIcon, PlayIcon, MenuIcon } from 'lucide-react'
import MobileMenu from '@/components/mobile-menu'

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <FlameIcon className="h-8 w-8 text-red-500" />
            <span className="font-bold text-xl sm:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">IGNITE Fitness</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#classes" className="text-sm font-medium hover:text-red-500 transition-colors">Classes</Link>
            <Link href="#trainers" className="text-sm font-medium hover:text-red-500 transition-colors">Trainers</Link>
            <Link href="#membership" className="text-sm font-medium hover:text-red-500 transition-colors">Membership</Link>
            <Link href="#events" className="text-sm font-medium hover:text-red-500 transition-colors">Events</Link>
            <Link href="#booking" className="text-sm font-medium hover:text-red-500 transition-colors">Book Now</Link>
          </nav>
          <MobileMenu />
        </div>
      </header>

      <main className="flex-1">
        <section className="relative py-20 md:py-32 lg:py-48 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Gym background"
              layout="fill"
              objectFit="cover"
              className="opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="max-w-3xl space-y-6 transform -skew-y-3 sm:-skew-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 animate-pulse">
                IGNITE Your Potential
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 transform skew-y-3 sm:skew-y-6">
                Push your limits, break barriers, and transform your body at IGNITE Fitness. 
                Where intensity meets results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 transform skew-y-3 sm:skew-y-6">
                <Button size="lg" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:rotate-3">
                  Start Your Journey
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black font-bold py-3 px-6 rounded-full transition-all duration-300 hover:-rotate-3">
                  Explore Classes
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="classes" className="py-20 md:py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
              Unleash Your Power
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 perspective-1000">
              {[
                { name: 'HIIT Inferno', icon: FlameIcon },
                { name: 'Power Lift', icon: DumbbellIcon },
                { name: 'Cardio Blast', icon: ZapIcon },
                { name: 'Yoga Fusion', icon: UsersIcon },
                { name: 'Combat Zone', icon: FlameIcon },
                { name: 'Spin Cyclone', icon: ZapIcon },
              ].map((className) => (
                <Card key={className.name} className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:rotate-3 group">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <className.icon className="h-8 w-8 text-red-500 group-hover:animate-spin" />
                      <CardTitle className="text-xl sm:text-2xl font-bold">{className.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">Push your limits in our high-intensity {className.name} class.</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform group-hover:translate-x-2">
                      Book Now
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px] opacity-20"></div>
        </section>

        {/* Add more sections here (trainers, membership, events, booking) */}

      </main>

      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="flex items-center space-x-2">
                <FlameIcon className="h-6 w-6 text-red-500" />
                <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">IGNITE Fitness</span>
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="text-sm text-gray-400 hover:text-white">Privacy Policy</Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white">Terms of Service</Link>
            </div>
          </div>
          <div className="mt-4 text-center text-sm text-gray-400">
            © 2023 IGNITE Fitness. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}