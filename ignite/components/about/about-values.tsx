'use client'

import { motion } from 'framer-motion'
import { Shield, Heart, Zap, Target } from 'lucide-react'

export function AboutValues() {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain the highest standards of professionalism and honesty in everything we do.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our dedication to fitness and member success drives everything we do.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Constantly evolving our methods and embracing new fitness technologies.'
    },
    {
      icon: Target,
      title: 'Results',
      description: 'Committed to helping our members achieve their fitness goals.'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center mb-12 
                     bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
          Our Values
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-2xl
                       hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="p-4 rounded-full bg-gradient-to-r from-red-500/10 to-orange-500/10 
                           w-fit mb-6 group-hover:scale-110 transition-transform">
                <value.icon className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-orange-500 
                           transition-colors mb-3">
                {value.title}
              </h3>
              <p className="text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px] opacity-20" />
    </section>
  )
} 