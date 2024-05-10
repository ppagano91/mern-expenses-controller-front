import axios from 'axios';
import { BASE_URL } from "../../utils/url";

export const loginAPI = async({email, password}) => {
    const response = await axios.post(`${BASE_URL}/users/login`,{
        email: email,
        password: password 
    })

    return response.data
}

