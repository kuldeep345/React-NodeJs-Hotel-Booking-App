import { useEffect, useReducer } from 'react'
import searchContext from './SearchContext'

const initialState = {
    city:JSON.parse(localStorage.getItem("search")).city,
    date:JSON.parse(localStorage.getItem("search")).date,
    options:JSON.parse(localStorage.getItem("search")).options
}

const SearchReducer = (state,action) =>{
    switch (action.type) {
        case "NEW_SEARCH":

            return action.payload

        case "RESET_SEARCH":
            return initialState
    
        default:
            return state
    }
}


const SearchContextProvider = (props) => {

    const [ state , dispatch ] = useReducer(SearchReducer , initialState)
    console.log(state)
        useEffect(() => {
        localStorage.setItem("search", JSON.stringify(state))
    }, [state.date, state.city , state.options])
    

    return (
        <searchContext.Provider 
        value={{
            state , 
            dispatch 
        }}
        
        >
            {props.children}
        </searchContext.Provider>
    )

}

export default SearchContextProvider