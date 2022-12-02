import React, { useContext, useState } from 'react'
import { FaFontAwesome } from 'react-icons/fa' 
import './reserve.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import {baseUrl} from '../../constants/baseUrl'
import useFetch from '../../hooks/useFetch'
import searchContext from '../../context/searchContext/SearchContext'

const Reserve = ({setOpenModal , hotelId}) => {

    const { data , loading , error } = useFetch(`${baseUrl}/hotel/room/${hotelId}`)

    const [ selectedRooms , setSelectedRooms ] = useState([])

    const { state:{date} } = useContext(searchContext)

    const getDatesInRange = (startDate , endDate)=>{
        const start = new Date(startDate)
        const end = new Date(endDate)
        const currentdate = new Date(start.getTime())

        let dates = []

        while(currentdate <= end){
            dates.push(new Date(currentdate).getTime())
            currentdate.setDate(currentdate.getDate() + 1)
        }

        return dates
    }


   const alldates = getDatesInRange(date[0].startDate , date[0].endDate)

    const handleSelect = (e)=>{
        const checked = e.target.checked
        const value = e.target.value

        setSelectedRooms(checked ? [...selectedRooms , value] : selectedRooms.filter((item) => item !== value))
    }

    const handleClick = ()=>{

    }

  return (
    <div className='reserve'>
        <div className="rContainer">
            <FaFontAwesome
            icon={AiFillCloseCircle}
            className="rClose"
            onClick={()=>setOpenModal(false)}
            />
            <span>Select your rooms:</span>
            {data.map(item => (
                <div className="ritem">
                    <div className="ritemInfo">
                        <div className="rTitle">{item.title}</div>
                        <div className="rDesc">{item.desc}</div>
                        <div className="rMax">Max people: <b>{item.maxPeople}</b></div>
                        <div className="rPrice">{item.price}</div>
                    </div>
                    {item.roomNumbers.map((roomNumber)=>(
                        <div className="room">
                        <label>{item.number}</label>
                        <input type="checkbox" value={roomNumber._id} onChange={handleSelect}/>
                    </div>
                    ))}
                </div>
            ))}
            <button onClick={handleClick} className="rButton">Reserve Now!</button>
        </div>
    </div>
  )
}

export default Reserve