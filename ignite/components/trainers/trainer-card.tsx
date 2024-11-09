'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Instagram, Twitter, Linkedin, Star, Trophy, Clock, Users, ArrowRight } from 'lucide-react'
import type { Trainer } from '@/lib/trainers/types'

interface TrainerCardProps {
  trainer: Trainer
}

export function TrainerCard({ trainer }: TrainerCardProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <Card className="bg-gray-900/50 border-gray-800 overflow-hidden hover:shadow-xl
                    hover:shadow-red-500/10 transition-all duration-300 h-full w-full">
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full group">
        <Image
          src={imageError ? '/images/placeholder.jpg' : trainer.image}
          alt={`${trainer.name}`}
          fill
          sizes="(max-width: 640px) 100vw, 
                 (max-width: 1024px) 50vw,
                 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          onError={() => setImageError(true)}
          priority={false}
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
        <div className="absolute bottom-4 right-4 flex gap-2">
          {trainer.socialLinks?.instagram && (
            <Link 
              href={trainer.socialLinks.instagram} 
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-black/50 p-2 rounded-full opacity-60 hover:opacity-100 transition-all"
            >
              <Instagram className="w-5 h-5 text-white" />
            </Link>
          )}
          {trainer.socialLinks?.twitter && (
            <Link 
              href={trainer.socialLinks.twitter} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/50 p-2 rounded-full opacity-60 hover:opacity-100 transition-all"
            >
              <Twitter className="w-5 h-5 text-white" />
            </Link>
          )}
          {trainer.socialLinks?.linkedin && (
            <Link 
              href={trainer.socialLinks.linkedin} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/50 p-2 rounded-full opacity-60 hover:opacity-100 transition-all"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </Link>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-white">{trainer.name}</h3>
            <p className="text-gray-400 text-sm">{trainer.specialty}</p>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-white">{trainer.rating}</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <Clock className="w-5 h-5 text-red-500 mx-auto mb-1" />
            <p className="text-sm text-gray-400">Experience</p>
            <p className="text-white">{trainer.experience}</p>
          </div>
          <div className="text-center">
            <Users className="w-5 h-5 text-orange-500 mx-auto mb-1" />
            <p className="text-sm text-gray-400">Clients</p>
            <p className="text-white">{trainer.clients}</p>
          </div>
          <div className="text-center">
            <Trophy className="w-5 h-5 text-yellow-500 mx-auto mb-1" />
            <p className="text-sm text-gray-400">Awards</p>
            <p className="text-white">{trainer.awards}</p>
          </div>
        </div>

        <p className="text-gray-400 text-sm line-clamp-2">{trainer.bio}</p>

        <div className="flex flex-wrap gap-2">
          {trainer.certifications?.map((cert) => (
            <span
              key={cert}
              className="text-xs px-3 py-1 rounded-full bg-red-500/10 text-red-500"
            >
              {cert}
            </span>
          ))}
        </div>

        <Button 
          asChild
          className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 transition-all"
        >
          <Link href={`/booking?trainer=${trainer.id}`}>
            Book a Session
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
    </Card>
  )
}