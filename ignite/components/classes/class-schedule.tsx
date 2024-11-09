'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, User } from 'lucide-react'

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
  Tuesday: [],
  Wednesday: [],
  Thursday: [],
  Friday: [],
  Saturday: [],
  Sunday: []
}

export function ClassSchedule() {
  const [selectedDay, setSelectedDay] = useState('Monday')

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Class Schedule
        </h2>

        {/* Day Selection */}
        <div className="flex overflow-x-auto pb-4 mb-8 gap-2">
          {weekDays.map((day) => (
            <Button
              key={day}
              variant={selectedDay === day ? "default" : "outline"}
              className={`min-w-[100px] ${
                selectedDay === day 
                  ? 'bg-red-500 hover:bg-red-600' 
                  : 'hover:text-red-500'
              }`}
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </Button>
          ))}
        </div>

        {/* Schedule Grid */}
        <div className="space-y-4">
          {schedule[selectedDay]?.map((session, index) => (
            <div
              key={index}
              className="bg-gray-900/50 p-6 rounded-lg hover:bg-gray-900/70 
                         transition-all duration-300"
            >
              <div className="flex flex-wrap gap-6 items-center justify-between">
                <div className="flex items-center gap-4">
                  <Clock className="w-5 h-5 text-red-500" />
                  <span className="text-white font-semibold">{session.time}</span>
                </div>
                
                <div className="flex-1 min-w-[200px]">
                  <h3 className="text-lg font-semibold text-white">
                    {session.class}
                  </h3>
                  <p className="text-gray-400">{session.duration}</p>
                </div>
                
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-red-500" />
                  <span className="text-gray-400">{session.trainer}</span>
                </div>
                
                <Button className="bg-red-500 hover:bg-red-600">
                  Book Class
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 