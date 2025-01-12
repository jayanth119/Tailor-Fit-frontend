import React from "react";
import { cn } from "../../utilities/cn";
import Label from "./lable";
function FormInputComp({className,children}){
    return(
        <div className={cn("w-full h-auto p-0 flex flex-col gap-1",className)}>
            {children}
        </div>
    );
}

export default FormInputComp;