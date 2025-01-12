import React from "react";
import { cn } from "../../utilities/cn";

function GlassContainer({children,className}) {
    return (
        <div className={cn("bg-[#0F9197]/[0.24]  backdrop-blur-[24px] drop-shadow-[0_4px_4px_2px_rgba(0,0,0,0.25)] absolute top-0 right-0 w-auto h-full flex flex-col gap-9 p-9",className)}>
            <div className="w-full h-[64px] flex flex-row justify-between items-center px-3 relative">
                <div className="w-[36px] h-[36px] rounded-full bg-[#FFCCEE] relative flex flex-row justify-center items-center">
                     <svg  width="18" height="14" viewBox="0 0 29 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group 4">
                        <path id="Vector 5" d="M2.07104 9.07104L26.071 9.07104" stroke="#6F276A" stroke-width="4" stroke-linecap="round"/>
                        <path id="Vector 6" d="M9.07104 2L1.99998 9.07107" stroke="#6F276A" stroke-width="4" stroke-linecap="round"/>
                        <path id="Vector 7" d="M9.07104 16.071L1.99998 8.99998" stroke="#6F276A" stroke-width="4" stroke-linecap="round"/>
                        </g>
                    </svg>
                </div>
                <div className="w-[36px] h-36px] flex flex-row justify-center items-center">
                    <svg className="stroke-[#D9D9D9]/70 hover:stroke-white/100 hover:cursor-pointer" width="36" height="36" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 36.808L35.7357 16"  stroke-opacity="1" stroke-width="3" stroke-linecap="round"/>
                        <path d="M17 16L35.7357 36.8081"  stroke-opacity="1" stroke-width="3" stroke-linecap="round"/>
                        <rect x="1.5" y="1.5" width="49" height="49" rx="14.5"  stroke-opacity="1" stroke-width="3"/>
                    </svg>
                </div>
            </div>
            {children}
        </div>
    )
}

export default GlassContainer;