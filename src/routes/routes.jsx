import { createBrowserRouter } from "react-router-dom";
import Template from "../views/Template";
import Login from "../views/Login/Login";
import Signup from "../views/Signup/Signup";
import User from "../views/User/User";

export const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                index: true,
                element: <Template />,
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/user',
                element: <User />
            }
            
        ]
    },
    // {
    //     path: '*',
    //     element: <NotFound />,
    // },

])