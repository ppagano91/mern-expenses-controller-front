import axios from 'axios';
import { BASE_URL } from "../../utils/url";
import { getTokenFromStorage } from '../../utils/getTokenFromStorage';

const token = getTokenFromStorage()

export const addTransactionAPI = async({type, amount, category, date, description}) => {

    const response = await axios.post(`${BASE_URL}/transactions/create`,{
        type,
        amount,
        category,
        date,
        description
    },
    {
        headers:{
            Authorization: `Bearer ${token}`
        }
    })

    return response.data
}

export const listTransactionsAPI = async() => {
    const response = await axios.get(`${BASE_URL}/transactions/list`,
    {
        headers:{
            Authorization: `Bearer ${token}`
        }
    })

    return response.data
}

export const transactionByIdAPI = async(id) => {
    const response = await axios.get(`${BASE_URL}/transactions/transaction/${id}`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })

    return response.data
}

export const updateTransactionAPI = async({name, type, id}) => {
    const response = await axios.put(`${BASE_URL}/transactions/update/${id}`,{
        name,
        type 
    },{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })

    return response.data
}

export const deleteTransactionAPI = async(id) => {
    const response = await axios.delete(`${BASE_URL}/transactions/delete/${id}`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })

    return response.data
}