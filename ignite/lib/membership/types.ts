export interface PlanFeature {
  id: string
  name: string
  included: boolean
}

export interface MembershipPlan {
  id: string
  name: string
  price: string
  duration: string
  features: PlanFeature[]
  isPopular?: boolean
} 