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
    picture : {
        type: String,
        },
    category: {
        type:String,
        default:"requirement"
    },
    vaccinated: {
        type:String,
        default:"no"
    },
    amount: {
        type:String,
        default:"50"
    },
    postedBy:{
        type:ObjectId,
        ref:"User"
    }
    }
);
module.exports = mongoose.model("Work", workSchema);
