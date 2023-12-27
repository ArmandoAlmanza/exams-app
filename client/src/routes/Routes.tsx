import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import LandingPage from "../pages/LandingPage";
import ErrorPage from "../pages/ErrorPage";
import Exams from "../pages/Exams";
import Profile from "../pages/Profile";
import Auth from "../pages/Auth";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <LandingPage />,
            },
            {
                path: "/exams",
                element: <Exams />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
            {
                path: "/auth",
                element: <Auth />,
            },
        ],
    },
]);

const MyRoutes = () => {
    return <RouterProvider router={router} />;
};

export default MyRoutes;
