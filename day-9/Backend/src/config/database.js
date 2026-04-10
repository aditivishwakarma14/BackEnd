const mongoose = require("mongoose")
require("dotenv").config()



function connectToDb(){
    mongoose.connect(process.env.MODEL_URI)
    .then(()=>{
        console.log("Database is connected")
    })

}

module.exports = connectToDb