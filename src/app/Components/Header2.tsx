import React from 'react'
import Image from 'next/image'
const Header2 = () => {
  return (
    <div className='w-[1360px] h-[800px] bg-whitness top-[141px]'>
      <div className='w-[640px] h-[300px] bg-whitness  pr-[60px] pl-[80px] gap-[24px] flex mt-[190px] '>
        <div className='w-[500px] h-[212px] gap-[24px]'>
         <h1 className='text-[40px] font-bold'>Learn New Skills <br/> Online with ease</h1>
          <p className='mt-[40px]'>Discover a wind Range of courses a variety of subject,<br />taught by expert instructors</p>

         <div className=' w-[190px] h-[48px] rounded-[5px] hover:border-2  mt-[40px] border-[1px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] gap-[8px] border-blackness bg-blackness text-white'>Start Learning Now</div>
          <div className='w-[164px] h-[48px] rounded-[5px] hover:border-2 ml-[220px] mt-[-50px] border-[1px] pt-[12px] pr-[24px] pl-[24px] pb-[12px] gap-[8px] border-blackness'>Explore Courses</div>



        </div>
        


      </div>
      

     <div className='w-[640px] h-[800px] bg-blue-400 grid ml-[720px] mt-[-490px]'>
     <Image src="/Images/pic3.png" alt='pics' width={640} height={900} />
     </div>


    </div>
  )
}

export default Header2
