import { Suspense } from 'react'
import { trainers } from '@/lib/trainers/data'
import { TrainerCard } from './trainer-card'

function TrainerGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="animate-pulse">
          <div className="bg-gray-800 aspect-[4/3] rounded-t-lg" />
          <div className="p-6 space-y-4 bg-gray-900/50 rounded-b-lg">
            <div className="h-6 bg-gray-800 rounded w-2/3" />
            <div className="h-4 bg-gray-800 rounded w-1/2" />
          </div>
        </div>
      ))}
    </div>
  )
}

export function TrainerGrid() {
  return (
    <Suspense fallback={<TrainerGridSkeleton />}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {trainers.map((trainer) => (
          <TrainerCard key={trainer.id} trainer={trainer} />
        ))}
      </div>
    </Suspense>
  )
} 