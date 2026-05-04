'use client'

import { useState } from 'react'

const OUR_TIERS = [
  { maxReviews: 100, price: 0, name: "Free" },
  { maxReviews: 10000, price: 20, name: "Basic" },
  { maxReviews: 100000, price: 60, name: "Pro" },
  { maxReviews: Infinity, price: 180, name: "Unlimited" },
]

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

export default function PricingCalculator({ competitorName, calculateCompetitorPrice, disclaimer, competitorCurrencySymbol = "$" }) {
  const [sliderValue, setSliderValue] = useState(reviewsToSlider(1000))

  const totalReviews = sliderToReviews(sliderValue)
  const estimatedMonthlyOrders = estimateMonthlyOrders(totalReviews)

  const ourTier = OUR_TIERS.find((tier) => totalReviews <= tier.maxReviews)
  const competitor = calculateCompetitorPrice(estimatedMonthlyOrders)

  // null price = Enterprise / custom pricing (treat as more expensive)
  const monthlySavings = competitor.price !== null ? competitor.price - ourTier.price : null
  const weAreCheaper = monthlySavings === null || monthlySavings > 0

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
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>100</span>
          <span>1k</span>
          <span>10k</span>
          <span>100k</span>
          <span>2M</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className={`rounded-2xl p-6 border-2 ${weAreCheaper ? "border-gray-900" : "border-gray-200"}`}>
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
          {monthlySavings === null && (
            <p className="mt-4 inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
              Flat pricing
            </p>
          )}
        </div>

        <div className={`rounded-2xl p-6 border-2 ${!weAreCheaper ? "border-gray-900" : "border-gray-200"}`}>
          <p className="text-sm font-semibold text-gray-500 mb-2">{competitorName}</p>
          {competitor.price !== null ? (
            <p className={`text-2xl sm:text-4xl font-bold ${!weAreCheaper ? "text-gray-900" : "text-gray-500"}`}>
              {competitorCurrencySymbol}{competitor.price.toFixed(2)}
              <span className="text-base font-normal">/mo</span>
            </p>
          ) : (
            <p className="text-2xl sm:text-4xl font-bold text-gray-500">Custom</p>
          )}
          <p className={`text-sm mt-1 ${!weAreCheaper ? "text-gray-500" : "text-gray-500"}`}>
            {competitor.name} plan · ~{estimatedMonthlyOrders.toLocaleString()} orders/mo
          </p>
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-4">{disclaimer}</p>
    </div>
  )
}
