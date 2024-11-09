import { Suspense } from 'react'
import { ClassHero } from '@/components/classes/class-hero'
import { ClassGrid } from '@/components/classes/class-grid'
import { ClassCategories } from '@/components/classes/class-categories'
import { ClassSchedule } from '@/components/classes/class-schedule'
import { ClassTestimonials } from '@/components/classes/class-testimonials'
import { ClassFAQ } from '@/components/classes/class-faq'
import { CTASection } from '@/components/classes/cta-section'

export default function ClassesPage() {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <ClassHero />

      {/* Categories Section */}
      <ClassCategories />

      {/* Classes Grid */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-[1920px] mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">
            Explore Our Classes
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            From high-intensity workouts to mindful movement, find the perfect class to achieve your fitness goals
          </p>
          <Suspense>
            <ClassGrid />
          </Suspense>
        </div>
      </section>

      {/* Schedule Section */}
      <ClassSchedule />

      {/* Testimonials */}
      <ClassTestimonials />

      {/* FAQ Section */}
      <ClassFAQ />

      {/* CTA Section */}
      <CTASection />
    </div>
  )
} 