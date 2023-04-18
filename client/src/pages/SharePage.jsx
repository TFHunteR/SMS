import React from 'react'
import Navbar from '../compenents/Navbar'
import { Outlet } from 'react-router-dom'

const SharePage = () => {
  return (
    <>
    <div className="sidebar"><Navbar/></div>
    <Outlet/>
    </>
    
  )
}

export default SharePage