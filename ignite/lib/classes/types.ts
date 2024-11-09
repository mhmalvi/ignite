export interface ClassSession {
  id: number
  title: string
  image: string
  duration: string
  capacity: string
  description: string
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels'
  trainer: string
}

export interface ScheduleItem {
  time: string
  class: string
  trainer: string
  duration: string
}

export interface DailySchedule {
  [key: string]: ScheduleItem[]
}

export type Class = {
  id: number
  name: string
  image: string
  description: string
} 