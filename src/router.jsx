{/*import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./views/login";
import Signup from "./views/Signup";
import Users from "./views/users";
import PageNotFound from "./views/PageNotFound";
import DefaultLayout from "./components/DefaultLayout";




const router = createBrowserRouter([
    {
        path:'/',
        element:<DefaultLayout />,
        children:[
           {
               path:'/',
               element: <Navigate to="/Users" />
            },
            {
                path:'/dashboard',
            element:<Dashboard />
            },
           {
               path:'/Users',
                element:<Users />
           }
        ]
    },
    {
       path:'/',
        element:<GuestLayout />,
       children:[
            {
                path:'/Login',
                element:<Login />
            }
            {
                path:'/signUp',
                element:<Signup />
            }
        ]
    },
    {
       path:'*',
        element:<PageNotFound />

    }


]);

export default router