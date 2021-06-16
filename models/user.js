const mongoose = require('mongoose');
      
const userSchema = new mongoose.Schema(
    {
    name : {
        type: String,
        default:"name"
        },
    location : {
        type: String,
        default:"location"
        },
    vaccinated : {
        type: String,
        default:"vaccinated"
        },
    categoriesAdded : {
        type: String,
        default:"categories Added"
    },
    workposted:{
        type: String,
        default:"workposted" 
    },
    workaccomplished : {
        type: String,
        default:"work accomplished"
    }
    }
);
module.exports = mongoose.model("User", userSchema);
