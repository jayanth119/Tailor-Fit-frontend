
import { useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";
let NavStack = [];

const useNavigator = () => {
    const navigate = useNavigate();
    const loaction = useLocation();
    const navigator = (path)=>{
        NavStack.push(loaction);
        navigate(path,{state:{from:loaction}});
    }
    const backNavigation = () =>{
        const backNav = NavStack.pop();
        if(backNav){
            navigate(backNav.pathname,{state:{from:loaction}});
        }
    }
    return [loaction,navigator,backNavigation];
}

export default useNavigator;