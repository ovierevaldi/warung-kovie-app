import React from 'react'

type CircleNumberProps = {
  text: string
}


const CircleNumber = (props: CircleNumberProps) => {
  return (
    <div className='bg-primary rounded-full flex justify-center w-24 p-4'>
      <div className='text-white text-6xl'>{props.text}</div>
    </div>
  )
}

export default CircleNumber