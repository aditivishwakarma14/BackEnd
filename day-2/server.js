const express = require("express")
const app = express() // server instance create karna

// agar user kuch request karega toh uske response m server hello world bheje ga
app.get('/' ,(req , res)=>{
    res.send("HEllO WORLD") // user agar slash '/' pr request karega toh server response karega 'HEllO WORLD'
})

app.get("/about" , (req , res)=>{
    res.send("Abhi hum about ki request k response de rahe hai")
})


app.listen(3000) //server start karna

