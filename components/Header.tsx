import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='px-8 py-4 bg-primary'>
      <div className='flex justify-between items-center'>
        <Link className='text-5xl text-white' href={'/'}>Warung Kovie</Link>

        <div className='text-2xl space-x-4 text-white'>
          <Link href={'/'} className='hover:underline hover:text-3xl duration-150 transition-all'>Menu</Link>
          <Link href={'/order'} className='hover:underline hover:text-3xl duration-150 transition-all'>Pesanan Saya</Link>
        </div>
      </div>
    </div>
  )
}

export default Header