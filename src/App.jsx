import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Goal from "./Pages/Goal/Goal";
function App() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/register",
            element: <Register />,
        },
        {
            path: "/forgot/password",
            element: <ForgotPassword />,
        },
        {
            path: "/dashboard",
            element: <Dashboard />,
        },
        {
            path: "/goal",
            element: <Goal/> ,
        },
      
    ]);

    return (
        <>
            <RouterProvider router={routes} />
        </>
    );
}

export default App;
