"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function Dropnav() {
  const [drop, setDrop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 30) {
        setDrop(false);
      } else {
        setDrop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={
        drop
          ? "w-full bg-[#232F3E] flex flex-row justify-between text-black"
          : "hidden"
      }
    >
      <ul className="ml-4 flex capitalize font-[500] h-full text-center items-center justify-center text-white text-sm">
        <li className="py-2 px-2 cursor-pointer border-transparent border hover:border-white">
          all
        </li>
        <li className="py-2 px-2 cursor-pointer border-transparent border hover:border-white">
          fresh
        </li>
        <li className="py-2 px-2 cursor-pointer border-transparent border hover:border-white">
          amazon minitv
        </li>
        <li className="py-2 px-2 cursor-pointer border-transparent border hover:border-white">
          sell
        </li>
        <li className="py-2 px-2 cursor-pointer border-transparent border hover:border-white">
          best sellers
        </li>
        <li className="py-2 px-2 cursor-pointer border-transparent border hover:border-white">
          today deals
        </li>
        <li className="py-2 px-2 cursor-pointer border-transparent border hover:border-white">
          <Link href="/mobile">mobiles</Link>
        </li>
        <li className="py-2 px-2 cursor-pointer border-transparent border hover:border-white">
          custmer service
        </li>
        <li className="py-2 px-2 cursor-pointer border-transparent border hover:border-white">
          eletronics
        </li>

        {/* Add other list items here */}
      </ul>
      <Image
        src="/img/reacher.jpg"
        alt="hiii"
        width={100}
        height={100}
        className="h-10 w-80"
      />
    </div>
  );
}

export default Dropnav;
