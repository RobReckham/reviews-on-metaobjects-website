'use client'

import PricingCalculator from './pricing-calculator'

// REVIEWS.io USD pricing
// Free: $0/mo, 25 invites
// Essentials: $29/mo, 300 invites
// Start-Up: $99/mo, 1,500 invites
// Grow: $299/mo, 5,000 invites
// Plus: $499/mo, 10,000 invites
// Enterprise: custom pricing (>10,000 invites)
// Source: reviews.io/front/pricingplans
function calculateReviewsIoPrice(monthlyOrders) {
  // monthly orders ≈ monthly invites (one invite sent per fulfilled order)
  if (monthlyOrders <= 25) return { price: 0, name: "Free" }
  if (monthlyOrders <= 300) return { price: 29, name: "Essentials" }
  if (monthlyOrders <= 1500) return { price: 99, name: "Start-Up" }
  if (monthlyOrders <= 5000) return { price: 299, name: "Grow" }
  if (monthlyOrders <= 10000) return { price: 499, name: "Plus" }
  return { price: null, name: "Enterprise" }
}

const disclaimer = (
  <>
    Assumes 20% review conversion and a 3-year-old store to estimate monthly orders from your total review count. REVIEWS.io charges per review invite — one invite is sent per order. Verify current pricing at{' '}
    <a href="https://www.reviews.io/front/pricingplans" target="_blank" rel="noopener noreferrer" className="underline">reviews.io/front/pricingplans</a>.
  </>
)

export default function PricingCalculatorReviewsIO() {
  return (
    <PricingCalculator
      competitorName="REVIEWS.io"
      calculateCompetitorPrice={calculateReviewsIoPrice}
      disclaimer={disclaimer}
    />
  )
}
