'use client'

import type { JSX } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Users, Heart, Star, Flame, ArrowRight, Menu, Dumbbell, Brain, Video, Leaf, Play,Award, Target, Activity, Bolt, Sparkles, Sun, Moon, Zap } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-hidden">

      <header className="sticky top-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
        
      </header>

      <main className="flex-1">
        <section className="relative min-h-screen overflow-hidden">
          {/* Container with max width and proper padding */}
          <div className="container mx-auto max-w-[2000px] px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 h-full">
            {/* Content wrapper with better vertical alignment */}
            <div className="flex min-h-screen items-center justify-center py-20 lg:py-32">
              <div className="w-full max-w-[2000px]">
                {/* Main content with proper spacing */}
                <div className="space-y-6 sm:space-y-8 lg:space-y-10 max-w-[1800px] mx-auto">
                  {/* Heading with responsive sizing */}
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl
                               font-extrabold tracking-tight leading-[1.1]
                               bg-clip-text text-transparent bg-gradient-to-r 
                               from-red-500 via-orange-500 to-yellow-500
                               max-w-[1600px]">
                    IGNITE Your Potential
                  </h1>

                  {/* Subheading with adjusted max width */}
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
                               text-gray-300 max-w-[1200px] leading-tight">
                    Push your limits, break barriers, and transform your body at IGNITE Fitness.
                    Where intensity meets results.
                  </p>

                  {/* Stats section with improved responsive layout */}
                  <div className="mt-16 lg:mt-24 xl:mt-32 pt-12 lg:pt-16 xl:pt-20 border-t border-gray-800">
                    <div className="max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-8 2xl:px-0">
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 
                                    gap-4 sm:gap-6 md:gap-8 lg:gap-6 xl:gap-8 2xl:gap-10
                                    w-full place-items-center">
                        {[
                          {
                            label: 'Classes Weekly',
                            value: '100+',
                            icon: Calendar,
                            gradient: 'from-red-500 to-orange-500',
                            color: 'text-red-500'
                          },
                          {
                            label: 'Expert Trainers',
                            value: '25+',
                            icon: Users,
                            gradient: 'from-orange-500 to-yellow-500',
                            color: 'text-orange-500'
                          },
                          {
                            label: 'Active Members',
                            value: '2000+',
                            icon: Heart,
                            gradient: 'from-yellow-500 to-green-500',
                            color: 'text-yellow-500'
                          },
                          {
                            label: 'Success Stories',
                            value: '500+',
                            icon: Star,
                            gradient: 'from-green-500 to-emerald-500',
                            color: 'text-green-500'
                          },
                          {
                            label: 'Fitness Goals',
                            value: '5000+',
                            icon: Target,
                            gradient: 'from-emerald-500 to-cyan-500',
                            color: 'text-emerald-500'
                          },
                          {
                            label: 'Workout Hours',
                            value: '10K+',
                            icon: Flame,
                            gradient: 'from-cyan-500 to-blue-500',
                            color: 'text-cyan-500'
                          }
                        ].map((stat, index) => (
                          <div 
                            key={stat.label} 
                            className={`
                              relative group 
                              p-4 sm:p-5 md:p-6 lg:p-4 xl:p-5 2xl:p-6
                              bg-gray-800/30 rounded-2xl border border-gray-700/50
                              hover:border-red-500/50 transition-all duration-500
                              hover:bg-gray-800/50 hover:-translate-y-2 hover:scale-105
                              backdrop-blur-sm cursor-pointer
                              flex flex-col items-center justify-between
                              min-h-[180px] lg:min-h-[200px] xl:min-h-[220px] 2xl:min-h-[240px]
                              w-full
                            `}
                          >
                            <div className="flex flex-col items-center text-center space-y-3 lg:space-y-4 2xl:space-y-6 w-full">
                              {/* Icon Container */}
                              <div className={`
                                p-3 lg:p-4 2xl:p-5 rounded-xl bg-gradient-to-r ${stat.gradient}
                                opacity-80 group-hover:opacity-100 transition-all duration-500
                                w-14 h-14 lg:w-16 lg:h-16 2xl:w-20 2xl:h-20 flex items-center justify-center
                              `}>
                                <stat.icon className={`w-7 h-7 lg:w-8 lg:h-8 2xl:w-10 2xl:h-10 text-white`} />
                              </div>
                              
                              {/* Value */}
                              <div className={`
                                text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold ${stat.color}
                                group-hover:scale-110 transition-all duration-500
                              `}>
                                {stat.value}
                              </div>
                              
                              {/* Label */}
                              <div className="text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-400 
                                            group-hover:text-gray-300 transition-colors">
                                {stat.label}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background effects */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] 
                        from-red-500/20 via-transparent to-transparent opacity-30" />
          <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px] opacity-20" />
        </section>

        <section id="classes" className="py-20 md:py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
          <div className="container max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
              Unleash Your Power
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-6 md:gap-8 xl:gap-10">
              {[
                { name: 'HIIT Inferno', icon: Flame, description: 'Push your limits in our high-intensity training class.' },
                { name: 'Power Lift', icon: Dumbbell, description: 'Build strength and muscle with expert guidance.' },
                { name: 'Cardio Blast', icon: Zap, description: 'Elevate your heart rate and burn maximum calories.' },
                { name: 'Yoga Fusion', icon: Heart, description: 'Find balance between strength and flexibility.' },
                { name: 'CrossFit Pro', icon: Target, description: 'Challenge yourself with varied functional movements.' },
                { name: 'Boxing Core', icon: Award, description: 'Learn boxing techniques while building core strength.' }
              ].map((className) => (
                <Card 
                  key={className.name} 
                  className="bg-gray-800 border-gray-700 hover:bg-gray-700 
                           transition-all duration-300 transform hover:scale-105 
                           hover:rotate-3 group hover:border-red-500/50 
                           backdrop-blur-sm"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-2 rounded-xl bg-red-500/10 group-hover:bg-red-500/20 
                                    transition-all duration-300">
                        <className.icon className="h-8 w-8 xl:h-10 xl:w-10 2xl:h-12 2xl:w-12 
                                                 text-red-500 group-hover:animate-spin" />
                      </div>
                      <CardTitle className="text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl 
                                         font-bold bg-clip-text text-transparent 
                                         bg-gradient-to-r from-red-500 to-orange-500">
                        {className.name}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {className.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full bg-gradient-to-r from-red-500 to-orange-500 
                               hover:from-red-600 hover:to-orange-600 text-white font-bold 
                               py-2 px-4 rounded-full transition-all duration-300 
                               transform group-hover:translate-x-2 
                               flex items-center justify-center gap-2"
                    >
                      Book Now
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px] opacity-20"></div>
        </section>

        {/* Trainers section */}
        <section id="trainers" className="py-20 md:py-24 bg-black relative overflow-hidden">
          <div className="container max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
              Elite Trainers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                { name: 'Alex Thunder', specialty: 'HIIT & Strength', image: '/placeholder.svg?height=400&width=300' },
                { name: 'Sarah Flex', specialty: 'Yoga & Pilates', image: '/placeholder.svg?height=400&width=300' },
                { name: 'Mike Iron', specialty: 'Powerlifting', image: '/placeholder.svg?height=400&width=300' },
                { name: 'Lisa Swift', specialty: 'Cardio & Boxing', image: '/placeholder.svg?height=400&width=300' },
              ].map((trainer) => (
                <Card key={trainer.name} className="bg-gray-800 border-gray-700 overflow-hidden group hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300">
                  <div className="relative">
                    <Image src={trainer.image} alt={trainer.name} width={300} height={400} className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardHeader className="relative z-10 -mt-20 bg-gray-800/90 backdrop-blur-sm">
                    <CardTitle className="text-lg sm:text-xl font-bold">{trainer.name}</CardTitle>
                    <CardDescription className="text-sm text-gray-400">{trainer.specialty}</CardDescription>
                  </CardHeader>
                  <CardFooter className="bg-gray-800">
                    <Button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform group-hover:translate-y-1">
                      Book a Session
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/20 via-transparent to-transparent opacity-50"></div>
        </section>

        {/* Membership section */}
        <section id="membership" className="py-20 md:py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
          <div className="container max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
              Elevate Your Status
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 perspective-1000">
              {[
                { name: 'Spark', price: '$49.99', features: ['Access to gym equipment', 'Locker room access', '2 classes per week'] },
                { name: 'Blaze', price: '$79.99', features: ['Unlimited classes', 'Personal training session', 'Nutrition consultation', 'Access to premium equipment'] },
                { name: 'Inferno', price: '$129.99', features: ['24/7 gym access', 'Unlimited classes', 'Weekly personal training', 'Massage therapy', 'Exclusive IGNITE gear'] },
              ].map((plan) => (
                <Card key={plan.name} className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:rotate-3 group">
                  <div className="absolute top-0 right-0 bg-gradient-to-bl from-red-500 to-orange-500 text-white px-4 py-1 rounded-bl-lg font-bold transform -skew-x-12">
                    {plan.name}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl sm:text-3xl font-bold">{plan.price}<span className="text-base sm:text-lg font-normal">/month</span></CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2">
                          <Zap className="h-5 w-5 text-red-500 group-hover:animate-pulse" />
                          <span className="text-sm sm:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform group-hover:translate-y-1">
                      Choose {plan.name}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px] opacity-20 animate-[pulse_4s_ease-in-out_infinite]"></div>
        </section>

        {/* Transformation Stories section */}
        <section id="transformations" className="py-20 md:py-24 bg-black relative overflow-hidden">
          <div className="container max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
              Transformation Stories
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {[
                { name: 'John D.', before: '/placeholder.svg?height=300&width=200', after: '/placeholder.svg?height=300&width=200', story: 'Lost 50 lbs and gained confidence' },
                { name: 'Emily S.', before: '/placeholder.svg?height=300&width=200', after: '/placeholder.svg?height=300&width=200', story: 'Increased strength and energy levels' },
              ].map((story) => (
                <Card key={story.name} className="bg-gray-800 border-gray-700 overflow-hidden group hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row">
                    <div className="flex-1 p-6 transform group-hover:scale-105 transition-transform duration-300">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">{story.name}</h3>
                      <p className="text-sm sm:text-base text-gray-400 mb-4">{story.story}</p>
                      <Button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform group-hover:translate-x-2">
                        Read Full Story
                      </Button>
                    </div>
                    <div className="flex-1 flex relative overflow-hidden">
                      <div className="w-1/2 relative transform transition-transform duration-500 group-hover:translate-x-full">
                        <Image src={story.before} alt="Before" layout="fill" objectFit="cover" />
                        <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">Before</div>
                      </div>
                      <div className="w-1/2 absolute top-0 left-0 transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0">
                        <Image src={story.after} alt="After" layout="fill" objectFit="cover" />
                        <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">After</div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-500/20 via-transparent to-transparent opacity-50"></div>
        </section>

        {/* Nutrition section */}
        <section id="nutrition" className="py-20 md:py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
          <div className="container max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
              Fuel Your Fire
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 perspective-1000">
              <Card className="bg-gray-800 border-gray-700 group hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 transform hover:rotate-3">
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl font-bold flex items-center">
                    <Leaf className="h-6 w-6 mr-2 text-green-500 group-hover:animate-bounce" />
                    Nutrition Coaching
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-gray-400 mb-4">Our expert nutritionists will create a personalized meal plan to complement your fitness goals.</p>
                  <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform group-hover:translate-x-2">
                    Get Your Meal Plan
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700 group hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 transform hover:rotate-3">
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl font-bold flex items-center">
                    <Flame className="h-6 w-6 mr-2 text-red-500 group-hover:animate-pulse" />
                    IGNITE Supplements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-gray-400 mb-4">Boost your performance with our premium range of supplements, designed for maximum results.</p>
                  <Button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform group-hover:translate-x-2">
                    Shop Supplements
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px] opacity-20 animate-[pulse_4s_ease-in-out_infinite]"></div>
        </section>

        {/* Events section */}
        <section id="events" className="py-20 md:py-24 bg-black relative overflow-hidden">
          <div className="container max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
              Upcoming Events
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 perspective-1000">
              {[
                { name: 'IGNITE Challenge', date: 'June 15, 2023', description: 'Push your limits in our annual fitness challenge' },
                { name: 'Nutrition Workshop', date: 'July 1, 2023', description: 'Learn how to fuel your body for optimal performance' },
                { name: 'Charity Run', date: 'August 5, 2023', description: 'Join us in our community 5K run for a good cause' },
              ].map((event) => (
                <Card key={event.name} className="bg-gray-800 border-gray-700 group hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 hover:-rotate-3">
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl font-bold">{event.name}</CardTitle>
                    <CardDescription className="text-sm text-gray-400">{event.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm sm:text-base text-gray-300">{event.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform group-hover:translate-y-1">
                      Register Now
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent opacity-50"></div>
        </section>

        {/* Virtual Classes section */}
        <section id="virtual" className="py-20 md:py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
          <div className="container max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
              Virtual Classes
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <h3 className="text-xl sm:text-2xl font-bold">Train Anytime, Anywhere</h3>
                <p className="text-sm sm:text-base text-gray-400">Access our premium classes from the comfort of your home. Our virtual classes offer the same intensity and expert guidance as our in-person sessions.</p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Video className="h-5 w-5 text-red-500" />
                    <span className="text-sm sm:text-base">Live-streamed classes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-red-500" />
                    <span className="text-sm sm:text-base">Interactive sessions with trainers</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-red-500" />
                    <span className="text-sm sm:text-base">Flexible scheduling</span>
                  </li>
                </ul>
                <Button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:rotate-3">
                  Try Virtual Class
                </Button>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-300 group">
                <Image src="/placeholder.svg?height=720&width=1280" alt="Virtual Class Preview" layout="fill" objectFit="cover" className="transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button className="bg-white text-black hover:bg-gray-200 font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 group-hover:bg-red-500 group-hover:text-white">
                    <Play className="h-6 w-6" />
                    <span>Watch Preview</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px] opacity-20 animate-[pulse_4s_ease-in-out_infinite]"></div>
        </section>

        {/* Booking section */}
        <section id="booking" className="py-20 md:py-24 bg-black relative overflow-hidden">
          <div className="container max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
              Reserve Your Spot
            </h2>
            <div className="max-w-md mx-auto transform hover:rotate-3 transition-transform duration-300">
              <Card className="bg-gray-800 border-gray-700 group hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl font-bold">Quick Booking</CardTitle>
                  <CardDescription className="text-sm text-gray-400">Select a class and time to ignite your workout</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="class" className="text-sm font-medium text-gray-300">Class</label>
                      <select id="class" className="w-full rounded-md border-gray-700 bg-gray-900 text-white focus:border-red-500 focus:ring-red-500">
                        <option>HIIT Inferno</option>
                        <option>Power Lift</option>
                        <option>Cardio Blast</option>
                        <option>Yoga Fusion</option>
                        <option>Combat Zone</option>
                        <option>Spin Cyclone</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="date" className="text-sm font-medium text-gray-300">Date</label>
                      <input id="date" type="date" className="w-full rounded-md border-gray-700 bg-gray-900 text-white focus:border-red-500 focus:ring-red-500" />
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform group-hover:translate-y-1">
                    Book Now
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-500/20 via-transparent to-transparent opacity-50"></div>
        </section>
      </main>

      
    </div>
  )
}