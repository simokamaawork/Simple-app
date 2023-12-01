const express = require("express");
const app = express()
const port  = 3000

app.use(express.static("public"))

app.get('/', (req, res)=>{
    res.send("hello i love you and even more")
})

app.post('/', (req, res)=>{
    res.send("welcome to the home page")
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})