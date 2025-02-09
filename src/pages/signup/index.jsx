import { useState,useEffect } from "react";
import useInput from "../../hooks/useInput";
import GlassContainer from "../../components/ui/glasscontainer";
import FormInputComp from "../../components/ui/formInputComp";
import Input from "../../components/ui/input";
import Button from "../../components/ui/button";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import AuthBackground from "../../components/ui/authbackgeound";
import useNavigator from "../../hooks/useNavigator";
import RouterConfig from "../../config/routerconfig";
import { useTogglePswd } from "../../hooks/useTogglePswd";
const SignUpPage=()=>{
    const [email,onChangeEmail]=useInput("");
    const [errorEmail,setErrorEmail]= useState("");
    const [pwd,onChangePwd]=useInput("");
    const [cnfpwd,onChangeCnfPwd]=useInput("");
    const [errorPwd,setErrorPwd]= useState("");
    const [loaction,navigator] = useNavigator();
    const [getTypeOfPassword,setTypeOfPassword] = useTogglePswd();
    
    const handelSubmit = (e)=>{
        e.preventDefault();
        navigator(RouterConfig.auth.otp);
    }
    
    return(
        <AuthBackground>
            <GlassContainer className="absolute top-0 right-0 w-full sm:w-[350px] md:w-[400px] lg:w-[450px] h-full flex flex-col gap-2 rounded-l-[16px] px-4 py-9 md:p-9">
                <div className="w-full h-auto flex flex-row justify-end items-center px-3 relative">
                    <div className="w-[36px] h-[36px] flex flex-row justify-center items-center">
                        <svg className="stroke-[#D9D9D9]/70 hover:stroke-white/100 hover:cursor-pointer" width="36" height="36" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 36.808L35.7357 16"  stroke-opacity="1" stroke-width="3" stroke-linecap="round"/>
                            <path d="M17 16L35.7357 36.8081"  stroke-opacity="1" stroke-width="3" stroke-linecap="round"/>
                            <rect x="1.5" y="1.5" width="49" height="49" rx="14.5"  stroke-opacity="1" stroke-width="3"/>
                        </svg>
                    </div>
                </div>
                <div className="relative w-full grow flex flex-col px-3 py-4 pt-20 md:px-3 md:py-4 gap-8">
                    <div className="w-full h-auto flex flex-col justify-start items-start gap-2 pt-6">
                        <p className="font-Montserrat text-4xl sm:text-xl md:text-2xl lg:text-4xl text-left font-semibold text-white"><span className="text-[#430A3F]">New</span> Member</p>
                        <p className="font-Montserrat text-2xl sm:text-sm  md:text-base lg:text-xl text-left sm:font-light md:font-normal text-white text-wrap">Welcome to TailorFit!</p>
                    </div>
                    <form onSubmit={handelSubmit} className="w-full  h-auto flex flex-col justify-center items-center py-4">
                        <div className="w-full h-auto flex flex-col justify-center items-center gap-12">
                            <div className="w-full h-auto flex flex-col justify-start items-center gap-8">
                                <FormInputComp>
                                    <div className={`w-auto h-auto group flex flex-row justify-start items-center gap-2 border-dashed border-b-2 border-[#D9D9D9]/[0.6] has-[:focus]:border-white ${email!==""?"border-white":""} py-2 px-2`}>
                                        <Input value={email} onChange={onChangeEmail} type="email" id="email" className="peer order-2 w-full h-full border-none font-subhead text-base text-white placeholder:font-subhead placeholder:text-base placeholder:text-[#D9D9D9]/[0.6]" placeholder="Enter Email"/>
                                        <svg className={`stroke-2  order-1 peer-focus:stroke-white ${email!==""?"stroke-white/100":"stroke-white/60"}`} width="24" height="24" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.03125 10.125L17.0395 17.3104C17.6173 17.7253 18.3827 17.7253 18.9605 17.3104L28.9688 10.125M7.875 28.5H28.125C29.989 28.5 31.5 26.933 31.5 25V11C31.5 9.067 29.989 7.5 28.125 7.5H7.875C6.01104 7.5 4.5 9.067 4.5 11V25C4.5 26.933 6.01104 28.5 7.875 28.5Z"  strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </FormInputComp>
                                <FormInputComp>
                                    <div className={`w-auto h-auto group flex flex-row justify-start items-center gap-2 border-dashed border-b-2 border-[#D9D9D9]/[0.6] has-[:focus]:border-white ${pwd!==""?"border-white":""} py-2 px-2`}>
                                        <Input value={pwd} onChange={onChangePwd} type={getTypeOfPassword("pswd")} id="password" className="peer order-2 w-full h-full border-none font-subhead text-xl text-white placeholder:font-subhead placeholder:text-base placeholder:text-[#D9D9D9]/[0.6]" placeholder="Enter Password"/>
                                        <svg className={`stroke-2  order-1 peer-focus:stroke-white ${pwd!==""?"stroke-white/100":"stroke-white/60"}`} width="24" height="24" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.5 15.5V9.5C8.5 7.51088 9.29018 5.60322 10.6967 4.1967C12.1032 2.79018 14.0109 2 16 2C17.9891 2 19.8968 2.79018 21.3033 4.1967C22.7098 5.60322 23.5 7.51088 23.5 9.5V15.5M5.5 15.5H26.5C28.1569 15.5 29.5 16.8431 29.5 18.5V29C29.5 30.6569 28.1569 32 26.5 32H5.5C3.84315 32 2.5 30.6569 2.5 29V18.5C2.5 16.8431 3.84315 15.5 5.5 15.5Z" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        <div onClick={()=>{setTypeOfPassword("pswd")}} className={`order-3 w-6 h-6 flex flex-row justify-center items-center p-[2px] ${pwd===""?"invisible":"visible"} `}>
                                            {getTypeOfPassword("pswd")==="password"?<IoEye className="text-white" size={20}/>:<IoEyeOff className="text-white" size={20}/>}
                                        </div>
                                    </div>
                                </FormInputComp>
                                <FormInputComp>
                                    <div className={`w-auto h-auto group flex flex-row justify-start items-center gap-2 border-dashed border-b-2 border-[#D9D9D9]/[0.6] has-[:focus]:border-white ${cnfpwd!==""?"border-white":""} py-2 px-2`}>
                                        <Input value={cnfpwd} onChange={onChangeCnfPwd} type={getTypeOfPassword("cnfpswd")} id="cnfpassword" className="peer order-2 w-full h-full border-none font-subhead text-xl text-white placeholder:font-subhead placeholder:text-base placeholder:text-[#D9D9D9]/[0.6]" placeholder="Enter Password"/>
                                        <svg className={`stroke-2  order-1 peer-focus:stroke-white ${cnfpwd!==""?"stroke-white/100":"stroke-white/60"}`} width="24" height="24" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.5 15.5V9.5C8.5 7.51088 9.29018 5.60322 10.6967 4.1967C12.1032 2.79018 14.0109 2 16 2C17.9891 2 19.8968 2.79018 21.3033 4.1967C22.7098 5.60322 23.5 7.51088 23.5 9.5V15.5M5.5 15.5H26.5C28.1569 15.5 29.5 16.8431 29.5 18.5V29C29.5 30.6569 28.1569 32 26.5 32H5.5C3.84315 32 2.5 30.6569 2.5 29V18.5C2.5 16.8431 3.84315 15.5 5.5 15.5Z" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        <div onClick={()=>{setTypeOfPassword("cnfpswd")}} className={`order-3 w-6 h-6 flex flex-row justify-center items-center p-[2px] ${cnfpwd===""?"invisible":"visible"}`}>
                                            {getTypeOfPassword("cnfpswd")==="password"?<IoEye className="text-white" size={20}/>:<IoEyeOff className="text-white" size={20}/>}
                                        </div>
                                    </div>
                                </FormInputComp>
                            </div>
                            <Button type={"submit"} className="py-2 font-button2 rounded-[6px] text-base">
                                Sign Up
                            </Button>
                        </div>
                    </form>
                    <div className="w-full h-auto flex flex-col justify-center items-center gap-4">
                        <div className="flex flex-row justify-center items-center w-[90%] pointer-events-none">
                            <div className="border-t border-white flex-grow"></div>
                            <span className="mx-4 text-white">OR</span>
                            <div className="border-t border-white flex-grow"></div>
                        </div>
                        <div className="flex flex-row gap-5 items-center justify-center w-full">
                            <button className="rounded-full bg-white p-2 hover:shadow-xl transition-all"><FaGoogle size={20} color="#FB2E86"/></button>
                            <button className="rounded-full bg-white p-2 hover:shadow-xl transition-all"><FaFacebook size={20} color="#FB2E86"/></button>
                            <button className="rounded-full bg-white p-2 hover:shadow-xl transition-all"><FaApple size={20} color="#FB2E86"/></button>
                        </div>
                        <div className="flex justify-center w-full text-white font-poppins text-sm">
                            <span>Don't have an account?&ensp; </span><a onClick={()=>{navigator(RouterConfig.auth.login)}} className="text-forgot font-semibold px-2 hover:cursor-pointer hover:text-[#FB2E86]"> Login</a>
                        </div> 
                    </div>
                </div>
            </GlassContainer>
        </AuthBackground>
    )
}
export default SignUpPage;