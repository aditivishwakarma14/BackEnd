const express = require("express");
const noteModel = require("./models/notes.model")
const app = express()

app.use(express.json())


app.post('/notes' , async (req , res)=>{
    //const notes = req.body
    // dde-structute it
    const {title , description} = req.body  // req.body --> client (frontend / Postman / form) se bheja gaya data

    const note = await noteModel.create({
        title , description
    })

    res.status(201).json({
        message : "Note created sucessfully",
        note
    })
})

app.get('/notes' , async(req , res)=>{

   const notes = await noteModel.find();

   res.status(200).json({
    message : "Notes send sucessfully",
    notes
   }) 
})


module.exports = app 