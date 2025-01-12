import React from "react";
import { cn } from "../../utilities/cn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
function DropDownHeader ({className,children,value, ...props}){
    return (
        <div {...props} className={cn("w-[160px] h-auto relative py-[6px] px-2 bg-violet-300/50 rounded-md",className)}>
            <div className="w-full h-full flex flex-row justify-between items-center">
                <p className="grow h-full flex flex-col justify-center items-center text-center text-base font-mono text-slate-900 font-medium">{value}</p>
                <div className="w-[24px] h-[24px] p-1 flex flex-row justify-center items-center">
                    <FontAwesomeIcon icon={faCaretDown} />
                </div>
            </div>
            {children}
        </div>
    )
}

function DropDownMenu({className,children,...props}){
    return(
        <div {...props} className={cn("w-full h-auto hover:cursor-pointer absolute top-[108%] left-0 py-2 bg-violet-200 flex flex-col justify-start items-center gap-1 rounded-md",className)}>
            {children}
        </div>
    )
}

function DropDownItm({className,value,...props}){
    return(
        <div {...props} value={value} className={cn("w-full h-auto py-1 flex flex-row justify-center items-center text-base font-mono text-purple-600 bg-violet-200 hover:bg-violet-100",className)}>{value}</div>
    )
}

export {DropDownHeader,DropDownMenu,DropDownItm}