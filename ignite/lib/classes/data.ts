import { ClassSession, DailySchedule } from './types'

export const classes: ClassSession[] = [
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

export const schedule: DailySchedule = {
  Monday: [
    { time: '06:00', class: 'Morning HIIT', trainer: 'Alex Thunder', duration: '45 mins' },
    { time: '09:00', class: 'Yoga Flow', trainer: 'Sarah Swift', duration: '60 mins' },
    { time: '18:00', class: 'Power Hour', trainer: 'Mike Power', duration: '60 mins' },
  ],
  Tuesday: [
    { time: '07:00', class: 'Core Strength', trainer: 'Mike Power', duration: '30 mins' },
    { time: '10:00', class: 'Power HIIT', trainer: 'Alex Thunder', duration: '45 mins' },
    { time: '17:30', class: 'Evening Yoga', trainer: 'Sarah Swift', duration: '60 mins' },
  ],
  // Add schedules for other days
} 