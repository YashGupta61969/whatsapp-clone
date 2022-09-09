import React, { useEffect, useState } from 'react'
import './navbar.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import {signOut} from 'firebase/auth'
import {auth, db} from '../../firebase/firebase'
import { collection, onSnapshot } from 'firebase/firestore';
import {useNavigate} from 'react-router-dom'

function NavbarLeft() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState('')
  const [toggleMenu , setToggleMenu]= useState(false)

    const handleLogout=()=>{
        signOut(auth)
        .then(()=>console.log('logged out'))
        .catch(err=>alert(err.message))
    }

    useEffect(()=>{
      const unsub = onSnapshot(collection(db, 'users'), snapshot => {
        snapshot.docs.map(data => {
          if(data.data().uid === auth.currentUser.uid){
            setCurrentUser(data.data())
          }
          return data.data() 
        })
  
      })
      
      return()=>{
        unsub();
      }
    },[])

  return (
    <div className='navbar_left'>

      <div className="navbar_left_avatar">
        {currentUser.avatar ? <img src={currentUser.avatar} alt="avatar" /> : <AccountCircleIcon sx={{color:'white'}}/>}
        <strong>{currentUser.name}</strong>
      </div>

      <div className="navbar_left_menu">
        <IconButton onClick={()=>setToggleMenu(!toggleMenu)}>
        <MoreVertIcon sx={{color:'gray', fontSize:'2.5rem'}} />
        </IconButton>
      </div>

      {
        toggleMenu && <ul>
          <li onClick={()=>navigate('/profile')}>Profile Page</li>
          <li onClick={handleLogout}>Log Out</li>
        </ul>
      }
    </div>
  )
}

export default NavbarLeft
