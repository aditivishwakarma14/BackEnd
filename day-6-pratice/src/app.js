const express = require("express")
const app = express();

app.use(express.json())

const notes= [];

//post
app.post('/notes' , (req , res)=>{

    notes.push(req.body)
    console.log(req.body)

    res.status(201).json({
        message : "Notes Created"
    })
})

//get
app.get('/notes' , (req , res)=>{
    res.status(200).json({
        notes : notes
    })
})

//delete
app.delete('/notes/:index' ,  (req , res)=>{

    delete notes[req.params.index]
    res.status(204).json({
        message : "Notes deleted"
    })
})

//patch
app.patch('/notes/:index' , (req , res)=>{

    notes[req.params.index].description = req.body.description ;

    res.status(200).json({
        message : "Notes Updated"
    })
    console.log(req.body)
})
module.exports = app ;