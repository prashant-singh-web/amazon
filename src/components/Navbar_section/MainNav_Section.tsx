"use client"
import React from 'react'
import Navbar from './navbar'
import Dropnav from './Dropnav'
import Loader from './Loader'

function MainNav_Section() {
  return (
    <div className='flex flex-col relative z-[1000] w-full'>
      {/*  loader section */}
      <Loader/>
      {/* navbar section */}
        <Navbar/>
        {/* dropdown nav section */}
        <Dropnav/>
    </div>
  )
}

export default MainNav_Section