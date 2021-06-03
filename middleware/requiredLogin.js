const jwt = require("jsonwebtoken")
// const {JWT_SECRET} = {JWT_SECRET:"qwdasjhugyffuy"}
const {JWT_SECRET}= require('../keys')
const mongoose = require('mongoose')
const User = mongoose.model("User")



module.exports=(req,res,next)=>{
    const {authorization}=req.headers
    if(!authorization){   //checking for the auth heared
        return res.status(401).json({error:'you must be logged in !auth '})
    }
    const token = authorization.replace("Bearer","")
    jwt.verify(token,JWT_SECRET,(err,payload)=>{
        if(err){
            return res.status(401).json({json:"you must be logged in"})
        }

        const {_id}=payload
        User.findById(_id).then(userdata=>{
            req.user = userdata
            next()
        })
        
    })
}