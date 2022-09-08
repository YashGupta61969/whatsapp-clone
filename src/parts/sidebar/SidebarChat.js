import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useContext } from 'react';
import { StateContext } from '../../context/Context';

function SidebarChat({data}) {
  const {setChatUser} = useContext(StateContext)

  const selectUser = ()=>{
      setChatUser(data)
  }

  return (
    <div className='sidebar_chat' onClick={selectUser}>
      <div className="sidebar_user_avatar">
            <AccountCircleIcon sx={{color:'white'}}/>
      </div>
      <div className="sidebar_user_info">
        <h1 className="sidebar_user_name">{data.chat.name}</h1>
      </div>
    </div>
  )
}

export default SidebarChat
