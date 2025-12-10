import axios from "axios";
import { Base_URL } from "./config";

const api = axios.create({
  baseURL: Base_URL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;





// export const api = async (url: string, options:RequestInit ={}) => {
//     return fetch(Base_URL + url,{
//         credentials: "include",
//         headers: {
//             "Content-Type": "application/json",
//             ...(options.headers || {}),
//         },
//         ...options,
//     }).then(async (res) => {
//         if (!res.ok) {
//             const error = await res.text();
//             throw new Error(error || "Request Failed")
//         }
//         return res.json();
//     })
// }
