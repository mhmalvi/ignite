import Image from 'next/image'

export function TrainerSpecialties() {
  const specialties = [
    {
      title: 'Personal Training',
      description: 'One-on-one customized workout programs',
      image: '/images/specialties/personal-training.jpg'
    },
    {
      title: 'Group Fitness',
      description: 'High-energy group workout sessions',
      image: '/images/specialties/group-fitness.jpg'
    },
    {
      title: 'Nutrition Coaching',
      description: 'Expert dietary guidance and meal planning',
      image: '/images/specialties/nutrition.jpg'
    }
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Our Training Specialties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={specialty.image}
                  alt={specialty.title}
                  fill
                  className="object-cover transition-transform duration-300 
                           group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 
                              transition-colors" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {specialty.title}
                  </h3>
                  <p className="text-gray-300">
                    {specialty.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 