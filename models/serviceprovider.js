const mongoose = require('mongoose');
      
const serviceproviderSchema = new mongoose.Schema(
    {
    name : {
        type: String,
        },
    username : {
        type: String,
        },
    vaccinated : {
        type: String,
        default:"no"
            },
    skill:{
        type: String,
    },
    picture:{
        type: String,
    },
    email : {
        type: String,
        },
    rate : {
        type: String
    },
    address:{
        type: String
    },
    Phone: {
        type: String,
    },
    website : {
        type: String,
        },
    company : {
        type: String
    }
    }
);
module.exports = mongoose.model("Serviceprovider", serviceproviderSchema);
