const express = require("express");

const connectDB = require("./config/database")
const app = express();
const User = require("./models/user")

app.use(express.json())


app.post("/signup", async (req, res) => {

    console.log(req.body);

    const user = new User(req.body)
    try {
        await user.save();
        res.send("User added successfully.")
    } catch (err) {
        res.status(400).send("Error saving user")
    }


})

connectDB()
    .then(() => {
        console.log("DB connected successfullly.")
        app.listen(7000, () => {
            console.log("Server is listining on port 3000..")
        });
    }).catch(err => {
        console.log("Database can not be established")
    })

