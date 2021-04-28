const express = require('express')
const router = express.Router()
const User = require('../models/user');


router.post ("/create_user", async (req, res) =>{
    try{
    const myuser = new User(req.body);
    await myuser.save();
    res.send(myuser);
    }catch (err) {
    res.send ({ message : err });
    }
    });

module.exports = router;