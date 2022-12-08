const express = require('express')
const { updateUser, getUser ,getUsers ,deleteUser} = require('../controllers/users')
const {verifyAdmin ,verifyToken,verifyUser } = require('../utils/verifyToken')
const router = express.Router()

router.put('/:id', verifyUser , updateUser)
router.get('/:id', verifyUser , getUser)
router.delete('/:id', verifyUser , deleteUser)
router.get('/', verifyAdmin , getUsers)


module.exports = router
