import { useState,useEffect } from "react";
import bgcenter from '../../assets/images/bgcenter.png';
import MainLogo from "./mainlogo";
import NavItems from "./navitems";
import BgCenter from "./centrepic";

const AuthBackground=({children})=>{
    const [hovered,setHovered]=useState(null);
    const navItems=['Trending','Customizing','Precision','Elegance'];
    useEffect(()=>{
        const interval=setInterval(()=>{
            setHovered((prev)=>(prev+1)%navItems.length);
        },1500);
        return()=>clearInterval(interval);
    },navItems);
    return(
        <div className='bg-radient-colour w-screen h-screen'>
            <div className="flex flex-row w-full h-full relative gap-[35%]">
                <div className="flex flex-col w-[30%] h-full p-5 justify-start items-center">
                    {/* Main Head */}
                    <MainLogo/>
                    {/* Navbar  */}
                    <NavItems navItems={navItems} hovered={hovered}/>
                    {/* centrePic  */}
                <BgCenter bgcenter={bgcenter}/>
                </div>
                {children}
            </div>
        </div>
    )
}
export default AuthBackground;