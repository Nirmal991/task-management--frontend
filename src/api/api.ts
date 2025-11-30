import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api",
    withCredentials: true,
})

export const loginRequest = (username: string, password: string) => {
  return api.post("/auth/login", {
    username: username, 
    password: password,
  });
};

export default api;