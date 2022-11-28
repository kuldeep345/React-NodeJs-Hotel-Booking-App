import './feature.css'

const Feature = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
          <img src="https://images.unsplash.com/photo-1549918864-48ac978761a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHVibGlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="featuredImg"/>
          <div className="featuredTitles">
            <h1>Dublin</h1>
            <h1>123 properties</h1>
          </div>
        </div>
        <div className="featuredItem">
          <img src="https://images.unsplash.com/photo-1557335200-a65f7f032602?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QXVzdGlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="featuredImg"/>
          <div className="featuredTitles">
            <h1>Austin</h1>
            <h1>523 properties</h1>
          </div>
        </div>
        <div className="featuredItem">
          <img src="https://images.unsplash.com/photo-1547406683-406f8a8d6cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8JTIzcmVub3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="featuredImg"/>
          <div className="featuredTitles">
            <h1>Reno</h1>
            <h1>533 properties</h1>
          </div>
        </div>
    </div>
  )
}

export default Feature
