'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, User, Flame, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

type ScheduleItem = {
  time: string
  class: string
  trainer: string
  duration: string
}

type Schedule = {
  [key: string]: ScheduleItem[]
}

const schedule: Schedule = {
  Monday: [
    { time: '06:00', class: 'Morning HIIT', trainer: 'Alex Thunder', duration: '45 mins' },
    { time: '09:00', class: 'Yoga Flow', trainer: 'Sarah Swift', duration: '60 mins' },
    { time: '18:00', class: 'Power Hour', trainer: 'Mike Power', duration: '60 mins' },
  ],
  Tuesday: [
    { time: '07:00', class: 'Core Strength', trainer: 'Mike Power', duration: '30 mins' },
    { time: '10:00', class: 'Power Lift', trainer: 'Alex Thunder', duration: '60 mins' },
    { time: '17:30', class: 'Evening HIIT', trainer: 'Sarah Swift', duration: '45 mins' },
  ],
  Wednesday: [
    { time: '06:30', class: 'Cardio Blast', trainer: 'Sarah Swift', duration: '45 mins' },
    { time: '09:30', class: 'Yoga Flow', trainer: 'Mike Power', duration: '60 mins' },
    { time: '18:30', class: 'Combat Zone', trainer: 'Alex Thunder', duration: '60 mins' },
  ],
  Thursday: [
    { time: '07:30', class: 'Spin Cyclone', trainer: 'Alex Thunder', duration: '45 mins' },
    { time: '11:00', class: 'Power Lift', trainer: 'Mike Power', duration: '60 mins' },
    { time: '19:00', class: 'Evening Flow', trainer: 'Sarah Swift', duration: '60 mins' },
  ],
  Friday: [
    { time: '06:00', class: 'Morning HIIT', trainer: 'Sarah Swift', duration: '45 mins' },
    { time: '10:30', class: 'Core Strength', trainer: 'Alex Thunder', duration: '30 mins' },
    { time: '17:00', class: 'Power Hour', trainer: 'Mike Power', duration: '60 mins' },
  ],
  Saturday: [
    { time: '08:00', class: 'Weekend Warriors', trainer: 'Alex Thunder', duration: '60 mins' },
    { time: '10:00', class: 'Yoga Flow', trainer: 'Sarah Swift', duration: '60 mins' },
    { time: '14:00', class: 'Combat Zone', trainer: 'Mike Power', duration: '60 mins' },
  ],
  Sunday: [
    { time: '09:00', class: 'Sunday Stretch', trainer: 'Sarah Swift', duration: '45 mins' },
    { time: '11:00', class: 'Core Focus', trainer: 'Mike Power', duration: '30 mins' },
    { time: '15:00', class: 'Power Flow', trainer: 'Alex Thunder', duration: '60 mins' },
  ]
}

export function ClassSchedule() {
  const [selectedDay, setSelectedDay] = useState('Monday')

  return (
    <section className="py-20 bg-black/95 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500/20 via-transparent to-transparent opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
            Class Schedule
          </span>
        </h2>

        {/* Day Selection - Enhanced with gradient borders */}
        <div className="flex justify-center overflow-x-auto pb-4 mb-12 gap-3 scrollbar-hide">
          <div className="inline-flex gap-3">
            {weekDays.map((day) => (
              <Button
                key={day}
                variant={selectedDay === day ? "default" : "outline"}
                className={`
                  min-w-[120px] py-6 relative group transition-all duration-300
                  ${selectedDay === day 
                    ? 'bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 shadow-lg shadow-red-500/20' 
                    : 'border-gray-800 hover:border-orange-500 hover:text-orange-500'
                  }
                `}
                onClick={() => setSelectedDay(day)}
              >
                {day}
                {selectedDay === day && (
                  <motion.div 
                    layoutId="activeDay"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500"
                  />
                )}
              </Button>
            ))}
          </div>
        </div>

        {/* Schedule Grid - Enhanced with glass morphism and animations */}
        <div className="space-y-6">
          {schedule[selectedDay]?.map((session, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              key={index}
              className="backdrop-blur-xl bg-white/5 border border-white/10 p-6 rounded-2xl
                         hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex flex-wrap gap-6 items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-red-500/10 text-red-500">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span className="text-white font-semibold tracking-wide">{session.time}</span>
                </div>
                
                <div className="flex-1 min-w-[200px]">
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-500 transition-colors">
                    {session.class}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Flame className="w-4 h-4 text-orange-500" />
                    <span>{session.duration}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-orange-500/10">
                    <User className="w-4 h-4 text-orange-500" />
                  </div>
                  <span className="text-gray-300">{session.trainer}</span>
                </div>
                
                <Button 
                  className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 
                             hover:to-orange-600 transition-all duration-300 transform 
                             group-hover:scale-105 shadow-lg shadow-red-500/20"
                >
                  Book Class
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 