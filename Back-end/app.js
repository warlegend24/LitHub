//SETTING UP THE SERVER:-
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const router = require("./routes/book-routes.js");

//initiating express instance "app":
const app = express();

dotenv.config();

//MIDDLEWARES:-
//to successfully make connection to make requests and responses between the Front-end(React App)
// and the Back-end server
app.use(cors());

//this lets the server know which type of data the server will bew recieving and responding to requests
app.use(express.json());
//any CRUD operation http request to the "http://localhost:3000/books" will be handled by this line of code:-
app.use("/books",router);




//connecting to the database:-
mongoose.connect(process.env.DATABASE_URL)
.then(()=>{
    console.log("Database Connected successfully !!");
})
.catch((err)=>{
    console.log(err);
});


























app.listen(5000,()=>{
    console.log("Server started on port 5000");
});