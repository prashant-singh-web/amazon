"use client"
import React from "react";

function Reletive_product_info() {
  const specs = [
    {
      feature: "Camera Description",
      details: ["Front, Rear", "Rear, Front", "Rear, Front,", "hhhh"],
    },
    {
      feature: "Screen Size",
      details: ["6.72 inches", "6.74 inches", "6.74 inches"],
    },
    {
      feature: "Screen Size",
      details: ["6.72 inches", "6.74 inches", "6.74 inches"],
    },
    // ... Add other specifications here
  ];

  return (
    <div className="w-full">
      <table className="table-auto w-full border-collapse">
        <tbody className="text-base f font-sans border-b-[6px] border-gray-200">
          <tr className="w-full grid grid-cols-5 ">
            <td className="mr-2 bg-gray-100 border-t border-gray-300 p-3 ">
              Camera Description
            </td>
            <td className="bg-[#FCF9F8] p-3 ">Front, Rear</td>
            <td className=" p-3">Front, Rear</td>
            <td className="p-3 border-t border-gray-300 ">Front, Rear</td>
            <td className="p-3 border-t border-gray-300 ">Front, Rear</td>
          </tr>
          <tr className="w-full grid grid-cols-5 ">
            <td className="mr-2 p-3 bg-gray-100 border-t border-gray-300 ">
              Screen Size
            </td>
            <td className="bg-[#FCF9F8] p-3 border-t border-gray-300">6.72 inches</td>
            <td className="p-3 border-t border-gray-300">6.74 inches</td>
            <td className="p-3 border-t border-gray-300">6.74 inches</td>
            <td className="p-3 border-t border-gray-300">6.74 inches</td>
          </tr>
          <tr className="w-full grid grid-cols-5 ">
            <td className="mr-2 bg-gray-100 border-t border-gray-300 flex flex-col p-3">
              <p>Screen type</p>
              <p className="text-xs text-gray-500">
                Indicates the kind of technology used by the display to light-up
                the screen
              </p>
            </td>
            <td className="bg-[#FCF9F8] p-3 border-t border-gray-300 ">LCD</td>
            <td className=" p-3 border-t border-gray-300">LCD</td>
            <td className=" p-3 border-t border-gray-300">LCD</td>
            <td className=" p-3 border-t border-gray-300">LCD</td>
          </tr>
          <tr className="w-full grid grid-cols-5 ">
            <td className="mr-2 p-3 bg-gray-100 border-t border-gray-300 ">
            Battery Power (In mAH)
            </td>
            <td className="bg-[#FCF9F8] p-3 border-t border-gray-300">5000</td>
            <td className="p-3 border-t border-gray-300">5000</td>
            <td className="p-3 border-t border-gray-300">5000</td>
            <td className="p-3 border-t border-gray-300">5000</td>
          </tr>
          <tr className="w-full grid grid-cols-5 ">
            <td className="mr-2 bg-gray-100 border-t border-gray-300 flex flex-col p-3">
              <p>Ram</p>
              <p className="text-xs text-gray-500">
              RAM determines how smooth is the switching between apps & the overall speed of operation. Higher the better.
              </p>
            </td>
            <td className="bg-[#FCF9F8] p-3 border-t border-gray-300 ">8 GB</td>
            <td className=" p-3 border-t border-gray-300">8 GB</td>
            <td className=" p-3 border-t border-gray-300">8 GB</td>
            <td className=" p-3 border-t border-gray-300">8 GB</td>
          </tr>
          <tr className="w-full grid grid-cols-5 ">
            <td className="mr-2 p-3 bg-gray-100 border-t border-gray-300 ">
            Rom
            </td>
            <td className="bg-[#FCF9F8] p-3 border-t border-gray-300">128 GB</td>
            <td className="p-3 border-t border-gray-300">128 GB</td>
            <td className="p-3 border-t border-gray-300">256 GB</td>
            <td className="p-3 border-t border-gray-300">128 GB</td>
          </tr>
          <tr className="w-full grid grid-cols-5 ">
            <td className="mr-2 p-3 bg-gray-100 border-t border-gray-300 ">
            Processor Brand
            </td>
            <td className="bg-[#FCF9F8] p-3 border-t border-gray-300">Qualcomm</td>
            <td className="p-3 border-t border-gray-300">---</td>
            <td className="p-3 border-t border-gray-300">---</td>
            <td className="p-3 border-t border-gray-300">---</td>
          </tr>
          <tr className="w-full grid grid-cols-5 ">
            <td className="mr-2 bg-gray-100 border-t border-gray-300 flex flex-col p-3">
              <p>Operating System</p>
              <p className="text-xs text-gray-500">
              Main software that runs the phone. Defines the features offered by the phone
              </p>
            </td>
            <td className="bg-[#FCF9F8] p-3 border-t border-gray-300 ">OxygenOS</td>
            <td className=" p-3 border-t border-gray-300">MIUI 14, Android 13.0</td>
            <td className=" p-3 border-t border-gray-300">MIUI 14, Android 13.0</td>
            <td className=" p-3 border-t border-gray-300">MIUI 14, Android 13.0</td>
          </tr>
          <tr className="w-full grid grid-cols-5 ">
            <td className="mr-2 p-3 bg-gray-100 border-t border-gray-300 ">
            Item Weight
            </td>
            <td className="bg-[#FCF9F8] p-3 border-t border-gray-300">195.00 grams</td>
            <td className="p-3 border-t border-gray-300">196.00 grams</td>
            <td className="p-3 border-t border-gray-300">196.00 grams</td>
            <td className="p-3 border-t border-gray-300">196.00 grams</td>
          </tr>
          <tr className="w-full grid grid-cols-5 ">
            <td className="mr-2 p-3 bg-gray-100 border-t border-gray-300 ">
            Warranty Details
            </td>
            <td className="bg-[#FCF9F8] p-3 border-t border-gray-300">1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase</td>
            <td className="p-3 border-t border-gray-300">1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase</td>
            <td className="p-3 border-t border-gray-300">1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase</td>
            <td className="p-3 border-t border-gray-300">1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Reletive_product_info;
