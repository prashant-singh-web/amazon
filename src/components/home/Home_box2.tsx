"use client";
import { ImageConfigContext } from "next/dist/shared/lib/image-config-context.shared-runtime";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

function Home_box2() {
  const [slide, setSlide] = useState(true)
const slidebox:any = useRef();

const rightSlide = () =>{
  const slider:any = document.querySelector('.slider');
  slider.scrollLeft += slidebox.current.clientWidth
 
 
}

const leftSlide = () =>{
  const slider:any = document.querySelector('.slider');
  slider.scrollLeft -= slidebox.current.clientWidth
 
}



  useEffect(() => {
    const slider:any = document.querySelector('.slider');
    const indicator:any = document.querySelector('.scroll-indicator');

    slider.addEventListener('scroll', () => {
      const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
      const percentageScrolled = (slider.scrollLeft / maxScrollLeft) * 100;
      indicator.style.width = percentageScrolled + '%';
    });
  }, []);
  return (
    <div className="w-full flex flex-col bg-white p-5">
      <div className="flex flex-row">
        <p className="text-xl font-bold capitalize">today deal</p>
        <p className="ml-4 text-cyan-700 text-xs align-bottom">see all deals</p>
      </div>
      <div className="py-5 w-full flex h-fit flex-col overflow-x-hidden  relative">
      <AiOutlineLeft onClick={leftSlide} className="w-10 font-bold h-24 bg-white rounded-sm absolute top-24 p-1 shadow-[2px_2px_4px_gray,-2px_0_4px_gray] hover:text-gray-800  left-0 z-[10] text-gray-300 text-sm cursor-pointer" />
          <AiOutlineRight onClick={rightSlide} className="w-10 font-bold h-24 bg-white rounded-sm absolute top-24 p-1 shadow-[2px_2px_4px_gray,-2px_0_4px_gray]  right-0 z-[10] hover:text-gray-800 text-gray-300 text-sm cursor-pointer" />
        <div className="slider w-full h-fit flex flex-row overflow-x-scroll py-3 scroll-smooth  relative gap-x-5">
          
          <div ref={slidebox} className="min-w-fit flex flex-col  text-xs capitalize ">
            <Image
              src="/img/box1.jpg"
              className="h-[200px] w-[250px] px-10 py-2 bg-gray-100"
              alt="hiii"
              width={100}
              height={100}
            />
            <p className="py-2 text-[#CC0C39] capitalize font-semibold">
              <span className="p-1 bg-[#CC0C39] text-white mr-2 rounded-sm">
                up to 65% off
              </span>
              Deal of the day
            </p>
            <p className="text-sm font-[450] line-clamp-1">branded suitcase</p>
          </div>
          <div className="min-w-fit flex flex-col  text-xs capitalize">
            <Image
              src="/img/box1.jpg"
              className="h-[200px] w-[250px] px-10 py-2 bg-gray-100"
              alt="hiii"
              width={100}
              height={100}
            />
            <p className="py-2 text-[#CC0C39] capitalize font-semibold">
              <span className="p-1 bg-[#CC0C39] text-white mr-2 rounded-sm">
                up to 65% off
              </span>
              Deal of the day
            </p>
            <p className="text-sm font-[450] line-clamp-1">branded suitcase</p>
          </div>
          <div className="min-w-fit flex flex-col  text-xs capitalize">
            <Image
              src="/img/box1.jpg"
              className="h-[200px] w-[250px] px-10 py-2 bg-gray-100"
              alt="hiii"
              width={100}
              height={100}
            />
            <p className="py-2 text-[#CC0C39] capitalize font-semibold">
              <span className="p-1 bg-[#CC0C39] text-white mr-2 rounded-sm">
                up to 65% off
              </span>
              Deal of the day
            </p>
            <p className="text-sm font-[450] line-clamp-1">branded suitcase</p>
          </div>
          <div className="min-w-fit flex flex-col  text-xs capitalize">
            <Image
              src="/img/box1.jpg"
              className="h-[200px] w-[250px] px-10 py-2 bg-gray-100"
              alt="hiii"
              width={100}
              height={100}
            />
            <p className="py-2 text-[#CC0C39] capitalize font-semibold">
              <span className="p-1 bg-[#CC0C39] text-white mr-2 rounded-sm">
                up to 65% off
              </span>
              Deal of the day
            </p>
            <p className="text-sm font-[450] line-clamp-1">branded suitcase</p>
          </div>
          <div className="min-w-fit flex flex-col  text-xs capitalize">
            <Image
              src="/img/box1.jpg"
              className="h-[200px] w-[250px] px-10 py-2 bg-gray-100"
              alt="hiii"
              width={100}
              height={100}
            />
            <p className="py-2 text-[#CC0C39] capitalize font-semibold">
              <span className="p-1 bg-[#CC0C39] text-white mr-2 rounded-sm">
                up to 65% off
              </span>
              Deal of the day
            </p>
            <p className="text-sm font-[450] line-clamp-1">branded suitcase</p>
          </div>
          <div className="min-w-fit flex flex-col  text-xs capitalize">
            <Image
              src="/img/box1.jpg"
              className="h-[200px] w-[250px] px-10 py-2 bg-gray-100"
              alt="hiii"
              width={100}
              height={100}
            />
            <p className="py-2 text-[#CC0C39] capitalize font-semibold">
              <span className="p-1 bg-[#CC0C39] text-white mr-2 rounded-sm">
                up to 65% off
              </span>
              Deal of the day
            </p>
            <p className="text-sm font-[450] line-clamp-1">branded suitcase</p>
          </div>
          <div className="min-w-fit flex flex-col  text-xs capitalize">
            <Image
              src="/img/box1.jpg"
              className="h-[200px] w-[250px] px-10 py-2 bg-gray-100"
              alt="hiii"
              width={100}
              height={100}
            />
            <p className="py-2 text-[#CC0C39] capitalize font-semibold">
              <span className="p-1 bg-[#CC0C39] text-white mr-2 rounded-sm">
                up to 65% off
              </span>
              Deal of the day
            </p>
            <p className="text-sm font-[450] line-clamp-1">branded suitcase</p>
          </div>
          <div className="min-w-fit flex flex-col  text-xs capitalize">
            <Image
              src="/img/box1.jpg"
              className="h-[200px] w-[250px] px-10 py-2 bg-gray-100"
              alt="hiii"
              width={100}
              height={100}
            />
            <p className="py-2 text-[#CC0C39] capitalize font-semibold">
              <span className="p-1 bg-[#CC0C39] text-white mr-2 rounded-sm">
                up to 65% off
              </span>
              Deal of the day
            </p>
            <p className="text-sm font-[450] line-clamp-1">branded suitcase</p>
          </div>
        </div>
        <div className="scroll-indicator bg-gray-500 py-1 rounded-lg" style={{width: '0%'}} ></div>

      </div>
    </div>
  );
}

export default Home_box2;
