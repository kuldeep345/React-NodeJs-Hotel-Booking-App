import "./newRoom.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { roomInputs } from "../../formSource";
import axios from 'axios'
import { baseUrl } from "../../constants/baseUrl";
import { useEffect } from "react";
import { parseCookies } from 'nookies'

const NewRoom = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});
  const [hotels, setHotels] = useState([]);
  const [rooms, setRooms] = useState([]);

  const [ hotelId , setHotelId] = useState(undefined)
  
  console.log(info)
  const {token} = parseCookies()

  const handleOnChange = (e)=>{
    setInfo({
      ...info,
      [e.target.name]:e.target.value
    })
  }

  useEffect(() => {
    const fetchHotels = async()=>{
      const res = await axios.get(`${baseUrl}/hotels`)
      setHotels(res.data)
    } 

    fetchHotels()

  }, [])


  const handleClick = async (e)=>{
    e.preventDefault()

    const roomNumbers = rooms.split(',').map(room => ({number:room}))

    try {
      await axios.post(`${baseUrl}/rooms/${hotelId}`, {...info , roomNumbers} ,  {
        headers:{
          token:token
        }
      }
        )
    } catch (error) {
      console.log(error)
    }

  }
  

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
    
          <div className="right">
            <form>
         
              {roomInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} name={input.text} placeholder={input.placeholder} onChange={handleOnChange}/>
                </div>
              ))}

              <div className="formInput">
                  <label>Rooms</label>
                  <textarea onChange={e=>setRooms(e.target.value)} placeholder="give a comma between roomNumbers"></textarea>
              </div>

                <div className="formInput">
                  <label>Choose a hotel</label>
                  <select id="hotelId" onChange={e=>setHotelId(e.target.value)}>
                    {hotels && hotels?.map(hotel=>(
                        <option key={hotel._id} value={hotel._id}>{hotel.name}</option>
                    ))}
                  </select>
                </div>

              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRoom;
