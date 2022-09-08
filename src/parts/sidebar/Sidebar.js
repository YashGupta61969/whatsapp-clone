import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import NavbarLeft from '../../parts/navbar/NavbarLeft'
import './sidebar.css'
import SidebarChat from './SidebarChat';
import { auth, db } from '../../firebase/firebase';
import { collection, onSnapshot } from 'firebase/firestore'

function Sidebar() {
  const [searchInput, setSearchInput] = useState('')
  const [chats, setChats] = useState([])

  useEffect(() => {
    // get realtime updates from firebase
    const unsubscribe = onSnapshot(collection(db, 'users'), snapshot => {
      setChats(snapshot.docs.map(data => {
        return ({ id: data.id, chat: data.data() })
      }))

    })

    return () => {
      unsubscribe()
    }

    
  }, [])

  const handleChange= (e)=>{
    setSearchInput(e.target.value)
  }

  return (
    <div className='sidebar'>
      <NavbarLeft />
      <div className="search_bar">
        <AddIcon sx={{ color: 'gray', fontSize: '2rem' }} />
        <input type="text" value={searchInput} onChange={handleChange} placeholder='Create A New Chat Room' />
      </div>

      <div className="sidebar_chats">

        {
          chats && chats.filter(ch=>ch.id !==auth.currentUser.uid).map(chat => (
            <SidebarChat key={chat.id} data={chat} />
          ))
        }

      </div>
    </div>
  )
}

export default Sidebar
