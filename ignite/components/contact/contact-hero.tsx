'use client'

import Image from 'next/image'

export function ContactHero() {
  return (
    <section className="relative h-[600px] flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/images/contact-hero.jpg"
          alt="Contact IGNITE Fitness"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-black/50" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent 
                       bg-gradient-to-r from-red-500 to-orange-500">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Have questions? We're here to help. Reach out to our team for personalized 
            support and guidance on your fitness journey.
          </p>
        </div>
      </div>
      
      {/* Background effects matching home page */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] 
                    from-red-500/20 via-transparent to-transparent opacity-30" />
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px] opacity-20" />
    </section>
  )
} 