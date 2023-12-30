"use client"
import Image from "next/image";
import React from "react";

function Product_Manu_page() {
  return (
    <div className="flex flex-col">
      <p className="text-2xl font-bold py-4">From the manufacturer</p>
      <Image src="/server/nord_3lite/nord_3lite_bottom_1.jpg" alt="hii" width={100} height={100} unoptimized className="w-full h-[500px]"/>
      <Image src="/server/nord_3lite/nord_3lite_bottom_2.jpg" alt="hii" width={100} height={100} unoptimized className="w-full h-[500px]"/>
      <Image src="/server/nord_3lite/nord_3lite_bottom_3.jpg" alt="hii" width={100} height={100} unoptimized className="w-full h-[500px]"/>
      <Image src="/server/nord_3lite/nord_3lite_bottom_4.jpg" alt="hii" width={100} height={100} unoptimized className="w-full h-[500px]"/>
      <Image src="/server/nord_3lite/nord_3lite_bottom_5.jpg" alt="hii" width={100} height={100} unoptimized className="w-full h-[500px]"/>
    </div>
  );
}

export default Product_Manu_page;
