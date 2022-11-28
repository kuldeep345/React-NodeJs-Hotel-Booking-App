import './Header.css'
import {FaBed,FaTaxi,FaRegCalendarAlt} from 'react-icons/fa'
import {TiPlane} from 'react-icons/ti'
import {AiFillCar ,AiOutlinePlus , AiOutlineMinus} from 'react-icons/ai'
import {MdOutlineAttractions} from 'react-icons/md'
import {GiPerson} from 'react-icons/gi'
import { Calendar , DateRange } from 'react-date-range';
import { useState } from 'react'
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'

const Header = ({type}) => {
    
    const navigate = useNavigate()
    const [destination , setDestination] = useState('')
    const [openDate , setOpenDate] = useState(false)
    const [date , setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }
    ])

    const [openOptions , setOpenOptions] = useState(false)
    const [options , setOptions] = useState({
        adult:1,
        children:0,
        room:1
    })

    const handleOption = (name,operation)=>{
        setOptions({
            ...options,
            [name]: operation === 'i' ? options[name] + 1 : options[name] - 1
        })
    }

    const handleSearch = async()=>{
        navigate("/hotels" , {state:{destination , date , options}})
    }

  return (
    <div className='header'>
        <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
            <div className="headerList">
                <div className="headerListItem active">
                    <FaBed fontSize='24px'/>
                    <span>Stays</span>
                </div>
                <div className="headerListItem">
                    <TiPlane fontSize='28px'/>
                    <span>Flights</span>
                </div>
                <div className="headerListItem">
                    <AiFillCar fontSize='24px'/>
                    <span>Car rentals</span>
                </div>
                <div className="headerListItem">
                    <MdOutlineAttractions fontSize='27px'/>
                    <span>Attractions</span>
                </div>
                <div className="headerListItem">
                    <FaTaxi fontSize='24px'/>
                    <span>Airport taxis</span>
                </div>
            </div>
          { type !== 'list' &&
          <>
          <h1 className="headerTitle">A lifetime of discounts? It's Genius</h1>
            <p className="headerDesc">
                Get rewarded for your travels - unlock instant savings of 10% or more with a free Lamabooking account
            </p>
            <button className='headerBtn'>Sign in / Register</button>
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FaBed className='headerIcon'/>
                    <input type="text" 
                    placeholder='where are you going' className='headerSearchInput'
                    onChange={(e)=>setDestination(e.target.value)}
                    />
                </div>
                <div className="headerSearchItem">
                    <FaRegCalendarAlt className='headerIcon'/>
                    <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate , "MM/dd/yyyy") }`}</span>
                  {openDate &&  <DateRange 
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    minDate={new Date()}
                    className="date"
                    />}
                </div>
                <div className="headerSearchItem">
                    <GiPerson className='headerIcon'/>
                    <span onClick={()=>setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult ${options.children} children ${options.room} room `}</span>
                    { openOptions && <div className="options">
                        <div className="optionItem">
                            <span className="optionText">Adult</span>
                            <div className="optionCounter">
                            <button disabled={options.adult <=1 } className='optionCounterButton' onClick={()=>handleOption("adult","d")} ><AiOutlineMinus/></button>
                            <span className="optionCounterNumber">{options.adult}</span>
                            <button className='optionCounterButton' onClick={()=>handleOption("adult","i")} ><AiOutlinePlus/></button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Children</span>
                            <div className="optionCounter">
                            <button disabled={options.children <=0 }className='optionCounterButton' onClick={()=>handleOption("children","d")} ><AiOutlineMinus/></button>
                            <span className="optionCounterNumber">{options.children}</span>
                            <button className='optionCounterButton' onClick={()=>handleOption("children","i")} ><AiOutlinePlus/></button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Room</span>
                            <div className="optionCounter">
                            <button disabled={options.room <=1} className='optionCounterButton' onClick={()=>handleOption("room","d")} ><AiOutlineMinus/></button>
                            <span className="optionCounterNumber">{options.room}</span>
                            <button className='optionCounterButton' onClick={()=>handleOption("room","i")} ><AiOutlinePlus/></button>
                            </div>
                        </div>
                    </div>
                    }
                </div>
                <div className="headerSearchItem">
                    <button className='headerBtn' onClick={handleSearch}>Search</button>
                </div>
            </div>
            </>
            }
        </div>
    </div>
  )
}

export default Header
