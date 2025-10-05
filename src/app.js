const express = require("express");

const app = express();

app.use("/user",(req,res,next) =>{
     // Route handler
    //  res.send("Route handler one")
     next()
},(req,res) =>{ 
    // Route handler 2
    console.log("Handling the second response")
    res.send("2nd response")

})

app.listen(7000,() =>{
    console.log("Server is listining on port 3000..")
});


