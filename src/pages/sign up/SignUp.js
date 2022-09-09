import React,  { useEffect, useState } from "react"
import {Link, useNavigate} from 'react-router-dom'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth, db} from '../../firebase/firebase'
import {setDoc, doc, Timestamp} from 'firebase/firestore'
 
function SignUp() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    // checks whether the user exists or not
    useEffect(()=>{
      auth.onAuthStateChanged((loggedIn)=>{
        if(loggedIn){
          navigate('/profile')
        }
      })
    },[])
    

    const handleSubmit = async(e)=>{
      e.preventDefault();

      // creates a new user
      createUserWithEmailAndPassword(auth, email, password)
      .then((data)=>{

        // Stores the login info in firestore
        setDoc(doc(db, 'users', data.user.uid ),{
          uid:data.user.uid,
          name, 
          email,
          createdAt:Timestamp.fromDate(new Date())
        })
        navigate('/')
      })
      .catch(err=>alert(err.message));
    }

  return (
    <div className='login'>
       <div className="login_card">
        <WhatsAppIcon sx={{color:'var(--whatsapp)'}}/>
        <h1>Welcome To WhatsApp Clone</h1>
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <input type="text" onChange={(e)=>setName(e.target.value)} value={name} placeholder='Enter Your Name' required />

          <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='Enter Your Email' required />

          <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='Enter Your Password' required />

          <button>Sign Up</button>
        </form>
      </div>
      <p>Already have an Account? <Link to={'/login'}>Log In</Link></p>
    </div>
  )
}

export default SignUp
