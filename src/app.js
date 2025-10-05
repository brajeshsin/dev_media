const express = require("express");

const app = express();

app.use("/",(err,req,res,next) =>{

    if(err){
        res.status(500).send("Somthing went wrong")
    }

})


app.get("/userData",(req,res) =>{

    try {
          throw new Error("djffjdfb");

    res.send("User data sent");
        
    } catch (error) {
        res.status(500).send("Somthing went wronggggg")
        
    }

    // Logic of DB call and get user data

  
});




app.listen(7000,() =>{
    console.log("Server is listining on port 3000..")
});


