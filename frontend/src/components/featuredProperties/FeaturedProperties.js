import './featuredProperties.css'
import useFetch from '../../hooks/useFetch'
import { baseUrl } from '../../constants/baseUrl'

const FeaturedProperties = () => {

    const { data , loading , error} = useFetch(`${baseUrl}/hotels?/featured=true&limit=4`)

    

  return (
    <div className='fp'>
       {loading ? "Loading" : <>
      { 
      data.map((item)=>(      
       <div className="fpItem" key={item._id}>
        <img src={item.photos[0]}  alt='' className='fpImg'/>
        <span className="fpName">{item.name}</span><br/>
        <span className="fpCity">{item.city}</span><br/>
        <span className="fpPrice">Starting from ${item.cheapestPrice}</span><br/>
      {item.rating && <div className="fpRating">
            <button>{item.rating}</button>
            <span>Excellent</span>
         </div>}
        </div>
        ))
        }
        </>
        }
    </div>
  )
}

export default FeaturedProperties