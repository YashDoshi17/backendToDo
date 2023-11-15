const express = require("express");
const taskSchema = require("../model/taskSchema");
const mongoose = require("mongoose");

const taskRoute = express.Router();

taskRoute.post("/create-task",(req,res)=>{
    taskSchema.create(req.body,(err,data)=>{
        if(err){
            return err;
        }
        else{
            res.json(data);
        }
    })
});


taskRoute.get("/",(req,res)=>{
    taskSchema.find((err,data)=>{
        if(err){
            return err;
        }
        else{
            res.json(data);
        }
    })
});

taskRoute.route("/update-task/:id")
.get((req,res)=>{
    taskSchema.find(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err){
            return err;
        }
        else{
            res.json(data);
        }
    })
})
.put((req,res)=>{
    taskSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
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

taskRoute.delete("/delete-task/:id", (req,res)=>{
    taskSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err){
            return err;
        }
        else{
            res.json(data);
        }
    })
});

module.exports = taskRoute;