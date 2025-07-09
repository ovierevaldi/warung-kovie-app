import React from 'react'

type NotificationBadgeProps = {
  text: string
}

const NotificationBadge = (props: NotificationBadgeProps) => {
  return (
    <div className='bg-white text-center rounded-full w-8'>
      <span className='text-primary'>{props.text}</span>
    </div>
  )
}

export default NotificationBadge