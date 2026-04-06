const express = require("express")
const app = express()

app.use(express.json()) // is line k bina hum req.body k data nhi padh sakte

app.post('/notes' , (req , res)=>{
    console.log(req.body)
    res.send("Note's Created !!!")
})
app.listen(3000 , ()=>{
    console.log("Server iss running in port number 3000")
})