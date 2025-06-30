import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";


const router = createBrowserRouter([
    {
        path: "/",
        element: <div className="text-amber-300">Hello World</div>,
    },
]);

export default router
