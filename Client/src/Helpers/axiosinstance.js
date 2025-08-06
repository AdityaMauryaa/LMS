import axios from "axios";

// Environment-based BASE_URL (ensure VITE_API_BASE_URL is set in your `.env`)
const BASE_URL = "https://lms-sandy-psi.vercel.app/api/v1";
console.log("VITE_API_BASE_URL:", import.meta.env.VITE_API_BASE_URL);
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export default axiosInstance;
