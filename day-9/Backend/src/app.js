const express = require("express")
const noteModel = require('./models/noteModel')
const cors = require("cors")
const app = express()


app.use(express.json())
app.use(cors())
app.post('/api/notes' , async(req , res)=>{
    const {title , description} = req.body ;

    const note = await noteModel.create({
        title , description
    })

    res.status(201).json({
        message : "Notes is created",
        note
    })
})

app.get('/api/notes' , async(req , res)=>{
    const notes = await noteModel.find()

    res.status(200).json({
        notes : notes
    })
})

app.delete('/api/notes/:id' , async(req , res)=>{
    const id = req.params.id ;
    await noteModel.findByIdAndDelete(id) 

     res.status(204).json({
        message : "Notes deleted Sucessfully"
    })
})

app.patch('/api/notes/:index' , async(req , res)=>{
    const id = req.params.id ;
    const {description} = req.body 

    noteModel.findIdAndUpdate(id , {description})

    
     res.status(200).json({
        message : "Notes updated Sucessfully"
    })
})

module.exports = app 