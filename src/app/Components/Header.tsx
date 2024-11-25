import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    
        <div className='w-[1360px] h-[54px] bg-back top-100px left-100px pr-[64px] pl-[62px]'>
         <div className='w-[1,154px] h-[54px] pt-[12px] pb-[12px] gap-32px bg-back'>
          <div className='w-[420px] h-[30px] gap-16px' >
           <p> Phone Number: 956 742 455 678   |  Email:info@ddsgnr.com </p>
           
           
           
    
          </div>
         </div>
         <FaFacebookF className='ml-[1095px] mt-[-35px] gap-[12px]' />
         <FaInstagram  className='ml-[1120px] mt-[-15px] gap-[12px]'/>
         <FaTwitter className='ml-[1150px] mt-[-16px] gap-[12px]'/>
         <FaLinkedin  className='ml-[1177px] mt-[-17px] gap-[12px]'/>
        </div>
    
  )
}

export default Header
