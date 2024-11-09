import Link from 'next/link'
import { Instagram, Twitter, Facebook, Youtube, Flame , ArrowRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-900 to-black relative overflow-hidden py-16 lg:py-20">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10 animate-gradient-x"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px] opacity-10"></div>
        
        {/* Glowing orb effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-[128px] -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[128px] translate-y-1/2"></div>

        <div className="container max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
            {/* Brand section */}
            <div className="space-y-6">
              <Link href="/" className="group flex items-center space-x-3 w-fit">
                <div className="relative">
                  <div className="absolute inset-0 bg-red-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <Flame className="h-10 w-10 text-red-500 relative z-10 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                </div>
                <span className="font-bold text-2xl sm:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500 group-hover:to-yellow-500 transition-all duration-300">
                  IGNITE Fitness
                </span>
              </Link>
              <p className="text-base text-gray-400 leading-relaxed max-w-md">
                Ignite your potential, transform your life. Join our community of fitness enthusiasts and experience the power of premium training.
              </p>
              {/* Social links */}
              <div className="flex gap-4">
                {['twitter', 'facebook', 'instagram', 'youtube'].map((social) => (
                  <Link 
                    key={social} 
                    href={`#${social}`}
                    className="w-10 h-10 rounded-lg bg-gray-800/50 hover:bg-gradient-to-r from-red-500 to-orange-500 
                             flex items-center justify-center group transition-all duration-300
                             hover:scale-110 hover:rotate-6 backdrop-blur-sm"
                  >
                    <span className="text-gray-400 group-hover:text-white transition-colors">
                      {/* Add your social icons here */}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="font-bold text-xl text-white">Quick Links</h3>
              <div className="grid gap-4">
                {['Classes', 'Trainers', 'Membership', 'Events', 'Book Now'].map((link) => (
                  <Link 
                    key={link}
                    href={`#${link.toLowerCase()}`} 
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-2 transform inline-flex items-center group w-fit"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                    <span className="relative">
                      {link}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-red-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="font-bold text-xl text-white">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center flex-shrink-0
                                group-hover:bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-300">
                    {/* Add location icon */}
                  </div>
                  <div className="space-y-1">
                    <p className="text-gray-300 font-medium">Location</p>
                    <p className="text-gray-400">123 Intensity Ave, Fitville, FT 54321</p>
                  </div>
                </div>
                {/* Similar styling for email and phone */}
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-6">
              <h3 className="font-bold text-xl text-white">Stay Updated</h3>
              <p className="text-gray-400">Subscribe to our newsletter for exclusive fitness tips and offers.</p>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700 
                           focus:outline-none focus:border-red-500 transition-all duration-300
                           text-white placeholder-gray-500 backdrop-blur-sm"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 
                                 px-4 py-1.5 bg-gradient-to-r from-red-500 to-orange-500 
                                 rounded-md text-white font-medium
                                 hover:from-red-600 hover:to-orange-600 
                                 transform hover:scale-105 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-800/50 pt-8 mt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} IGNITE Fitness. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
                <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
                <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
} 