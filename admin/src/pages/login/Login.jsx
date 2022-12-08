import React, { useContext, useState } from 'react'
import { baseUrl } from '../../constants/baseUrl'
import AuthContext from '../../context/AuthContext/authContext'
import './login.scss'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { parseCookies } from 'nookies'

const Login = () => {

    const [ credentials , setCredentials  ] = useState({
        username:undefined,
        password:undefined
    })

    const { state:{user, loading, error } , dispatch } = useContext(AuthContext)


    const handleOnChange = (e)=>{
        setCredentials({
            ...credentials,
            [e.target.id]:e.target.value
        })
    }

    const navigate = useNavigate()

    const handleOnClick = async(e)=>{
        e.preventDefault()
        dispatch({type:"LOGIN_START"})
        try {
            const res = await axios.post(`${baseUrl}/auth/login`, credentials)
            dispatch({ type:'LOGIN_SUCCESS' , payload:res.data })
            Cookies.set('token', res.data.token)
            Cookies.set('isAdmin', res.data.isAdmin)
            Cookies.set('otherDetails', JSON.stringify(res.data.otherDetails))

            navigate("/")
        } catch (error) {
            dispatch({ type:'LOGIN_FAILURE' , payload:error.response.data})
        }
    }

  return (
    <div className='login'>
        <div className="loginContainer">
            <input type="text" placeholder="Email Address" id="email" onChange={handleOnChange} className="loginInput"/>
            <input type="password" placeholder='password' id='password' onChange={handleOnChange} className="loginInput"/>
            <button onClick={handleOnClick} className='loginButton'>Login</button>
        {error && <span>{error.message}</span>}
        </div>
        
    </div>
  )
}

export default Login