"use client"
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

function Mobile_home_Slider() {
  const sliderRef: any = useRef();
  const handleSlider = (scrollValue: Number) => {
    sliderRef.current.scrollLeft += scrollValue;
  };
  const images = [
    "/server/nord_3lite/nord_3lite_bottom_1.jpg",
    "/server/nord_3lite/nord_3lite_bottom_2.jpg",
    "/server/nord_3lite/nord_3lite_bottom_3.jpg",
    "/server/nord_3lite/nord_3lite_bottom_4.jpg",
    "/server/nord_3lite/nord_3lite_bottom_5.jpg",
  ];

  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer); // Clean up on component unmount
  }, [length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="w-full flex flex-col px-4 py-2 bg-gray-300 overflow-hidden ">
      <div className="w-full p-5 bg-white flex flex-col relative group scroll-smooth ">
        <MdArrowBackIos
          onClick={prevSlide}
          className="absolute top-[50%] left-0 z-30 text-3xl w-[50px] h-[100px] shadow-[2px_2px_20px_gray] p-1 text-center"
        />
        {images.map((image, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <Image
                  src={image}
                  alt="image"
                  width={100}
                  height={100}
                  unoptimized
                  className="w-full h-[500px]"
                />
              )}
            </div>
          );
        })}
        <MdArrowForwardIos
          onClick={nextSlide}
          className="absolute top-[50%] right-0 z-30 text-3xl w-[50px] h-[100px] shadow-[2px_2px_20px_gray] p-1 text-center"
        />
        <div className="w-full flex flex-row justify-center py-1">
          {images.map((image, index) => (
            <input
              type="radio"
              checked={current === index}
              className="mr-2"
              readOnly
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="w-full   bg-white p-5 mt-5">
        <div className="w-full h-full bg-white flex flex-col">
          <p className="font-bold text-lg">
            Bestselling affordable smartphones
          </p>
          <div className="w-full relative group">
            <MdArrowForwardIos
              onClick={() => handleSlider(100)}
              className="absolute top-20 right-0 z-30 text-xl w-[50px] h-[100px] group-hover:block hidden bg-white/30 hover:bg-white shadow-[0px_0px_5px_gray] p-3 text-center"
            />
            <MdArrowBackIos
              onClick={() => handleSlider(-100)}
              className="absolute top-20 left-0 z-30 text-xl w-[50px] h-[100px] group-hover:block hidden bg-white/30 hover:bg-white shadow-[0px_0px_5px_gray] p-3 text-center"
            />
            <div
              className="w-full flex flex-row relative overflow-x-hidden scroll-smooth"
              ref={sliderRef}
            >
              <div className="flex flex-col p-2 px-4">
                <Image
                  src="/img/img_slider.jpg"
                  alt="jj"
                  width={100}
                  height={100}
                  className="h-[250px] min-w-[160px]"
                />
                <p className="text-center">Shop now</p>
              </div>
              <div className="flex flex-col p-2 ">
                <Image
                  src="/img/img_slider.jpg"
                  alt="jj"
                  width={100}
                  height={100}
                  className="h-[250px] min-w-[160px]"
                />
                <p className="text-center">Shop now</p>
              </div>
              <div className="flex flex-col p-2 ">
                <Image
                  src="/img/img_slider.jpg"
                  alt="jj"
                  width={100}
                  height={100}
                  className="h-[250px] min-w-[160px]"
                />
                <p className="text-center">Shop now</p>
              </div>
              <div className="flex flex-col p-2 ">
                <Image
                  src="/img/img_slider.jpg"
                  alt="jj"
                  width={100}
                  height={100}
                  className="h-[250px] min-w-[160px]"
                />
                <p className="text-center">Shop now</p>
              </div>
              <div className="flex flex-col p-2 ">
                <Image
                  src="/img/img_slider.jpg"
                  alt="jj"
                  width={100}
                  height={100}
                  className="h-[250px] min-w-[160px]"
                />
                <p className="text-center">Shop now</p>
              </div>
              <div className="flex flex-col p-2 ">
                <Image
                  src="/img/img_slider.jpg"
                  alt="jj"
                  width={100}
                  height={100}
                  className="h-[250px] min-w-[160px]"
                />
                <p className="text-center">Shop now</p>
              </div>
              <div className="flex flex-col p-2 ">
                <Image
                  src="/img/img_slider.jpg"
                  alt="jj"
                  width={100}
                  height={100}
                  className="h-[250px] min-w-[160px]"
                />
                <p className="text-center">Shop now</p>
              </div>
              <div className="flex flex-col p-2 ">
                <Image
                  src="/img/img_slider.jpg"
                  alt="jj"
                  width={100}
                  height={100}
                  className="h-[250px] min-w-[160px]"
                />
                <p className="text-center">Shop now</p>
              </div>
              <div className="flex flex-col p-2 ">
                <Image
                  src="/img/img_slider.jpg"
                  alt="jj"
                  width={100}
                  height={100}
                  className="h-[250px] min-w-[160px]"
                />
                <p className="text-center">Shop now</p>
              </div>
              <div className="flex flex-col p-2 ">
                <Image
                  src="/img/img_slider.jpg"
                  alt="jj"
                  width={100}
                  height={100}
                  className="h-[250px] min-w-[160px]"
                />
                <p className="text-center">Shop now</p>
              </div>
              <div className="flex flex-col p-2 ">
                <Image
                  src="/img/img_slider.jpg"
                  alt="jj"
                  width={100}
                  height={100}
                  className="h-[250px] min-w-[160px]"
                />
                <p className="text-center">Shop now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobile_home_Slider;
