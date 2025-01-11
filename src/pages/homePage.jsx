import { useState,useEffect } from "react";
import bgcenter from '../assets/images/bgcenter.png'

const HomePage=()=>{
    const [hovered,setHovered]=useState(null);
    const arr1=['Trending','Customizing','Precision','Elegance'];
    useEffect(()=>{
        const interval=setInterval(()=>{
            setHovered((prev)=>(prev+1)%arr1.length);
        },1500);
        return()=>clearInterval(interval);
    },arr1);
    return(
        <div className="flex flex-col w-full h-full p-3 justify-start items-start z-10 relative ">
            {/* Main Head */}
            <div className="flex flex-col w-1/4 h-1/6 items-center justify-center">
                <div className="font-main flex flex-r gap-1 text-3xl justify-center">
                    <span className="text-black">Tailor</span>
                    <span className="text-white">Fit</span>
                </div>
                <div className="text-white font-subhead">Stitching Your Style Story</div>
            </div>
            {/* Navbar  */}
            <div className="flex flex-col ml-14 mt-28 gap-2 w-1/6 h-1/2 justify-start items-center">
                <span className="font-shop text-white text-3xl">Shop</span>
                <ul>
                    {arr1.map((navItem,index)=>
                        <li key={index} className={`text-white cursor-pointer transition-all font-naItems duration-200 ease-out ${hovered===index? "scale-125 text-nav font-bold":""}`} 
                        // onMouseEnter={()=>setHovered(index)} 
                        // onMouseLeave={()=>setHovered(null)}
                        >
                            {hovered===index ? "-"+navItem : navItem}
                        </li>
                    )}
                </ul>
            </div>
            <div className="absolute z-0 w-1/2 bottom-0 left-[350px]">
                    <img src={bgcenter} alt="CenterPic"></img>
            </div>
        </div>
    )
}
export default HomePage;