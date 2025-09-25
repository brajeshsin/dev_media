const express = require("express");

const app = express();

app.use("/test",(req,res) =>{
    res.send("Hello world");
})

app.listen(7000,() =>{
    console.log("Server is listining on port 3000..")
});