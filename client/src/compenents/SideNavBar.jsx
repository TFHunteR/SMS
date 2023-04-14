import React, {useState, useEffect} from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import CedarLogo from "../pictures/cedarhills.png";
import { Dashboard, Backpack } from '@mui/icons-material';
import "./SideNavBar.css";
function SideNavbar() {
  const [width, setWidth] = useState("")
  const[collapse, setCollapsed] = useState(false)
  function getSize(){
    setWidth(window.innerWidth)
  }
  useEffect(()=> {
    window.addEventListener('resize', getSize);
    if(width < 400){
      setCollapsed(true)
    }else{
      setCollapsed(false)
    }
    return() => {
      window.removeEventListener('resize',getSize)
    }
  }, [width.innerWidth])
  return (
    <div >
        <Sidebar className='sidebar' collapsed={collapse}>
          <div className='header'>
            <div className="logo"><img src={CedarLogo}alt="Logo" srcset="" /></div>
          </div>
            <Menu>
              <MenuItem icon={<Dashboard />}>Dashboard</MenuItem>
              <SubMenu label="Charts">
                <MenuItem icon={<Backpack  />}> Pie charts </MenuItem>
                <MenuItem icon={<Dashboard />}> Line charts </MenuItem>
              </SubMenu>
              <MenuItem> Documentation </MenuItem>
              <MenuItem> Calendar </MenuItem>
              <SubMenu label="Students" icon={<Backpack  />}>
                <MenuItem component={<Link to="/login" />}>All Students</MenuItem>
                <MenuItem component={<Link to="/login" />}>Student Promotion</MenuItem>
              </SubMenu>
            </Menu>
        </Sidebar>
    </div>
  )
}

export default SideNavbar;