import './hotel.css'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import { MdLocationOn } from 'react-icons/md'
import { AiFillLeftCircle, AiFillRightCircle,AiFillCloseCircle} from 'react-icons/ai'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { Navigate, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import searchContext from '../../context/searchContext/SearchContext'
import {baseUrl} from '../../constants/baseUrl'
import { useNavigate } from 'react-router-dom'
import Reserve from '../../components/reserve/Reserve'
import AuthContext from '../../context/AuthContext/authContext'

const Hotel = () => {

    const [slideNumber, setSlideNumber] = useState(0)
    const [open, setOpen] = useState(false)
    const [openModal, setOpenModal] = useState(false)
   
    const navigate = useNavigate()

    const location = useLocation()
    
    const id = location.pathname.split("/")
    const { state : { date , options}} = useContext(searchContext)
    const  { state : { user }} = useContext(AuthContext)
    
    var date1 = new Date(date[0].endDate);  
    var date2 = new Date(date[0].startDate);  

        var difff = date2.getTime() - date1.getTime();   
         var result = difff / 86400000 ;  
  
    
    const { data , loading , error } = useFetch(`${baseUrl}/hotel/find/${id[id.length-1]}`)
  const handleOpen = (i)=>{
    setSlideNumber(i)
    setOpen(true)
  }

  const handleMove = (move)=>{
    let newSlideNumber

    if(move === 'l'){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1
    }
    else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
    }
    setSlideNumber(newSlideNumber)
  }

  const handleClick = ()=>{
    if(user){
      setOpenModal(true)
    }
    else{
      navigate("/login")
    }
  }

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
    <div className="hotelContainer">
       {open && <div className="slider">
          <AiFillCloseCircle className='close' onClick={()=>setOpen(false)}/>
          <AiFillLeftCircle onClick={()=>handleMove("l")} className='arrowleft'/>
          <div className="sliderWrapper">
            <img src={data?.photos[slideNumber]} alt="" className='sliderImg'/>
          </div>
          <AiFillRightCircle onClick={()=>handleMove("r")} className='arrowright'/>
        </div>
        }
     { loading ? "Loading"  :   <div className="hotelWrapper">
          <button onClick={handleClick} className='bookNow'>Reserve or Book Now!</button>
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <MdLocationOn/>
              <span>{data?.city},</span>
              <span>{data?.address}</span>
            </div>
            <span className="hotelDistance">
              Excellent location - {data?.distance}m from center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over ${data?.cheapestPrice} at this property and get a free airport taxi
            </span>
            <div className="hotelImages">
                {data?.photos?.map((photo,i)=>(
                  <div key={i} className="hotelImgWrapper">
                    <img key={i} onClick={()=>handleOpen(i)} src={photo} className="hotelImg" />
                  </div>
                ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
              <h1 className='hotelTitle'>{data?.title}</h1>
                  <p className="hotelDesc">
                 {data?.desc}
                  </p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a -night stay!</h1>
                <span>
                  Located in the real heart of krakow, this property has an excellent location score of 9.81
                </span>
         <h2>
                 <b>${JSON.stringify(result).substr(1) * data?.cheapestPrice * options?.room} { " " } </b> ( {JSON.stringify(result).substr(1)} nights) 
                </h2>
                <button onClick={handleClick} >Reserve or Book Now!</button>
              </div>
            </div>
          </div>}
          <MailList/>
          <Footer/>
      </div>
      {
        openModal && <Reserve setOpenModal={setOpenModal} hotelId={id[id.length-1]}/>
      }
    </div>
  )
}

export default Hotel
