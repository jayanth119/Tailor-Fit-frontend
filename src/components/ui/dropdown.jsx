import React, { useState } from "react";
import { cn } from "../../utilities/cn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
function DropDownHeader ({className,children,value, ...props}){
    const [drop,setDrop]=useState(false);
    return (
        <div {...props} className={cn("w-[160px] h-auto relative py-2 px-2 rounded-md bg-gray-700 text-slate-300 hover:shadow-2xl transition-all cursor-pointer",className)}>
            <div className="w-full h-full flex flex-row justify-between items-center" onClick={()=>setDrop(!drop)}>
                <p className="grow h-full flex flex-col justify-center items-center text-center text-base">{value}</p>
                <div className="w-[24px] h-[24px] p-1 flex flex-row justify-center items-center">
                    <FontAwesomeIcon icon={faCaretDown} onClick={()=>setDrop(!drop)} className={`transform tranistion-tranform duration-300 ease-in-out ${drop?'rotate-180':'rotate-0'}`} />
                </div>
            </div>
            {children}
        </div>
    )
}

function DropDownMenu({className,children,...props}){
    return(
        <div {...props} className={cn("w-full h-auto hover:cursor-pointer absolute top-[108%] left-0 bg-gray-600 flex flex-col justify-start items-center gap-1 rounded-lg shadow-lg shadow-black",className)}>
            {children}
        </div>
    )
}

function DropDownItm({className,value,...props}){
    return(
        <div {...props} value={value} className={cn("w-full h-auto py-1 flex flex-row justify-center items-center text-base font-subhead text-slate-200 hover:bg-white hover:text-black rounded-md",className)}>{value}</div>
    )
}

export {DropDownHeader,DropDownMenu,DropDownItm}