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
    const response = await axios.get(`${BASE_URL}/categories/list`,
    {
        headers:{
            Authorization: `Bearer ${token}`
        }
    })

    return response.data
}

export const categoryByIdAPI = async(id) => {
    const response = await axios.get(`${BASE_URL}/categories/category/${id}`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })

    console.log(response)

    return response.data
}

export const updateCategoryAPI = async({name, type, id}) => {
    const response = await axios.put(`${BASE_URL}/categories/update/${id}`,{
        name,
        type 
    },{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })

    return response.data
}

export const deleteCategoryAPI = async(id) => {
    const response = await axios.delete(`${BASE_URL}/categories/delete/${id}`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })

    return response.data
}