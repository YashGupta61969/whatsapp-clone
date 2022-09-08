import React, { useEffect, useState } from 'react';
import Login from './pages/login/Login'
import { Route, Routes, useNavigate } from 'react-router-dom'
import SignUp from './pages/sign up/SignUp';
import { auth } from './firebase/firebase';
import Main from './parts/main/Main';

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (!user) {
        navigate('/signup')
      }
    })
  }, [])

  return (
    <div className="App">

      <Routes>
          <Route path='/' element={<Main/>}/>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
