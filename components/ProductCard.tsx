import Image from 'next/image'
import React from 'react'
import noImageAvail from '@/public/images/No_image_available.svg.webp'
import ProductCardButton from './ProductCardButton'
import { ProductProp } from '@/types/product.type'
import { formatPrice } from '@/helpers/textFormatter'

type ProductCardProp = {
  product: ProductProp
}

const ProductCard = ({ product }: ProductCardProp) => {
  return (
    <div className='flex gap-x-1 mx-auto'>
      <div
        className='flex-[40%]'
      >
        <Image
          src={product.imageUrl || noImageAvail}
          alt='Product Image'
          className='rounded-l-xl'
          width={300}
          height={300}
        />
      </div>
      <div className='bg-primary p-8 flex-[60%] flex flex-col justify-between rounded-r-xl'>
        <p className='text-white text-4xl text-center'>{product.name} {product.id}</p>

        <p className='text-white text-lg'>{product.desc ?? '-'}</p>

        <div className='flex justify-between items-center'>
          <p className='text-white text-2xl'>Rp {formatPrice(product.price)}</p>
          <ProductCardButton />
        </div>
      </div>
    </div>
  )
}

export default ProductCard