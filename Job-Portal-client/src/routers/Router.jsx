import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import Register from "../register/Register";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <h5>Route not found</h5>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/register",
                element: <Register></Register>

            }
        ]
    },
]);

export default router
