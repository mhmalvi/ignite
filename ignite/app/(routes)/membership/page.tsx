import { MembershipHero } from '@/components/membership/membership-hero'
import { PricingGrid } from '@/components/membership/pricing-grid'
import { MembershipFeatures } from '@/components/membership/membership-features'

export default function MembershipPage() {
  return (
    <main className="flex-1">
      <MembershipHero />
      <PricingGrid />
      <MembershipFeatures />
    </main>
  )
} 