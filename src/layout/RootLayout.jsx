import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='navbar__outlet'>
      <Navbar />
      <div className='outlet__container'>
       <Outlet />
      </div>
    </div>
  )
}

export default RootLayout
