import axios from "axios";

const apiRequest = axios.create({
  baseURL: "http://localhost:2000/api",
  withCredentials: true,
});

export default apiRequest;