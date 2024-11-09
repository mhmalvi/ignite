import { Users, Award, Clock, Trophy } from 'lucide-react'

export function TrainerStats() {
  const stats = [
    {
      icon: Users,
      value: '50+',
      label: 'Expert Trainers',
      description: 'Certified professionals ready to guide you'
    },
    {
      icon: Award,
      value: '1000+',
      label: 'Happy Clients',
      description: 'Transformed lives and achieved goals'
    },
    {
      icon: Clock,
      value: '15+',
      label: 'Years Experience',
      description: 'Combined expertise in fitness training'
    },
    {
      icon: Trophy,
      value: '200+',
      label: 'Awards Won',
      description: 'Recognition for excellence in fitness'
    }
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-gray-800/50 
                         backdrop-blur-sm hover:bg-gray-800/70 transition-all"
            >
              <stat.icon className="w-8 h-8 text-red-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-300 mb-2">
                {stat.label}
              </div>
              <p className="text-gray-400 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 