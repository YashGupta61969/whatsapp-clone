import React, { useEffect, useState } from 'react'
import './navbar.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import {signOut} from 'firebase/auth'
import {auth, db} from '../../firebase/firebase'
import { collection, onSnapshot } from 'firebase/firestore';

function NavbarLeft() {
  const [user, setUser] = useState('')
  const [toggleMenu , setToggleMenu]= useState(false)

    const handleLogout=()=>{
        signOut(auth)
        .then(()=>console.log('logged out'))
        .catch(err=>alert(err.message))
    }

    useEffect(()=>{
      const unsub = onSnapshot(collection(db, 'users'), snapshot => {
        setUser(snapshot.docs.map(data => {
          return ( data.data().name )
        }))
  
      })
    },[])

  return (
    <div className='navbar_left'>

      <div className="navbar_left_avatar">
        <AccountCircleIcon sx={{color:'white'}}/>
        <strong>{user}</strong>
      </div>

      <div className="navbar_left_menu">
        <IconButton onClick={()=>setToggleMenu(!toggleMenu)}>
        <MoreVertIcon sx={{color:'gray', fontSize:'2.5rem'}} />
        </IconButton>
      </div>

      {
        toggleMenu && <ul>
          <li>Create a new Chat</li>
          <li onClick={handleLogout}>Log Out</li>
        </ul>
      }
    </div>
  )
}

export default NavbarLeft
