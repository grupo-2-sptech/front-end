import axios from "axios";

const api = axios.create({
baseURL: "http://44.193.16.48:8080",
});

export default api;