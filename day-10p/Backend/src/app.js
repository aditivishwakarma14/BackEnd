const express = require("express")
const noteModel = require("./models/noteModel")
const cors = require("cors")
const path = require("path")


const app = express ()  
app.use(express.json())
app.use(cors())
app.use(express.static("./public"))


//post api
app.post('/api/notes' , async(req , res)=>{

    const {title , description} = req.body ;
    const notes = await noteModel.create({
        title ,description
    })

    res.status(201).json({
        message : "Notes is posted "
    })
})

//get api
app.get('/api/notes' , async(req , res)=>{

        const notes = await noteModel.find()

        res.status(200).json({
            message : "Notes is fetched",
            notes : notes
        })

})

// delete
app.delete('/api/notes/:id' , async (req , res)=>{

    const id = req.params.id 
    await noteModel.findByIdAndDelete(id);

    res.status(200).json({
        message : "Notes deleted"
    })

})

// patch api
app.patch('/api/notes/:id' , async(req , res)=>{
    const id = req.params.id 
    const {description} = req.body

    await noteModel.findByIdAndUpdate(id , {description})

    res.status(200).json({
        message : "Note is updated"
    })

})

app.use('*name' , (req , res)=>{
    res.sendFile(path.join(__dirname ,"..", "/public/index.html"))
})

//__dirname : jis bhi file k andar ho wha tak k path dekhne ko mil jata hai 



module.exports = app 