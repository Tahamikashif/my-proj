import React from 'react'
import Image from 'next/image'
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
const AboutUs = () => {
  return (
    <div id='aboutus' className='w-[1360px] h-[895px] top-[4991px] pt-[112px] pr-[64px] pb-[112] pl-[64px] gap-[80px] bg-smoke'>
        <h1 className='text-[40px] font-medium flex justify-center items-center'>Our team</h1>
        <p className='flex justify-center items-center mt-[30px]'>Lorem ipsum dolar sit amet consectetur edipiscing elit</p>
        <div className='w-[1360px] h-[482px] gap-[96px]'>
            <div className='w-[1360px] h-[209px] gap-[48px]'>

                <div className='w-[394.67px] h-[209px] gap-[24px] hover:scale-105 transition-transform duration-500 ease-in-out '>
                    <Image className='ml-[80px] mt-[90px]' src="/Images/pic27.png" width={80} height={80} alt='pics' />
                    <p className='text-[18px] font-medium justify-center mt-[30px] items-center ml-[65px] '>James Nduku</p>
                    <p className='ml-[50px]'>Marketing cordinator</p>
                    <FaLinkedin className='w-[17px] h-[17px] ml-[70px] mt-[20px] '/>
                    <FaTwitter  className='w-[17px] h-[17px] ml-[100px] mt-[-16px] '/>
                    <FaDribbble   className='w-[17px] h-[17px] ml-[130px] mt-[-17px] '/>
                </div>

                
                <div className='w-[394.67px] h-[209px] gap-[24px] ml-[500px] mt-[-294px] hover:scale-105 transition-transform duration-500 ease-in-out '>
                    <Image className='ml-[95px] mt-[90px]' src="/Images/pic28.png" width={80} height={80} alt='pics' />
                    <p className='text-[18px] font-medium justify-center mt-[30px] items-center ml-[65px] '>Joseph Munyambu</p>
                    <p className='ml-[80px]'>Nursing Asistant</p>
                    <FaLinkedin className='w-[17px] h-[17px] ml-[100px] mt-[20px] '/>
                    <FaTwitter  className='w-[17px] h-[17px] ml-[130px] mt-[-16px] '/>
                    <FaDribbble   className='w-[17px] h-[17px] ml-[160px] mt-[-17px] '/>
                </div>




                <div className='w-[394.67px] h-[209px] gap-[24px] ml-[1000px] mt-[-294px] hover:scale-105 transition-transform duration-500 ease-in-out '>
                    <Image className='ml-[95px] mt-[90px]' src="/Images/pic29.png" width={80} height={80} alt='pics' />
                    <p className='text-[18px] font-medium justify-center mt-[30px] items-center ml-[65px] '>Joseph Ngumbau</p>
                    <p className='ml-[80px]'>Medical Assistant</p>
                    <FaLinkedin className='w-[17px] h-[17px] ml-[100px] mt-[20px] '/>
                    <FaTwitter  className='w-[17px] h-[17px] ml-[130px] mt-[-16px] '/>
                    <FaDribbble   className='w-[17px] h-[17px] ml-[160px] mt-[-17px] '/>
                </div>





                <div className='w-[394.67px] h-[209px] gap-[24px] ml-[-10px] hover:scale-105 transition-transform duration-500 ease-in-out '>
                    <Image className='ml-[90px] mt-[90px]' src="/Images/pic30.png" width={80} height={80} alt='pics' />
                    <p className='text-[18px] font-medium justify-center mt-[30px] items-center ml-[65px] '>Erick Kipkemboi</p>
                    <p className='ml-[76px]'>Web Designer</p>
                    <FaLinkedin className='w-[17px] h-[17px] ml-[90px] mt-[20px] '/>
                    <FaTwitter  className='w-[17px] h-[17px] ml-[120px] mt-[-16px] '/>
                    <FaDribbble   className='w-[17px] h-[17px] ml-[150px] mt-[-17px] '/>
                </div>





                <div className='w-[394.67px] h-[209px] gap-[24px] ml-[500px] mt-[-294px] hover:scale-105 transition-transform duration-500 ease-in-out '>
                    <Image className='ml-[95px] mt-[90px]' src="/Images/pic31.png" width={80} height={80} alt='pics' />
                    <p className='text-[18px] font-medium justify-center mt-[30px] items-center ml-[75px] '>Stephen Kerubo</p>
                    <p className='ml-[80px]'>President of Sales</p>
                    <FaLinkedin className='w-[17px] h-[17px] ml-[100px] mt-[20px] '/>
                    <FaTwitter  className='w-[17px] h-[17px] ml-[130px] mt-[-16px] '/>
                    <FaDribbble   className='w-[17px] h-[17px] ml-[160px] mt-[-17px] '/>
                </div>




                <div className='w-[394.67px] h-[209px] gap-[24px] ml-[1000px] mt-[-294px] hover:scale-105 transition-transform duration-500 ease-in-out '>
                    <Image className='ml-[95px] mt-[90px]' src="/Images/pic32.png" width={80} height={80} alt='pics' />
                    <p className='text-[18px] font-medium justify-center mt-[30px] items-center ml-[90px] '>John Leboo</p>
                    <p className='ml-[80px]'>Dog Trainer</p>
                    <FaLinkedin className='w-[17px] h-[17px] ml-[100px] mt-[20px] '/>
                    <FaTwitter  className='w-[17px] h-[17px] ml-[130px] mt-[-16px] '/>
                    <FaDribbble   className='w-[17px] h-[17px] ml-[160px] mt-[-17px] '/>
                </div>









            </div>

        </div>
    </div>
  )
}

export default AboutUs
