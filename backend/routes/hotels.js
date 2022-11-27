const express = require('express')
const router = express.Router()
const {createHotel, updateHotel, getHotel , getHotels, deleteHotel} = require('../controllers/hotels')
const {verifyAdmin ,verifyToken,verifyUser } = require('../utils/verifyToken')

router.post('/' , verifyAdmin, createHotel)
router.put('/:id' , verifyAdmin , updateHotel)
router.delete('/:id' , verifyAdmin , deleteHotel)
router.get('/:id' , getHotel)
router.get('/' , getHotels)

module.exports = router
