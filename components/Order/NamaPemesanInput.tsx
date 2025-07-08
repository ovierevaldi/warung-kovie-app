import React from 'react'

const NamaPemesanInput = () => {
  return (
    <div className='flex flex-col justify-center'>
      <p className='text-primary text-center text-2xl mb-2'>Nama Pemesan</p>
      <input 
        type="text" 
        className='bg-primary w-md h-9 text-white text-center outline-0 border-secondary py-2 px-4 mx-auto'
      />
    </div>
  )
}

export default NamaPemesanInput