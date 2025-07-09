'use client'

import Link from 'next/link'
import React from 'react'
import NotificationBadge from './NotificationBadge'
import { useUserOrder } from '@/context/UserOrderContext'

const Header = () => {
  const { listOrder } = useUserOrder();

  function getTotalOrderAmount(){
    const amount = listOrder.reduce((total, order) => total + order.amount, 0)
    return amount;
  }


  return (
    <div className='px-8 py-4 bg-primary'>
      <div className='flex justify-between items-center'>
        <Link className='text-5xl text-white' href={'/'}>Warung Kovie</Link>

        <div className='text-2xl space-x-4 text-white flex'>
          <Link href={'/'} className='hover:underline hover:text-3xl duration-150 transition-all'>Menu</Link>
          <div className='relative'>
            <Link href={'/order'} className='hover:underline hover:text-3xl duration-150 transition-all'>Pesanan Saya</Link>
            <span className='absolute -right-1/6 -top-1/4'><NotificationBadge text={getTotalOrderAmount().toString()}/></span>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Header