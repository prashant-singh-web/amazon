"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { useGlobalContext } from "../Context/store";

const Signup = () => {
  const { setUserId, user, setLoading }: any = useGlobalContext();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const nav = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      name,
      password,
    };

    try {
      await setLoading(true);
      const response = await axios.post("/api/auth/login", data);
      console.log(response.status);
      if (response.status === 200) {
        setUserId(response.data.user._id);
        setLoading(false);

        nav.push("/");
      }
    } catch (error: any) {
      console.error(error.response.data.userfound);
      return setErr(error.response.data.userfound);
    }
  };
  console.log(user);
  // const getData = async () => {
  //   try {
  //     // Send a GET request to the '/api/item' endpoint
  //     const response = await axios.get('/api/item');

  //     // If the request is successful, log the response data
  //     console.log(response.data);
  //   } catch (error) {
  //     // If there's an error, catch it and log it
  //     console.log(error);
  //   }
  // }

  return (
    <section className="w-full h-[100vh] flex flex-col  items-center ">
      <div className="w-full h-fit flex flex-col justify-center items-center py-8 shadow-[0px_2px_5px_gray] ">
        <div className="w-[30%] flex flex-col justify-center  ">
          <p>amezon</p>
          <div className="flex flex-col rounded-lg border-gray-400 border-[1px] p-6">
            <p className="text-2xl font-semibold mb-5">Sign in</p>
            <form action="" method="post" onSubmit={handleSubmit}>
              <label
                htmlFor="login"
                className="flex flex-col text-base font-semibold "
              >
                Email or phone mobile number
                <input
                  type="text"
                  id="login"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="border-black border p-1 text-xs font-normal outline-none focus-within:ring-2 focus-within:ring-blue-300 focus-within:border-blue-700 my-2 rounded-sm"
                />
              </label>
              <label
                htmlFor="pwd"
                className="flex flex-col text-base font-semibold "
              >
                Password
                <input
                  type="password"
                  id="pwd"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="border-black border p-1 text-xs font-normal outline-none focus-within:ring-2 focus-within:ring-blue-300 focus-within:border-blue-700 my-2 rounded-sm"
                />
              </label>
              <button
                type="submit"
                className="w-full bg-yellow-300 py-1 rounded-md"
              >
                Continue
              </button>
            </form>
            <p className="line line-clamp-2 mt-4 text-xs font-semibold">
              By continuing, you agree to Amazon<>&#39;</>s{" "}
              <span className="text-blue-600">Conditions of Use</span> and{" "}
              <span className="text-blue-600">Privacy Notice.</span>
            </p>
            <p className="border-b-[0.5px] border-gray-300 py-6 flex items-center text-sm text-blue-600">
              <FaArrowRight className="text-black mr-2" />
              Need help ?
            </p>
            <p className="text-sm mt-3 font-bold">Buying for work ?</p>
            <p className="text-sm text-blue-600 capitalize">
              shop on amezon buss
            </p>
          </div>
        </div>
        <div className="w-[30%] border-gray-400 border-[0.5px] mt-5 re relative">
          <p className="a absolute -top-4 bg-white px-1 left-[30%] text-black">
            new to amazon ?
          </p>
        </div>
        <button className="w-[30%] mt-4 py-1 rounded-md border text-base text-center shadow-[0px_2px_5px_gray]">
          <Link href="/signup">Create your Amazon account</Link>
        </button>
      </div>
      <div className="flex flex-col justify-center mt-10">
        <ul className="flex flex-row mb-2">
          <li className="text-blue-600 mr-8">condition of use</li>
          <li className="text-blue-600 mr-8">privacy notice</li>
          <li className="text-blue-600 ">help</li>
        </ul>
        <p>
          copyright 1996-{new Date().getFullYear()} amezon.com inc or its
          affliates
        </p>
      </div>
    </section>
  );
};

export default Signup;
