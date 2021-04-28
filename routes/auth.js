const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
// const User = mongoose.model("User")  
const User = require('../models/user'); 
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// const {JWT_SECRET}= requier('../keys')
// const {JWT_SECRET} = {JWT_SECRET:"qwdasjhugyffuy"}
const {JWT_SECRET}= require('../keys')
const requiredLogin = require('../middleware/requiredLogin')

router.get('/protected',requiredLogin,(req,res)=>{
  res.send("hello user")
})


router.post("/signup", async (req, res) =>{
  const{name,email,password} = req.body
    if(!email || !password || !name){     //checking that all the fiels are fil
      return res.status(422).json({error:"please add all the fields"}) 
    }
    User.findOne({email:email})
    .then((savedUser)=>{
     if(savedUser){ return res.status(422).json({error:"email already exists"})
     }
     bcrypt.hash(password,10)
     .then(hashedpassword=>{
      const user= new User({
        email,
        password:hashedpassword,
        name
      })
      user.save()
      .then(user=>{
        res.json({message:"saved successfuly"})
      })
      .catch(err=>{
        console.log(err)
      })
     })
     
    })
    .catch(err=>{
      console.log(err)
    })
    res.json({message :"successfully posted"})
        });

router.post('/signin',(req,res)=>{
  const{email,password} =req.body //taking the input
  if(!email || !password){
   return res.status(422).json({error:"please fill all the fieald bskd"})
  }
  User.findOne({email:email})
  .then(savedUser =>{
    if(!savedUser){
     return res.status(422).json({error:"Ivalid email or password"})
    }
    bcrypt.compare(password,savedUser.password)
    .then(domatch =>{
      if(domatch){
        // res.json({message:"successfully signed in"})
        const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
        res.json({token})
      }else{
        return res.status(422).json({error:"Invalid email or password"})
      }
    })
    .catch(err =>{
      console.log(err)
    })
  })
})

module.exports = router