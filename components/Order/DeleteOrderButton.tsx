import React from 'react'
import { HiXMark } from "react-icons/hi2";

type DeleteOrderButtonProps = {
  onBtnClicked: () => void
}

const DeleteOrderButton = (props: DeleteOrderButtonProps) => {
  return (
    <button 
      className='bg-white hover:bg-red-600 p-2 rounded-md border-red-600 border-1 text-red-600 hover:text-white flex justify-center'
      onClick={props.onBtnClicked}
    >
      <HiXMark  
        className='text-2xl  self-center'
      />
    </button>
  )
}

export default DeleteOrderButton