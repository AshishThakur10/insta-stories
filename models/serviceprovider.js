const mongoose = require('mongoose');
      
const serviceproviderSchema = new mongoose.Schema(
    {
    name : {
        type: String,
        required: true
        },
    username : {
        type: String,
        required: true
        },
    vaccinated : {
        type: String,
            },
    skill:{
        type: String,
    },
    picture:{
        type: String,
    },
    email : {
        type: String,
        required: true
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
