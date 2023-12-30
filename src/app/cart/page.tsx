import MainNav_Section from '@/components/Navbar_section/MainNav_Section'
import Amezon_bottom from '@/components/bottom/Amezon-bottom'
import Cart_main_page from '@/components/cart/Cart_main_page'
import React from 'react'

function page() {
  return (
    <div className='w-full flex flex-col'>
        <MainNav_Section/>
        <Cart_main_page/>
        <Amezon_bottom/>
    </div>
  )
}

export default page