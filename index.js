const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const cors = require("cors");
const taskRoute = require("./controller/taskRoute");
const completedTaskRoute = require("./controller/completedTaskRoute");

const app = express();

mongoose.set("strictQuery", true);
mongoose.connect("mongodb+srv://test:12345@cluster0.qexrxlu.mongodb.net/tasksdb");
var db = mongoose.connection;
db.on("open",()=>console.log("Connected to DB"));
db.on("error",()=>console.log("Error Occurred"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use("/taskRoute",taskRoute);
app.use("/completedTaskRoute", completedTaskRoute);

app.listen(4000, ()=>{
    console.log("Server is running on port 4000");
});