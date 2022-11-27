require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connected to mongoDb.")
    } catch (error) {
        throw error
    }
}

mongoose.connection.on("disconnected" , ()=>{
    console.log("mongoDB disconnected")
})

mongoose.connection.on("connected" , async()=>{
    console.log("MongoDb connected")
})

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', require('./routes/auth'))
app.use('/api/hotel', require('./routes/hotels'))
app.use('/api/users', require('./routes/users'))
app.use('/api/rooms', require('./routes/rooms'))

app.use((err,req,res,next) =>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.statck
    })
})

app.listen(process.env.PORT, ()=>{
    connect()
    console.log(`server is running om http://localhost:${process.env.PORT}`)
})