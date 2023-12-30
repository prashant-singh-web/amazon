"use client";
import { useGlobalContext } from "@/app/Context/store";
import axios from "axios";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

function Edit_user_name() {
  const { setLoading }: any = useGlobalContext();
  const [name, setName] = useState("");
  const id = useSearchParams().get("id");

  const handleName = async (e: any) => {
    e.preventDefault();
    try {
      console.log(name);
      await setLoading(true);
      await axios
        .post(`/api/auth/update?id=${id}`, { name: name })
        .then((response) => {
          setLoading(false);
        });
    } catch (error) {}
  };
  return (
    <div className="w-[50%] flex flex-col ">
      <p className="flex items-center mt-5 text-orange-700 text-sm">
        <Link href="/account" className="text-cyan-600 mr-3">
          Your Account
        </Link>{" "}
        <>
          <FaArrowRight className="text-xs text-black mr-3" />{" "}
          <Link href="/account/edit_user" className="text-cyan-600 mr-3">
            login and security
          </Link>
          <FaArrowRight className="text-xs text-black mr-3" /> change your name
        </>
      </p>
      <p className="text-3xl font-normal my-4 ">Change your name</p>
      <div className="w-full border border-gray-300 rounded-md flex flex-col p-5 mb-10">
        <p className="text-sm text-black">
          If you want to change the name associated with your Amazon customer
          account, you may do so below. Be sure to click the{" "}
          <span className="font-semibold">Save Changes</span> button when you
          are done.
        </p>
        <form action="" method="post" onSubmit={handleName}>
          <label
            htmlFor="username"
            className="py-5 flex flex-col font-semibold text-sm"
          >
            {" "}
            New Name
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="new name"
              id="username"
              className="border-gray-300 w-[30%] border p-1 text-xs font-normal outline-none focus-within:ring-2 focus-within:ring-blue-300 focus-within:border-blue-700 my-2 rounded-sm"
            />
          </label>
          <button className="w-fit py-1 px-3 bg-yellow-400 shadow-md rounded-md">
            save changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default Edit_user_name;
