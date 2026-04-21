const express = require("express")
const app = express()
const cors = require("cors")
const noteModel =  require('./models/notemodels')

app.use(express.json())
app.use(cors())
const path = require("path");

app.use(express.static(path.join(__dirname, "public")))

app.post('/api/notes' , async(req , res)=>{
    const {title , description} = req.body 
    
    const note = await noteModel.create({
        title , description
    })

    res.status(201).json({
        message : "Notes is created",
        note : note
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
    const {description} = req.body 
    await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message : "Notes deleted"
    })
})


app.patch('/api/notes/:id' , async(req , res)=>{
    const id = req.params.id ;
    const {description} = req.body ;

    await noteModel.findByIdAndUpdate(id , {description})

    res.status(200).json({
        message : "Notes updated sucessfully"
    })

})

app.get("*", (req, res) => {
res.sendFile(path.join(__dirname, "public", "index.html"))});

module.exports = app ;