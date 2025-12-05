// import axios from "axios";
import { Base_URL } from "./config"

export const api = async (url: string, options:RequestInit ={}) => {
    return fetch(Base_URL + url,{
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            ...(options.headers || {}),
        },
        ...options,
    }).then(async (res) => {
        if (!res.ok) {
            const error = await res.text();
            throw new Error(error || "Request Failed")
        }
        return res.json();
    })
}

export default api;



// const api = axios.create({
//     baseURL: "http://localhost:3000/api",
//     withCredentials: true,
// })