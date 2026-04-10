import React from 'react'
import axios from 'axios'
import { useState , useEffect } from 'react'

const Button = ({setNotes}) => {

    
   // GET API
   //-------------------------------------------------------------------------------------------------------------------------------------
   function fetchNotes(){
   axios.get("http://localhost:3000/api/notes")
   .then(res=>{
   setNotes(res.data.notes)
   })
   }
   useEffect(()=>{
   fetchNotes() 
   }, [])
   //--------------------------------------------------------------------------------------------------------------------------------------
     
   
   //POST API
   //--------------------------------------------------------------------------------------------------------------------------------------
    const formSubmit = (e)=>{
        e.preventDefault()
        console.log("Form Submitted")

        const {title , description} = e.target.elements
        console.log(title.value , description.value)

        axios.post("http://localhost:3000/api/notes" , {
            title : title.value,
            description : description.value
        }).then(res =>{
            console.log(res.data)
            const newNote = res.data.note || res.data   
            setNotes(prev => [...prev, newNote])

        })
    }
    //------------------------------------------------------------------------------------------------------------------------------------



    //DELETE API
    //------------------------------------------------------------------------------------------------------------------------------------
    const ondelete = (e)=>{
     
    }
    //------------------------------------------------------------------------------------------------------------------------------------

  return (
    <div>
        <form className='m-10 '
        onSubmit={formSubmit}>

            <input type="text" placeholder='Enter Title' name="title"
            className='bg-white border-2 text-2xl text-center p-3 rounded font-bold m-2'
            />

            <input type="text" placeholder='Enter Description' name="description" 
            className='bg-white border-2 text-2xl text-center p-3 rounded font-bold m-2 '
            />
           
           <button className='bg-blue-500 text-white px-4 py-3  m-2 text-center font-bold text-2xl rounded active:scale-95'>Submit</button>
        </form>
    </div>
  )
}

export default Button