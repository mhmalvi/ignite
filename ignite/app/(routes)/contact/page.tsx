'use client'

import { ContactHero } from '@/components/contact/contact-hero'
import { ContactForm } from '@/components/contact/contact-form'
import { ContactInfo } from '@/components/contact/contact-info'
import { ContactMap } from '@/components/contact/contact-map'
import { CTASection } from '@/components/contact/cta-section'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
      <CTASection />
    </main>
  )
} 