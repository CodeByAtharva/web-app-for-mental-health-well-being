const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/mega");

const noteSchema=mongoose.Schema({
    title:{type:String},
    desc:{type:String},
    timestamp: { type: Date, default: Date.now },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})

module.exports=mongoose.model("Notes",noteSchema);