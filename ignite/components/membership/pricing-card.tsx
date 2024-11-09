'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/ignite/components/ui/button"
import type { MembershipPlan } from '@/lib/membership/types'

export function PricingCard({ plan }: { plan: MembershipPlan }) {
  return (
    <Card className="bg-gray-800/50 border-gray-700 hover:shadow-xl transition-all">
      <CardHeader>
        <CardTitle>{plan.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{plan.price}</div>
        <ul className="mt-4 space-y-2">
          {plan.features.map((feature) => (
            <li key={feature.id} className="flex items-center gap-2">
              {feature.included ? '✓' : '×'} {feature.name}
            </li>
          ))}
        </ul>
        <Button className="w-full mt-6">Choose Plan</Button>
      </CardContent>
    </Card>
  )
} 