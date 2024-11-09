import { Trainer } from './types'

export const trainers: Trainer[] = [
  {
    id: '1',
    name: 'Alex Thunder',
    specialty: 'HIIT & Strength',
    image: '/images/trainers/trainer1.jpg',
    rating: 4.9,
    experience: '8+ Years',
    clients: '200+',
    awards: '15+',
    bio: 'Elite fitness professional specializing in high-intensity training and strength conditioning.',
    certifications: ['NASM Certified', 'CrossFit L3', 'Nutrition Expert'],
    socialLinks: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: '2',
    name: 'Sarah Swift',
    specialty: 'Yoga & Pilates',
    image: '/images/trainers/trainer2.jpg',
    rating: 4.8,
    experience: '6+ Years',
    clients: '150+',
    awards: '10+',
    bio: 'Dedicated yoga instructor focusing on mind-body connection and flexibility. high-intensity training and strength conditioning.',
    certifications: ['RYT 500', 'Pilates Certified', 'Meditation Guide'],
    socialLinks: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  },
  // Add more trainers with similar structure...
  {
    id: '10',
    name: 'Mike Power',
    specialty: 'Powerlifting',
    image: '/images/trainers/trainer10.jpg',
    rating: 4.9,
    experience: '10+ Years',
    clients: '300+',
    awards: '20+',
    bio: 'Champion powerlifter helping others achieve their strength goals. high-intensity training and strength conditioning.',
    certifications: ['IPF Coach', 'Strength Specialist', 'Nutrition Expert'],
    socialLinks: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com'
    }
  }
] 