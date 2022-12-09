import { baseUrl } from '../../constants/baseUrl'
import useFetch from '../../hooks/useFetch'
import './feature.css'

const Feature = () => {

  const { data , loading , error } = useFetch(`${baseUrl}/hotels/countByCity?cities=berlin,dublin,austin`)


  return (
    <div className='featured'>
        <div className="featuredItem">
          <img src="https://images.unsplash.com/photo-1549918864-48ac978761a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHVibGlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="featuredImg"/>
          <div className="featuredTitles">
            <h1>Berlin</h1>
            <h1>{data[0]} properties</h1>
          </div>
        </div>


        <div className="featuredItem">
          <img src="https://images.unsplash.com/photo-1547406683-406f8a8d6cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8JTIzcmVub3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="featuredImg"/>
          <div className="featuredTitles">
            <h1>Dublin</h1>
            <h1>{data[1]}  properties</h1>
          </div>
        </div>

        <div className="featuredItem">
          <img src="https://images.unsplash.com/photo-1557335200-a65f7f032602?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QXVzdGlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="featuredImg"/>
          <div className="featuredTitles">
            <h1>Austin</h1>
            <h1>{data[2]}  properties</h1>
          </div>
        </div>
       
    </div>
  )
}

export default Feature
