import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/Error";
import LoginScreen from "../pages/Login";
import SignUpPage from "../pages/signup";
import ProfileScreen from "../pages/profile/profile-screen";
import ForgotPasswordScreen from "../pages/authentication/forgotpassword";
import SetPasswordScreen from "../pages/authentication/setpassword";
import OTPScreen from "../pages/authentication/otp";
import SuccessScreenPass from "../pages/authentication/success-screen-password";
import Home from "../pages/home";
import Cart from "../pages/cart";
import { PrivateRoute } from "../components/privateroutes";
export const router = createBrowserRouter([
    {
        path:"/login",
        element:<LoginScreen/>,
        errorElement:<ErrorPage/>
    },
    {
        path:"/signup",
        element:<SignUpPage/>,
        errorElement:<ErrorPage/>
    },
    {
        path:"/forgot-password",
        element:<ForgotPasswordScreen/>,
        errorElement:<ErrorPage/>
    },
    {
        path:"/set-password",
        element:<SetPasswordScreen/>,
        errorElement:<ErrorPage/>
    },
    {
        path:"/otp",
        element:<OTPScreen/>,
        errorElement:<ErrorPage/>
    },
    {
        path:"/success",
        element:<SuccessScreenPass/>,
        errorElement:<ErrorPage/>
    },
    {
        path:"/profile",
        element:<ProfileScreen/>,
        errorElement:<ErrorPage/>
    },
    {
        element: <PrivateRoute/>,
        children : [
            {
                path: "/",
                element:<Home/>,
                errorElement:<ErrorPage/>
            },
            {
                path:"/cart",
                element:<Cart/>,
                errorElement:<ErrorPage/>
            },
        ],
    },

])