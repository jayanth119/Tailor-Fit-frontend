import React from "react";
import MainNavBar from "../navbar/mainnavbar";
import { cn } from "../../utilities/cn";
function MainLayout({children,className}){

    return(
        <div className={cn("w-full min-h-screen flex flex-col justify-start items-center bg-[#FFFFFF]",className)}>
            <MainNavBar/>
            <div className="w-full grow flex flex-col justify-center items-center mt-[72px]">
                {children}
            </div>
        </div>
    );

}

export default MainLayout;