"use client"
import React from 'react'
import Mobile_home_Slider from './Mobile_home_Slider'
import Image from 'next/image'
import Budget_Mobile_page from './Budget_Mobile_page'
import Top_mobile_page from './Top_mobile_page'

function Mobile_Home_details(sendData:any) {
  
  return (
    <div className='w-full  flex flex-col items-center'>
      <div className=" my-8 w-full flex px-3">
        <p className='text-3xl px-4 py-5 hover:underline cursor-pointer font-semibold relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[0.12rem] before:bg-cyan-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-[#E77600] after:-z-10'>Smartphones</p>
        <p className='text-3xl px-4 py-5 hover:underline cursor-pointer'>Accessories</p>
        <p className='text-3xl px-4 py-5 hover:underline cursor-pointer'>Nord 2</p>
      </div>
      <Mobile_home_Slider/>
      <Budget_Mobile_page/>
      <Top_mobile_page data={sendData}/>
      <Image src="/img/NXS_Narzo-Series_Amazon-Banner.jpg" alt='hi' width={100} height={100} unoptimized className='w-full h-[370px] border-b-2 border-gray-300 ' />
      <Image src="/img/Mob_Hero_1242x450.jpg" alt='hi' width={100} height={100} unoptimized className='w-full h-[370px] border-b-2 border-gray-300 ' />
      <Image src="/img/D95535514_WLD_5Grevamp_September2023_1242x450.jpg" alt='hi' width={100} height={100} unoptimized className='w-full h-[370px] mt-4 border-b-2 border-gray-300 '/>
      <Image src="/img/topbanner_A.jpg" alt='hi' width={100} height={100} unoptimized className='w-full h-[370px] mt-4 border-b-2 border-gray-300 '/>
      <Image src="/img/D63763732_INWLD-Survey_1242x450.gif" alt='hi' width={100} height={100} unoptimized className='w-full h-[370px] mt-4 border-b-2 border-gray-300 '/>
    </div>
  )
}

export default Mobile_Home_details