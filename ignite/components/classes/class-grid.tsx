import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Clock, Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const classes = [
  {
    id: 1,
    title: 'Power HIIT',
    image: '/images/classes/hiit.jpg',
    duration: '45 mins',
    capacity: '20 people',
    description: 'High-intensity interval training combining cardio and strength',
    level: 'Intermediate',
    trainer: 'Alex Thunder'
  },
  {
    id: 2,
    title: 'Yoga Flow',
    image: '/images/classes/yoga.jpg',
    duration: '60 mins',
    capacity: '15 people',
    description: 'Dynamic yoga sequences for strength and flexibility',
    level: 'All Levels',
    trainer: 'Sarah Swift'
  },
  {
    id: 3,
    title: 'Core Strength',
    image: '/images/classes/core.jpg',
    duration: '30 mins',
    capacity: '25 people',
    description: 'Focused core workouts for stability and strength',
    level: 'Beginner',
    trainer: 'Mike Power'
  },
  // Add more classes as needed
]

export function ClassGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {classes.map((classItem) => (
        <div
          key={classItem.id}
          className="bg-gray-900/50 rounded-lg overflow-hidden group hover:shadow-xl
                     hover:shadow-red-500/10 transition-all duration-300"
        >
          <div className="relative aspect-video">
            <Image
              src={classItem.image}
              alt={classItem.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
          </div>
          
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-bold text-white">{classItem.title}</h3>
            
            <div className="flex justify-between text-sm text-gray-400">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-red-500" />
                {classItem.duration}
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-red-500" />
                {classItem.capacity}
              </div>
            </div>
            
            <p className="text-gray-400">{classItem.description}</p>
            
            <div className="flex justify-between items-center text-sm">
              <span className="text-red-500">{classItem.level}</span>
              <span className="text-gray-400">Trainer: {classItem.trainer}</span>
            </div>
            
            <Button className="w-full bg-red-500 hover:bg-red-600" asChild>
              <Link href={`/booking?class=${classItem.id}`}>
                Book Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
} 