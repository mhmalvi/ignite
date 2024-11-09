import Link from 'next/link'
import { Button } from '@/components/ui/button'


export function CTASection() {
  return (
    <section>
      {/* ... */}
      <Button asChild>
        <Link href="/trainers">
          Meet Our Trainers
        </Link>
      </Button>
      {/* ... */}
    </section>
  )
} 