import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:8000", // Replace with your base URL http://localhost:5173
});
const useAxiosSecure = () => {
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          navigate("/"); // Redirect to the home page
        }
        return Promise.reject(error);
      }
    );
  }, [navigate]);

  return [axiosSecure];
};

export default useAxiosSecure;
