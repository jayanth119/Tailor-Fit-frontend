import React from "react";
import NavBar from "../navbar/navbar";
import { cn } from "../../utilities/cn";
import Foooter from "../footers/footer";
function MainLayout({children,className}){

    return(
        <div className={cn("w-full min-h-screen flex flex-col justify-start items-center bg-[#FFFFFF]",className)}>
            <NavBar/>
            <div className="w-full grow flex flex-col justify-center items-center">
                {children}
            </div>
            <Foooter/>
        </div>
    );

}

export default MainLayout;