import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Components/Card'
import Form from './Components/Form'

const App = () => {

  const [notes, setnotes] = useState([])
  

  // get api
  function getData(){
      axios.get("http://localhost:3000/api/notes") 
      .then(res=>{
        setnotes(res.data.notes)
      })
  }
  useEffect(() => {
    getData()
  }, [])
  
  //  post api
  function formSubmit(e){
    e.preventDefault()
    const {title , description} =  e.target.elements 

    console.log(title.value , description.value)
    axios.post("http://localhost:3000/api/notes" , {
      title : title.value,
      description : description.value
    })
    .then(res=>{
      // jaise hi data post hua , as a response card bana dena
      e.target.reset() 
      getData() // yeh setnotes kar dega
    }) 

    //delete api

  } 
  
  //delete api
  function deleteNote(noteId){
   console.log(noteId)
   axios.delete("http://localhost:3000/api/notes/" + noteId)
   .then(res=>{
    console.log(res.data)
    getData() // show the rest of the cards , jo bache hue hai
   })
  }

  function updateNotes(e , noteId){
    e.preventDefault()
    const {description} = e.target.elements
    console.log(noteId)
    axios.patch("http://localhost:3000/api/notes/" + noteId , {
      description : description.value,
    })
    .then(res =>{
      
      getData()
      e.target.reset()
    })
  }

  return (
    <div>
      <Form formSubmit={formSubmit} />

      <div className='flex flex-wrap justify-evenly items-center'>
          {notes.map((note) => (
          <Card
            key={note._id}
            title={note.title}
            description={note.description}
            deleteNote={deleteNote}
            updateNotes={updateNotes}
            noteId={note._id}
          />
        ))}
      </div>
    </div>
  )
}

export default App