import React from 'react'

type ProductCardButtonProp = {
  onBtnClicked: () => void
}

const ProductCardButton = (props: ProductCardButtonProp) => {
  return (
    <button 
      className='bg-secondary text-primary py-2 px-8 rounded-lg text-2xl hover:scale-110 duration-150 transition-all'
      onClick={props.onBtnClicked}
    >
      Add
    </button>
  )
}

export default ProductCardButton