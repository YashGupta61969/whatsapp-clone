import React, { useEffect } from 'react';
import Login from './pages/login/Login'
import { Route, Routes, useNavigate } from 'react-router-dom'
import SignUp from './pages/sign up/SignUp';
import { auth } from './firebase/firebase';
import Main from './parts/main/Main';
import Profile from './pages/profile/Profile';

function App() {
  const navigate = useNavigate()

  // checks whether the user exists or not
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
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
