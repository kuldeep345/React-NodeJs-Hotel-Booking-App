import useFetch from '../../hooks/useFetch'
import './propertylist.css'
import { baseUrl } from '../../constants/baseUrl'
import { useEffect, useState } from 'react'
import axios from 'axios'


const PropertyList = () => {

    const [ data , setdata ] = useState([])
    const [ loading , setLoading ] = useState(false)
    // const { data , loading , error } = useFetch(`${baseUrl}/hotels/countByType`)

    useEffect(() => {
      const fetchData = async()=>{
        setLoading(true)
       const res =  await axios.get(`${baseUrl}/hotels/countByType`)
        setdata(res.data)
        setLoading(false)
      }

      fetchData()
    }, [])
    
   
    console.log(data)

    const images = [
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXBwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVzb3J0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" ,
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHZpbGxhcyUyMHdpdGglMjBwb29sfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" ,
        "https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FiaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    ]

  return (
    <div className="pList">
      {loading ? "loading..." : <>
       {data && data.map((item,i)=>(
        <div className="pListItem" key={i}>
            <img src={images[i]} alt=""  className='plistImg'/>
            <div className="pListTitles">
                <h1>{item.type}</h1>
                <h2>{item.count} {item.type}s</h2>
            </div>
        </div>
       )) }
        </>}
    </div>
  )
}

export default PropertyList