
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requiredLogin = require('../middleware/requiredLogin')
const Stories = mongoose.model("Stories")

router.get('/allstories',(req,res)=>{
    Stories.find()
    .populate("postedBy","_id name")
    .then(stories =>{
        res.json({stories})
    })
    .catch(err=>{
        console.log(err)
    })
})


router.post('/creatstories',requiredLogin,(req,res)=>{
    const {title,body} =req.body
    if(!title || !body){
        return res.status(422).json({error:"enter all the fields"})
    }
    req.user.password = undefined
    const stories = new Stories({
        title,
        body,
        postedBy: req.user
    })
    stories.save().then(result=>{
        res.json({stories:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/mystories',requiredLogin,(req,res)=>{
    Stories.find({postedBy:req.user._id})
    .populate("postedBy","_id name")
    .then(mystories=>{
        res.json({mystories})
    })
    .catch(err=>{
        console.log(err)
    })
})
















module.exports = router