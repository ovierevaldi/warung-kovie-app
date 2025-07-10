import React from 'react'

type NamaPemesanInputProps = {
  onValueChanged: (val: string) => void
}

const NamaPemesanInput = ({ onValueChanged }: NamaPemesanInputProps) => {
  return (
    <div className='flex flex-col justify-center'>
      <p className='text-primary text-center text-2xl mb-2'>Nama Pemesan</p>
      <input 
        type="text" 
        className='bg-primary w-md h-9 text-white text-center outline-0 border-secondary py-2 px-4 mx-auto'
        onChange={(e) => onValueChanged(e.target.value)}
      />
    </div>
  )
}

export default NamaPemesanInput