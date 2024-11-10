'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-red-500 to-orange-500 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Join Our Fitness Community
        </h2>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
          Be part of something bigger than just a gym. Join IGNITE Fitness and transform 
          your life with our supportive community and expert guidance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-red-500 hover:bg-gray-100 transform hover:scale-105 
                     transition-all duration-300"
          >
            <Link href="/signup">
              Start Your Journey
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white/10 transform hover:scale-105 
                     transition-all duration-300"
          >
            <Link href="/classes">
              Explore Our Classes
            </Link>
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px] opacity-20" />
    </section>
  )
} 