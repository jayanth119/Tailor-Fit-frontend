import React, { useState ,useEffect} from "react";
import GlassContainer from "../../components/ui/glasscontainer";
import FormInputComp from "../../components/ui/formInputComp";
import Input from "../../components/ui/input";
import Button from "../../components/ui/button";
import useInput from "../../hooks/useInput";
import { validateEmail } from "../../utilities/formValidation";
import AuthBackground from "../../components/ui/authbackgeound";
import useNavigator from "../../hooks/useNavigator";
import RouterConfig from "../../config/routerconfig";
function ForgotPasswordScreen(){
    const [loaction,navigator] = useNavigator();
    const [hovered,setHovered]=useState(null);
    const navItems=['Trending','Customizing','Precision','Elegance'];
    const [email,onChangeEmail]=useInput("");
    const [errorEmail,setErrorEmail]= useState("");

    useEffect(()=>{
        const interval=setInterval(()=>{
            setHovered((prev)=>(prev+1)%navItems.length);
        },1500);
        return()=>clearInterval(interval);
    },navItems);

    const handelSubmit = (e)=> {
        e.preventDefault();
        const Error = validateEmail(email);
        if(Error !== ""){
            setErrorEmail(Error);
            return ;
        }
        setErrorEmail("");
        return;
    }
    return(
        <AuthBackground>
            <GlassContainer className="absolute top-0 right-0 w-full sm:w-[350px] md:w-[400px] lg:w-[450px] h-full flex flex-col gap-9 px-6 py-12 md:p-9 rounded-l-[16px]">
                <div className="w-full h-auto flex flex-row justify-between items-center px-3 relative">
                    <div onClick={()=>{navigator(loaction.state.from)}} className="w-[36px] h-[36px] rounded-full bg-[#FFCCEE] relative flex flex-row justify-center items-center">
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
                <div className="w-full grow flex flex-col px-2 md:px-3 py-4">
                    <form onSubmit={handelSubmit} className="w-full grow flex flex-col md:justify-start items-center gap-9 pt-24 md:pt-16">
                        <div className="w-full h-auto flex flex-col justify-start items-start gap-2">
                            <p className="font-Montserrat text-3xl sm:text-xl md:text-2xl lg:text-3xl text-left font-semibold text-white"><span className="text-[#EF4444]">Forgot</span> Password</p>
                            <p className="font-Montserrat text-xl sm:text-sm  md:text-base text-left sm:font-light md:font-normal text-white text-wrap">No worries, We'll send you reset instructions.</p>
                        </div>
                        <div className="w-full h-auto flex flex-col gap-12">
                            <FormInputComp>
                                <div className={`w-auto h-auto group flex flex-row justify-start items-center gap-2 border-dashed border-b-2 border-[#D9D9D9]/[0.6] has-[:focus]:border-white ${email!==""?"border-white":""} py-2 px-2`}>
                                    <Input value={email} onChange={onChangeEmail} type="email" id="email" className="peer order-2 w-full h-full border-none font-subhead text-lg md:text-base text-white placeholder:font-subhead placeholder:text-base placeholder:text-[#D9D9D9]/[0.6]" placeholder="Enter your email"/>
                                    <svg className={`stroke-2  order-1 peer-focus:stroke-white ${email!==""?"stroke-white/100":"stroke-white/60"}`} width="24" height="24" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.03125 10.125L17.0395 17.3104C17.6173 17.7253 18.3827 17.7253 18.9605 17.3104L28.9688 10.125M7.875 28.5H28.125C29.989 28.5 31.5 26.933 31.5 25V11C31.5 9.067 29.989 7.5 28.125 7.5H7.875C6.01104 7.5 4.5 9.067 4.5 11V25C4.5 26.933 6.01104 28.5 7.875 28.5Z"  strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <p className={`w-full h-5 font-subhead text-sm font-medium text-[#EF4444] text-left ${errorEmail!==""?"visible":"invisible"}`}>{errorEmail}</p>
                            </FormInputComp>
                            <Button type={"submit"} className="py-2 font-button2 rounded-[6px] text-base">
                                Send Email
                            </Button>
                        </div>
                    </form>
                </div>
            </GlassContainer>
        </AuthBackground>
    );
}

export default ForgotPasswordScreen;