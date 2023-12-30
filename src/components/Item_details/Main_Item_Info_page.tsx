"use client";
import Image from "next/image";
import React, { useState } from "react";

function Main_Item_Info_page(InfoData: any) {
 
  const [issize, setIssize] = useState(
    InfoData.InfoData.productVarientOption[0].varient
  );
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-row justify-between mt-4">
        <p className="text-xl font-bold">
          size:{" "}
          <span className="text-lg text-gray-500 font-semibold">{issize}</span>
        </p>
        <>/</>
      </div>
      <div className="flex flex-row mt-4 pb-3 text-base capitalize">
        {InfoData.InfoData.productVarientOption.map(
          (elem: any, ind: number) => {
            return (
              <div
                onMouseOver={() => {
                  setIssize(elem.varient);
                }}
                onClick={() => {
                  setIssize(elem.varient);
                }}
                key={ind}
                className="flex flex-col w-[30%] mr-4  border border-orange-600 rounded-md overflow-hidden leading-4 font-normal"
              >
                <p className="border-b border-gray-500 line-clamp-2 text-sm bg-orange-100 p-1">
                  {elem.varient}
                </p>
                <p className="p-2 ">{formatter.format(elem.price)}</p>
              </div>
            );
          }
        )}
      </div>
      <div className="border-b border-gray-400 mb-5 pb-5">
        <table>
          <tbody>
            <tr>
              <td className="font-semibold pr-3  w-[50px] ">Brand</td>
              <td className=" align-text-top w-[50px]">
                {InfoData.InfoData.productInfo[0].brand}
              </td>
            </tr>
            <tr>
              <td className="font-semibold pr-3  w-[50px] ">Model Name</td>
              <td className=" align-text-top w-[50px]">
                {InfoData.InfoData.productInfo[0].modal}
              </td>
            </tr>
            <tr>
              <td className="font-semibold pr-3  w-[50px] ">
                Network Service Provider
              </td>
              <td className=" align-text-top w-[50px]">
                {InfoData.InfoData.productInfo[0].network}
              </td>
            </tr>
            <tr>
              <td className="font-semibold pr-3  w-[50px] ">
                Operating System
              </td>
              <td className=" align-text-top w-[50px]">
                {InfoData.InfoData.productInfo[0].os}
              </td>
            </tr>
            <tr>
              <td className="font-semibold pr-3  w-[50px] ">
                Cellular Technology
              </td>
              <td className=" align-text-top w-[50px]">
                {InfoData.InfoData.productInfo[0].ct}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <ul className="text-sm text-black/80 font-medium">
        <li className=" font-semibold text-base text-black">About this item</li>
        {InfoData.InfoData.productInfo[0].description.map(
          (elem: any, ind: number) => {
            return (
              <li key={ind} className="list-disc">
                {elem}
              </li>
            );
          }
        )}

        <li className="text-cyan-600">› See more product details</li>
      </ul>
    </div>
  );
}

export default Main_Item_Info_page;
