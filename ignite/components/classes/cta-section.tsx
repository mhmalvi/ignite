import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-red-500 to-orange-500">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Start Your Fitness Journey?
        </h2>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
          Join our community of fitness enthusiasts and experience world-class
          training with expert instructors. Your first class is on us!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-red-500 hover:bg-gray-100"
          >
            <Link href="/signup">
              Try Your First Class Free
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white/10"
          >
            <Link href="/schedule">
              View Class Schedule
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
} 