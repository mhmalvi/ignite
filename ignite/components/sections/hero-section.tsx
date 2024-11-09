import Link from 'next/link'
import { Button } from '@/components/ui/button'


export function HeroSection() {
  return (
    <section>
      {/* ... */}
      <div className="flex gap-4">
        <Button asChild>
          <Link href="/trainers">
            Meet Our Trainers
          </Link>
        </Button>
      </div>
      {/* ... */}
    </section>
  )
} 