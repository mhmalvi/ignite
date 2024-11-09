'use client'
import React from 'react'
import { 
  Dumbbell as DumbbellIcon,
  Heart as HeartIcon,
  Flower2 as YogaIcon,
  Zap as ZapIcon
} from 'lucide-react'

export function ClassCategories() {
  return (
    <section className="py-20 bg-black/95 relative overflow-hidden">
      {/* Background gradient similar to class schedule */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500/20 via-transparent to-transparent opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
            Class Categories
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Strength Training */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 
                         hover:bg-white/10 transition-all duration-300 group">
            <div className="p-4 rounded-full bg-gradient-to-r from-red-500/10 to-orange-500/10 
                          w-fit mb-6 group-hover:scale-110 transition-transform">
              <DumbbellIcon className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-orange-500 
                          transition-colors mb-3">
              Strength Training
            </h3>
            <p className="text-gray-400">
              Build muscle and increase strength with our expert-led sessions
            </p>
          </div>

          {/* HIIT */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 
                         hover:bg-white/10 transition-all duration-300 group">
            <div className="p-4 rounded-full bg-gradient-to-r from-red-500/10 to-orange-500/10 
                          w-fit mb-6 group-hover:scale-110 transition-transform">
              <ZapIcon className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-orange-500 
                          transition-colors mb-3">
              HIIT
            </h3>
            <p className="text-gray-400">
              High-intensity interval training for maximum calorie burn
            </p>
          </div>

          {/* Yoga & Pilates */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 
                         hover:bg-white/10 transition-all duration-300 group">
            <div className="p-4 rounded-full bg-gradient-to-r from-red-500/10 to-orange-500/10 
                          w-fit mb-6 group-hover:scale-110 transition-transform">
              <YogaIcon className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-orange-500 
                          transition-colors mb-3">
              Yoga & Pilates
            </h3>
            <p className="text-gray-400">
              Improve flexibility, balance, and mental wellness
            </p>
          </div>

          {/* Cardio */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 
                         hover:bg-white/10 transition-all duration-300 group">
            <div className="p-4 rounded-full bg-gradient-to-r from-red-500/10 to-orange-500/10 
                          w-fit mb-6 group-hover:scale-110 transition-transform">
              <HeartIcon className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-orange-500 
                          transition-colors mb-3">
              Cardio
            </h3>
            <p className="text-gray-400">
              Boost endurance and cardiovascular health
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 