import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import NavbarLeft from '../../parts/navbar/NavbarLeft'
import './sidebar.css'
import SidebarChat from '../../components/SidebarChat';
import {onValue, ref, set} from 'firebase/database'
import { db } from '../../firebase/firebase';

function Sidebar() {
  const [input , setInput] = useState('')

  useEffect(()=>{
    onValue(ref(db), snapshot=>{
      console.log(snapshot.val())
    })
  },[])

  return (
    <div className='sidebar'>
      <NavbarLeft/>
      <div className="search_bar">
        <SearchIcon sx={{color:'gray',fontSize:'2rem'}}/>
        <input type="text" value={input}  onChange={(e)=>setInput(e.target.value)} placeholder='Search Or Start A New Chat' />
      </div>

      <div className="sidebar_chats">
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>  
      </div>
    </div>
  )
}

export default Sidebar
