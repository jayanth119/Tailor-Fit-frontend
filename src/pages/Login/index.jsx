//react imports
import { useState,useEffect } from "react";

//components
import Glass from "../../components/ui/glass";
import AuthBackground from "../../components/ui/authbackgeound";
//utils


//main component
const LoginScreen=()=>{
    return(
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <AuthBackground>
                <Glass/>
            </AuthBackground>
        </div>
    );
}
export default LoginScreen;