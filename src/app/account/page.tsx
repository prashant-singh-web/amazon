import MainNav_Section from '@/components/Navbar_section/MainNav_Section'
import Account_home_page from '@/components/account_section/Account_home_page'
import Amezon_bottom from '@/components/bottom/Amezon-bottom'
import React from 'react'

function page() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <MainNav_Section/>
        <Account_home_page/>
        <Amezon_bottom />
    </div>
  )
}

export default page