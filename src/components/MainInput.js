import React, { useState } from 'react'

function MainInput() {
    const [input, setInput] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
    }
  return (
    <form className='main_input' spellCheck='false' onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Type A Message' />
    </form>
  )
}

export default MainInput
