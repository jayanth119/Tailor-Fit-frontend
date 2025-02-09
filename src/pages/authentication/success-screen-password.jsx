import RouterConfig from "../../config/routerconfig";
import { TiTick } from "react-icons/ti";
import useNavigator from "../../hooks/useNavigator";

const SuccessScreenPass=()=>{
    const [loaction,navigator,backNavigation] = useNavigator();
    return(
        <div className="w-full h-screen flex flex-col justify-center items-center bg-radient-colour">
            <div className="w-full h-full flex flex-col justify-center items-center p-10 gap-14">
                <div className="w-auto h-auto justify-items-start flex flex-col justify-center items-center gap-2">
                    <div className="font-main flex flex-row gap-4 text-4xl items-center justify-center">
                        <span className="text-black text-6xl">Tailor</span>
                        <span className="text-white text-6xl">Fit</span>
                    </div>
                    <div className="text-white font-subhead text-2xl">Stitching Your Style Story</div>
                </div>
                <div className="relative w-auto h-auto flex flex-col justify-center items-center">
                    <div className="z-10 absolute w-20 h-20 bg-[#d76bb3] rounded-full animate-ping"></div>
                    <div className="z-20 w-auto h-auto bg-[#ffcceeaf] rounded-full p-6">
                        <TiTick className="w-16 h-16" fill="#6F276A"/>
                    </div>
                </div>
                <div className="text-button font-subhead">
                    <p className="text-white font-bold text-2xl" style={{textShadow:'0px 1px 2px black'}}>The password has been <span className="text-success" style={{textShadow:'0px 1px 2px #1b7d3f'}}>successfully</span> set.</p>
                    You will be redirected to the login page.
                </div>
                <button onClick={()=>{navigator(RouterConfig.auth.login)}} className="text-button font-buttonf font-semibold text-lg bg-white px-14 py-2 rounded-lg">Back to Login</button>
            </div>
        </div>
    )
}
export default SuccessScreenPass;