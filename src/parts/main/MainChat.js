import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { StateContext } from '../../context/Context'
import { auth, db } from '../../firebase/firebase'


function Chat() {
  const [messages, setMessages] = useState('')
  const {chatUser} = useContext(StateContext)
  const currentUser = auth.currentUser.uid
  const user2 = chatUser.chat.uid

  useEffect(()=>{
    const id = currentUser > user2 ? `${currentUser + user2}` : `${user2 + currentUser}`;
    const refrenceQuery = query(collection(db, 'messages', id, 'chat'), orderBy('createdAt', 'asc'))

    // Displays realtime Messages
    onSnapshot(refrenceQuery, snapshot=>{
      let msgs = [];
      snapshot.forEach(doc=>{
        msgs.push(doc.data())
      })
      setMessages(msgs)
    })
    
  },[user2])


  return (
    <div className='chat_messages'>
      {
       messages && messages.map(msg=>(
        <div key={msg.createdAt.nanoseconds} className='chat_message'>
         { msg.text && <p className={msg.from === auth.currentUser.uid ? 'message_sent' : 'message_recieved'}>{msg.text}</p>}
          <img src={msg.media} alt="" className={msg.from === auth.currentUser.uid ? 'img_sent' : 'img_recieved'}  />
        </div>
        ))
      }
    </div>
  )
}

export default Chat
