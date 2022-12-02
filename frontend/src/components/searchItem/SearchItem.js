import './searchItem.css'
import { Link } from 'react-router-dom'

const SearchItem = ({hotel}) => {
    return (
        <div className="searchItem">
            <img
                src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjBSb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="siImg"
            />
            <div className="siDesc">
                <h1 className='siTitle'>{hotel.name}</h1>
                <span className="siDistance">{hotel.distance}m from center</span>
                <span className="siTaxiOp">Free airport Taxi</span>
                <span className="siSubtitle">
                    Studio Apartment with Air conditioning
                </span>
                <span className="siFeatures">
                    {hotel.desc}
                </span>
                <span className="siCancelOp">Free cancellation</span>
                <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="siDetails">
               {hotel.rating && <div className="siRating">
                    <span>Excellent</span>
                    <button>{hotel.rating}</button>
                </div>}

                <div className="siDetailTexts">
                    <span className="siPrice">${hotel.cheapestPrice}</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <Link to={`/hotels/${hotel._id}`} >
                    <button className="siCheckButton" >See availability</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SearchItem