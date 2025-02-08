//react imports
import { useState,useEffect } from "react";

//components
import Glass from "../../components/ui/glass";
import AuthBackground from "../../components/ui/authbackgeound";
//utils


//main component
const LoginScreen=()=>{
    //hooks
    const [hovered,setHovered]=useState(null);
    const navItems=['Trending','Customizing','Precision','Elegance'];

    useEffect(()=>{
        const interval=setInterval(()=>{
            setHovered((prev)=>(prev+1)%navItems.length);
        },1500);
        return()=>clearInterval(interval);
    },navItems);

    return(
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <AuthBackground>
                <Glass/>
            </AuthBackground>
            
        </div>
    );
}
export default LoginScreen;