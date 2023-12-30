"use client";
import { useGlobalContext } from "@/app/Context/store";
import Link from "next/link";
import React from "react";

function Nav_user_profile(data: any) {
  const { dropdown1, setDropdown1, setUserId }: any = useGlobalContext();
  const logout = async () => {
    await setUserId("");
  };
  return (
    <div
      className={
        !dropdown1
          ? " absolute top-[3.2rem] -right-8 bg-white rounded-md w-[500px] py-4 h-fit flex flex-col px-5  cursor-auto"
          : "hidden"
      }
      onMouseLeave={() => setDropdown1(true)}
    >
      <div className="absolute bg-white p-[0.37rem] -top-[0.45rem] right-10 rotate-45"></div>
      {data?.data[0]?.name ? (
        <div className="w-full flex flex-col justify-center items-center py-3 border-b ">
          <p className="text-lg font-semibold capitalize text-black">
            hello,{" "}
            <span className="text-xl font-bold">{data?.data[0]?.name}</span>{" "}
            <button
              onClick={logout}
              className="text-base capitalize bg-yellow-500 rounded-md p-1 px-3 border border-black"
            >
              Log out
            </button>
          </p>
        </div>
      ) : (
        <div className="w-full flex flex-col justify-center items-center py-3 border-b ">
          <Link href="/login">
            <button className="py-3 px-20 text-black rounded-lg shadow-xl bg-[#FFD814]">
              sign in
            </button>
          </Link>
          <p className="text-black text-xs py-1">
            New custmer ?{" "}
            <span className="text-blue-600 font-semibold">start here</span>
          </p>
        </div>
      )}
      <div className="grid grid-cols-2 text-black leading-normal text-xs capitalize p-2">
        <ul className="text-[13px]">
          <li className="font-bold text-lg">Your lists</li>
          <li className="py-1 cursor-pointer hover:underline w-fit hover:text-[#E9903A] font-semibold">
            create a wishlist
          </li>
          <li className="py-1 cursor-pointer hover:underline w-fit hover:text-[#E9903A] font-semibold">
            wish from any website
          </li>
          <li className="py-1 cursor-pointer hover:underline w-fit hover:text-[#E9903A] font-semibold">
            baby wishlists
          </li>
          <li className="py-1 cursor-pointer hover:underline w-fit hover:text-[#E9903A] font-semibold">
            discover your style
          </li>
          <li className="py-1 cursor-pointer hover:underline w-fit hover:text-[#E9903A] font-semibold">
            explore showroom
          </li>
        </ul>
        <ul className="border-l text-[13px] text-gray-800 pl-2">
          <Link href={`/account`}>
            <li className="font-bold text-lg ">your account</li>
          </Link>
          <li className="py-[0.8px] cursor-pointer  hover:underline w-fit hover:text-[#E9903A] font-semibold">
            <Link
              onClick={() => {
                setDropdown1(true);
              }}
              href={`/account`}
            >
              your account
            </Link>
          </li>
          <li className="py-[0.8px] cursor-pointer  hover:underline w-fit hover:text-[#E9903A] font-semibold">
            your order
          </li>
          <li className="py-[0.8px] cursor-pointer  hover:underline w-fit hover:text-[#E9903A] font-semibold">
            your wishlist
          </li>
          <li className="py-[0.8px] cursor-pointer  hover:underline w-fit hover:text-[#E9903A] font-semibold">
            Your Recommendations
          </li>
          <li className="py-[0.8px] cursor-pointer  hover:underline w-fit hover:text-[#E9903A] font-semibold">
            Your Payment Methods
          </li>
          <li className="py-[0.8px] cursor-pointer  hover:underline w-fit hover:text-[#E9903A] font-semibold">
            Your Prime Membership
          </li>
          <li className="py-[0.8px] cursor-pointer  hover:underline w-fit hover:text-[#E9903A] font-semibold">
            Your Prime Video
          </li>
          <li className="py-[0.8px] cursor-pointer  hover:underline w-fit hover:text-[#E9903A] font-semibold">
            Your Subscribe & Save Items
          </li>
          <li className="py-[0.8px] cursor-pointer  hover:underline w-fit hover:text-[#E9903A] font-semibold">
            Memberships & Subscriptions
          </li>
          <li className="py-[0.8px] cursor-pointer  hover:underline w-fit hover:text-[#E9903A] font-semibold">
            Your Seller Account
          </li>
          <li className="py-[0.8px] cursor-pointer  hover:underline w-fit hover:text-[#E9903A] font-semibold">
            Manage Your Content and Devices
          </li>
          <li className="py-[0.8px] cursor-pointer  hover:underline w-fit hover:text-[#E9903A] font-semibold">
            Your Free Amazon Business{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav_user_profile;
