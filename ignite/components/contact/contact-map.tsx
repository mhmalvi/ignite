'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

export function ContactMap() {
  return (
    <section className="py-20 bg-black/95 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] 
                    from-red-500/20 via-transparent to-transparent opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
              Find Us Here
            </span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-gray-300">
            <MapPin className="w-5 h-5 text-orange-500" />
            <p>123 Intensity Ave, Fitville, FT 54321</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl 
                   overflow-hidden hover:bg-white/10 transition-all duration-300"
        >
          <div className="aspect-video w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px] opacity-20" />
    </section>
  )
} 