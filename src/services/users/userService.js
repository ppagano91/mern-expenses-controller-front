import axios from 'axios';
import { BASE_URL } from "../../utils/url";
import { getTokenFromStorage } from '../../utils/getTokenFromStorage';


const token = getTokenFromStorage();

export const loginAPI = async({email, password}) => {
    const response = await axios.post(`${BASE_URL}/users/login`,{
        email: email,
        password: password 
    })

    return response.data
}

export const registerAPI = async({username, email, password}) => {
    const response = await axios.post(`${BASE_URL}/users/register`,{
        username,
        email,
        password, 
    })

    return response.data
}

export const changePasswordAPI = async(newPassword) => {
    const response = await axios.put(`${BASE_URL}/users/change-password`,
    {
        newPassword, 
    },
    {
        headers:{ Authorization: `Bearer ${token}`}
    }
)

    return response.data
}


export const updateProfileAPI = async({username, email}) => {
    const response = await axios.put(`${BASE_URL}/users/update-profile`,
    {
        username,
        email, 
    },
    {
        headers:{ Authorization: `Bearer ${token}`}
    }
)

    return response.data
}

export const getProfileAPI = async () => {  
  const response = await axios.get(`${BASE_URL}/users/profile`,
    {
        headers:{ Authorization: `Bearer ${token}`}
    }
  );
  return response.data;
};