import React,{createContext, useEffect, useReducer, useState} from 'react';
import { AuthReducer } from '../Reducer/AuthReducer';
export const AuthContext = createContext();

const AuthContextProvider = ({children}) =>{
    // const [isAuthenticated, setAuthentication] = useState(false)
    // const toggleAuth = () => {
    //     setAuthentication(!isAuthenticated)
    // }
    const [isAuthenticated, dispatch] = useReducer(AuthReducer, false)
    useEffect(() => {
        alert(isAuthenticated ? 'Loggin successfully' : 'You are logged out.Please Login to see todo')
    }, [isAuthenticated])

    const AuthenticatedData = {
      isAuthenticated,
      dispatch
    }

    return (
        <AuthContext.Provider value={AuthenticatedData}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider