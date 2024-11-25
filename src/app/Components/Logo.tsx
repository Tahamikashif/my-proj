import React from 'react'
import Image from 'next/image'
const Logo = () => {
  return (
    <div className='w-[1360px] h-[228px] bg-smoke mt-[-30px] left-[100px] top-[1038px] pt-[80px] pr-[64px] pb-[80px] pl-[64px] gap-[64px]'>
        <div className='w-[320px] h-[68px] text-blackness '>Trusted by 2000+ companies <br /> worldwide</div>
        <div className='w-[880px] h-[56px] pt-[8.74px] pb-[8.74px] gap-[19.12px]'>
          <div className='w-[123.8px] h-[38.52px] ml-[450px] mt-[-80px]'>  
           <Image src="/Images/pic4.png" width={123.8} height={38.52} alt='pics' />
           <Image className='ml-[150px] mt-[-68px]' src="/Images/pic5.png" width={123.8} height={38.52} alt='pics' />
           <Image className='ml-[287px] mt-[-70px]' src="/Images/pic6.png" width={123.8} height={38.52} alt='pics' />
           <Image className='ml-[440px] mt-[-70px]' src="/Images/pic7.png" width={123.8} height={38.52} alt='pics' />
           <Image className='ml-[580px] mt-[-70px]' src="/Images/pic8.png" width={123.8} height={38.52} alt='pics' />
           <Image className='ml-[710px] mt-[-70px]' src="/Images/pic9.png" width={123.8} height={38.52} alt='pics' />
          </div>
        </div>
    </div>
  )
}

export default Logo
