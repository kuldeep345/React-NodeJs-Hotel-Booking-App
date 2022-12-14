const User = require('../models/User')
const bcrypt = require('bcryptjs')
const {createError} = require('../utils/error')
const jwt = require('jsonwebtoken')

exports.register = async(req,res,next)=>{
    try {

        const user =await User.findOne({email:req.body.email})
        if(user){
           next(createError(400, "User already exists"))
        }

        const salt = await bcrypt.genSaltSync(10)
        const hash = await bcrypt.hashSync(req.body.password , salt)

        const newUser = await new User({
           ...req.body,
            password:hash
        })

        await newUser.save()
        res.status(200).send("User has been created")

    } catch (error) {
        next(error)
    }
}

exports.login = async (req,res,next) => {
    try {
       const user = await User.findOne({email:req.body.email}) 

       if(!user){
        next(createError(400, "Invalid credentials"))
        return
       }

       const isPasswordCorrect = await bcrypt.compare(req.body.password , user.password)

       if(!isPasswordCorrect){
        return next(createError(400, "Invalid Credentails"))
       }
      
       const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET)

       const { password , isAdmin, ...otherDetails } = user._doc

       res.status(200).json({otherDetails , isAdmin, token})


    } catch (error) {
        next(error)
    }
}