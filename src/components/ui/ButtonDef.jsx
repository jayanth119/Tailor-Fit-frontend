import { useState } from "react";
function ButtonDef({text,className}){
    return(
        <button className={`text-lg font-poppins rounded-lg outline-double outline-1 px-6 py-2 hover:shadow-xl transition-all duration-75 ${className}`}>
            {text}
        </button>
    )
}
export default ButtonDef;