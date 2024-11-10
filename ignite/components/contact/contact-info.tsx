'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const contactDetails = [
  {
    icon: MapPin,
    title: 'Location',
    details: ['123 Intensity Ave', 'Fitville, FT 54321'],
    link: 'https://maps.google.com'
  },
  {
    icon: Phone,
    title: 'Phone',
    details: ['+1 (555) 123-4567', 'Mon-Sun 6am-10pm'],
    link: 'tel:+15551234567'
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@ignitefitness.com', 'support@ignitefitness.com'],
    link: 'mailto:info@ignitefitness.com'
  },
  {
    icon: Clock,
    title: 'Hours',
    details: ['Monday-Friday: 5am-11pm', 'Weekends: 6am-10pm'],
  }
]

export function ContactInfo() {
  return (
    <section className="py-20 bg-black/95 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] 
                    from-red-500/20 via-transparent to-transparent opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactDetails.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-2xl
                       hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="p-4 rounded-full bg-gradient-to-r from-red-500/10 to-orange-500/10 
                           w-fit mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-orange-500 
                           transition-colors mb-3">
                {item.title}
              </h3>
              {item.details.map((detail, i) => (
                <p key={i} className="text-gray-400">
                  {detail}
                </p>
              ))}
              {item.link && (
                <a
                  href={item.link}
                  className="inline-block mt-4 text-orange-500 hover:text-orange-400 
                           transition-colors"
                >
                  View More →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px] opacity-20" />
    </section>
  )
} 