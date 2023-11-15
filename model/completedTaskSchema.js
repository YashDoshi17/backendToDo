const mongoose = require("mongoose");

const completedTaskSchema = new mongoose.Schema({
    task:{type:String, required: true},
    date:{type: Date, required: true}
},{
    collection: "completed"
})

module.exports = mongoose.model("completedTaskSchema", completedTaskSchema);