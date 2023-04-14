import React from 'react';
import "./Navbar.css";
import {NavbarData} from "./NavbarData.jsx";
function Navbar() {
  return (
    <div className="Sidebar">
      <div className="SidebarList">
        <ul>
          {NavbarData.map((val, key) => {
          return (
            <li key={key}
            className='row'
            onClick ={()=> {window.location.pathname = val.link;}}>
              {" "}
              <div>{val.icon}</div>{" "}
              <div>{val.title}</div>
            </li>
          )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Navbar;