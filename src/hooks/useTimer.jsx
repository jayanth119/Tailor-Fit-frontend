import { useEffect, useState } from "react";
const useTimer = (state,setState)=>{
    useEffect(()=>{
        const interval = setInterval(()=>{
            setState(state-1);
        },1000);
        if(state==0){
            clearInterval(interval);
        }
        return ()=>{
            clearInterval(interval);
        }
    },[state]);
}

export default useTimer;