const express = require("express");

const app = express();

const {adminAuth,userAuth} = require("./middleware/Authmiddleware")

app.use("/admin",adminAuth)
app.get("/user/data",userAuth,(req,res) =>{
    res.send("User data sent")
})


app.get("/user/login",(req,res) =>{
    res.send("Loggedin successfully")
})

app.get("/admin/getAllData",(req,res) =>{

    // First check if the request is authenticated.
    //  Logic of fetching all data

         res.send("All data send")
});

app.get("/admin/deleteUser",(req,res) =>{
    // Logic to delete data
    res.send("Data has been deleted successfully.")

})

app.listen(7000,() =>{
    console.log("Server is listining on port 3000..")
});


