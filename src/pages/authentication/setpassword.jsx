import React, { useState } from "react";
import { cn } from "../../utilities/cn";
import GlassContainer from "../../components/ui/glasscontainer";
import FormInputComp from "../../components/ui/formInputComp";
import Input from "../../components/ui/input";
import Button from "../../components/ui/button";
import useInput from "../../hooks/useInput";
import AuthBackground from "../../components/ui/authbackgeound";
import { validatePassword,validateConfirmPassword } from "../../utilities/formValidation";
function SetPasswordScreen(){
    const [password,onChangePassword]=useInput("");
    const [cnfPassword,onChangeCnfPassword]=useInput("");
    const [errorPwd,setErrorPwd]= useState("");
    const [errorCnfPwd,setErrorCnfPwd]= useState("");
    const handelSubmit = (e)=> {
            e.preventDefault();
            const ErrorPwd = validatePassword(password);
            const ErrorCnfPwd = validateConfirmPassword(cnfPassword);
            if(ErrorPwd !== ""){
                setErrorPwd(ErrorPwd);
                return ;
            }
            if(ErrorCnfPwd !== ""){
                setErrorCnfPwd(ErrorCnfPwd);
                return ;
            }
            setErrorPwd("");
            setErrorCnfPwd("");
            return;
        }
    return(
        <AuthBackground>
            <GlassContainer className="absolute top-0 right-0 w-full sm:w-[350px] md:w-[400px] lg:w-[450px] h-full flex flex-col gap-9 p-9 rounded-l-[16px]">
                <div className="w-full grow flex flex-col px-3 py-4">
                    <form onSubmit={handelSubmit} className="w-full grow flex flex-col justify-start items-center gap-9">
                        <div className="w-full h-auto flex flex-col justify-start items-start gap-2">
                            <p className="font-Montserrat sm:text-xl md:text-2xl lg:text-3xl text-left font-semibold text-white">Set Password</p>
                            <p className="font-Montserrat sm:text-sm  md:text-base text-left sm:font-light md:font-normal text-white text-wrap">Must be at least 8 characters.</p>
                        </div>
                        <div className="w-full h-auto flex flex-col gap-8">
                            <div className="w-full h-auto flex flex-col justify-center items-center gap-4">
                                <FormInputComp>
                                    <div className={`w-auto h-auto group flex flex-row justify-start items-center gap-2 border-dashed border-b-2 border-[#D9D9D9]/[0.6] has-[:focus]:border-white ${password!==""?"border-white":""} py-2 px-2`}>
                                        <Input value={password} onChange={onChangePassword} type="password" id="password" className="peer order-2 w-full h-full border-none font-subhead text-base text-white placeholder:font-subhead placeholder:text-base placeholder:text-[#D9D9D9]/[0.6]" placeholder="Enter Password"/>
                                        <svg className={` order-1 peer-focus:stroke-white ${password!==""?"stroke-white/100":"stroke-white/60"}`} width="24" height="24" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.5 15.5V9.5C8.5 7.51088 9.29018 5.60322 10.6967 4.1967C12.1032 2.79018 14.0109 2 16 2C17.9891 2 19.8968 2.79018 21.3033 4.1967C22.7098 5.60322 23.5 7.51088 23.5 9.5V15.5M5.5 15.5H26.5C28.1569 15.5 29.5 16.8431 29.5 18.5V29C29.5 30.6569 28.1569 32 26.5 32H5.5C3.84315 32 2.5 30.6569 2.5 29V18.5C2.5 16.8431 3.84315 15.5 5.5 15.5Z" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <p className={`w-full h-5 font-subhead text-xs font-semibold text-[#EF4444] text-left ${errorPwd!==""?"visible":"invisible"}`}>{errorPwd}</p>
                                </FormInputComp>
                                <FormInputComp>
                                    <div className={`w-auto h-auto group flex flex-row justify-start items-center gap-2 border-dashed border-b-2 border-[#D9D9D9]/[0.6] has-[:focus]:border-white ${cnfPassword!==""?"border-white":""} py-2 px-2`}>
                                        <Input value={cnfPassword} onChange={onChangeCnfPassword} type="password" id="cnfPassword" className="peer order-2 w-full h-full border-none font-subhead text-base text-white placeholder:font-subhead placeholder:text-base placeholder:text-[#D9D9D9]/[0.6]" placeholder="Confirm Password"/>
                                        <svg className={` order-1 peer-focus:stroke-white ${cnfPassword!==""?"stroke-white/100":"stroke-white/60"}`} width="24" height="24" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.5 15.5V9.5C8.5 7.51088 9.29018 5.60322 10.6967 4.1967C12.1032 2.79018 14.0109 2 16 2C17.9891 2 19.8968 2.79018 21.3033 4.1967C22.7098 5.60322 23.5 7.51088 23.5 9.5V15.5M5.5 15.5H26.5C28.1569 15.5 29.5 16.8431 29.5 18.5V29C29.5 30.6569 28.1569 32 26.5 32H5.5C3.84315 32 2.5 30.6569 2.5 29V18.5C2.5 16.8431 3.84315 15.5 5.5 15.5Z" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
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
    );
}

export default SetPasswordScreen;