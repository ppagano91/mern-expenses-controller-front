import React from 'react'
import { Navigate } from 'react-router-dom';
import { getTokenFromStorage } from '../../utils/getTokenFromStorage';


const AuthRoute = ({children}) => {
    const token = getTokenFromStorage();
    if(token){
        return children
    } else {
        return <Navigate to={"/login"}/>
    }
}

export default AuthRoute