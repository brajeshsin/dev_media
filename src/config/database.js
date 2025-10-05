const mongoose  = require('mongoose');


const connectDB = async() =>{
await mongoose.connect("mongodb+srv://namaste_node:eu2qYyvJDca9Rojh@cluster0.kdzft7j.mongodb.net/devTinder") 
}
module.exports = connectDB