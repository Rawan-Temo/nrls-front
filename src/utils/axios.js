import axios from "axios";

export const baseURL = `http://127.0.0.1:8000/api/`;

const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

export default axiosInstance;
