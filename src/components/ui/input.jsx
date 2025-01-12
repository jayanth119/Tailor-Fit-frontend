import {React,forwardRef} from "react";
import { cn } from "../../utilities/cn";
const Input=forwardRef(({className,type,id,...props},ref)=>{
    return(
        <input 
        id={id}
        ref={ref}
        type={type}
        className={cn("w-full h-full bg-transparent border-none outline-none"
                        ,className)}
        {...props}/>
    );
});

export default Input;