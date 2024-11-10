'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '../ui/textarea' // Fixed import path
import { Send } from 'lucide-react'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Add form submission logic here
    setTimeout(() => setIsSubmitting(false), 1000)
  }

  return (
    <section className="py-20 bg-black/95 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] 
                    from-red-500/20 via-transparent to-transparent opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 
                   rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
              Send Us a Message
            </span>
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                placeholder="Name"
                className="bg-black/50 border-gray-800 focus:border-red-500"
              />
              <Input
                type="email"
                placeholder="Email"
                className="bg-black/50 border-gray-800 focus:border-red-500"
              />
            </div>
            <Input
              placeholder="Subject"
              className="bg-black/50 border-gray-800 focus:border-red-500"
            />
            <Textarea
              placeholder="Message"
              className="bg-black/50 border-gray-800 focus:border-red-500 min-h-[150px]"
            />
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-red-500 to-orange-500 
                       hover:from-red-600 hover:to-orange-600 text-white font-bold
                       transition-all duration-300 transform hover:scale-105"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px] opacity-20" />
    </section>
  )
} 