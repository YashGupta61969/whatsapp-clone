import React, { useState, useContext } from 'react'
import { auth, db, storage } from '../../firebase/firebase'
import { StateContext } from '../../context/Context'
import { addDoc, collection, Timestamp } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'


function MainInput() {
    const [input, setInput] = useState('')
    const [image, setImage] = useState('')
    const  {chatUser} = useContext(StateContext)
    const currentUser = auth.currentUser.uid
    const user2 = chatUser.chat.uid


    const handleSubmit = async(e)=>{
        e.preventDefault();
        let url = ''
        
        if(image){
          const imageRef= ref(storage, `images/${new Date().getTime} - ${image.name}`)
          const snap = await uploadBytes(imageRef, image);
          const imgUrl = await getDownloadURL(ref(storage, snap.ref.fullPath))
          url = imgUrl
        }
      
        if(input || image){
          const id = currentUser > user2 ? `${currentUser + user2}` : `${user2 + currentUser}`
          await addDoc(collection(db, 'messages', id, 'chat'),{
            text:input || "",
            from: currentUser,
              to:user2,
              createdAt: Timestamp.fromDate(new Date()),
              media: url || ""
            })
            setInput('')
            setImage('')
          }
        }
        
        const handleChangeImg = (e)=>{
          setImage(e.target.files[0])
    }

  return (
    <form className='main_input' spellCheck='false' onSubmit={handleSubmit}>
      <input type="file" onChange={handleChangeImg} />
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Type A Message' />
        <button>Send</button>
    </form>
  )
}

export default MainInput
