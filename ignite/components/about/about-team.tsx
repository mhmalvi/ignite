'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Instagram, Linkedin, Twitter } from 'lucide-react'

const team = [
  {
    name: 'Alex Thunder',
    role: 'Head Trainer',
    image: '/images/trainers/alex.jpg',
    bio: 'Certified strength and conditioning specialist with 10+ years experience.',
    socials: {
      instagram: '#',
      twitter: '#',
      linkedin: '#'
    }
  },
  {
    name: 'Sarah Swift',
    role: 'Yoga Director',
    image: '/images/trainers/sarah.jpg',
    bio: 'International yoga instructor with expertise in multiple disciplines.',
    socials: {
      instagram: '#',
      twitter: '#',
      linkedin: '#'
    }
  },
  {
    name: 'Mike Power',
    role: 'Fitness Coach',
    image: '/images/trainers/mike.jpg',
    bio: 'Former athlete turned fitness expert, specializing in HIIT and strength training.',
    socials: {
      instagram: '#',
      twitter: '#',
      linkedin: '#'
    }
  }
]

export function AboutTeam() {
  return (
    <section className="py-20 bg-black/95 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] 
                    from-red-500/20 via-transparent to-transparent opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
            Meet Our Team
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden
                       group hover:bg-white/10 transition-all duration-300"
            >
              <div className="relative h-80 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-orange-500 
                             transition-colors">{member.name}</h3>
                <p className="text-orange-500 mb-2">{member.role}</p>
                <p className="text-gray-400 mb-4">{member.bio}</p>
                <div className="flex gap-4">
                  {Object.entries(member.socials).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      className="text-gray-400 hover:text-orange-500 transition-colors"
                    >
                      {platform === 'instagram' && <Instagram className="w-5 h-5" />}
                      {platform === 'twitter' && <Twitter className="w-5 h-5" />}
                      {platform === 'linkedin' && <Linkedin className="w-5 h-5" />}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 