import React, {useContext} from 'react'
import { StateContext } from '../../context/Context';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function NavbarRight() {
  const {chatUser} = useContext(StateContext);

  return (
    // Displays over the Chat rooms on the right
    <div className='navbar_right'>
        <div className="navbar_right_avatar">
        {chatUser.chat.avatar ? <img src={chatUser.chat.avatar} alt="img" /> : <AccountCircleIcon sx={{color:'white'}}/>}
      </div>

      <div className="navbar_right_info">
        <h1>{chatUser.chat && chatUser.chat.name}</h1>
      </div>
    </div>
  )
}

export default NavbarRight
