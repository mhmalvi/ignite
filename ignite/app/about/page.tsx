'use client'

import { Button } from '@/components/ui/button'
import { AboutHero } from '@/components/about/about-hero'
import { AboutMission } from '@/components/about/about-mission'
import { AboutValues } from '@/components/about/about-values'
import { AboutTeam } from '@/components/about/about-team'
import { CTASection } from '@/components/about/cta-section'
import { ContactMap } from '@/components/contact/contact-map'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutTeam />
      <CTASection />
      <ContactMap />
    </main>
  )
} 