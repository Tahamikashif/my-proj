import React from 'react'
import Image from 'next/image'
const Header1 = () => {
  return (
    <div className='w-[1360px] h-[72px] top-[170px] left-[100px] border bottom-[1px] pr-[64px] bg-back pl-[64px]'>
       <div className='w-[1152px] h-[44px] justify-center '>
          <Image className='pt-[27px] pb-[27px] gap-[10.5px]' src="/Images/pic_2.png" alt='pics' width={130.6} height={41}/>
        <div className='w-[910px] h-[44px] gap-[32px] bg-whitness hover:border-2 ml-[240px] mt-[-70px] flex justify-center items-center'>
         <ul className='flex justify-center items-center gap-[32px]  '>
            <li><a href='#home'>Home</a></li>
            <li><a href='#courses1'>Courses</a></li>
            <li><a href='#services'>Services</a></li>
            <li><a href='#achivements'>Achivement</a></li>
            <li><a href='#aboutus'>About Us</a></li>
            <li><a href='#testimonials'>Testimonial</a></li>
         
            <div className='w-[80px] h-[40px] border-blackness rounded-[5px] border-[1px] text-black pt-[8px] pr-[20px] pb-[8px] pl-[20px] gap-[8px]'>Login</div>
            <div className='w-[95px] h-[40px] border-[1px] bg-blackness text-white pt-[8px] pb-[8px] pr-[20px] pl-[20px] rounded-[5px]'>SignUp</div>
         </ul>

         


        </div>
        

       </div>
    </div>

 







  )
}

export default Header1
