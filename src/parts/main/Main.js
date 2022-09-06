import React from 'react'
import './main.css'
import NavbarRight from '../navbar/NavbarRight'
import MainChat from '../../components/MainChat'
import MainInput from '../../components/MainInput'

export default function Main() {
  return (
    <div className="main">
      {/* Navbar above the chat rooms */}
      <NavbarRight />

      {/* Main chat where the users communicate and view messages */}
      <MainChat />

      {/* Input where the text messgaes will be writted */}
      <MainInput/>
    </div>
  )
}
