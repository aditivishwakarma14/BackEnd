import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  axios.get('http://localhost:3000/api/notes')
  .then((res)=>{
    console.log(res.data)
  })

  const [note, setnote] = useState([
  {
    title : "test title 1",
    description :  "test-description-1"
  },

  {
    title : "test title 2",
    description :  "test-description 2"
  },

  {
    title : "test title 3",
    description :  "test description 3"
  },

  {
    title : "test title 4",
    description :  "test description 4"
  },

    {
    title : "test title 5",
    description :  "test description 5"
  }


])

  return (
    <div className='Notes flex'>
      {
        note.map(note => {
       return <div className='note flex flex-wrap items-center justify-between w-[400px] bg-fuchsia-200 p-5 m-5 rounded-2xl'>
        <h1 className='w-fit px-5 py-2 text-3xl bg-blue-400 active:scale-95  m-2 rounded-2xl text-white font-medium text-center'>{note.title}</h1>
        <p className='w-fit px-5 py-2 text-3xl bg-pink-600 active:scale-95 m-2 rounded-2xl text-white font-medium text-center'>{note.description}</p>
      </div>
      })
      }
     
      
    </div>
  )
}

export default App