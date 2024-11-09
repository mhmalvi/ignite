'use client'

import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Class } from '@/lib/classes/types'

export function ClassCard({ classItem }: { classItem: Class }) {
  return (
    <Card className="bg-gray-800/50 border-gray-700 hover:shadow-xl transition-all">
      <div className="relative h-[200px]">
        <Image
          src={classItem.image}
          alt={classItem.name}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{classItem.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-400">{classItem.description}</p>
      </CardContent>
    </Card>
  )
} 