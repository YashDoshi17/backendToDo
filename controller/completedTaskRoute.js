const express = require("express");
const completedTaskSchema = require("../model/completedTaskSchema");
const mongoose = require("mongoose");

const completedTaskRoute = express.Router();

completedTaskRoute.post("/create-task",(req,res)=>{
    completedTaskSchema.create(req.body,(err,data)=>{
        if(err){
            return err;
        }
        else{
            res.json(data);
        }
    })
});


completedTaskRoute.get("/",(req,res)=>{
    completedTaskSchema.find((err,data)=>{
        if(err){
            return err;
        }
        else{
            res.json(data);
        }
    })
});

completedTaskRoute.route("/update-task/:id")
.get((req,res)=>{
    completedTaskSchema.find(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err){
            return err;
        }
        else{
            res.json(data);
        }
    })
})
.put((req,res)=>{
    completedTaskSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set: req.body},
    (err,data)=>{
        if(err) {
            return err;
        }
        else{
            res.json(data);
        }
    })
});

completedTaskRoute.delete("/delete-task/:id", (req,res)=>{
    completedTaskSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err){
            return err;
        }
        else{
            res.json(data);
        }
    })
});

module.exports = completedTaskRoute;