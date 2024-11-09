import Image from 'next/image'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "David Chen",
    image: "/images/testimonials/david.jpg",
    class: "Power HIIT",
    quote: "The HIIT classes have completely transformed my fitness level. The trainers are amazing!",
    rating: 5
  },
  {
    name: "Lisa Johnson",
    image: "/images/testimonials/lisa.jpg",
    class: "Yoga Flow",
    quote: "Found my zen in the yoga classes. The instructors are knowledgeable and supportive.",
    rating: 5
  },
  {
    name: "Mark Wilson",
    image: "/images/testimonials/mark.jpg",
    class: "Core Strength",
    quote: "Great atmosphere and challenging workouts. Seeing real results!",
    rating: 5
  }
]

export function ClassTestimonials() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          What Our Members Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 
                         transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-sm text-red-500">{testimonial.class}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>
              
              <p className="text-gray-300">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 