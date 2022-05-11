import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_URL;

const token = localStorage.getItem("token");

let headers = {};

if (token) {
  headers.Authorization = `Token ${token}`;
}

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers,
});

export default axiosInstance;
