import axios from "axios";


const baseURL = process.env.NODE_ENV === "production"
  ? 'https://omega-2-git-main-maliksakin53gmailcoms-projects.vercel.app'
  : 'http://localhost:5000';

const axiosPublic = axios.create({
    baseURL,
    withCredentials:true
});



const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;