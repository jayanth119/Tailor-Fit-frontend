import React, { useState } from "react";
import { cn } from "../../utilities/cn";
import GlassContainer from "../../components/ui/glasscontainer";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import FormInputComp from "../../components/ui/formInputComp";
import Input from "../../components/ui/input";
import Button from "../../components/ui/button";
import useInput from "../../hooks/useInput";
import AuthBackground from "../../components/ui/authbackgeound";
import { validatePassword,validateConfirmPassword } from "../../utilities/formValidation";
import useNavigator from "../../hooks/useNavigator";
import { useTogglePswd } from "../../hooks/useTogglePswd";
import RouterConfig from "../../config/routerconfig";
function SetPasswordScreen(){
    const [loaction,navigator,backNavigation] = useNavigator();
    const [password,onChangePassword]=useInput("");
    const [cnfPassword,onChangeCnfPassword]=useInput("");
    const [errorPwd,setErrorPwd]= useState("");
    const [errorCnfPwd,setErrorCnfPwd]= useState("");
    const [getTypeOfPassword,setTypeOfPassword] = useTogglePswd();
    const handelSubmit = (e)=> {
            e.preventDefault();
            navigator(RouterConfig.auth.success);
        }
    return(
        <div className="w-full h-full flex flex-col justify-center items-center">
            <AuthBackground>
                <GlassContainer className="absolute top-0 right-0 w-full sm:w-[350px] md:w-[400px] lg:w-[450px] h-full flex flex-col gap-9 px-6 py-12 md:px-9 md:py-12 rounded-l-[16px]">
                    <div className="w-full h-auto flex flex-row justify-between items-center px-3 relative">
                        <div onClick={()=>{backNavigation()}} className="w-[36px] h-[36px] rounded-full bg-[#FFCCEE] relative flex flex-row justify-center items-center hover:cursor-pointer">
                            <svg  width="18" height="14" viewBox="0 0 29 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Group 4">
                                    <path id="Vector 5" d="M2.07104 9.07104L26.071 9.07104" stroke="#6F276A" stroke-width="4" stroke-linecap="round"/>
                                    <path id="Vector 6" d="M9.07104 2L1.99998 9.07107" stroke="#6F276A" stroke-width="4" stroke-linecap="round"/>
                                    <path id="Vector 7" d="M9.07104 16.071L1.99998 8.99998" stroke="#6F276A" stroke-width="4" stroke-linecap="round"/>
                                </g>
                            </svg>
                        </div>
                        <div className="w-[36px] h-36px] flex flex-row justify-center items-center">
                            <svg className="stroke-[#D9D9D9]/70 hover:stroke-white/100 hover:cursor-pointer" width="36" height="36" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 36.808L35.7357 16"  stroke-opacity="1" stroke-width="3" stroke-linecap="round"/>
                                <path d="M17 16L35.7357 36.8081"  stroke-opacity="1" stroke-width="3" stroke-linecap="round"/>
                                <rect x="1.5" y="1.5" width="49" height="49" rx="14.5"  stroke-opacity="1" stroke-width="3"/>
                            </svg>
                        </div>
                    </div>
                    <div className="w-full grow flex flex-col px-3 py-4">
                        <form onSubmit={handelSubmit} className="w-full grow flex flex-col justify-start items-center gap-9 pt-20 md:pt-8">
                            <div className="w-full h-auto flex flex-col justify-start items-start gap-2">
                                <p className="font-Montserrat text-4xl sm:text-xl md:text-2xl lg:text-3xl text-left font-semibold text-white">Set Password</p>
                                <p className="font-Montserrat text-2xl sm:text-sm  md:text-base text-left sm:font-light md:font-normal text-white text-wrap">Must be at least 8 characters.</p>
                            </div>
                            <div className="w-full h-auto flex flex-col gap-8">
                                <div className="w-full h-auto flex flex-col justify-center items-center gap-4">
                                    <FormInputComp>
                                        <div className={`w-auto h-auto group flex flex-row justify-start items-center gap-2 border-dashed border-b-2 border-[#D9D9D9]/[0.6] has-[:focus]:border-white ${password!==""?"border-white":""} py-2 px-2`}>
                                            <Input value={password} onChange={onChangePassword} type={getTypeOfPassword("pswd")} id="password" className="peer order-2 w-full h-full border-none font-subhead text-xl text-white placeholder:font-subhead placeholder:text-base placeholder:text-[#D9D9D9]/[0.6]" placeholder="Enter Password"/>
                                            <svg className={` order-1 peer-focus:stroke-white ${password!==""?"stroke-white/100":"stroke-white/60"}`} width="24" height="24" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.5 15.5V9.5C8.5 7.51088 9.29018 5.60322 10.6967 4.1967C12.1032 2.79018 14.0109 2 16 2C17.9891 2 19.8968 2.79018 21.3033 4.1967C22.7098 5.60322 23.5 7.51088 23.5 9.5V15.5M5.5 15.5H26.5C28.1569 15.5 29.5 16.8431 29.5 18.5V29C29.5 30.6569 28.1569 32 26.5 32H5.5C3.84315 32 2.5 30.6569 2.5 29V18.5C2.5 16.8431 3.84315 15.5 5.5 15.5Z" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <div onClick={()=>{setTypeOfPassword("pswd")}} className={`order-3 w-6 h-6 flex flex-row justify-center items-center p-[2px] ${password===""?"invisible":"visible"} `}>
                                                {getTypeOfPassword("pswd")==="password"?<IoEye className="text-white" size={20}/>:<IoEyeOff className="text-white" size={20}/>}
                                            </div>
                                        </div>
                                        <p className={`w-full h-5 font-subhead text-xs font-semibold text-[#EF4444] text-left ${errorPwd!==""?"visible":"invisible"}`}>{errorPwd}</p>
                                    </FormInputComp>
                                    <FormInputComp>
                                        <div className={`w-auto h-auto group flex flex-row justify-start items-center gap-2 border-dashed border-b-2 border-[#D9D9D9]/[0.6] has-[:focus]:border-white ${cnfPassword!==""?"border-white":""} py-2 px-2`}>
                                            <Input value={cnfPassword} onChange={onChangeCnfPassword} type={getTypeOfPassword("cnfpswd")} id="cnfPassword" className="peer order-2 w-full h-full border-none font-subhead text-xl text-white placeholder:font-subhead placeholder:text-base placeholder:text-[#D9D9D9]/[0.6]" placeholder="Confirm Password"/>
                                            <svg className={` order-1 peer-focus:stroke-white ${cnfPassword!==""?"stroke-white/100":"stroke-white/60"}`} width="24" height="24" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.5 15.5V9.5C8.5 7.51088 9.29018 5.60322 10.6967 4.1967C12.1032 2.79018 14.0109 2 16 2C17.9891 2 19.8968 2.79018 21.3033 4.1967C22.7098 5.60322 23.5 7.51088 23.5 9.5V15.5M5.5 15.5H26.5C28.1569 15.5 29.5 16.8431 29.5 18.5V29C29.5 30.6569 28.1569 32 26.5 32H5.5C3.84315 32 2.5 30.6569 2.5 29V18.5C2.5 16.8431 3.84315 15.5 5.5 15.5Z" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <div onClick={()=>{setTypeOfPassword("cnfpswd")}} className={`order-3 w-6 h-6 flex flex-row justify-center items-center p-[2px] ${cnfPassword===""?"invisible":"visible"} `}>
                                                {getTypeOfPassword("cnfpswd")==="password"?<IoEye className="text-white" size={20}/>:<IoEyeOff className="text-white" size={20}/>}
                                            </div>
                                        </div>
                                        <p className={`w-full h-5 font-subhead text-xs font-semibold text-[#EF4444] text-left ${errorCnfPwd!==""?"visible":"invisible"}`}>{errorCnfPwd}</p>
                                    </FormInputComp>
                                </div>
                                <Button type={"submit"} className="py-2 font-button2 rounded-[6px] text-base">
                                    Set Password
                                </Button>
                            </div>
                        </form>
                    </div>
                </GlassContainer>
            </AuthBackground>
        </div>
    );
}

export default SetPasswordScreen;