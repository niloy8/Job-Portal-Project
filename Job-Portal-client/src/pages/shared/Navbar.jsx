import { NavLink } from "react-router";
import { AuthContext } from "../../context/AuthProvider/AuthContext";
import { useContext } from "react";
import logo from '../../assets/logo.png';
const Navbar = () => {
    const { user, signOutuser } = useContext(AuthContext);
    const handleSignOut = () => {
        signOutuser()
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.error(error);
            })
    }
    const link = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/my-aaplication">My Apllication</NavLink></li>
        <li><NavLink to="/job-post">Job Post</NavLink></li>
        <li><NavLink to="/my-posted-jobs">My Posted Jobs</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {link}
                        </ul>
                    </div>
                    <img src={logo} className="m-3" alt="" />
                    <NavLink to="/" className="btn btn-ghost text-xl">Job Portal</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? <><button onClick={handleSignOut} className="btn">Log Out</button></> : <>
                        <NavLink to="/register" className="btn">Register</NavLink>
                        <NavLink to="/signin" className="btn">Sign In</NavLink></>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;