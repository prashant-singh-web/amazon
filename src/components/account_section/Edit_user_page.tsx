"use client"
import { useGlobalContext } from '@/app/Context/store'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function Edit_user_page() {
  const {user}:any = useGlobalContext();
  return (
    <div className='w-[50%] flex flex-col '>
        <p className='flex items-center mt-5 text-orange-700 text-sm'><Link href="/account" className='text-cyan-700 mr-3'>Your Account</Link> <><FaArrowRight className="text-xs text-black mr-3"/> login and security</></p>
        <p className="text-3xl font-normal my-4 ">login and security</p>
        <div className="w-full border border-gray-500 rounded-md flex flex-col">
            <div className="w-full flex flex-row justify-between p-5 border-b border-gray-300">
              <div className="flex flex-col ">
                <p className='text-xs capitalize font-bold'>name:</p>
                <p>{user[0]?.name}</p>
              </div>
              <Link href={`/account/edit_user/edit_name?id=${user[0]?._id}`} className='text-xs font-semibold h-fit py-2 border border-gray-500 w-[100px] text-center rounded-md shadow-[0_0_2px_gray] text-gray-800'>Edit</Link>
            </div>
            <div className="w-full flex flex-row justify-between p-5 border-b border-gray-300">
              <div className="flex flex-col ">
                <p className='text-xs capitalize font-bold'>email:</p>
                <p>{user[0]?.email}</p>
              </div>
              <Link href={`/account/edit_user/edit_email?id=${user[0]?._id}`} className='text-xs font-semibold h-fit py-2 border border-gray-500 w-[100px] text-center rounded-md shadow-[0_0_2px_gray] text-gray-800'>edit</Link>
            </div>
            <div className="w-full flex flex-row justify-between p-5 border-b border-gray-300">
              <div className="flex flex-col ">
                <p className='text-xs capitalize font-bold'>primary phone number:</p>
                <p>{user[0]?.number}</p>
                <p className='text-sm text-gray-500 w-[80%]'>Quickly sign in, easily recover passwords, and receive security notifications with this mobile number.</p>
              </div>
              <button className='text-xs h-fit py-2 border border-gray-500 w-[100px] rounded-md bg-gray-100 shadow-[0_0_5px_gray]'>edit</button>
            </div>
            <div className="w-full flex flex-row justify-between p-5 border-b border-gray-300">
              <div className="flex flex-col ">
                <p className='text-xs capitalize font-bold'>passkey:</p>
                <p className='text-sm text-gray-500 w-[80%]'>Sign in the same way you unlock your device by using your face, fingerprint or PIN.</p>
                
              </div>
              <button className='text-xs h-fit py-2 border border-gray-500 w-[100px] rounded-md bg-gray-100 shadow-[0_0_5px_gray]'>edit</button>
            </div>
            <div className="w-full flex flex-row justify-between p-5 border-b border-gray-300">
              <div className="flex flex-col ">
                <p className='text-xs capitalize font-bold'>password:</p>
                <p className='text-sm text-gray-500'>********</p>
                
              </div>
              <button className='text-xs h-fit py-2 border border-gray-500 w-[100px] rounded-md bg-gray-100 shadow-[0_0_5px_gray]'>edit</button>
            </div>
            <div className="w-full flex flex-row justify-between p-5 border-b border-gray-300">
              <div className="flex flex-col ">
                <p className='text-xs capitalize font-bold'>2-step verification:</p>
                <p>734366437</p>
                <p className='text-sm text-gray-500 w-[80%]'>Add a layer of security. Require a verification code in addition to your password.</p>
                
              </div>
              <button className='text-xs h-fit py-2 border border-gray-500 w-[100px] rounded-md bg-gray-100 shadow-[0_0_5px_gray]'>edit</button>
            </div>
            <div className="w-full flex flex-row justify-between p-5 border-b border-gray-300">
              <div className="flex flex-col ">
                <p className='text-xs capitalize font-bold'>Compromised account?</p>
                <p>734366437</p>
                <p className='text-sm text-gray-500 w-[80%]'>Take steps like changing your password and signing out everywhere</p>
                
              </div>
              <button className='text-xs h-fit py-2 border border-gray-500 w-[100px] rounded-md bg-gray-100 shadow-[0_0_5px_gray]'>edit</button>
            </div>
        </div>
        <button className='bg-[#F7CA00] text-black text-sm w-fit p-1 px-3 shadow-md rounded-md my-4 mb-10'>Done</button>
    </div>
  )
}

export default Edit_user_page