import React, { useState,useEffect } from "react";
import { cn } from "../../utilities/cn";
import GlassContainer from "../../components/ui/glasscontainer";
import FormInputComp from "../../components/ui/formInputComp";
import Input from "../../components/ui/input";
import Button from "../../components/ui/button";
import otpinputfocus from "../../utilities/otpinputfocus";
import AuthBackground from "../../components/ui/authbackgeound";
import useNavigator from "../../hooks/useNavigator";
import RouterConfig from "../../config/routerconfig";
import useTimer from "../../hooks/useTimer";
import { formateTime } from "../../utilities/timer";
function OTPScreen(){
    const [otp,onChangeOtp]=useState("");
    const [loaction,navigator,backNavigation] = useNavigator();
    const [timer,setTimer] = useState(20);
    useTimer(timer,setTimer);
    useEffect(()=>{
        document.querySelectorAll(".otp-input")[0].focus();
        otpinputfocus(otp,onChangeOtp);
    },[]);
    const handelsubmit = (e)=>{
        e.preventDefault();
        if(loaction.state.from.pathname == RouterConfig.auth.signup){
            navigator(RouterConfig.auth.profile);
        }
        if(loaction.state.from.pathname == RouterConfig.auth.forgotpassword){
            navigator(RouterConfig.auth.setpassword);
        }
    }
    return(
        <AuthBackground>
            <GlassContainer className="absolute top-0 right-0 w-full sm:w-[350px] md:w-[400px] lg:w-[450px] h-full flex flex-col gap-9 px-6 py-12 md:p-9 rounded-l-[16px]">
                <div className="w-full h-auto flex flex-row justify-between items-center px-3 relative">
                    <div onClick={()=>{backNavigation()}} className="w-[36px] h-[36px] rounded-full bg-[#FFCCEE] relative flex flex-row justify-center items-center hover:cursor-pointer">
                        <svg  width="18" height="14" viewBox="0 0 29 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Group 4">
                            <path id="Vector 5" d="M2.07104 9.07104L26.071 9.07104" stroke="#6F276A" strokeWidth="4" strokeLinecap="round"/>
                            <path id="Vector 6" d="M9.07104 2L1.99998 9.07107" stroke="#6F276A" strokeWidth="4" strokeLinecap="round"/>
                            <path id="Vector 7" d="M9.07104 16.071L1.99998 8.99998" stroke="#6F276A" strokeWidth="4" strokeLinecap="round"/>
                            </g>
                        </svg>
                    </div>
                    <div className="w-[36px] h-[36px] flex flex-row justify-center items-center">
                        <svg className="stroke-[#D9D9D9]/70 hover:stroke-white/100 hover:cursor-pointer" width="36" height="36" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 36.808L35.7357 16"  strokeOpacity="1" strokeWidth="3" strokeLinecap="round"/>
                            <path d="M17 16L35.7357 36.8081"  strokeOpacity="1" strokeWidth="3" strokeLinecap="round"/>
                            <rect x="1.5" y="1.5" width="49" height="49" rx="14.5"  strokeOpacity="1" strokeWidth="3"/>
                        </svg>
                    </div>
                </div>
                <div className="w-full grow flex flex-col px-3 md:px-3 py-4">
                    <form onSubmit={handelsubmit} className="w-full grow flex flex-col justify-start items-center gap-12 pt-16">
                        <div className="w-full h-auto flex flex-col justify-start items-start gap-2">
                            <p className="font-Montserrat text-4xl sm:text-xl md:text-2xl lg:text-3xl text-left font-semibold text-white">Enter  <span className="text-[#A42D41]">O</span><span className="text-[#92992D]">T</span><span className="text-[#029217]">P</span></p>
                            <p className="font-Montserrat text-2xl sm:text-sm  md:text-base text-left sm:font-light md:font-normal text-white text-wrap">Please Enter 4 Digits Otp </p>
                        </div>
                        <div className="w-full h-auto flex flex-col gap-12">
                            <div className="w-full h-auto flex flex-row justify-center items-center gap-6">
                                <input type="number" className="otp-input w-12 h-12 text-center text-base font-subhead font-semibold text-white  border-2 rounded-xl border-[#7E33E0]/60 bg-[#F5E1FC]/30 focus:border-[#7E33E0]/100 focus:border-3 disabled:bg-[#F5E1FC]/40 outline-none"/>
                                <input type="number" className="otp-input w-12 h-12 text-center text-base font-subhead font-semibold text-white  border-2 rounded-xl border-[#7E33E0]/60 bg-[#F5E1FC]/30 focus:border-[#7E33E0]/100 focus:border-3 disabled:bg-[#F5E1FC]/40 outline-none" disabled/>
                                <input type="number" className="otp-input w-12 h-12 text-center text-base font-subhead font-semibold text-white  border-2 rounded-xl border-[#7E33E0]/60 bg-[#F5E1FC]/30 focus:border-[#7E33E0]/100 focus:border-3 disabled:bg-[#F5E1FC]/40 outline-none" disabled/>
                                <input type="number" className="otp-input w-12 h-12 text-center text-base font-subhead font-semibold text-white  border-2 rounded-xl border-[#7E33E0]/60 bg-[#F5E1FC]/30 focus:border-[#7E33E0]/100 focus:border-3 disabled:bg-[#F5E1FC]/40 outline-none" disabled/> 
                            </div>
                            <div className="w-full h-auto flex flex-col justify-center items-center gap-5">
                            <Button type={"submit"} className="verify-otp-btn py-2 font-button2 rounded-[6px] text-base bg-white disabled:bg-[#d1d1d1]">
                                Verify Otp
                            </Button>
                            <div className={`w-full h-auto flex flex-row justify-between items-center`}>
                                <div className={`w-auto h-auto flex flex-col justify-center items-center ${timer==0?"invisible":"visible"}`}>
                                    <p className={`font-mono font-medium text-center text-base text-[#D9D9D9]/80`}>Otp expair in <span className={`${timer<15?"text-red-600":"text-[#D9D9D9]"} px-2 text-base  font-semibold`}>{formateTime(timer)}</span> </p>
                                </div>
                                <p onClick={()=>setTimer(20)} className={`w-auto h-auto font-mono font-medium text-center text-base text-blue-600 hover:cursor-pointer ${timer==0?"visible":"invisible"}`}>Resend</p>
                            </div>
                            </div>
                        </div>
                    </form>
                </div>
            </GlassContainer>
        </AuthBackground>
    );
}

export default  OTPScreen;