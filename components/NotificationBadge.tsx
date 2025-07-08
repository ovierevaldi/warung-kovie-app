import React from 'react'

type NotificationBadgeProp = {
  text: string
}

const NotificationBadge = (props: NotificationBadgeProp) => {
  return (
    <div className='bg-white text-center rounded-full w-8'>
      <span className='text-primary'>{props.text}</span>
    </div>
  )
}

export default NotificationBadge