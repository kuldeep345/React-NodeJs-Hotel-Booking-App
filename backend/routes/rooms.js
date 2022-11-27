const express = require('express');
const { updateRoom, createRoom, deleteRoom, getRooms, getRoom } = require('../controllers/rooms');
const router = express.Router()
const { verifyAdmin } = require('../utils/verifyToken')

router.post('/:hotelId' , verifyAdmin , createRoom);
router.put('/:id' , verifyAdmin , updateRoom);
router.delete('/:id/:hotelId' , verifyAdmin , deleteRoom)
router.get(':id', getRoom)
router.get('/', getRooms)

module.exports = router
