"use client"
import React from 'react'
import Home_carousel from './Home_carousel'
import Home_box2 from './Home_box2'

function Home_main() {
  return (
    <div className='relative w-full h-fit'>
        <Home_carousel/>
       <div className="w-full p-5">
       <Home_box2/>
       </div>
       
    </div>
  )
}

export default Home_main