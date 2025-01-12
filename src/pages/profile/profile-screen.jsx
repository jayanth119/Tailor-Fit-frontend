import MainLogo from "../../components/ui/mainlogo"
import Profilepic from "../../components/ui/profilepic"
import { FiEdit3 } from "react-icons/fi";
const ProfileScreen=()=>{
    return(
        <div className='bg-radient-colour w-screen h-screen'>
            <div className="flex flex-col p-10 gap-5 justify-center items-center">
                <MainLogo/>
                <div className="flex flex-col justify-center items-center gap-4 w-[80%]">
                    <span className="text-white font-bold font-subhead text-xl">Profiile Details</span>
                    <div className="relative rounded-full">
                    <Profilepic/>
                    <button className="absolute bottom-2 right-2 p-1 bg-button rounded-full">
                        <FiEdit3 size={12} color="white"/>
                    </button>
                    </div>
                    <div className="flex w-full flex-row gap-[10%] font-subhead px-4 text-md">
                        <div className="flex flex-col items-start w-[45%] ">
                            <p className="text-button">First Name</p>
                            <input type="text" placeholder="Enter First Name" className="w-full rounded-md p-1 bg-glass placeholder-slate-200 outline-none"></input>
                        </div>
                        <div className="flex flex-col items-start w-[45%]">
                            <p className="text-button">Last Name</p>
                            <input type="text" placeholder="Enter Last Name" className="w-full rounded-md p-1 bg-glass placeholder-slate-200 outline-none"></input>
                        </div>
                    </div>
                    <div className="flex w-full flex-row gap-[10%] font-subhead px-4 text-md">
                        <div className="flex flex-col items-start w-[45%] ">
                            <p className="text-button">Date of Birth</p>
                            <input type="date" className="w-full text-slate-200 rounded-md p-1 bg-glass placeholder-slate-200 outline-none"></input>
                        </div>
                        <div className="flex flex-col items-start w-[45%]">
                            <p className="text-button">Phone Number</p>
                            <input type="number" placeholder="Phone Number" className="w-full rounded-md p-1 bg-glass placeholder-slate-200 outline-none"></input>
                        </div>
                    </div>
                    <div className="w-full font-subhead px-4 text-md">
                        <div className="flex flex-col items-start w-full ">
                            <p className="text-button">Address</p>
                            <input type="text" className="w-full rounded-md p-1 bg-glass placeholder-slate-200 outline-none h-14"></input>
                        </div>
                    </div>
                    <button className="font-buttonf text-button font-semibold text-lg bg-white rounded-lg px-8 py-1">SignUp & Continue</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen;