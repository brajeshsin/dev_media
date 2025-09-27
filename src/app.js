const express = require("express");

const app = express();


app.get("/user",(req,res) =>{
    res.send({firstName: "Brajesh",lastName:"Singh"})
})

app.post("/user",(req,res) =>{
    console.log("Data saved")
    res.send("Data saved to DB.")
})

app.delete("/user",(req,res) =>{
    console.log("Data saved")
    res.send("Data deleted successfully.")
})


// This will match all the HTTP method API calls to /hello


app.use("/hello",(req,res) =>{
    res.send("Hello Brajesh");
})

app.listen(7000,() =>{
    console.log("Server is listining on port 3000..")
});