'use client'

import { useState } from 'react'

// Our tiers based on total reviews stored
const OUR_TIERS = [
  { maxReviews: 100, price: 0, name: "Free" },
  { maxReviews: 10000, price: 20, name: "Basic" },
  { maxReviews: 100000, price: 60, name: "Pro" },
  { maxReviews: Infinity, price: 120, name: "Premium" },
]

// Loox pricing — sources: loox.app/pricing + help.loox.io Scale plan article
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

// Assuming 20 reviews per 100 orders and an average store age of 3 years (36 months):
// total_reviews = monthly_orders × 0.2 × 36  →  monthly_orders = total_reviews / 7.2
function estimateMonthlyOrders(totalReviews) {
  return Math.round(totalReviews / 7.2)
}

// Log scale slider: 0–100 maps to 100–2,000,000 reviews
const SLIDER_MIN = Math.log(100)
const SLIDER_MAX = Math.log(2000000)

function sliderToReviews(sliderValue) {
  return Math.round(Math.exp(SLIDER_MIN + (sliderValue / 100) * (SLIDER_MAX - SLIDER_MIN)))
}

function reviewsToSlider(reviews) {
  return Math.round(((Math.log(reviews) - SLIDER_MIN) / (SLIDER_MAX - SLIDER_MIN)) * 100)
}

export default function PricingCalculator() {
  const [sliderValue, setSliderValue] = useState(reviewsToSlider(1000))

  const totalReviews = sliderToReviews(sliderValue)
  const estimatedMonthlyOrders = estimateMonthlyOrders(totalReviews)

  const ourTier = OUR_TIERS.find((tier) => totalReviews <= tier.maxReviews)
  const loox = calculateLooxPrice(estimatedMonthlyOrders)
  const monthlySavings = loox.price - ourTier.price

  return (
    <div className="mt-12 text-left">
      <div className="mb-8">
        <div className="flex justify-between items-baseline mb-3">
          <p className="font-semibold text-gray-700">Reviews in your store</p>
          <p className="text-2xl font-bold text-gray-900">{totalReviews.toLocaleString()}</p>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          value={sliderValue}
          onChange={(e) => setSliderValue(Number(e.target.value))}
          className="w-full accent-gray-900 cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>100</span>
          <span>1k</span>
          <span>10k</span>
          <span>100k</span>
          <span>2M</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className={`rounded-2xl p-6 border-2 ${monthlySavings >= 0 ? "border-gray-900" : "border-gray-200"}`}>
          <p className="text-sm font-semibold text-gray-500 mb-2 text-ellipsis whitespace-nowrap max-w-full overflow-hidden">{process.env.NEXT_PUBLIC_APP_NAME}</p>
          <p className="text-2xl sm:text-4xl font-bold text-gray-900">
            ${ourTier.price}
            <span className="text-base font-normal text-gray-500">/mo</span>
          </p>
          <p className="text-sm text-gray-500 mt-1">{ourTier.name} plan</p>
          {monthlySavings > 0 && (
            <p className="mt-4 inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
              Save ${monthlySavings.toFixed(2)}/mo
            </p>
          )}
        </div>

        <div className={`rounded-2xl p-6 border-2 ${monthlySavings < 0 ? "border-gray-900" : "border-gray-200"}`}>
          <p className="text-sm font-semibold text-gray-400 mb-2">Loox</p>
          <p className={`text-2xl sm:text-4xl font-bold ${monthlySavings < 0 ? "text-gray-900" : "text-gray-400"}`}>
            ${loox.price.toFixed(2)}
            <span className="text-base font-normal">/mo</span>
          </p>
          <p className={`text-sm mt-1 ${monthlySavings < 0 ? "text-gray-500" : "text-gray-400"}`}>
            {loox.name} plan · ~{estimatedMonthlyOrders.toLocaleString()} orders/mo
          </p>
        </div>
      </div>

      <p className="text-xs text-gray-400 mt-4">
        Estimated at ~{estimatedMonthlyOrders.toLocaleString()} monthly orders, assuming 20% review conversion and a 3-year-old store — both conservative estimates that favour Loox. Real-world conversion rates are typically 5–15%, meaning actual Loox costs are likely higher. Loox Scale: $39.99/mo base (300 orders) +$40/300 orders, capped at $799.99/mo (6,000 orders). Loox Unlimited: $299.99/mo flat. Verify current pricing at <a href="https://loox.app/pricing" target="_blank" rel="noopener noreferrer" className="underline">loox.app/pricing</a>.
      </p>
    </div>
  )
}
