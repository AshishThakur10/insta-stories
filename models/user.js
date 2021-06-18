const mongoose = require('mongoose');
      
const userSchema = new mongoose.Schema(
    {
    name : {
        type: String,
        default:"name"
        },
    email : {
        type: String,
        default:"email"
        },
    location : {
        type: String,
        default:"location"
        },
    vaccinated : {
        type: String,
        default:"vaccinated"
        },
    }
);
module.exports = mongoose.model("User", userSchema);
