import React, { useState,useEffect } from "react";
import { cn } from "../../utilities/cn";
import GlassContainer from "../../components/ui/glasscontainer";
import FormInputComp from "../../components/ui/formInputComp";
import Input from "../../components/ui/input";
import Button from "../../components/ui/button";
import otpinputfocus from "../../utilities/otpinputfocus";
function OTPScreen(){
    const [otp,onChangeOtp]=useState("");
    useEffect(()=>{
        document.querySelectorAll(".otp-input")[0].focus();
        otpinputfocus(otp,onChangeOtp);
    },[]);
    const handelsubmit = (e)=>{
        e.preventDefault();
        console.log(otp);
        return;
    }
    return(
        <div className="w-screen h-screen relative bg-[#0BAFB4]">
            <GlassContainer className="absolute top-0 right-0 w-full sm:w-[350px] md:w-[400px] lg:w-[450px] h-full flex flex-col gap-9 p-9 rounded-l-[16px]">
                <div className="w-full grow flex flex-col px-3 py-4">
                    <form onSubmit={handelsubmit} className="w-full grow flex flex-col justify-start items-center gap-9">
                        <div className="w-full h-auto flex flex-col justify-start items-start gap-2">
                            <p className="font-Montserrat sm:text-xl md:text-2xl lg:text-3xl text-left font-semibold text-white">Enter  <span className="text-[#A42D41]">O</span><span className="text-[#92992D]">T</span><span className="text-[#029217]">P</span></p>
                            <p className="font-Montserrat sm:text-sm  md:text-base text-left sm:font-light md:font-normal text-white text-wrap">Please Enter 4 Digits Otp </p>
                        </div>
                        <div className="w-full h-auto flex flex-col gap-12">
                            <div className="w-full h-auto flex flex-row justify-center items-center gap-6">
                                <input type="number" className="otp-input w-12 h-12 text-center text-base font-subhead font-semibold text-white  border-2 rounded-xl border-[#7E33E0]/60 bg-[#F5E1FC]/30 focus:border-[#7E33E0]/100 focus:border-3 disabled:bg-[#F5E1FC]/40 outline-none"/>
                                <input type="number" className="otp-input w-12 h-12 text-center text-base font-subhead font-semibold text-white  border-2 rounded-xl border-[#7E33E0]/60 bg-[#F5E1FC]/30 focus:border-[#7E33E0]/100 focus:border-3 disabled:bg-[#F5E1FC]/40 outline-none" disabled/>
                                <input type="number" className="otp-input w-12 h-12 text-center text-base font-subhead font-semibold text-white  border-2 rounded-xl border-[#7E33E0]/60 bg-[#F5E1FC]/30 focus:border-[#7E33E0]/100 focus:border-3 disabled:bg-[#F5E1FC]/40 outline-none" disabled/>
                                <input type="number" className="otp-input w-12 h-12 text-center text-base font-subhead font-semibold text-white  border-2 rounded-xl border-[#7E33E0]/60 bg-[#F5E1FC]/30 focus:border-[#7E33E0]/100 focus:border-3 disabled:bg-[#F5E1FC]/40 outline-none" disabled/> 
                            </div>
                            <Button type={"submit"} className="verify-otp-btn py-2 font-button2 rounded-[6px] text-base bg-white disabled:bg-[#d1d1d1]">
                                Verify Otp
                            </Button>
                        </div>
                    </form>
                </div>
            </GlassContainer>
        </div>
    );
}

export default  OTPScreen;