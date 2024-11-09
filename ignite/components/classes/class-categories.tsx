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
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Class Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Strength Training */}
          <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 transition-all duration-300 group">
            <DumbbellIcon className="w-12 h-12 text-red-500 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Strength Training
            </h3>
            <p className="text-gray-400">
              Build muscle and increase strength with our expert-led sessions
            </p>
          </div>

          {/* HIIT */}
          <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 transition-all duration-300 group">
            <ZapIcon className="w-12 h-12 text-red-500 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-white mb-2">
              HIIT
            </h3>
            <p className="text-gray-400">
              High-intensity interval training for maximum calorie burn
            </p>
          </div>

          {/* Yoga & Pilates */}
          <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 transition-all duration-300 group">
            <YogaIcon className="w-12 h-12 text-red-500 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Yoga & Pilates
            </h3>
            <p className="text-gray-400">
              Improve flexibility, balance, and mental wellness
            </p>
          </div>

          {/* Cardio */}
          <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 transition-all duration-300 group">
            <HeartIcon className="w-12 h-12 text-red-500 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-white mb-2">
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