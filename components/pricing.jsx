import plans from "../utils/plans"

export default function Pricing() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-left">
      {plans.map((plan) => {
        const maxReviews = plan.features.find((feature) => feature.id === "max_reviews")
        const booleanFeatures = plan.features.filter((feature) => typeof feature.value === "boolean")
        return <div key={plan.name} className="rounded-2xl border border-gray-200 flex flex-col">
          <div className="p-4">
            <p className="font-bold text-lg">{plan.name}</p>
            {maxReviews && <p className="text-sm text-gray-500 mt-1">{maxReviews.value === Infinity ? "Unlimited" : maxReviews.value.toLocaleString()} reviews max</p>}
          </div>
          <ul className="space-y-2 border-t border-b border-gray-100 p-4">
            {booleanFeatures.map((feature) => <li key={feature.id} className={`flex items-center gap-2 text-sm ${feature.value ? "" : "text-gray-500"}`}>
              {feature.value && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0 text-green-600">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
              </svg>}
              {!feature.value && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0">
                <path d="M6.75 9.25a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z" />
              </svg>}
              {feature.name}
            </li>)}
          </ul>
          <div className="p-4">
            <p className="text-3xl font-bold">
              ${plan.price}
              <span className="text-base font-normal text-gray-500">/mo</span>
            </p>
            {plan.yearlyPrice > 0 && <p className="text-sm text-gray-500 mt-0.5">or ${plan.yearlyPrice}/yr</p>}
          </div>
        </div>
      })}
    </div>
  )
}
