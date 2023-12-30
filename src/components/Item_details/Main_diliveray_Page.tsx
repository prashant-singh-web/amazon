"use client"
import Image from 'next/image'
import React, { useCallback, useRef } from 'react'
import { FaAngleRight } from 'react-icons/fa';
import { FaAngleLeft,  } from "react-icons/fa6";

function Main_diliveray_Page() {
    const scrollReff:any = useRef();
    const scrollHandle = useCallback((scroll:number) => {
        if (scrollReff.current) {
            scrollReff.current.scrollLeft += scroll;
        }
    }, []);

  return (
    <div
    >
        <div className="w-full my-4 relative border-b border-gray-400">
             <FaAngleLeft onClick={()=>scrollHandle(-100)} className="absolute top-8 text-lg p-1 w-6 h-6 rounded-md shadow-[0_0_3px_gray] bg-white left-0 z-10"/>
             <FaAngleRight onClick={()=>scrollHandle(100)} className="absolute top-8 text-lg p-1 w-6 h-6 rounded-md shadow-[0_0_3px_gray] bg-white right-0 z-10"/>
            <div className="overflow-x-hidden flex flex-row w-full  scroll-smooth" ref={scrollReff}>
            <div className="  min-w-[20px] p-3 flex flex-col items-center justify-center">
                    
                    </div>
                <div className="  min-w-[130px] p-3 flex flex-col items-center justify-center">
                    <Image src="/img/amezon/amazon_cash.png" alt="http" width={100} height={100} className='w-[40px] h-[40px]'/>
                    <p className='text-sm font-semibold text-cyan-700'>Cash on delivery</p>
                </div>
                <div className="  min-w-[130px] p-3 flex flex-col items-center justify-center">
                    <Image src="/img/amezon/amazon_cash.png" alt="http" width={100} height={100} className='w-[40px] h-[40px]'/>
                    <p className='text-sm font-semibold text-cyan-700'>Cash on delivery</p>
                </div>
                <div className="  min-w-[130px] p-3 flex flex-col items-center justify-center">
                    <Image src="/img/amezon/amazon_cash.png" alt="http" width={100} height={100} className='w-[40px] h-[40px]'/>
                    <p className='text-sm font-semibold text-cyan-700'>Cash on delivery</p>
                </div>
                <div className="  min-w-[130px] p-3 flex flex-col items-center justify-center">
                    <Image src="/img/amezon/amazon_cash.png" alt="http" width={100} height={100} className='w-[40px] h-[40px]'/>
                    <p className='text-sm font-semibold text-cyan-700'>Cash on delivery</p>
                </div>
                <div className="  min-w-[130px] p-3 flex flex-col items-center justify-center">
                    <Image src="/img/amezon/amazon_cash.png" alt="http" width={100} height={100} className='w-[40px] h-[40px]'/>
                    <p className='text-sm font-semibold text-cyan-700'>Cash on delivery</p>
                </div>
                <div className="  min-w-[130px] p-3 flex flex-col items-center justify-center">
                    <Image src="/img/amezon/amazon_cash.png" alt="http" width={100} height={100} className='w-[40px] h-[40px]'/>
                    <p className='text-sm font-semibold text-cyan-700'>Cash on delivery</p>
                </div>
                <div className="  min-w-[130px] p-3 flex flex-col items-center justify-center">
                    
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Main_diliveray_Page