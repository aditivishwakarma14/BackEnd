const mongoose = require("mongoose")

function connectToDb(){
    mongoose.connect("process.env.MONDO_URI")
    .then(()=>{
        console.log("Conneted to database")
    })
}

module.exports = connectToDb