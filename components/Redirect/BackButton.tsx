'use client'

import { useRouter } from 'next/navigation';
import React from 'react'

const BackButton = () => {
  const router = useRouter();

  return (
    <button 
      className='bg-secondary px-10 py-3 hover:bg-primary duration-150 transition-colors hover:text-white text-primary text-2xl ease-in'
      onClick={() => router.push('/')}
    >
      Kembali
    </button>
  )
}

export default BackButton