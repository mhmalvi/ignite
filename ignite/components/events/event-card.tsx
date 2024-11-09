'use client'

import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Event } from '@/lib/events/types'

export function EventCard({ event }: { event: Event }) {
  return (
    <Card className="bg-gray-800/50 border-gray-700 hover:shadow-xl transition-all">
      <div className="relative h-[200px]">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{event.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-400">{event.description}</p>
      </CardContent>
    </Card>
  )
} 