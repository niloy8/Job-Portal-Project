import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location)
    if (loading) {
        return <span className="loading loading-ring loading-lg"></span>
    }
    if (user) {
        return children
    }
    return <Navigate to="/signin" state={location?.pathname}></Navigate>
};

export default PrivateRoute;