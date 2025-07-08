import Link from 'next/link'
import React from 'react'
import FooterSocialButton from './FooterSocialButton'

const Footer = () => {
  return (
    <div className='bg-secondary p-8 text-primary flex justify-between items-center'>
      <div>
        <div>Jl. Nusa Indah II No. 248 Kec. Malaka Jaya</div>
        <div>Duren Sawit, Jakarta Timur</div>
        <div>13460</div>
      </div>
      <div>
        <Link 
          className='text-2xl hover:underline'
          href={'/'}
        >
          Contact US
        </Link>

        <div className='flex gap-x-4 mt-4'>
          <FooterSocialButton type='instagram'/>
          <FooterSocialButton type='whatsapp'/>
          <FooterSocialButton type='email'/>
        </div>
      </div>
    </div>
  )
}

export default Footer