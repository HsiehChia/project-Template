import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8080'

export const getPageApi = () => axios.get(baseUrl)

export const getUserApi = () => axios.get(baseUrl + '/user')