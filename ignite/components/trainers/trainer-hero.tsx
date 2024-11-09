import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function TrainerHero() {
  return (
    <section className="relative h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/trainer-hero.jpg"
          alt="Trainers at Ignite"
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
            Train With The Best
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Our certified trainers are here to help you transform your life through
            expert guidance, personalized programs, and unwavering support.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-red-500 hover:bg-red-600">
              Find Your Trainer
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              View Programs
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 