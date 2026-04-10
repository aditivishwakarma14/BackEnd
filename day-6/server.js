const app = require('./src/app')
const mongoose = require("mongoose")


function connectToDb(){
    mongoose.connect("mongodb+srv://aditivishwakarmacoding_db_user:z9HEd0hPvduYzcMN@cluster0.sjh8ygj.mongodb.net/day-6")
    .then(()=>{
        console.log("Connected to database")
    })
}
connectToDb()
app.listen(3000 , ()=>{
    console.log("Server is running on port number 3000...")
})
