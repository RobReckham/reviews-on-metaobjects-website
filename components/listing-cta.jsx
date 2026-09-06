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
        <h2 className="font-bold">Talk through your store. Optional setup if you want it.</h2>
        <p>Book a short call and we'll look at your current review setup and what you want it to do.</p>
        <p>1. We scope import, sync, configuration and theme-matched styling</p>
        <p>2. Custom design? We'll build it to match your brand</p>
        <p>3. Doesn't work out? We revert everything. No lock-in</p>
        <p>DIY is always an option - install, connect your source, drop in the app blocks.</p>
        <div className="flex justify-between gap-4 mt-4">
          <div className="flex items-center gap-2">
            <img
              src="https://s3.coders.fail/profile/marius-blank-512.jpg"
              alt={process.env.NEXT_PUBLIC_AUTHOR_NAME}
              className="h-16 w-16 rounded-full"
              width={64}
              height={64}
            />
            <div>
              <p className="font-bold">{process.env.NEXT_PUBLIC_AUTHOR_NAME}</p>
              <p className="text-sm text-gray-500">{process.env.NEXT_PUBLIC_AUTHOR_POSITION}</p>
            </div>
          </div>
          <div className="flex flex-col justify-end items-center gap-1">
            {false && <button onClick={() => setIsModalOpen(false)} className='btn btn-primary btn-inverted btn-sm'>Close</button>}
            <a href={`${process.env.NEXT_PUBLIC_CALENDLY_LINK}`} target="_blank" rel="noopener noreferrer" className='btn btn-primary btn-sm'>Schedule a call</a>
            <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`} className='underline text-sm'>...or send us an email</a>
          </div>
        </div>
      </div>
    </Modal>
  </>
}
