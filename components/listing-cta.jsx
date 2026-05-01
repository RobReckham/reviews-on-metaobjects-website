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
        <h2 className="font-bold">Free setup. Custom design. Zero risk.</h2>
        <p>We're opening early access to a handful of stores - and we're doing the heavy lifting for you.</p>
        <p>1. Our developer sets everything up, free of charge</p>
        <p>2. Custom design? We'll build it to match your brand</p>
        <p>3. Doesn't work out? We revert everything. No lock-in</p>
        <p>In return, we ask for honest feedback. That's it.</p>
        <p>Spots are limited - let's talk.</p>
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
              <p className="text-sm text-gray-500">Lead Developer</p>
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
