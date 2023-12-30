"use client"
import React, { useState } from 'react'
import Mobile_Acc_page from './Mobile_Acc_page'

function Mobile_nav() {
  const [mobile, setMobile] = useState(false)
  return (
    <div className='w-full border-b-[1px] '>
        <ul className='w-full flex flex-row justify-between items-center  text-xs capitalize px-10'>
            <li className='text-base font-semibold text-gray-800'>electronise</li>
            <li className='border-b-2 py-2 cursor-pointer font-medium relative text-gray-800 border-transparent hover:border-[#FF9900] ' onMouseOver={()=>setMobile(true)}  >mobile&acc
            <div className={mobile ? "absolute w-[99vw] z-50 top-[2.3rem] left-[-10rem] h-[400px] bg-white  cursor-default border-y border-gray-400" : "hidden"} onMouseLeave={()=>setMobile(false)}>
              <Mobile_Acc_page />
              <div className="absolute -top-2 bg-white left-44 rotate-45  p-[0.45rem] border-gray-400 border-l border-t"></div>
              </div></li>
            <li className='border-b-2 cursor-pointer font-medium relative text-gray-800 border-transparent hover:border-[#FF9900]'>laptops&acc</li>
            <li className='border-b-2 cursor-pointer font-medium relative text-gray-800 border-transparent hover:border-[#FF9900]'>tv & home entertainment</li>
            <li className='border-b-2 cursor-pointer font-medium relative text-gray-800 border-transparent hover:border-[#FF9900]'>audio </li>
            <li className='border-b-2 cursor-pointer font-medium relative text-gray-800 border-transparent hover:border-[#FF9900]'>camera </li>
            <li className='border-b-2 cursor-pointer font-medium relative text-gray-800 border-transparent hover:border-[#FF9900]'>camputor periphils </li>
            <li className='border-b-2 cursor-pointer font-medium relative text-gray-800 border-transparent hover:border-[#FF9900]'>smart technology</li>
            <li className='border-b-2 cursor-pointer font-medium relative text-gray-800 border-transparent hover:border-[#FF9900]'>musical instruments</li>
            <li className='border-b-2 cursor-pointer font-medium relative text-gray-800 border-transparent hover:border-[#FF9900]'>office & stainonery</li>
        </ul>
    </div>
  )
}

export default Mobile_nav