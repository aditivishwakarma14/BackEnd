const express = require("express")
const app = express()

app.use(express.json())

const notes = []

//post 
app.post('/notes' , (req, res)=>{
    res.send("Notes Created");
    notes.push(req.body)
    console.log(notes)
})

// get
app.get('/notes' , (req , res)=>{
    res.send(notes)
    
})

//delete
app.delete('/notes/:index' , (req , res)=>{
   
    delete notes[req.params.index]
    res.send("Deleted Sucessfully...")
})

//patch
app.patch('/notes/:index' , (req , res)=>{

    notes[req.params.index].description = req.body.description
    res.send("Changing the description...")
})

module.exports =  app 