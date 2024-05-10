import axios from 'axios';
import { BASE_URL } from "../../utils/url";
import { getTokenFromStorage } from '../../utils/getTokenFromStorage';

const token = getTokenFromStorage()

export const addCategoryAPI = async({name, type}) => {

    const response = await axios.post(`${BASE_URL}/categories/create`,{
        name,
        type 
    },{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })

    return response.data
}

export const listCategoriesAPI = async() => {
    const response = await axios.get(`${BASE_URL}/categories/list`)

    return response.data
}

