import './list.css'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/searchItem/SearchItem'
import useFetch from '../../hooks/useFetch'
import { baseUrl } from '../../constants/baseUrl'
import { useEffect } from 'react'
import searchContext  from '.././../context/searchContext/SearchContext'

const List = () => {

  const location = useLocation()

  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] = useState(location.state.options)
  const [min , setMax] = useState(undefined)
  const [max , setMin] = useState(undefined)
 


  const  {data , loading , error , refetch} = useFetch(`${baseUrl}/hotel?city=${destination}&min=${max || 0}&max=${min || 999}`)

  const {dispatch} = useContext(searchContext)

  
  const handleClick = ()=>{
    refetch()
    dispatch({type:"NEW_SEARCH" , payload:{ destination , date , options } })    
  }


  useEffect(() => {
   
  }, [data])

  const handleOnChange = (e)=>{
    setOptions({
      ...options, 
      [e.target.name] : e.target.value
    })
  }
  

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} onChange={(e)=>setDestination(e.target.value)} />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")} `}</span>
              {openDate && <DateRange
                onChange={(item) => setDate([item.selection])}
                minDate={new Date()}
                ranges={date}
              />}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptionItem">
                <span className="lsOptionText">Min price <small>per night</small></span>
                <input type="number" className='lsOptionInput' onChange={(e)=>setMin(e.target.value)} />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Max price <small>per night</small></span>
                <input type="number" className='lsOptionInput' onChange={(e)=>setMax(e.target.value)} />
              </div>
              <div className="lsOptionItem">
                Adult
                <input type="number" min={1} placeholder={options.adult}  className='lsOptionInput' name='adult' onChange={handleOnChange}/>
              </div>
              <div className="lsOptionItem">
                Children
                <input type="number" min={0} placeholder={options.children}  className='lsOptionInput' name='children' onChange={handleOnChange}/>
              </div>
              <div className="lsOptionItem">
                Room
                <input type="number" min={1} placeholder={options.room}  className='lsOptionInput' name='room' onChange={handleOnChange}/>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="listResult">
           {loading ? "loading" : <>
           {
            data.map((item)=>(
              <SearchItem key={item._id} hotel={item}/>
            ))
           } 
           </>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default List
