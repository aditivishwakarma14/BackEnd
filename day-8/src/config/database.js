const mongoose = require("mongoose")
require("dotenv").config();

function connectDb(){
    mongoose.connect(process.env.MODULE_URI).then(()=>{
        console.log("Connect to database")
    })
}

module.exports = connectDb ;