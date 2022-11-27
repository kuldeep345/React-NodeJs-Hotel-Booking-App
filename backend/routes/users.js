const express = require('express')
const { updateUser, getUser ,getUsers ,deleteUser} = require('../controllers/users')
const {verifyAdmin ,verifyToken,verifyUser } = require('../utils/verifyToken')
const router = express.Router()

router.get("/checkauthentication", verifyToken , (req,res,next)=>{
    res.send("hello user, you are loggedin")
})

router.get("/checkuser/:id", verifyUser , (req,res,next)=>{
    res.send("hello user, you are loggedin and you can delete")
})

router.get("/ckeckadmin/:id", verifyAdmin , (req,res,next)=>{
    res.send("hello user, you are loggedin and you can delete all account")
})

router.put('/:id', verifyUser , updateUser)
router.get('/:id', verifyUser , getUser)
router.delete('/:id', verifyUser , deleteUser)
router.get('/', verifyAdmin , getUsers)


module.exports = router
