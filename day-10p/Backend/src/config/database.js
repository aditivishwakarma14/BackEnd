const mongoose = require("mongoose")
require("dotenv").config()



function connectToDb(){
    mongoose.connect(process.env.MODLE_URI)
    .then(()=>{
        console.log("Connected to database...")
    })
}

module.exports = connectToDb