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
      {
        id: "auto_translate",
        name: "Auto-translate",
        value: true,
      },
      {
        id: "continuous_sync",
        name: "Continuous sync",
        value: false,
      },
      {
        id: "white_labeling",
        name: "White-labeling (remove \u201cPowered by\u201d badge)",
        value: false,
      },
      {
        id: "liquid_code",
        name: "Liquid code for custom sections",
        value: false,
      },
    ],
  },
  {
    name: "Basic",
    price: 20,
    priceCurrency: "USD",
    description: "Up to 10,000 reviews",
    availability: "https://schema.org/InStock",
    yearlyPrice: 200,
    features: [
      {
        id: "max_reviews",
        name: "Max reviews",
        value: 10000,
      },
      {
        id: "auto_translate",
        name: "Auto-translate",
        value: true,
      },
      {
        id: "continuous_sync",
        name: "Continuous sync",
        value: true,
      },
      {
        id: "white_labeling",
        name: "White-labeling (remove \u201cPowered by\u201d badge)",
        value: true,
      },
      {
        id: "liquid_code",
        name: "Liquid code for custom sections",
        value: false,
      },
    ],
  },
  {
    name: "Pro",
    price: 60,
    priceCurrency: "USD",
    description: "Up to 100,000 reviews",
    availability: "https://schema.org/InStock",
    yearlyPrice: 600,
    features: [
      {
        id: "max_reviews",
        name: "Max reviews",
        value: 100000,
      },
      {
        id: "auto_translate",
        name: "Auto-translate",
        value: true,
      },
      {
        id: "continuous_sync",
        name: "Continuous sync",
        value: true,
      },
      {
        id: "white_labeling",
        name: "White-labeling (remove \u201cPowered by\u201d badge)",
        value: true,
      },
      {
        id: "liquid_code",
        name: "Liquid code for custom sections",
        value: true,
      },
    ],
  },
  {
    name: "Premium",
    price: 120,
    priceCurrency: "USD",
    description: "Unlimited reviews",
    availability: "https://schema.org/InStock",
    yearlyPrice: 1200,
    features: [
      {
        id: "max_reviews",
        name: "Max reviews",
        value: Infinity,
      },
      {
        id: "auto_translate",
        name: "Auto-translate",
        value: true,
      },
      {
        id: "continuous_sync",
        name: "Continuous sync",
        value: true,
      },
      {
        id: "white_labeling",
        name: "White-labeling (remove \u201cPowered by\u201d badge)",
        value: true,
      },
      {
        id: "liquid_code",
        name: "Liquid code for custom sections",
        value: true,
      },
    ],
  },
]