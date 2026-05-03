'use client'

import { useEffect } from 'react'

export default function Modal({ isOpen, onClose, children, className = '' }) {
  useEffect(() => {
    isOpen && document.body.classList.add('modal-open')
    !isOpen && document.body.classList.remove('modal-open')
  }, [isOpen])
  return <>
    <div className={`fixed z-20 inset-0 bg-black opacity-80 ${isOpen ? 'block' : 'hidden'}`} onClick={onClose}></div>
    <div className={`fixed z-20 inset-0 flex justify-center items-center p-4 pointer-events-none ${isOpen ? 'block' : 'hidden'}`}>
      <div className={`bg-white p-8 rounded-lg w-full max-w-xl pointer-events-auto relative text-left overflow-y-auto text-base font-normal tracking-normal max-h-[90vh] ${className}`}>
        {children}
        <button className="absolute top-8 right-8 text-gray-500 hover:text-gray-900 cursor-pointer text-left" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
        </button>
      </div>
    </div>
  </>
}
