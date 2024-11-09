'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do I choose the right trainer for me?",
    answer: "We recommend considering your fitness goals, preferred training style, and schedule. You can book a consultation with any of our trainers to discuss your needs and ensure a good fit."
  },
  {
    question: "What qualifications do your trainers have?",
    answer: "All our trainers are certified professionals with various specializations. They hold certifications from recognized institutions and undergo regular training to stay updated with the latest fitness trends."
  },
  {
    question: "How often should I train with a personal trainer?",
    answer: "The frequency depends on your goals, current fitness level, and schedule. Most clients see optimal results with 2-3 sessions per week, but we can create a custom plan that works for you."
  },
  {
    question: "Can I switch trainers if I'm not satisfied?",
    answer: "Yes, absolutely! We want you to have the best possible experience. If you feel your current trainer isn't the right fit, we'll help you find a better match at no additional cost."
  },
  {
    question: "Do you offer online training sessions?",
    answer: "Yes, we offer both in-person and online training sessions. Our trainers are experienced in delivering effective virtual workouts and providing remote support."
  }
]

export function TrainerFAQ() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-gray-800/50 rounded-lg px-6"
            >
              <AccordionTrigger className="text-white hover:text-red-500">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
} 