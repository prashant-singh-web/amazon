"use client";
import Image from "next/image";
import React from "react";
import { acc_data } from "../helper/Local_database/Data_list_1";
import Link from "next/link";

function Account_home_page() {
  return (
    <div className="w-[80%]  flex flex-col pb-10">
      <p className="text-3xl font-normal my-4 ">Your Account</p>
      <div className="w-full flex flex-col gap-y-5">
        <div className="w-full grid grid-cols-3 gap-5 pb-8 border-b border-gray-300">
          {acc_data.map((item: any, ind: number) => {
            return (
              <Link href={`${item.Acc_redirect}`} key={ind}>
                <div className="w-full flex flex-row border border-gray-300 p-2 py-2 rounded-md hover:bg-gray-200 cursor-pointer">
                  <Image
                    src={item.Acc_url}
                    alt="logo"
                    width={100}
                    height={100}
                    className="p-4"
                  />
                  <div className="flex flex-col">
                    <p className="text-xl">{item.Acc}</p>
                    <p className="text-sm text-gray-500">
                      {item.Acc_description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="w-full grid grid-cols-3 gap-5 pt-4 ">
          <ul className="w-full flex flex-col border text-sm border-gray-300 text-cyan-700 p-4 py-4  rounded-md ">
            <li className=" font-bold text-black text-lg pb-2 ">
              Digital content and devices
            </li>
            <li className="py-[0.12rem] hover:underline hover:text-orange-700 cursor-pointer w-fit">
              Apps and more
            </li>
            <li className="py-[0.12rem] hover:underline hover:text-orange-700 cursor-pointer w-fit">
              Content and devices
            </li>
            <li className="py-[0.12rem] hover:underline hover:text-orange-700 cursor-pointer w-fit">
              Digital gifts you<></>ve received
            </li>
          </ul>
          <ul className="w-full flex flex-col text-sm border border-gray-300 text-cyan-700 p-4 py-4 rounded-md ">
            <li className=" font-bold text-black text-lg pb-2 ">
              Email alerts, messages, and ads
            </li>
            <li className="py-[0.12rem] hover:underline hover:text-orange-700 cursor-pointer w-fit">
              Advertising preferences
            </li>
            <li className="py-[0.12rem] hover:underline hover:text-orange-700 cursor-pointer w-fit">
              Communication preferences
            </li>
            <li className="py-[0.12rem] hover:underline hover:text-orange-700 cursor-pointer w-fit">
              SMS alert preferences
            </li>
            <li className="py-[0.12rem] hover:underline hover:text-orange-700 cursor-pointer w-fit">
              Message center
            </li>
            <li className="py-[0.12rem] hover:underline hover:text-orange-700 cursor-pointer w-fit">
              Alexa shopping notifications
            </li>
            <li className="py-[0.12rem] hover:underline hover:text-orange-700 cursor-pointer w-fit">
              Deals Notifications
            </li>
          </ul>
          <ul className="w-full flex flex-col text-sm border border-gray-300 text-cyan-700 p-4 py-4 rounded-md ">
            <li className=" font-bold text-black text-lg pb-2 ">
              More ways to pay
            </li>
            <li className="py-[0.12rem] hover:underline hover:text-orange-700 cursor-pointer w-fit">
              Default Purchase Settings
            </li>
            <li className="py-[0.12rem] hover:underline hover:text-orange-700 cursor-pointer w-fit">
              Amazon Pay
            </li>
            <li className="py-[0.12rem] hover:underline hover:text-orange-700 cursor-pointer w-fit">
              Coupons
            </li>
          </ul>
          <ul className="w-full flex flex-col text-sm border border-gray-300 text-cyan-700 p-4 py-4 rounded-md ">
            <li className=" font-bold text-black text-lg pb-2 line-clamp-2 ">
              Ordering and shopping preferences
            </li>
            <li className="py-[0.12rem] hover:underline hover:text-orange-700 cursor-pointer w-fit">
              Leave packaging feedback
            </li>
            <li className="py-[0.12rem] hover:underline hover:text-orange-700 cursor-pointer w-fit">
              Lists
            </li>
            <li className="py-[0.12rem] hover:underline hover:text-orange-700 cursor-pointer w-fit">
              Manage saved IDs
            </li>
            <li className="py-[0.12rem] hover:underline hover:text-orange-700 cursor-pointer w-fit">
              Profile
            </li>
            <li className="py-[0.12rem] hover:underline hover:text-orange-700 cursor-pointer w-fit">
              Language settings
            </li>
          </ul>
          <ul className="w-full flex flex-col text-sm border border-gray-300 text-cyan-700 p-4 py-4 rounded-md ">
            <li className=" font-bold text-black text-lg pb-2 line-clamp-2 ">
              Other accounts
            </li>
            <li className="py-[0.12rem] hover:underline hover:text-orange-700 cursor-pointer w-fit">
              Account Linking
            </li>
            <li className="py-[0.12rem] hover:underline hover:text-orange-700 cursor-pointer w-fit">
              Seller account
            </li>
            <li className="py-[0.12rem] hover:underline hover:text-orange-700 cursor-pointer w-fit">
              Amazon Web Services
            </li>
            <li className="py-[0.12rem] hover:underline hover:text-orange-700 cursor-pointer w-fit">
              Login with Amazon
            </li>
          </ul>
          <ul className="w-full flex flex-col text-sm border border-gray-300 text-cyan-700 p-4 py-4 rounded-md ">
            <li className=" font-bold text-black text-lg pb-2 line-clamp-2 ">
              Shopping programs and rentals
            </li>
            <li className="py-[0.12rem] hover:underline hover:text-orange-700 cursor-pointer w-fit">
              Manage Your Profiles
            </li>
            <li className="py-[0.12rem] hover:underline hover:text-orange-700 cursor-pointer w-fit">
              Subscribe & Save
            </li>
            <li className="py-[0.12rem] hover:underline hover:text-orange-700 cursor-pointer w-fit">
              Shop the Kids Store by age
            </li>
          </ul>
          <ul className="w-full flex flex-col text-sm border border-gray-300 text-cyan-700 p-4 py-4 rounded-md ">
            <li className=" font-bold text-black text-lg pb-2 line-clamp-2 ">
              Subscriptions
            </li>
            <li className="py-[0.12rem] hover:underline hover:text-orange-700 cursor-pointer w-fit">
              Email
            </li>
            <li className="py-[0.12rem] hover:underline hover:text-orange-700 cursor-pointer w-fit">
              Memberships & Subscriptions
            </li>
          </ul>
          <ul className="w-full flex flex-col text-sm border border-gray-300 text-cyan-700 p-4 py-4 rounded-md ">
            <li className=" font-bold text-black text-lg pb-2 line-clamp-2 ">
              Data and Privacy
            </li>
            <li className="py-[0.12rem] hover:underline hover:text-orange-700 cursor-pointer w-fit">
              Request Your Information
            </li>
            <li className="py-[0.12rem] hover:underline hover:text-orange-700 cursor-pointer w-fit">
              Close Your Amazon Account
            </li>
            <li className="py-[0.12rem] hover:underline hover:text-orange-700 cursor-pointer w-fit">
              Privacy Notice
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Account_home_page;
