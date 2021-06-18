
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Serviceprovider = mongoose.model("Serviceprovider")

router.get('/allserviceprovider',(req,res)=>{
    Serviceprovider.find()
    .populate("postedBy","_id name")
    .then(serviceprovider =>{
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


router.get('/serviceprovider/:id',function(req,res){
    Serviceprovider.findById(req.params.id)
    .then(doc =>{
        if(!doc){return res.status(404).end();}
        return res.status(200).json(doc);
    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports = router