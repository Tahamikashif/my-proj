import React from 'react'
import Image from 'next/image'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='w-[1360px] h-[684px] top-[6824px] p-[80px] gap-[80px] bg-white'>
      <div className='w-[1120px] h-[524px] gap-[80px] bg-smoke ml-[50px]'>
        <div className='w-[1120px] h-[82px] justify-center '>
           <p className='font-semibold'>Subscribe to our newsletter</p> 
           <p>Lorem ipsum dolor sit amet,consectetur adipisicing elit</p> 
             <div className='w-[400px] h-[48px] gap-[16px]'>
                <div className='w-[265px] h-[48px] font-normal justify-between mt-[-47px] rounded-[5px] border-[1px] p-[12px] gap-[8px] bg-white border-blackness ml-[700px]'>

                Enter Your Email

                </div>
 
                <div className='w-[119px] h-[48px] font-semibold justify-between mt-[-47px] rounded-[5px] border-[1px] p-[12px] gap-[8px] bg-white border-blackness ml-[1000px] pt-[12px] pr-[24px] pb-[12px] pl-[24px]'>

 Subscribe

</div>

<p className=' ml-[700px] w-[390px] mt-[10px] text-[12px]'>By Subscribing you agree to with our  </p>
<p className='w-[70px] border-b-[2px] border-blackness text-[11px] ml-[900px] mt-[-20px]'>privacy policy</p>




   <div className='w-[1120px] h-[225px] gap-[40px]'>

<Image className='pt-[29px] pb-[29px] gap-[10.5px]' src="/Images/pic_2.png" width={130.6} height={40} alt='pics' />
  <div className='w-[250px] h-[225px] gap-[16px]'>

  <ul className='ml-[280px] mt-[-60px]'>
   <li className='font-semibold '>Courses</li>
   <li className='mt-[22px]'>Bussiness</li>
   <li className='mt-[15px]'>Development</li>
   <li className='mt-[15px]' >Technology</li>
   <li className='mt-[15px]'>Design</li>
   <li className='mt-[15px]'>Programming</li>





  </ul>


  <ul className='ml-[600px] mt-[-220px]'>
   <li className='font-semibold '>Resources</li>
   <li className='mt-[22px]'>Career</li>
   <li className='mt-[15px]'>Resume</li>
   <li className='mt-[15px]' >Learning</li>
   <li className='mt-[15px] w-[190px]'>Interview Preparation</li>
   <li className='mt-[15px]'>jobs</li>





  </ul>





  <ul className='ml-[900px] mt-[-220px]'>
   <li className='font-semibold w-[70px] '>About Us</li>
   <li className='mt-[22px]'>Contact</li>
   <li className='mt-[15px]'>Help/support</li>
   <li className='mt-[15px]' >FAQ</li>
   <li className='mt-[15px] w-[190px]'>Terms And Conditions</li>
   <li className='mt-[15px]'>Partners</li>





  </ul>


<div className='w-[1120px] h-[57px] mt-[140px] ml-[10px] '>
    <p>2024 Ddsgnr. All right reserved.</p>
    <p className='w-[70px] border-b-[2px] border-blackness text-[11px] ml-[250px] mt-[-21px]'>privacy policy</p>
    <p className='w-[85px] border-b-[2px] border-blackness text-[11px] ml-[360px] mt-[-19px]'>Terms of Service</p>
    <p className='w-[85px] border-b-[2px] border-blackness text-[11px] ml-[490px] mt-[-19px]'>Cookies Settings</p>

    <FaFacebookF className='ml-[950px] mt-[-18px]'/>
    <FaInstagram  className='ml-[980px] mt-[-16px]'/>
    <FaTwitter   className='ml-[1010px] mt-[-16px]'/>
    <FaLinkedin  className='ml-[1040px] mt-[-16px]'/>


</div>




  </div>


   </div>











             </div>
            
            </div> 
        
        </div>  
    </div>
  )
}

export default Footer
