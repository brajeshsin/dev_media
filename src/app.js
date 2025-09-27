const express = require("express");

const app = express();


app.use("/hello",(req,res) =>{
    res.send("Hello Brajesh");
})

app.use("/hi",(req,res) =>{
    res.send("Hello Hi...");
})

app.use("/",(req,res) =>{
    res.send("Hello world");
})

app.listen(7000,() =>{
    console.log("Server is listining on port 3000..")
});