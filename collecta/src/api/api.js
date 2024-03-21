import axios from "axios";

const api = axios.create({
baseURL: "http://3.92.74.224:8080",
});

export default api; 