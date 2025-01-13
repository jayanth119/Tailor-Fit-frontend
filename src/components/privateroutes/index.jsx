import { Navigate,useLocation,Outlet } from "react-router-dom";
// import { useUseAuth } from "@/context/userAuthContex";

export function PrivateRoute (){
    const location = useLocation();
    return (
        <>
            {/* state is use to pass the data  */}
            {
                true?(<Outlet/>):<Navigate to={"/login"} state={{from : location}}/>
            }
        </>
    );
}