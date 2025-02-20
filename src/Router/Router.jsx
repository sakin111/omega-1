
import Home from '../Component/Home/Home/Home';
import Slider from '../Component/Home/Home/Slider/Slider';
import SliderDetails from '../Component/Home/Home/Slider/SliderDetails';
import Booking from '../Component/Page/Booking/Booking';
import Login from '../Component/Page/Login/Login';
import Rooms from '../Component/Page/Rooms/Rooms';
import Signup from '../Component/Page/Signup/Signup';
import AddItem from '../Component/Shared/Dashboard/AddItem/AddItem';
import Dashboard from '../Component/Shared/Dashboard/Dashboard';
import Users from '../Component/Shared/Dashboard/Users/Users';
import Main from '../Main/Main';

import {
    createBrowserRouter,
} from "react-router-dom";
import AdminRoute from './AdminRoute';
import ErrorPage from '../Component/Shared/ErrorPage/ErrorPage';
import RoomDetailsAll from '../Component/Page/Rooms/RoomDetailsAll';
import Profile from '../Component/Shared/Profile/Profile';




const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            },
            {
                path: "/slider",
                element: <Slider></Slider>,
            },
            {
                path: "/slider/:id",
                element: <SliderDetails></SliderDetails>,
                loader: ({ params }) => fetch(`https://omega-2-git-main-maliksakin53gmailcoms-projects.vercel.app/slider/${params.id}`)
            },
            {
                path: "/booking",
                element: <Booking></Booking>
            },
            {
                path: "/rooms",
                element: <Rooms></Rooms>
            },
            {
                path: "/rooms/:id",
                element: <RoomDetailsAll></RoomDetailsAll>,
                loader:({params}) => fetch(`https://omega-2-git-main-maliksakin53gmailcoms-projects.vercel.app/rooms/${params.id}`)
            },
          
            {
                path: "/profile/:id",
                element: <Profile />,
              }

        ]
    },

    {
        path: '/dashboard',
        element:<Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboard/',
                element: <Home></Home>
            },
            {
                path: '/dashboard/addItems',
                element: <AddItem></AddItem>
            },
            {
                path: '/dashboard/users',
                element: <AdminRoute><Users></Users></AdminRoute>  
            },
           

        ]
           
    }
]);


export default router











