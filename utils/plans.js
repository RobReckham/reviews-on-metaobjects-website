export const includedFeatures = [
  { id: "liquid_code", name: "Make reviews match your brand", value: true },
  { id: "ai_readability", name: "Reviews AI and search can read", value: true },
  { id: "review_collection", name: "Collect reviews with automatic emails", value: true },
  { id: "continuous_sync", name: "Keep your current review app in sync", value: true },
  { id: "auto_translate", name: "Translate reviews for global shoppers", value: true },
  { id: "purchase_signals", name: "Build trust with real purchase signals", value: true },
  { id: "data_ownership", name: "Keep your review data in Shopify", value: true },
  { id: "white_labeling", name: "Remove FiveOh branding", value: true },
  { id: "email_support", name: "Email support on every plan", value: true },
]

export default [
  {
    name: "Free",
    price: 0,
    priceCurrency: "USD",
    description: "Up to 100 reviews",
    availability: "https://schema.org/InStock",
    yearlyPrice: 0,
    features: [
      {
        id: "max_reviews",
        name: "Max reviews",
        value: 100,
      },
      ...includedFeatures,
    ],
  },
  {
    name: "Basic",
    price: 36,
    priceCurrency: "USD",
    description: "Up to 1,000 reviews",
    availability: "https://schema.org/InStock",
    yearlyPrice: 360,
    trialDays: 14,
    features: [
      {
        id: "max_reviews",
        name: "Max reviews",
        value: 1000,
      },
      ...includedFeatures,
    ],
  },
  {
    name: "Pro",
    price: 120,
    priceCurrency: "USD",
    description: "Up to 10,000 reviews",
    availability: "https://schema.org/InStock",
    yearlyPrice: 1200,
    trialDays: 14,
    features: [
      {
        id: "max_reviews",
        name: "Max reviews",
        value: 10000,
      },
      ...includedFeatures,
    ],
  },
  {
    name: "Scale",
    price: 240,
    priceCurrency: "USD",
    description: "Up to 50,000 reviews",
    availability: "https://schema.org/InStock",
    yearlyPrice: 2400,
    trialDays: 14,
    features: [
      {
        id: "max_reviews",
        name: "Max reviews",
        value: 50000,
      },
      ...includedFeatures,
    ],
  },
  {
    name: "Unlimited",
    price: 480,
    priceCurrency: "USD",
    description: "Unlimited reviews",
    availability: "https://schema.org/InStock",
    yearlyPrice: 4800,
    trialDays: 14,
    features: [
      {
        id: "max_reviews",
        name: "Max reviews",
        value: Infinity,
      },
      ...includedFeatures,
    ],
  },
]
