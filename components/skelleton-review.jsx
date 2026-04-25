'use client'

function Stars({ className = 'w-6 h-6', value = 5 }) {
  return <div className="inline-flex items-center gap-1 relative">
    {Array.from({ length: 5 }).map((_, index) => <svg key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`${className} opacity-20`}>
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
    </svg>)}
    <div className="absolute inset-0 flex items-center gap-1">
      {Array.from({ length: value }).map((_, index) => <svg key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
      </svg>)}
    </div>
  </div>
}

export default function SkelletonReview({ index = 0 }) {
  const imageIndex = Math.floor(Math.random() * 11 * 2) + 1
  const imageSrc = imageIndex > 11 ? null : `https://assets.reviewsonmetaobjects.com/skelletons/product-${imageIndex}.jpg`

  const lineCount = Math.floor(Math.random() * 2) + 1
  const starsValue = Math.floor(Math.random() * 2) + 4

  const reviewIndex = Math.floor(Math.random() * 2)
  const verifiedBadge = Math.floor(Math.random() * 3)

  const baseClasses = 'self-end bg-white w-full hover:scale-110 transition-transform duration-300'

  const onClickReview = () => {
    const target = document.getElementById('more-info')
    target.scrollIntoView({ behavior: 'smooth' })
  }

  if (reviewIndex === 0) {
    return <button type="button" aria-label="View Example Review" onClick={onClickReview} className={`${baseClasses} p-4 flex gap-4 rounded-xl w-sm shadow-lg cursor-pointer`}>
      {imageSrc && <img src={imageSrc} alt="Dummy Product Image" className="w-32 h-32 object-cover bg-gray-200 rounded-lg" width="32" height="32" />}
      <div className="flex flex-col gap-2 w-full relative">
        <Stars value={starsValue} />
        <div className="flex flex-col gap-2 w-full relative">
          {Array.from({ length: lineCount }).map((_, index) => <div key={index} className="bg-gray-200 rounded-full h-4 w-full" style={{ width: `${Math.floor(Math.random() * 100)}%` }} />)}
        </div>
        {!!verifiedBadge && <span className="bg-green-600 text-white self-start rounded-full px-2 py-1 text-xs w-auto">Verified</span>}
      </div>
    </button>
  }

  return <button type="button" aria-label="View Example Review" onClick={onClickReview} className={`${baseClasses} p-4 flex flex-col justify-start gap-2 rounded-lg min-w-64 shadow-lg cursor-pointer`}>
    {imageSrc && <img src={imageSrc} alt="Dummy Product Image" className="w-full h-32 object-cover bg-gray-200 rounded-lg" width="32" height="32" />}
    <Stars value={starsValue} />
    <div className="flex flex-col gap-2 w-full relative">
      {Array.from({ length: lineCount }).map((_, index) => <div key={index} className="bg-gray-200 rounded-full h-4 w-full" style={{ width: `${Math.floor(Math.random() * 100)}%` }} />)}
    </div>
    {!!verifiedBadge && <span className="bg-green-600 text-white self-start rounded-full px-2 py-1 text-xs w-auto">Verified</span>}
  </button>
}