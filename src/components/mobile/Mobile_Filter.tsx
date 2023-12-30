"use client";
import { IoMdStarOutline } from "react-icons/io";
import { IoIosStar } from "react-icons/io";


function Mobile_Filter() {
  return (
    <div className="w-full border-gray-700 border-r flex flex-col p-4">
      
      <p className="text-sm font-bold">Category</p>
      <p> Electronics</p>
      <div>
        <p className="font-bold">Mobile Accessories</p>
        <ul className="ml-3 text-sm font-[400]">
          <li className="mb-1 hover:text-[#D38041] cursor-pointer w-fit">
            Mobile Accessories
          </li>
          <li className="mb-1 hover:text-[#D38041] cursor-pointer w-fit">
            Mobile Broadband Devices
          </li>
          <li className="mb-1 hover:text-[#D38041] cursor-pointer w-fit">
            SIM Cards
          </li>
          <li className="mb-1 hover:text-[#D38041] cursor-pointer w-fit">
            Smartphones & Basic Mobiles
          </li>
          <li className="mb-1 hover:text-[#D38041] cursor-pointer w-fit">
            Smartwatches
          </li>
        </ul>
      </div>
      <ul>
        <li className="font-bold text-sm first-letter:uppercase mt-1">
          made for Amazon Brands
        </li>
        <li className="text-sm py-1 mb-1">
          <input type="checkbox" className="p-2" name="h" id="" /> Made for
          Amazon
        </li>
        <li className="font-bold text-sm first-letter:uppercase mt-1">
          made for amazon prime
        </li>
        <li className="text-sm  capitalize py-1 mb-1">
          <input type="checkbox" name="h" id="" /> prime
        </li>
        <li className="font-bold text-sm first-letter:uppercase mt-1">
          deliveray day
        </li>
        <li className="text-sm  capitalize py-1 ">
          <input type="checkbox" name="h" id="" /> get it today
        </li>
        <li className="text-sm py-1 mb-1">
          <input type="checkbox" name="h" id="" /> Get it Tomarrow
        </li>
        <li className="font-bold text-sm first-letter:uppercase mt-1">
          Pay on Deliveray
        </li>
        <li className="text-sm  capitalize py-1 mb-1">
          <input type="checkbox" name="h" id="" /> edible for cod
        </li>
      </ul>
      <ul className="text-sm capitalize">
        <li className="font-bold">Brends</li>
        <li className=" flex items-center mt-4 hover:text-[#C45500] cursor-pointer">
          <p className="p-[0.4rem] hover:ring-[3px] ring-blue-600 hover:ring-inset border-gray-500 border-2 rounded-sm mr-2 "></p>{" "}
          realme
        </li>
        <li className="flex items-center mt-1 hover:text-[#C45500] cursor-pointer">
          <p className="p-[0.4rem] hover:ring-[3px] ring-blue-600 hover:ring-inset border-gray-500 border-2 rounded-sm mr-2"></p>{" "}
          apple
        </li>
        <li className="flex items-center mt-1 hover:text-[#C45500] cursor-pointer">
          <p className="p-[0.4rem] hover:ring-[3px] ring-blue-600 hover:ring-inset border-gray-500 border-2 rounded-sm mr-2"></p>{" "}
          fire-bolt
        </li>
        <li className="flex items-center mt-1 hover:text-[#C45500] cursor-pointer">
          <p className="p-[0.4rem] hover:ring-[3px] ring-blue-600 hover:ring-inset border-gray-500 border-2 rounded-sm mr-2"></p>{" "}
          oneplus
        </li>
        <li className="flex items-center mt-1 hover:text-[#C45500] cursor-pointer">
          <p className="p-[0.4rem] hover:ring-[3px] ring-blue-600 hover:ring-inset border-gray-500 border-2 rounded-sm mr-2"></p>{" "}
          xiaomi
        </li>
        <li className="flex items-center mt-1 hover:text-[#C45500] cursor-pointer">
          <p className="p-[0.4rem] hover:ring-[3px] ring-blue-600 hover:ring-inset border-gray-500 border-2 rounded-sm mr-2"></p>{" "}
          ambrane
        </li>
        <li className="flex items-center mt-1 hover:text-[#C45500] cursor-pointer">
          <p className="p-[0.4rem] hover:ring-[3px] ring-blue-600 hover:ring-inset border-gray-500 border-2 rounded-sm mr-2"></p>{" "}
          samsung
        </li>
      </ul>
      <ul className="text-sm capitalize mt-4">
        <li className="font-bold">Avg. Customer Review</li>
        <li className="text-xl flex text-[#C45500] mt-2">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
        </li>
        <li className="text-xl flex text-[#C45500]">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoMdStarOutline />
        </li>
        <li className="text-xl flex text-[#C45500]">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoMdStarOutline />
          <IoMdStarOutline />
        </li>
        <li className="text-xl flex text-[#C45500]">
          <IoIosStar />
          <IoIosStar />
          <IoMdStarOutline />
          <IoMdStarOutline />
          <IoMdStarOutline />
        </li>
        <li className="text-xl flex text-[#C45500]">
          <IoIosStar />
          <IoMdStarOutline />
          <IoMdStarOutline />
          <IoMdStarOutline />
          <IoMdStarOutline />
        </li>
      </ul>
      <ul className="text-sm capitalize mt-4">
        <li className="font-bold mt-1 ">New Arrivals</li>
        <li className="cursor-pointer w-fit hover:text-[#C45500]">Last 30 Days</li>
        <li className="cursor-pointer w-fit hover:text-[#C45500]">Last 90 Days</li>
      </ul>
      <ul className="text-sm capitalize mt-4">
        <li className="font-bold">Item Condition</li>
        <li className="mt-1 hover:text-[#C45500] w-fit cursor-pointer">New</li>
        <li className="mt-1 hover:text-[#C45500] w-fit cursor-pointer">Renewed</li>
        <li className="mt-1 hover:text-[#C45500] w-fit cursor-pointer">Used</li>
      </ul>
      <ul className="text-sm capitalize mt-4">
        <li className="font-bold">Price</li>
        <li className="mt-1 hover:text-[#C45500] w-fit cursor-pointer">Under ₹1,000</li>
        <li className="mt-1 hover:text-[#C45500] w-fit cursor-pointer">₹1,000 - ₹5,000</li>
        <li className="mt-1 hover:text-[#C45500] w-fit cursor-pointer">₹5,000 - ₹10,000</li>
        <li className="mt-1 hover:text-[#C45500] w-fit cursor-pointer">₹10,000 - ₹20,000</li>
        <li className="mt-1 hover:text-[#C45500] w-fit cursor-pointer">₹20,000 and more</li>
      </ul>
      <ul className="text-sm capitalize mt-4">
        <li className="font-bold">Deals & Discounts</li>
        <li className="mt-1 hover:text-[#C45500] w-fit cursor-pointer">All Discount</li>
        <li className="mt-1 hover:text-[#C45500] w-fit cursor-pointer">Today Deals</li>
      </ul>
      <ul className="text-sm capitalize mt-4">
        <li className="font-bold">Discount</li>
        <li className="mt-1 hover:text-[#C45500] w-fit cursor-pointer">10% off and More</li>
        <li className="mt-1 hover:text-[#C45500] w-fit cursor-pointer">25% off and More</li>
        <li className="mt-1 hover:text-[#C45500] w-fit cursor-pointer">35% off and More</li>
        <li className="mt-1 hover:text-[#C45500] w-fit cursor-pointer">50% off and More</li>
        <li className="mt-1 hover:text-[#C45500] w-fit cursor-pointer">60% off and More</li>
        <li className="mt-1 hover:text-[#C45500] w-fit cursor-pointer">70% off and More</li>
      </ul>
    </div>
  );
}

export default Mobile_Filter;
