import React , {useContext} from 'react'
import './navbar.scss'
import {SearchOutlined , LanguageOutlined , DarkModeOutlined , FullscreenExitOutlined , NotificationsNoneOutlined , ChatBubbleOutlineOutlined , ListOutlined} from '@mui/icons-material';
import {DarkModeContext } from '../../context/darkModeContext'

const Navbar = () => {

  const { dispatch } = useContext(DarkModeContext)

  return (
    <div className='navbar'>
      <div className="wrapper">
          <div className="search">
            <input type="text" placeholder='Search...' />
            <SearchOutlined className="icon"/>
          </div>
          <div className="items">
            <div className="item">
              <LanguageOutlined className="icon"/>
              English
            </div>
            <div className="item">
              <DarkModeOutlined className="icon" onClick={()=>dispatch({type:"TOGGLE"})}/>
            </div>
            <div className="item">
              <FullscreenExitOutlined className="icon"/>
            </div>
            <div className="item">
              <NotificationsNoneOutlined className="icon"/>
              <div className="counter">1</div>
            </div>
            <div className="item">
              <ChatBubbleOutlineOutlined className="icon"/>
              <div className="counter">2</div>
            </div>
            <div className="item">
              <ListOutlined className="icon"/>
            </div>
            <div className="item">
             <img src="https://res.cloudinary.com/cdf/image/upload/v1664591550/1664517644727_2_x2jihe.jpg" 
             alt="" className="avatar" />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar