'use client'

import React from 'react'

type BigButtonProps = {
  text: string
  isDisabled?: boolean
  onBtnClicked: () => void
}

const BigButton = ({ text, isDisabled = false, onBtnClicked}: BigButtonProps) => {

  return (
    <button
      disabled={isDisabled}
      className='w-56 bg-primary text-white h-18 disabled:bg-secondary disabled:text-gray-400'
      onClick={onBtnClicked}
    >
      <span className='text-2xl'>{text}</span>
    </button>
  )
}

export default BigButton