import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import Register from "../register/Register";
import Signin from "../pages/signin/Signin";
import Jobdetail from "../pages/JobDetails/Jobdetail";
import PrivateRoute from "./PrivateRoute";
import JobAplly from "../pages/JobAplly";
import Myapplication from "../pages/Myapplication";
import Jobpost from "../pages/JobPost/Jobpost";
import Mypostedjobs from "../pages/MyPostedJobs/Mypostedjobs";
import ViewApplications from "../pages/View Applications/ViewApplications";
import Alljobs from "../pages/Alljobs/Alljobs";


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
                path: "/allJobs",
                element: <Alljobs></Alljobs>
            },
            {
                path: "/jobs/:id",
                element: <PrivateRoute><Jobdetail></Jobdetail></PrivateRoute>,
                loader: ({ params }) => fetch(`https://job-server-side.vercel.app/jobs/${params.id}`)
            },
            {
                path: "/jobapply/:id",
                element: <PrivateRoute><JobAplly></JobAplly></PrivateRoute>
            },
            {
                path: '/my-aaplication',
                element: <PrivateRoute> <Myapplication></Myapplication></PrivateRoute>
            },
            {
                path: '/job-post',
                element: <PrivateRoute><Jobpost></Jobpost></PrivateRoute>
            },
            {
                path: '/my-posted-jobs',
                element: <PrivateRoute><Mypostedjobs></Mypostedjobs></PrivateRoute>
            },
            {
                path: '/viewapplications/:job_id',
                element: <PrivateRoute> <ViewApplications></ViewApplications></PrivateRoute>,
                loader: ({ params }) => fetch(`https://job-server-side.vercel.app/jobs-application/jobs/${params.job_id}`)
            },
            {
                path: "/register",
                element: <Register></Register>

            },
            {
                path: "signin",
                element: <Signin></Signin>
            }
        ]
    },
]);

export default router
