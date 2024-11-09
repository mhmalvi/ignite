import { EventHero } from '@/components/events/event-hero'
import { EventGrid } from '@/components/events/event-grid'
import { EventFilter } from '@/components/events/event-filter'

export default function EventsPage() {
  return (
    <main className="flex-1">
      <EventHero />
      <EventFilter />
      <EventGrid />
    </main>
  )
} 