import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from "../compenents/ReactSideNav.jsx";
const SharePage = () => {
  return (
    <>
    
    <div style={{position:'fixed'}}>
    <Outlet />
    </div>
    
    </>
    
  )
}

export default SharePage