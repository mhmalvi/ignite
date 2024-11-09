'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What should I bring to class?",
    answer: "We recommend bringing a water bottle, towel, and wearing comfortable workout attire. For yoga classes, you may want to bring your own mat, though we do provide mats for all students."
  },
  {
    question: "How early should I arrive for class?",
    answer: "We recommend arriving 10-15 minutes before your first class to check in, meet your instructor, and get settled. For regular attendees, 5-10 minutes early is perfect."
  },
  {
    question: "Are classes suitable for beginners?",
    answer: "Yes! Most of our classes offer modifications for different fitness levels. Our instructors are trained to help beginners and provide alternatives for more challenging movements."
  },
  {
    question: "How do I book a class?",
    answer: "You can book classes through our website or mobile app. Members can book up to 7 days in advance, while non-members can book 24 hours before the class."
  },
  {
    question: "What is your cancellation policy?",
    answer: "We ask that you cancel at least 4 hours before class to avoid a late cancellation fee. This allows others to take your spot if you can't make it."
  },
  {
    question: "Can I try a class before joining?",
    answer: "Yes! We offer a free trial class for new members. You can also purchase a day pass to try multiple classes before committing to a membership."
  }
]

export function ClassFAQ() {
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
              className="bg-gray-900/50 rounded-lg px-6 data-[state=open]:bg-gray-900/70"
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