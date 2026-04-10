const mongoose = require("mongoose")


const noteSchema = new mongoose.Schema({
    title : String,
    description : String
})

const noteModel = mongoose.model("notes" , noteSchema)  // to perfom CRUD operation

module.exports = noteModel 