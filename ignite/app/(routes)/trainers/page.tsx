import { Suspense } from 'react'
import { TrainerGrid } from '@/components/trainers/trainer-grid'
import { TrainerHero } from '@/components/trainers/trainer-hero'
import { TrainerStats } from '@/components/trainers/trainer-stats'
import { TrainerSpecialties } from '@/components/trainers/trainer-specialties'
import { TrainerTestimonials } from '@/components/trainers/trainer-testimonials'
import { TrainerFAQ } from '@/components/trainers/trainer-faq'
import { CTASection } from '@/components/trainers/cta-section'

export default function TrainersPage() {
  return (
    <div className="bg-black">
      <TrainerHero />
      <TrainerStats />
      <section className="w-full px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-[1920px] mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">
            Meet Our Expert Trainers
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Work with world-class fitness professionals who are dedicated to helping you achieve your goals
          </p>
          <Suspense>
            <TrainerGrid />
          </Suspense>
        </div>
      </section>
      <TrainerSpecialties />
      <TrainerTestimonials />
      <TrainerFAQ />
      <CTASection />
    </div>
  )
} 