
import { useNavigate,useLocation } from "react-router-dom";

const useNavigator = () => {
    const navigate = useNavigate();
    const loaction = useLocation();
    const navigator = (path)=>{
        navigate(path,{state:{from:loaction}});
    }
    return [loaction,navigator];
}

export default useNavigator;