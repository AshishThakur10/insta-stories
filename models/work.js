const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types

const workSchema = new mongoose.Schema(
    {
    title : {
        type: String,
        default:"title"
        },
    description : {
        type: String,
        default:"discription"
        },
    category: {
        type:String,
        default:"requirement"
    },
    postedBy:{
        type:ObjectId,
        ref:"User"
    }
    }
);
module.exports = mongoose.model("Work", workSchema);
