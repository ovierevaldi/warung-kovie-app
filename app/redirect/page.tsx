import BackButton from '@/components/Redirect/BackButton'
import CircleNumber from '@/components/Redirect/CircleNumber'
import React from 'react'

const page = () => {
  return (
    <div>
      <p className='text-center text-primary text-3xl mb-4'>Order Confirmed</p>
      <p className='text-center text-2xl mb-4'>Pesanan Anda Telah dikonfirmasi oleh kasir kami</p>
      
      <div className='flex flex-col items-center gap-y-8'>
        <p className='text-center text-2xl'><span className='text-primary'>Nama Pemesan</span>, nomor antrian</p>

        <CircleNumber 
          text='90'
        />

        <BackButton />
      </div>
    </div>
  )
}

export default page