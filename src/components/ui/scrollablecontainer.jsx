import React from "react";

function ScrollablConatiner({classWrapper,classTrack,children}){
    return(
        <>
            <div className={cn("remove-scroll relative w-full h-96 md:h-56 lg:h-72 overflow-x-scroll overflow-y-hidden",classWrapper)}>
                <div className={cn("absolute w-auto h-full flex flex-row justify-start items-center gap-2",classTrack)}>
                    {children}
                </div>
            </div>
        </>
    );
}

export default ScrollablConatiner;