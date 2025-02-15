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
import useInput from "../../hooks/useInput";
import { useTogglePswd } from "../../hooks/useTogglePswd";

const Glass=()=>{
    const [email,onChangeEmail]=useInput("");
    const [errorEmail,setErrorEmail]= useState("");
    const [pwd,onChangePwd]=useInput("");
    const [errorPwd,setErrorPwd]= useState("");
    const [seePass,setSeePass]=useState(false);
    const [loaction,navigator,backNavigation] = useNavigator();
    const [getTypeOfPassword,setTypeOfPassword] = useTogglePswd();
    return(
        <div className="absolute top-0 right-0 w-full sm:w-[350px] md:w-[400px] lg:w-[450px] h-full bg-[#0F9197]/[0.24]  backdrop-blur-[10px] drop-shadow-[0_4px_4px_2px_rgba(0,0,0,0.25)] flex px-6 md:px-10 py-5 flex-col justify-center items-center gap-8 border-none md:rounded-es-2xl md:rounded-ss-2xl">
            <div className="w-full h-auto px-3 py-1 flex flex-row items-center justify-between rounded-md">
                <div onClick={()=>{backNavigation()}} className="w-[36px] h-[36px] rounded-full bg-[#FFCCEE] relative flex flex-row justify-center items-center hover:cursor-pointer">
                    <svg  width="18" height="14" viewBox="0 0 29 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group 4">
                            <path id="Vector 5" d="M2.07104 9.07104L26.071 9.07104" stroke="#6F276A" stroke-width="4" stroke-linecap="round"/>
                            <path id="Vector 6" d="M9.07104 2L1.99998 9.07107" stroke="#6F276A" stroke-width="4" stroke-linecap="round"/>
                            <path id="Vector 7" d="M9.07104 16.071L1.99998 8.99998" stroke="#6F276A" stroke-width="4" stroke-linecap="round"/>
                        </g>
                    </svg>
                </div>
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
                        <div className="w-full group border-b-2 flex flex-row items-center gap-5 p-2 border-dashed">
                            {/* <CiMail className="text-white stroke-1" size={24}/> */}
                            <input value={email} onChange={onChangeEmail} type="email" placeholder="Enter email" className="peer order-2 bg-transparent w-full outline-none font-subhead text-xl text-white placeholder:font-subhead placeholder:text-base placeholder:text-[#D9D9D9]/[0.6]"></input>
                            <svg className={`stroke-2  order-1 peer-focus:stroke-white ${email!==""?"stroke-white/100":"stroke-white/60"}`} width="24" height="24" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.03125 10.125L17.0395 17.3104C17.6173 17.7253 18.3827 17.7253 18.9605 17.3104L28.9688 10.125M7.875 28.5H28.125C29.989 28.5 31.5 26.933 31.5 25V11C31.5 9.067 29.989 7.5 28.125 7.5H7.875C6.01104 7.5 4.5 9.067 4.5 11V25C4.5 26.933 6.01104 28.5 7.875 28.5Z"  strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div className="w-full group border-b-2 flex flex-row items-center gap-5 p-2 border-dashed cursor-text">
                            {/* <IoLockClosedOutline className="text-white stroke-1" size={24}/> */}
                            <input value={pwd} onChange={onChangePwd} type={`${seePass?'text':'password'}`} placeholder="Enter Password" className="peer order-2 bg-transparent w-full outline-none font-subhead text-xl text-white placeholder:font-subhead placeholder:text-base placeholder:text-[#D9D9D9]/[0.6]"></input>
                            <svg className={`stroke-2  order-1 peer-focus:stroke-white ${pwd!==""?"stroke-white/100":"stroke-white/60"}`} width="24" height="24" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.5 15.5V9.5C8.5 7.51088 9.29018 5.60322 10.6967 4.1967C12.1032 2.79018 14.0109 2 16 2C17.9891 2 19.8968 2.79018 21.3033 4.1967C22.7098 5.60322 23.5 7.51088 23.5 9.5V15.5M5.5 15.5H26.5C28.1569 15.5 29.5 16.8431 29.5 18.5V29C29.5 30.6569 28.1569 32 26.5 32H5.5C3.84315 32 2.5 30.6569 2.5 29V18.5C2.5 16.8431 3.84315 15.5 5.5 15.5Z" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <button className={`${pwd===""?"invisible":"visible"} order-3`} onClick={()=>setTypeOfPassword("pswd")}>
                                {getTypeOfPassword("pswd")==="password" ?<IoEye className="text-white" size={20}/>:<IoEyeOff className="text-white" size={20}/>}
                            </button>
                        </div>
                        <a onClick={()=>navigator(`${RouterConfig.auth.forgotpassword}`)} className="flex self-end justify-end w-auto text-forgot hover:cursor-pointer font-semibold hover:text-[#FB2E86] ">forgot Password?</a>
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