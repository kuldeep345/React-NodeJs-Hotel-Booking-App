import AuthContext from "./authContext";
import { useEffect, useReducer } from "react";

const initialState = {
    user:JSON.parse(localStorage.getItem("user")) || null,
    loading:false,
    error:null
}

const AuthReducer = (state , action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user:null,
                loading:true,
                error:null
            }

        case "LOGIN_SUCCESS":
            return {
                user:action.payload,
                loading:false,
                error:null
            }

        case "LOGIN_FAIL":
            return {
                user:null,
                loading:true,
                error:action.payload
            }

        case "LOGOUT":
            return {
                user:null,
                loading:false,
                error:null
            }
    
        default:
            return state;
    }
}

export const AuthContextProvider = ({children})=>{
    const [state , dispatch ] = useReducer(AuthReducer , initialState)


    useEffect(() => {
      localStorage.setItem("user", JSON.stringify(state.user))
    }, [state])
    

    return (
        <AuthContext.Provider
        value = {{state , dispatch}}
        >
            {children}
        </AuthContext.Provider>
    )
}