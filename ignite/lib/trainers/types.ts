// Move trainer types here
export interface Trainer {
  id: string
  name: string
  specialty: string
  image: string
  rating: number
  experience: string
  clients: string
  awards: string
  bio: string
  certifications: string[]
  socialLinks: {
    instagram?: string
    twitter?: string
    linkedin?: string
  }
} 