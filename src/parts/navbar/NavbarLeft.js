import React from 'react'
import './navbar.css'
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function NavbarLeft() {
  return (
    <div className='navbar_left'>
      <div className="navbar_left_avatar">
        <AccountCircleIcon sx={{color:'white'}}/>
      </div>
      <div className="navbar_left_menu">
        <ChatIcon sx={{color:'gray'}}/>
        <MoreVertIcon sx={{color:'gray'}}/>
      </div>
    </div>
  )
}

export default NavbarLeft
