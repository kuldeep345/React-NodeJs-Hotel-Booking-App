const express = require('express')
const router = express.Router()
const {createHotel, updateHotel, getHotel , getHotels, deleteHotel,countByCity, countByType, getHotelRooms} = require('../controllers/hotels')
const {verifyAdmin ,verifyToken,verifyUser } = require('../utils/verifyToken')

router.post('/' , verifyAdmin, createHotel)
router.put('/find/:id' , verifyAdmin , updateHotel)
router.delete('/find/:id' , verifyAdmin , deleteHotel)
router.get('/find/:id' , getHotel)
router.get('/' , getHotels)

router.get("/countByCity" , countByCity)
router.get("/countByType" , countByType)
router.get("/room/:id" , getHotelRooms)

module.exports = router
