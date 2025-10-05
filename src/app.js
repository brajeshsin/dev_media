const express = require("express");

const app = express();

app.get("/admin/getAllData",(req,res) =>{

    // First check if the request is authenticated.
    //  Logic of fetching all data

    const token = "xyz";
    const isAdminAuthorized = token === "xyz";
    if(isAdminAuthorized){
         res.send("All data send")

    }else{
        res.status(401).send("Unauthorized request")
    }


   
});

app.get("/admin/deleteUser",(req,res) =>{
    // Logic to delete data
    res.send("Data has been deleted successfully.")

})

app.listen(7000,() =>{
    console.log("Server is listining on port 3000..")
});


