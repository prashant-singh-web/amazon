import MainNav_Section from '@/components/Navbar_section/MainNav_Section'

import Edit_user_email from '@/components/account_section/Edit_user_email'
import Amezon_bottom from '@/components/bottom/Amezon-bottom'
import React from 'react'

function page() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <MainNav_Section/>
      <Edit_user_email/>
        <Amezon_bottom />
    </div>
  )
}

export default page