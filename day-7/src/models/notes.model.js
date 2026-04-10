const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
    title : String,
    description : String
})

//hum kis format m data ko store karwayenge that is schemma 

const noteModel = mongoose.model("notes" , noteSchema) // yeh model create kar deta hai
// name if the collection is notes 
// to preform the operations we need model

module.exports = noteModel