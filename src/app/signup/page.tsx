"use client"
import axios from 'axios';
import Link from 'next/link';
import React, { FormEvent, useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { useGlobalContext } from '../Context/store';
import { useRouter } from 'next/navigation';
interface Errors {
  name?: string;
  number?: string;
  email?: string;
  password?: string;
}

function Page() {
  const router = useRouter()
  const {setUser,user}:any = useGlobalContext()
  const [name, setName] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<Errors>({});
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    validateForm();
  }, [name, number, email, password]);

  const validateForm = () => {
    let errors: Errors = {};

    if (!name) {
      errors.name = '*Name is required.';
    }

    if (!number) {
      errors.number = '*Number is required.';
    }

    if (!email) {
      errors.email = '*Email is required.';}
    // } 
    // else if (!/\\S+@\\S+\\.\\S+/.test(email)) {
    //   errors.email = 'Email is invalid.';
    // }

    if (!password) {
      errors.password = '*Password is required.';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters.';
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (isFormValid) {
      const data = {
        name: name,
        number: number,
        email: email,
        password: password,
      };

      try {
        setLoading(true);
        const response = await axios.post('/api/auth/signup', data);
       console.log(response)
        if (response.status === 200) {
          setUser(response)
        setLoading(false)
        router.push("/login")
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log('Form has errors. Please correct them.');
    }
   
  };
  
  
  return (
    <section className="w-full h-[100vh] flex flex-col  items-center ">
    <div className="w-full h-fit flex flex-col justify-center items-center py-8 shadow-[0px_2px_5px_gray] ">
      <div className="w-[30%] flex flex-col justify-center  ">
        <p>{loading ? "loading":"amezon"}</p>
        <div className="flex flex-col rounded-lg border-gray-400 border-[1px] p-6 shadow-[0px_0px_10px_gray]">
          <p className="text-2xl font-semibold mb-5">Create Account</p>
          <form action="" method="post" onSubmit={handleSubmit}>
            <label
              htmlFor="name"
              className="flex flex-col text-base font-semibold mb-2"
            >
              Your Name
              <input
                type="text"
                id="name"
                onChange={(e)=>setName(e.target.value)}
                value={name}
                placeholder='First and last name'
                className="border-black border p-1 text-sm font-normal outline-none focus-within:ring-2 focus-within:ring-blue-300 focus-within:border-blue-700 mt-2 rounded-sm"
              />
              <p className='text-sm font-normal py-0 text-red-700'>{errors.name}</p>
            </label>
            <label
              htmlFor="number"
              className="flex flex-col text-base font-semibold mb-2"
            >
              mobile number
              <input
                type="text"
                id="number"
                onChange={e => setNumber(e.target.value)}
                value={number}
                placeholder='number'
                
                className="border-black border p-1 text-sm font-normal outline-none focus-within:ring-2 focus-within:ring-blue-300 focus-within:border-blue-700 mt-2 rounded-sm"
              />
              <p className='text-sm font-normal py-0 text-red-700'>{errors.number}</p>
            </label>
            <label
              htmlFor="email"
              className="flex flex-col text-base font-semibold mb-2 "
            >
              Email(optional)
              <input
                type="email"
                id="email"
                onChange={e=> setEmail(e.target.value)}
                value={email}
                placeholder='email(optional)'
                className="border-black border p-1 text-sm font-normal outline-none focus-within:ring-2 focus-within:ring-blue-300 focus-within:border-blue-700 mt-2 rounded-sm"
              />
              <p className='text-sm font-normal py-0 text-red-700'>{errors.email}</p>
            </label>
            <label
              htmlFor="pwd"
              className="flex flex-col text-base font-semibold mb-2"
            >
              Password
              <input
                type="password"
                id="pwd"
                onChange={e=> setPassword(e.target.value)}
                value={password}
                placeholder='Atleast 6 characters'
                className="border-black border p-1 text-sm font-normal outline-none focus-within:ring-2 focus-within:ring-blue-300 focus-within:border-blue-700 mt-2 rounded-sm"
              />
              <p className='text-sm font-normal py-0 text-red-700'>{errors.password}</p>
              <p className='text-sm font-medium py-0'>Passwords must be at least 6 characters.</p>
            </label>
            <p className='text-sm py-5'>To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.</p>
            <button
              type="submit"
              className="w-full bg-[#F7CA00] text-sm shadow-xl text-black py-1 rounded-md"
            >
             Signup
            </button>
          </form>
         
          <p className="border-b-[0.5px] border-gray-300 py-3 flex items-center text-sm text-blue-600">
            
          </p>
          <p className="text-sm mt-3 font-bold">Buying for work ?</p>
          <p className="text-xs font-semibold  text-blue-400 capitalize">
          Create a free business account
          </p>
          <p className='text-sm font-normal py-5 text-black/85'>Already have an account? <span className='text-blue-600'><Link href="/login">Sign in</Link></span></p>
          <p className="line line-clamp-2 mt-o text-xs font-normal">
          By creating an account or logging in, you agree to Amazon<>&#39;</>s{" "}
              <span className="text-blue-600">Conditions of Use</span> and{" "}
              <span className="text-blue-600">Privacy Notice.</span>
            </p>
        </div>
      </div>
     
    </div>
    <div className="flex flex-col justify-center py-10">
      <ul className="flex flex-row mb-2">
        <li className="text-blue-600 mr-8">condition of use</li>
        <li className="text-blue-600 mr-8">privacy notice</li>
        <li className="text-blue-600 ">help</li>
      </ul>
      <p>copyright 1996-{new Date().getFullYear()} amezon.com inc or its affliates</p>
      
    </div>
  </section>
  )
}

export default Page