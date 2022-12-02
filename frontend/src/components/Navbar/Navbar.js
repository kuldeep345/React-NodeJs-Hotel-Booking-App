import './Navbar.css'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../../context/AuthContext/authContext'

const Navbar = () => {

  const { state:{user } } = useContext(AuthContext)


  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{textDecoration:"none", color:"white"}}><span className="logo">HotelBooking</span></Link>
       { user ? user.otherDetails.username :<div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
        </div>}
      </div>
    </div>
  )
}

export default Navbar
