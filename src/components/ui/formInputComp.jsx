import React from "react";
import { cn } from "../../utilities/cn";
import Label from "./lable";
function FormInputComp({className,children}){
    return(
        <div className={cn("w-full h-auto p-2 flex flex-col gap-2",className)}>
            {children}
        </div>
    );
}