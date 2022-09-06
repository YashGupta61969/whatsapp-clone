import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function NavbarRight() {
  return (
    // Displays over the Chat rooms on the right
    <div className='navbar_right'>
        <div className="navbar_right_avatar">
        <AccountCircleIcon sx={{color:'white'}}/>
      </div>

      <div className="navbar_right_info">
        <h1>Room/User name</h1>
      </div>
    </div>
  )
}

export default NavbarRight
