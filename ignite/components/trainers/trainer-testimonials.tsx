import Image from 'next/image'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fitness Enthusiast",
    image: "/images/testimonials/client1.jpg",
    quote: "Working with the trainers here has completely transformed my approach to fitness. Their expertise and dedication are unmatched.",
    rating: 5
  },
  {
    name: "Mike Chen",
    role: "Marathon Runner",
    image: "/images/testimonials/client2.jpg",
    quote: "The personalized attention and professional guidance helped me achieve my marathon goals. Highly recommended!",
    rating: 5
  },
  {
    name: "Emma Davis",
    role: "Yoga Practitioner",
    image: "/images/testimonials/client3.jpg",
    quote: "The trainers here understand that everyone's journey is different. They've helped me grow stronger both physically and mentally.",
    rating: 5
  }
]

export function TrainerTestimonials() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm"
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
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
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