console.log("Olá mundo")

const express = require("express")

const App = express();

const PORT = 3000;

App.listen(PORT, ()=>{
    console.log(`LISTEN ON PORT:  ${PORT}`)
})

App.get("/", (req, res)=>{
    res.sendFile(__dirname + "/public/index.html")
})
