import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Exams from "../pages/Exams";
import Profile from "../pages/Profile";
import Auth from "../pages/Auth";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/auth",
        element: <Auth />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/exams",
        element: <Exams />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/profile",
        errorElement: <ErrorPage />,
        element: <Profile />,
    },
]);

const MyRoutes = () => {
    return <RouterProvider router={router} />;
};

export default MyRoutes;
