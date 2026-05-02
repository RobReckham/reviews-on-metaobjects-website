'use client'

import PricingCalculator from './pricing-calculator'

// Sources: loox.app/pricing + help.loox.io Scale plan article
// Beginner: $9.99/mo, up to 100 monthly orders
// Scale: $39.99/mo base (300 orders) + $40 per additional 300 orders, capped at $799.99/mo (6,000 orders)
// Unlimited: $299.99/mo, truly unlimited orders
// A rational merchant switches to Unlimited once Scale exceeds $299.99 (~2,100 orders)
function calculateLooxPrice(monthlyOrders) {
  if (monthlyOrders <= 100) {
    return { price: 9.99, name: "Beginner" }
  }
  const scaleBlocks = Math.ceil(Math.max(0, monthlyOrders - 300) / 300)
  const scalePrice = Math.min(39.99 + scaleBlocks * 40, 799.99)
  if (scalePrice >= 299.99) {
    return { price: 299.99, name: "Unlimited" }
  }
  return { price: scalePrice, name: "Scale" }
}

const disclaimer = (
  <>
    Assumes 20% review conversion and a 3-year-old store - both conservative estimates that favour Loox. Real-world conversion rates are typically 5–15%, meaning actual Loox costs are likely higher. Loox Scale: $39.99/mo base (300 orders) +$40/300 orders, capped at $799.99/mo (6,000 orders). Loox Unlimited: $299.99/mo flat. Verify current pricing at{' '}
    <a href="https://loox.app/pricing" target="_blank" rel="noopener noreferrer" className="underline">loox.app/pricing</a>.
  </>
)

export default function PricingCalculatorLoox() {
  return (
    <PricingCalculator
      competitorName="Loox"
      calculateCompetitorPrice={calculateLooxPrice}
      disclaimer={disclaimer}
    />
  )
}
