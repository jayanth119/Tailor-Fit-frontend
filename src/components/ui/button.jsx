import React from "react";
import { cn } from "../../utilities/cn";


function Button({className,children ,...props}){
    return(
        <button  className={cn("w-full h-auto px-12 py-2 bg-white rounded-[12px] text-[#6F276A] font-bold text-lg ",className)} {...props}>
            {children}
        </button>
    )
}

export default Button;