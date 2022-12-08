const Hotel = require('../models/Hotel')
const Room = require('../models/Room')

exports.createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body)

    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (error) {
        next(error)
    }

}


exports.updateHotel = async (req, res, next) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body })
        res.status(200).json(updatedHotel)
    } catch (error) {
        next(error)
    }
}

exports.deleteHotel = async (req, res, next) => {
    try {
        const deltetedHotel = await Hotel.findByIdAndDelete(req.params.id, { $set: req.body })
        res.status(200).json(deltetedHotel)
    } catch (error) {
        next(error)
    }
}


exports.getHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (error) {
        next(error)
    }
}

exports.getHotels = async (req, res, next) => {
    const { min , max , ...others } = req.query
    try {
        const hotels = await Hotel.find({
            ...others,
            cheapestPrice: {$gt:min || 1 , $lt:max || 999}
        }).limit(req.query.limit)
        res.status(200).json(hotels)
    } catch (error) {
        next(error)
    }
}

exports.countByCity = async(req,res,next) => {
    const cities = req.query.cities.split(",")
    try {
        const list = await Promise.all(cities.map(city=>{
            return Hotel.countDocuments({city:city})
        }))
        res.status(200).json(list)
    } catch (error) {
        console.log(error)
        next(err)
    }
}

exports.countByType = async(req,res,next)=>{
    try {
        const hotelCount = await Hotel.countDocuments({type:"hotel"})
        const apartmentCount = await Hotel.countDocuments({type:"apartment"})
        const resortCount = await Hotel.countDocuments({type:"resort"})
        const villaCount = await Hotel.countDocuments({type:"villa"})
        const cabinCount = await Hotel.countDocuments({type:"cabin"})
       
        res.status(200).json([
            {type:'hotel', count:hotelCount},
            {type:'apartment', count:apartmentCount},
            {type:'resort', count:resortCount},
            {type:'villa', count:villaCount},
            {type:'cabin', count:cabinCount},
        ])

        const list = await Promise.all()
    } catch (error) {
        next(error)
    }
}


exports.getHotelRooms = async(req,res,next)=>{
    try {
        
        const hotel = await Hotel.findById(req.params.id)
        const list = await Promise.all(hotel.rooms.map(room=>{
            return Room.findById(room)
        }))

        res.status(200).json(list)

    } catch (error) {
        next(error)
    }
   
}