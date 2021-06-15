
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Stories = mongoose.model("Serviceprovider")

router.get('/allserviceprovider',(req,res)=>{
    Serviceprovider.find()
    .populate("postedBy","_id name")
    .then(stories =>{
        res.json({serviceprovider})
    })
    .catch(err=>{
        console.log(err)
    })
})


router.post('/creatserviceprovider',(req,res)=>{
    const {name,username,vaccinated,skill,picture,email,rate,address,phone,website,company,} =req.body
    if(!name || !email){
        return res.status(422).json({error:"enter all the fields"})
    }
    req.user.password = undefined
    const serviceprovider = new Serviceprovider({
        name,
        username,
        vaccinated,
        skill,
        picture,
        email,
        rate,
        address,
        phone,
        website,
        company,
        postedBy: req.user
    })
    serviceprovider.save().then(result=>{
        res.json({serviceprovider:result})
    })
    .catch(err=>{
        console.log(err)
    })
})




module.exports = router