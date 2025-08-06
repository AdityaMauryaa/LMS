import axios from "axios";

// Environment-based BASE_URL (ensure VITE_API_BASE_URL is set in your `.env`)
const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api/v1";
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export default axiosInstance;
