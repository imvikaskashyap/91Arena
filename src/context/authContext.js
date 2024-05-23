'use client'
import { createContext, useState } from "react";

const AuthContext = createContext({})


const AuthProvider = ({ children }) => {
    const [data, setData] = useState({
        name: '',
        email: '',
        userName: '',
        phone: '',
        password: '',
        accessToken:null
    });

    return (
        <AuthContext.Provider value={{data,setData}}>
            {children}
        </AuthContext.Provider>
    )
}

export {  AuthContext, AuthProvider }