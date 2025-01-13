import React from "react";
import { cn } from "../../utilities/cn";

function GlassContainer({children,className}) {
    return (
        <div className={cn("bg-[#0F9197]/[0.24]  backdrop-blur-[10px] drop-shadow-[0_4px_4px_2px_rgba(0,0,0,0.25)] absolute top-0 right-0 w-auto h-full flex flex-col gap-9 p-9",className)}>
            {children}
        </div>
    )
}

export default GlassContainer;