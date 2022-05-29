import axios from "axios";

const BASE_URL = 'https://netflix-api1209.herokuapp.com/api'
// const BASE_URL = 'http://localhost:3001/api'
export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
})