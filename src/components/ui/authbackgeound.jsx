import { useState,useEffect } from "react";
import bgcenter from '../../assets/images/bgcenter.png';
import MainLogo from "./mainlogo";
import NavItems from "./navitems";
import Shop from "./Shop";
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
        <div className='bg-radient-colour w-full h-screen'>{/*hidden md:block*/}
            <div className="flex flex-col md:flex-row w-full h-full relative md:gap-[37.5%]">
                <div className="hidden md:flex flex-col w-[30%] h-full p-5 justify-start items-center">
                    <MainLogo/>
                    <Shop navItems={navItems}/>
                    <BgCenter bgcenter={bgcenter}/>
                </div>
                {children}
            </div>
        </div>
    )
}
export default AuthBackground;