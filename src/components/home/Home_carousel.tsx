"use client";

import React, { useRef, useEffect, useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import Image from 'next/image';
import Home_box1 from './Home_box1';

function Home_carousel() {
  const [windowWidth, setWindowWidth] = useState(0);

  const scrollRef:any = useRef();
  const images = ["/img/home_1.jpg", "/img/home_1.jpg", "/img/home_1.jpg", "/img/home_1.jpg", "/img/home_1.jpg"];
  let imageIndex = 0;

  const scrollleft = () => {
    imageIndex = (imageIndex - 1 + images.length) % images.length;
    scrollRef.current.scrollLeft += (-windowWidth + 20);
    if (imageIndex === images.length - 1) {
      scrollRef.current.scrollLeft = windowWidth * (images.length - 1);
    }
  };
  const scrollright = () => {
    imageIndex = (imageIndex + 1) % images.length;
    scrollRef.current.scrollLeft += (windowWidth - 20 );
    
    if (imageIndex === 0) {
      scrollRef.current.scrollLeft = 0;
      
    }
  };

  // Add useEffect to create a timer for auto-scrollingn
  useEffect(() => {
    const handleResize = () => {
      // Set the state to the new window width
      setWindowWidth(window.innerWidth);
    };
  
    // Attach the event listener
    window.addEventListener("resize", handleResize);
  
    // Call the handleResize function to set the initial state
    handleResize();
  
    // Return a cleanup function to remove the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <div className='w-full h-[1000px] relative '>
      <div className="w-full flex h-fit flex-col  relative ">
        <AiOutlineLeft onClick={scrollleft} className="absolute top-20 left-3 z-[40] text-black text-5xl cursor-pointer" />
        <AiOutlineRight onClick={scrollright} className="absolute top-20 right-3 z-[40] text-black text-5xl cursor-pointer" />
        <div ref={scrollRef} className="w-full flex flex-row overflow-x-hidden relative scroll-smooth ">
          {images.map((img, index) => (
           <Image key={index} src={img} alt='homr' width={windowWidth} height={1000} priority unoptimized className='w-full m-0 p-0' />

          ))}
        </div>
        <div className="w-full absolute top-72 backdrop-blur-lg left-0">
        <Home_box1 />
        </div>
      </div>
    </div>
  )
}

export default Home_carousel;

