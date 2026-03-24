'use client'

import { useState } from 'react'
import Modal from './modal'

export default function ListingCta({ href, className, children }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  if (!!href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>
  }

  return <>
    <button className={className} type="button" onClick={() => setIsModalOpen(true)}>
      {children}
    </button>
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <div className="flex flex-col gap-2">
        <h2 className="font-bold">We have a limited offer for early birds</h2>
        <p>1. Our developer will set everything up for you free of charge.</p>
        <p>2. On top of that, you can use the app for free for 2 months and then decide if you want to continue using it.</p>
        <p>In exchange, we just want to learn how to use the app with many different stores and improve it in the process. Feedback would also be greatly appreciated to add features based on your needs.</p>
        <p>If this seems like a good deal, feel free to contact us.</p>
        <div className="flex justify-between gap-4 mt-4">
          <div className="flex items-center gap-2">
            <img
              src="https://s3.coders.fail/profile/marius-blank-512.jpg"
              alt="Marius"
              className="h-16 w-16 rounded-full"
              width={64}
              height={64}
            />
            <div>
              <p className="font-bold">Marius Korbmacher</p>
              <p className="text-sm text-gray-500">Developer at FiveOh</p>
            </div>
          </div>
          <div className="flex justify-end items-center gap-2">
            {false && <button onClick={() => setIsModalOpen(false)} className='btn btn-primary btn-inverted btn-sm'>Close</button>}
            <a href="mailto:marius@coders.fail" className='btn btn-primary btn-sm'>Send email</a>
          </div>
        </div>
      </div>
    </Modal>
  </>
}
