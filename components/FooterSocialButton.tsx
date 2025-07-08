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
    <div
      className='bg-primary rounded-full p-2'
    >
     {getIcon()}
    </div>
  )
}

export default FooterSocialButton