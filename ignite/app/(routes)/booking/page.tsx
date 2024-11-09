import { BookingForm } from '@/components/booking/booking-form'
import { SchedulePicker } from '@/components/booking/schedule-picker'
import { TrainerSelector } from '@/components/booking/trainer-selector'

export default function BookingPage() {
  return (
    <main className="flex-1 bg-black text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-12 text-center">Book Your Session</h1>
        <div className="max-w-3xl mx-auto">
          <BookingForm />
        </div>
      </div>
    </main>
  )
} 