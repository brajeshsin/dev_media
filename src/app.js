const express = require("express");

 const connectDB = require("./config/database")
const app = express();

 connectDB()
 .then(() =>{
    console.log("DB connected successfullly.")
    app.listen(7000,() =>{
    console.log("Server is listining on port 3000..")
});
}).catch(err =>{
    console.log("Database can not be established")
})




