import React, { useEffect } from 'react'
import Card from './Components/Card'
import Button from './Components/Button'
import { useState } from 'react'
import axios from 'axios'


const App = () => {
  const [notes, setNotes] = useState([])

 
  return (

    <div>
      <Button  setNotes={setNotes}/>

      <div className='flex justify-evenly items-center flex-wrap'>
        {notes.map((note, index) => (
        <Card 
          key={index}
          title={note.title}
          description={note.description}
        />
      ))}
      </div>
   
    </div>
  )
}

export default App