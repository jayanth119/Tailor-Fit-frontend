import { useState,useEffect } from "react";
import bgcenter from "../../assets/images/bgcenter.png"
import MainLogo from "../../components/ui/mainlogo";
import NavItems from "../../components/ui/navitems";
import BgCenter from "../../components/ui/centrepic";
import Glass from "../../components/ui/glass";
import AuthBackground from "../../components/ui/authbackgeound";
const LoginScreen=()=>{
    const [hovered,setHovered]=useState(null);
    const navItems=['Trending','Customizing','Precision','Elegance'];
    useEffect(()=>{
        const interval=setInterval(()=>{
            setHovered((prev)=>(prev+1)%navItems.length);
        },1500);
        return()=>clearInterval(interval);
    },navItems);
    return(
        <AuthBackground>
            <Glass/>
        </AuthBackground>
        
        
    )
}
export default LoginScreen;