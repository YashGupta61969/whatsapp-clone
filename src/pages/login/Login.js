import React, { useState, useEffect } from 'react'
import './login.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {Link, useNavigate} from 'react-router-dom'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../firebase/firebase'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then(()=>navigate('/'))
    .catch(err=>alert(err.message))
}

useEffect(()=>{
  auth.onAuthStateChanged((loggedIn)=>{
    if(loggedIn){
      navigate('/')
    }
  })
},[])
  return (
    <div className='login'>
      <div className="login_card">
        <WhatsAppIcon sx={{color:'var(--whatsapp)'}}/>
        <h1>Welcome To WhatsApp Clone</h1>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='Enter Your Email' />
          <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='Enter Your Password' />
          <button>Log In</button>
        </form>
      </div>
      <p>Don't have an Account? <Link to={'/signup'}>Sign Up</Link></p>
    </div>
  )
}

export default Login
