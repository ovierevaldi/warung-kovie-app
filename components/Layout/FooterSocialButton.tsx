import Link from 'next/link';
import React from 'react'
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

type FooterSocialButtonProps = {
  type: 'instagram' | 'whatsapp' | 'email'
}

const FooterSocialButton = (props: FooterSocialButtonProps) => {

  const getIcon = () => {
    switch (props.type) {
      case 'instagram':
        return <FaInstagram className='text-white text-lg'/>
      case 'email':
        return <IoMailOutline className='text-white text-lg'/>
      case 'whatsapp':
        return <FaWhatsapp className='text-white text-lg'/>
      default:
        return <></>;
    }
  };

  return (
    <Link
      href={'/'}
      className='bg-primary rounded-full p-2 hover:scale-120 transition-all duration-150'
    >
     {getIcon()}
    </Link>
  )
}

export default FooterSocialButton