
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Work = mongoose.model('Work')

router.get('/allwork',(req,res)=>{
    Work.find()
    .populate("postedBy","_id name")
    .then(work =>{
        res.json({work})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/mywork',(req,res)=>{
    Work.findone()
    .populate("postedBy","_id name")
    .then(work =>{
        res.json({work})
    })
    .catch(err=>{
        console.log(err)
    })
})

//Routes for posting works details
router.post('/postwork',(req,res)=>{
    const {name,description,category,vaccinated,amount} =req.body
    if(!description){
        return res.status(422).json({error:"enter all the fields"})
    }
    // req.user.password = undefined
    const work = new Work({   //adding a new work post to the data base
        name,
        description,
        category,
        vaccinated,
        amount,
        postedBy: req.user
    })
    work.save().then(result=>{
        res.json({work:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/mywork',(req,res)=>{
    Work.find({postedBy:req._id})
    .populate("postedBy","_id name")
    .then(mywork=>{
        res.json({mywork})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/allworks',(req,res)=>{
    Stories.find()
    .populate("postedBy","_id name")
    .then(stories =>{
        res.json({stories})
    })
    .catch(err=>{
        console.log(err)
    })
})


router.get('/work/:id',function(req,res){
    Work.findById(req.params.id)
    .then(doc =>{
        if(!doc){return res.status(404).end();}
        return res.status(200).json(doc);
    })
    .catch(err=>{
        console.log(err)
    })
})














module.exports = router