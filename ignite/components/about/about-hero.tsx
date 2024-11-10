'use client'


import Image from 'next/image'

export function AboutHero() {
  return (
    <section className="relative h-[600px] flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/images/about-hero.jpg"
          alt="About IGNITE Fitness"
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
            Our Story
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Founded in 2020, IGNITE Fitness was born from a passion to create a 
            community where fitness meets transformation. We're more than just a gym 
            – we're a family dedicated to helping you achieve your fitness goals.
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