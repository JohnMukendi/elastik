import Axios from 'axios'
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
console.log({baseUrl})
const axiosInstance = ()=>Axios.create({baseURL:baseUrl})
const axios = axiosInstance()
