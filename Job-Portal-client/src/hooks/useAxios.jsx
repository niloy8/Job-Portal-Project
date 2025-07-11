import axios from "axios";

const secureAxios = axios.create({
    // ... other options ...
    baseURL: 'http://localhost:3000',
    withCredentials: true
})

const useAxios = () => {
    return secureAxios;
};

export default useAxios;