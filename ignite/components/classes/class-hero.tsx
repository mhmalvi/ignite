import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function ClassHero() {
  return (
    <section className="relative h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/classes-hero.jpg"
          alt="Fitness Classes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-black/50" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-white mb-6">
            World-Class Fitness Programs
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Join our expert-led classes and transform your fitness journey with
            programs designed for all levels and goals.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-red-500 hover:bg-red-600">
              View Schedule
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/pricing">
                View Pricing
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 