import { useState } from "react";

export const useTogglePswd = ()=>{
    const [visability,setVisability]  = useState({});

    const setTypeOfPassword = (id) => {
        setVisability((prev)=>{
            return {
                ...prev,
                [id]: !prev[id]
            }
        })
    }

    const getTypeOfPassword = (id) => visability[id] ? "text" : "password";

    return [getTypeOfPassword,setTypeOfPassword];
}
