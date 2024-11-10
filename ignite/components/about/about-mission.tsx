'use client'

import { Target, Users, Trophy } from 'lucide-react'

export function AboutMission() {
  return (
    <section className="py-20 bg-black/95 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] 
                    from-red-500/20 via-transparent to-transparent opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
            Our Mission
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: 'Purpose',
              description: 'To inspire and empower individuals to reach their full potential through fitness.'
            },
            {
              icon: Users,
              title: 'Community',
              description: 'Building a supportive environment where everyone feels welcome and motivated.'
            },
            {
              icon: Trophy,
              title: 'Excellence',
              description: 'Delivering world-class training and facilities for optimal results.'
            }
          ].map((item, index) => (
            <div key={index} className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-2xl
                                    hover:bg-white/10 transition-all duration-300 group">
              <div className="p-4 rounded-full bg-gradient-to-r from-red-500/10 to-orange-500/10 
                           w-fit mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-orange-500 
                           transition-colors mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 