'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function TrainerFilterSection() {
  const [selectedSpecialty, setSelectedSpecialty] = useState('all')

  return (
    <section className="py-12 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="relative flex-1 max-w-xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search trainers..."
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 rounded-xl border border-gray-700
                       focus:outline-none focus:border-red-500 transition-all duration-300
                       text-white placeholder-gray-500"
            />
          </div>
          <div className="flex gap-4 flex-wrap justify-center">
            {['All', 'HIIT', 'Strength', 'Yoga', 'CrossFit', 'Boxing'].map((specialty) => (
              <Button
                key={specialty}
                onClick={() => setSelectedSpecialty(specialty.toLowerCase())}
                className={`px-6 py-2 rounded-full transition-all duration-300
                  ${selectedSpecialty === specialty.toLowerCase()
                    ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white'
                    : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                  }`}
              >
                {specialty}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 