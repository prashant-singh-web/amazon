"use client";
import { useGlobalContext } from "@/app/Context/store";
import axios from "axios";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

function Edit_user_email() {
  const { setLoading }: any = useGlobalContext();
  const [email, setEmail] = useState("");
  const id = useSearchParams().get("id");

  const handleEmail = async (e: any) => {
    e.preventDefault();
    try {
      console.log(email);
      await setLoading(true);
      await axios
        .post(`/api/auth/update?id=${id}`, { email: email })
        .then((response) => (response ? setLoading(false) : ""));
    } catch (error) {
      console.log("error in email update", error);
    }
  };
  return (
    <div className="w-[30%] flex flex-col ">
      <p className="flex items-center mt-5 text-orange-700 text-sm">
        <Link href="/account" className="text-cyan-600 mr-3">
          Your Account
        </Link>{" "}
        <>
          <FaArrowRight className="text-xs text-black mr-3" />{" "}
          <Link href="/account/edit_user" className="text-cyan-600 mr-3">
            login and security
          </Link>
          <FaArrowRight className="text-xs text-black mr-3" /> change your email
        </>
      </p>
      <p className="text-2xl font-normal my-4 ">Change your Email Address</p>
      <div className="w-full border border-gray-300 rounded-md flex flex-col p-5 mb-10">
        <ul className="text-gray-800 text-sm my-3">
          <li>Current email address</li>
          <li>prashant@gmail.com</li>
        </ul>
        <p className="text-sm text-black">
          Enter the new email address you would like to associate with your
          account below. We will send a One Time Password (OTP) to that address.
        </p>
        <form onSubmit={handleEmail}>
          <label
            htmlFor="useremail"
            className="py-5 flex flex-col font-semibold text-sm"
          >
            {" "}
            New Email Address
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="new name"
              id="useremail"
              className="border-gray-300  border p-1 text-xs font-normal outline-none focus-within:ring-2 focus-within:ring-blue-300 focus-within:border-blue-700 my-2 rounded-sm"
            />
          </label>
          <button className=" py-1 px-3 bg-yellow-400 shadow-md rounded-md">
            save changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default Edit_user_email;
