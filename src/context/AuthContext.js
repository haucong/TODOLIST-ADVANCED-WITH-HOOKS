import React,{createContext, useEffect, useState} from 'react';
export const AuthContext = createContext();

const AuthContextProvider = ({children}) =>{
    const [isAuthenticated, setAuthentication] = useState(false)
    const toggleAuth = () => {
        setAuthentication(!isAuthenticated)
    }

    useEffect(() => {
        alert(isAuthenticated ? 'Loggin successfully' : 'You are logged out.Please Login to see todo')
    }, [isAuthenticated])

    const AuthenticatedData = {
      isAuthenticated,
      toggleAuth,
    }

    return (
        <AuthContext.Provider value={AuthenticatedData}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider