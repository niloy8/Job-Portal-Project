import { Outlet } from "react-router";
import Navbar from "../pages/shared/Navbar";

const Layout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;