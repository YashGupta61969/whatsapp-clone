import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function SidebarChat() {
  return (
    <div className='sidebar_chat'>
      <div className="sidebar_user_avatar">
            <AccountCircleIcon sx={{color:'white'}}/>
      </div>
      <div className="sidebar_user_info">
        <h1 className="sidebar_user_name">Yash Gupta</h1>
        <p className="sidebar_user_message">Hello Bitch</p>
      </div>
    </div>
  )
}

export default SidebarChat
