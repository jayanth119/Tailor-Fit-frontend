import MainLogo from "../../components/ui/mainlogo";
import { TiTick } from "react-icons/ti";
const SuccessScreenPass=()=>{
    return(
        <div className="flex flex-col justify-center items-center p-10 gap-14">
            <MainLogo/>
            <div className="bg-[#ffccee5e] rounded-full p-2">
                <div className="bg-[#ffcceeaf] rounded-full p-4">
                <TiTick size={70} fill="#6F276A"/>
                </div>
            </div>
            <div className="text-black font-subhead">
            <p className=" font-bold text-2xl" style={{textShadow:'0px 1px 2px black'}}>The password has been <span className="text-success" style={{textShadow:'0px 1px 2px #1b7d3f'}}>successfully</span> set.</p>
            You will be redirected to the login page.
            </div>
            <button className="text-button font-buttonf font-semibold text-lg bg-white px-14 py-2 rounded-lg">Back to Login</button>
        </div>
    )
}
export default SuccessScreenPass;