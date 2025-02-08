import { useState } from "react";
import { CiMail } from "react-icons/ci";
import { IoLockClosedOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import RouterConfig from "../../config/routerconfig";
//hooks
import useNavigator from "../../hooks/useNavigator";

const Glass=()=>{
    const [seePass,setSeePass]=useState(false);
    const [loaction,navigator] = useNavigator();
    return(
        <div className="w-full md:w-[32.5%] h-full bg-[#0F9197]/[0.24]  backdrop-blur-[10px] drop-shadow-[0_4px_4px_2px_rgba(0,0,0,0.25)] flex px-6 md:px-10 py-5 flex-col justify-center items-center gap-8 border-none md:rounded-es-2xl md:rounded-ss-2xl">
            <div className="w-full h-auto px-4 py-1 flex items-center justify-end rounded-md">
                <div className="w-[36px] h-[36px] flex flex-row justify-center items-center">
                    <svg className="stroke-[#D9D9D9]/70 hover:stroke-white/100 hover:cursor-pointer" width="36" height="36" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 36.808L35.7357 16"  stroke-opacity="1" stroke-width="3" stroke-linecap="round"/>
                        <path d="M17 16L35.7357 36.8081"  stroke-opacity="1" stroke-width="3" stroke-linecap="round"/>
                        <rect x="1.5" y="1.5" width="49" height="49" rx="14.5"  stroke-opacity="1" stroke-width="3"/>
                    </svg>
                </div>
            </div>
            <div className="flex flex-col w-full grow items-start gap-6 px-0 md:px-4 py-8">
                <div className="w-full h-auto flex flex-row flex-wrap justify-start items-center gap-y-2 gap-x-4 py-6  md:py-0">
                    <span className="text-subhead font-montserrat font-bold text-3xl">EXISTING</span>
                    <span className="text-white font-bold text-3xl">  MEMBER</span>
                    <div className="text-white font-montserrat flex justify-start text-xl">Welcome Back!</div>
                </div>
                <div className="w-full grow flex flex-col justify-start md:justify-start items-center gap-8">
                    <div className="w-full h-auto py-8 md:py-3 flex flex-col items-center gap-8">
                        <div className="w-full border-b-2 flex flex-row items-center gap-5 p-2 border-dashed">
                            <CiMail size={25}/>
                            <input type="email" placeholder="Enter email" className="bg-transparent text-black w-full outline-none placeholder-slate-600"></input>
                        </div>
                        <div className="w-full border-b-2 flex flex-row items-center gap-5 p-2 border-dashed cursor-text">
                            <IoLockClosedOutline size={25}/>
                            <input type={`${seePass?'text':'password'}`} placeholder="Enter Password" className="bg-transparent text-black w-full outline-none placeholder-slate-600"></input>
                            <button onClick={()=>setSeePass(!seePass)}>
                            {seePass?<IoEye size={20}/>:<IoEyeOff size={20}/>}
                            </button>
                        </div>
                        <a onClick={()=>navigator(`${RouterConfig.auth.forgotpassword}`)} className="flex justify-end w-full text-forgot hover:cursor-pointer font-semibold hover:text-[#FB2E86] ">forgot Password?</a>
                        <button className="font-buttonf w-full bg-white text-xl text-button font-semibold rounded-lg px-24 py-2 hover:shadow-xl transiton-all duration-300 ">LOGIN</button>
                    </div>
                    <div className="w-full h-auto flex flex-col justify-center items-center gap-4">
                        <div className="flex flex-row justify-center items-center w-full pointer-events-none">
                            <div className="border-t border-white flex-grow"></div>
                            <span className="mx-4 text-white">OR</span>
                            <div className="border-t border-white flex-grow"></div>
                        </div>
                        <div className="flex flex-row gap-5 items-center justify-center w-full">
                            <button className="rounded-full bg-white p-2 hover:shadow-xl transition-all"><FaGoogle size={20} color="#FB2E86"/></button>
                            <button className="rounded-full bg-white p-2 hover:shadow-xl transition-all"><FaFacebook size={20} color="#FB2E86"/></button>
                            <button className="rounded-full bg-white p-2 hover:shadow-xl transition-all"><FaApple size={20} color="#FB2E86"/></button>
                        </div>
                        <div className="flex justify-center w-full text-white font-poppins text-sm py-4">
                            <span>Don't have an account ?</span><a onClick={()=>navigator(`${RouterConfig.auth.signup}`)} className=" text-forgot font-semibold px-2 hover:cursor-pointer hover:text-[#FB2E86]">Register Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Glass;