import React, { useContext } from 'react'
import './main.css'
import { StateContext } from "../../context/Context";
import NavbarRight from '../navbar/NavbarRight'
import MainInput from './MainInput'
import Sidebar from '../sidebar/Sidebar'
import MainChat from './MainChat'

export default function Main() {
  const { chatUser } = useContext(StateContext)
  return (
    <div className="main_container">
      <Sidebar />

      {
        chatUser.chat  ?
          <div className="main_room">

            {/* Navbar above the chat rooms */}
            <NavbarRight />

            {/* Main chat where the users communicate and view messages */}
            <MainChat />

            {/* Input where the text messgaes will be written */}
            <MainInput />


          </div> : <h1>Select a room to Start Conversation</h1>
      }

    </div>
  )

}
