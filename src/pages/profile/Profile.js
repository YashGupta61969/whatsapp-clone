import React, { useEffect, useState } from 'react'
import {auth, db, storage} from '../../firebase/firebase'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './profile.css'
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate()
  const [img, setImg] = useState('')
  const [user, setUser] = useState('')

  useEffect(()=>{

    // grabs current user
    getDoc(doc(db, 'users', auth.currentUser.uid)).then(data=>{
      if(data.exists){
        setUser(data.data())
      }
    })

    if(img){

      // uploads to storage
      const uploadImg = async()=>{
        const imgRef = ref(storage, `user/${new Date().getTime()} - ${img.name}`)

        try {
          const snap = await uploadBytes(imgRef , img)
          const url = await getDownloadURL(ref(storage, snap.ref.fullPath))
  
          // uploads to firestore
          await updateDoc(doc(db, 'users' , auth.currentUser.uid),{
            avatar:url,
            avatarPath:snap.ref.fullPath
          })
  
          setImg('')
        } catch (err) {
          alert(err.message)
        }
      }
      uploadImg()
    }
  },[img])


  const deleteImg = async()=>{
    try {
      // Removes image from storage
      await deleteObject(ref(storage, user.avatarPath))

      // removes image from firestore
      await updateDoc(doc(db, 'users', auth.currentUser.uid),{
        avatar:'',
        avatarPath:''
      })
      navigate('/')
    } catch (err) {
        alert(err.message)
    }
  }
 
  return (
    <div className='profile_page'>

      <div className="profile_card">
          <div className="img_container">
             {user.avatar ? <img src={user.avatar} alt="avatar" /> : <AccountCircleIcon sx={{color:'white',fontSize:'15rem'}}/>}
          </div>
          {user.avatar && <button className='remove_img' onClick={deleteImg}>Remove</button>}
         {!user.avatar && <input type="file" accept='image/*' onChange={(e)=>setImg(e.target.files[0])} />}
          <button onClick={()=>navigate('/')}>Go To Home Page</button>
      </div>

    </div>
  )
}

export default Profile
