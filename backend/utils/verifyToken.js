const jwt = require('jsonwebtoken')
const {createError } = require('../utils/error')

exports.verifyToken = (req,res,next) => {
    const token = req.cookies.access_token

    if(!token){
        return next(createError(401, "you are not authenticated"))
    }

    jwt.verify(token , process.env.JWT_SECRET , (err,user)=>{
        if (err) return next(createError(403 , "Token is not valid"))

        req.user = user
        next()
    })
}


exports.verifyUser = async(req,res,next)=>{

    const token = req.cookies.access_token

    if(!token){
        return next(createError(401, "you are not authenticated"))
    }

   await jwt.verify(token , process.env.JWT_SECRET , (err,user)=>{
        if (err) return next(createError(403 , "Token is not valid"))

        if(user.id === req.params.id || user.isAdmin ){
            next()
        }
        else{
             return next(createError(403, "You are not authorized!"))
        }

    })

       
}


exports.verifyAdmin = async(req,res,next)=>{
  
    const token = req.cookies.access_token

    if(!token){
        return next(createError(401, "you are not authenticated"))
    }

    jwt.verify(token , process.env.JWT_SECRET , (err,user)=>{
        if(user.isAdmin){
            next()
        }

        else{
            return next(createError(403, "You are not authorized!"))
        }

     
    })

}