import Image from 'next/image'
import React from 'react'
import testImage from '@/public/images/products/black-coffee.png'
import ProductCardButton from './ProductCardButton'

const ProductCard = () => {
  return (
    <div className='flex gap-x-1 mx-auto'>
      <div
        className='flex-[40%]'
      >
        <Image 
          src={testImage}
          alt='Product Image'
          className='rounded-l-xl'
        />
      </div>
      <div className='bg-primary p-8 flex-[60%] flex flex-col justify-between rounded-r-xl'>
        <p className='text-white text-4xl text-center'>Name</p>

        <p className='text-white text-2xl'>Description</p>

        <div className='flex justify-between items-center'>
          <p className='text-white text-2xl'>Price</p>
          <ProductCardButton />
        </div>
      </div>
    </div>
  )
}

export default ProductCard