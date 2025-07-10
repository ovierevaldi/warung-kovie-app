'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

type BigButtonProps = {
  text: string
  isDisabled?: boolean
  onBtnClicked: () => void
}

const BigButton = ({ text, isDisabled = false, onBtnClicked}: BigButtonProps) => {
  const router = useRouter();

  return (
    <button
      disabled={isDisabled}
      className='w-56 bg-primary text-white h-18 disabled:bg-secondary disabled:text-gray-400'
      onClick={() => router.push('/redirect')}
    >
      <span className='text-2xl'>{text}</span>
    </button>
  )
}

export default BigButton