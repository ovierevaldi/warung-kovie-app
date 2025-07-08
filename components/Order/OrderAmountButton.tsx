import React from 'react'
import { FaPlus, FaMinus } from "react-icons/fa6";

type OrderAmountButtonProps = {
  type: '+' | '-';
  onBtnClicked: () => void
}

const OrderAmountButton = (props: OrderAmountButtonProps) => {
  return (
    <button
      className='bg-primary text-white p-2 rounded-full'
      onClick={props.onBtnClicked}
    >
      {
        props.type === '+' ? <FaPlus /> : <FaMinus />
      }
    </button>
  )
}

export default OrderAmountButton