import axios from 'axios';

export const apiUrl = import.meta.env.VITE_API_URL;

const API = axios.create({
    baseURL: apiUrl,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const APIImage = axios.create({
    baseURL: apiUrl,
    withCredentials: true,
});

export default API;