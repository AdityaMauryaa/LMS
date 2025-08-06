import axios from "axios";

// Environment-based BASE_URL (ensure VITE_API_BASE_URL is set in your `.env`)
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
console.log("VITE_API_BASE_URL:", import.meta.env.VITE_BACKEND_URL);
const axiosInstance = axios.create({
  withCredentials: true,
});

export default axiosInstance;
