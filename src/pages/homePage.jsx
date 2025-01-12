import { useState,useEffect } from "react";
import bgcenter from '../assets/images/bgcenter.png'
import MainLogo from "../components/ui/mainlogo";
import NavItems from "../components/ui/navitems";
import BgCenter from "../components/ui/centrepic";
import Glass from "../components/ui/glass";
const HomePage=()=>{
    const [hovered,setHovered]=useState(null);
    const navItems=['Trending','Customizing','Precision','Elegance'];
    useEffect(()=>{
        const interval=setInterval(()=>{
            setHovered((prev)=>(prev+1)%navItems.length);
        },1500);
        return()=>clearInterval(interval);
    },navItems);
    return(
        <div className="flex flex-row w-full h-full relative gap-[35%]">
        <div className="flex flex-col w-[30%] h-full p-5 justify-start items-center">
            {/* Main Head */}
            <MainLogo/>
            {/* Navbar  */}
            <NavItems navItems={navItems} hovered={hovered}/>
            {/* centrePic  */}
           <BgCenter bgcenter={bgcenter}/>
        </div>
        <Glass/>
        </div>
    )
}
export default HomePage;