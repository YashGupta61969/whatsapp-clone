import React from 'react'
import './home.css'
import Sidebar from '../../parts/sidebar/Sidebar'
import Main from '../../parts/main/Main'


function Home() {
  return (
    <div className='home'>
        <Sidebar/>
        <Main/> 
    </div>
  )
}

export default Home
