import './hotel.css'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import { MdLocationOn } from 'react-icons/md'
import { AiFillLeftCircle, AiFillRightCircle,AiFillCloseCircle} from 'react-icons/ai'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { useState } from 'react'

const Hotel = () => {

    const [slideNumber, setSlideNumber] = useState(0)
    const [open, setOpen] = useState(false)

  const photos = [
    {
      src:"https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjBSb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      src:"https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBSb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      src:"https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjBSb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      src:"https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsJTIwUm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      src:"https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsJTIwUm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      src:"https://images.unsplash.com/photo-1557122764-dc9f8447fafb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY5fHxob3RlbCUyMFJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
  ]

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


  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
       {open && <div className="slider">
          <AiFillCloseCircle className='close' onClick={()=>setOpen(false)}/>
          <AiFillLeftCircle onClick={()=>handleMove("l")} className='arrowleft'/>
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className='sliderImg'/>
          </div>
          <AiFillRightCircle onClick={()=>handleMove("r")} className='arrowright'/>
        </div>
        }
          <div className="hotelWrapper">
          <button className='bookNow'>Reserve or Book Now!</button>
            <h1 className="hotelTitle">Grand Hotel</h1>
            <div className="hotelAddress">
              <MdLocationOn/>
              <span>Elton st 125 New york</span>
            </div>
            <span className="hotelDistance">
              Excellent location - 500m from  center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over $114 at this property and get a free airport taxi
            </span>
            <div className="hotelImages">
                {photos.map((photo,i)=>(
                  <div className="hotelImgWrapper">
                    <img onClick={()=>handleOpen(i)} src={photo.src} className="hotelImg" />
                  </div>
                ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
              <h1 className='hotelTitle'>Stay in the heart of krakow</h1>
                  <p className="hotelDesc">
                  The (HN) Hotel comprises five interconnected Victorian era buildings to form a 103 room hotel. All the rooms have been furnished with a blend of style and functionality in mind. Simple painted walls mean rooms feel light, while surfaces feature a dark wood veneer, such as bedheads, shelves and wardrobes. Each room has an en suite shower room tucked behind a white wooden door. 
                  </p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a 9-night stay!</h1>
                <span>
                  Located in the real heart of krakow, this property has an excellent location score of 9.81
                </span>
                <h2>
                  <b>$945</b> (9 nights)
                </h2>
                <button>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <MailList/>
          <Footer/>
      </div>
    </div>
  )
}

export default Hotel
