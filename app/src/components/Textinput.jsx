import React from 'react'

export default function Textinput({ username, setUsername }){
  return (
    <div className='card'>
      <h2>enter ur name</h2>
      <input
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      placeholder='type hare...'/>
    </div>
  )
}