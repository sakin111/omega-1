import { useNavigate } from "react-router-dom";
import axios from "axios";


const baseURL = process.env.NODE_ENV === "production"
  ? 'https://new-project-server-git-main-maliksakin53gmailcoms-projects.vercel.app'
  : 'http://localhost:5000';

const axiosSecure = axios.create({
    baseURL,
    withCredentials:true
});

const useAxiosSecure = () => {

    const navigate = useNavigate();

    axiosSecure.interceptors.request.use((config) => {
        const token = localStorage.getItem('access-token');
        if (token) {
            config.headers.authorization = `Bearer ${token}`;
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    axiosSecure.interceptors.response.use((response) => {
        return response;
    }, async (error) => {
        const status = error.response.status;
        if (status === 401 || status === 403) {
            console.log('Access denied');
            navigate('/login');
        }
        return Promise.reject(error);
    });

    return { axiosSecure, navigate };
};

export default useAxiosSecure;

