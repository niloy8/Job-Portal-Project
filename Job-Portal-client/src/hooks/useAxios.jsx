import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";

const secureAxios = axios.create({
    // ... other options ...
    baseURL: 'http://localhost:3000',
    withCredentials: true
})


const useAxios = () => {
    const { signOutuser } = useAuth()
    const navigate = useNavigate()
    useEffect(() => {
        secureAxios.interceptors.response.use(res => {
            return res
        }, err => {
            console.log("Error catght in interceptor ", err)
            if (err.response.status === 401 || err.response.status === 403) {
                signOutuser()
                    .then(() => {
                        console.log("User signed out")
                        navigate('/signin')
                    })
                    .catch(err => console.log(err))
            }
            return Promise.reject(err)
        })
    }, [signOutuser, navigate])
    return secureAxios;
};

export default useAxios;