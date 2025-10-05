const express = require("express");

const app = express();

app.get("/admin/getAllData",(req,res) =>{

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


