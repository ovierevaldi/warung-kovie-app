import BigButton from '@/components/BigButton'
import NamaPemesanInput from '@/components/Order/NamaPemesanInput'
import OrderAmount from '@/components/Order/OrderAmount'
import React from 'react'

const page = () => {
  return (
    <div className='space-y-12 min-h-[600px]'>
      <p className='text-3xl text-center text-primary'>List Order</p>
      
      <div>
        <div className='grid grid-cols-3 items-center gap-y-3 text-center mb-6'>
          <OrderAmount position='center'/>
          <p className='text-2xl text-primary'>Price</p>
          <p className='text-2xl text-primary'>Product Name</p>

          <OrderAmount position='center' />
          <p className='text-2xl text-primary'>Price</p>
          <p className='text-2xl text-primary'>Product Name</p>
        </div>

        <hr />
      </div>

      <div className='grid grid-cols-3 items-center gap-y-3 text-center'>
        <p></p>
        <p className='text-2xl text-primary font-bold'>Total</p>
        <p className='text-2xl text-primary font-bold'>Total Amount</p>
      </div>
      
      <NamaPemesanInput />

      <div className='text-center'>
        <BigButton text='Bayar'/>
      </div>
    </div>
  )
}

export default page