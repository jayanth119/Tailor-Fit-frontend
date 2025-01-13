import { useState,useEffect } from "react";
import useInput from "../../hooks/useInput";
import GlassContainer from "../../components/ui/glasscontainer";
import FormInputComp from "../../components/ui/formInputComp";
import Input from "../../components/ui/input";
import Button from "../../components/ui/button";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import AuthBackground from "../../components/ui/authbackgeound";
import { DropDownHeader , DropDownMenu, DropDownItm} from "../../components/ui/dropdown";
const SignUpPage=()=>{
    const [hovered,setHovered]=useState(null);
    const [dropdown,setDropdown] = useState(false);
    const [dropdownval ,setDropdownVal] = useState("Customer")
    const navItems=['Trending','Customizing','Precision','Elegance'];
    const [email,onChangeEmail]=useInput("");
    const [errorEmail,setErrorEmail]= useState("");
    const [username,onChangeUsername]=useInput("");
    const [errorUsername,setErrorUsername]= useState("");
    const [pwd,onChangePwd]=useInput("");
    const [errorPwd,setErrorPwd]= useState("");
    const [role,setRole]=useState("");
    
    useEffect(()=>{
        const interval=setInterval(()=>{
            setHovered((prev)=>(prev+1)%navItems.length);
        },1500);
        return()=>clearInterval(interval);
    },navItems);
    return(
        <AuthBackground>
            <GlassContainer className="absolute top-0 right-0 w-full sm:w-[350px] md:w-[400px] lg:w-[450px] h-full flex flex-col gap-2 rounded-l-[16px]">
                <div className="w-full h-auto flex flex-row justify-end items-center px-3 relative">
                    <div className="w-[36px] h-[36px] flex flex-row justify-center items-center">
                        <svg className="stroke-[#D9D9D9]/70 hover:stroke-white/100 hover:cursor-pointer" width="36" height="36" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 36.808L35.7357 16"  stroke-opacity="1" stroke-width="3" stroke-linecap="round"/>
                            <path d="M17 16L35.7357 36.8081"  stroke-opacity="1" stroke-width="3" stroke-linecap="round"/>
                            <rect x="1.5" y="1.5" width="49" height="49" rx="14.5"  stroke-opacity="1" stroke-width="3"/>
                        </svg>
                    </div>
                </div>
                <div className="w-full grow flex flex-col px-3">
                    <form onSubmit={(e)=>{e.preventDefault()}} className="w-full grow flex flex-col justify-start items-center gap-5">
                        <div className="w-full h-auto flex flex-col justify-start items-start gap-2">
                            <p className="font-Montserrat sm:text-xl md:text-2xl lg:text-3xl text-left font-semibold text-white"><span className="text-[#430A3F]">New</span> Member</p>
                            <p className="font-Montserrat sm:text-sm  md:text-base text-left sm:font-light md:font-normal text-white text-wrap">Welcome to TailorFit!</p>
                        </div>
                        <div className="w-full h-auto flex flex-col gap-5">
                            <div className="w-full h-auto flex flex-col justify-start items-center gap-5">
                                <FormInputComp>
                                    <div className={`w-auto h-auto group flex flex-row justify-start items-center gap-2 border-dashed border-b-2 border-[#D9D9D9]/[0.6] has-[:focus]:border-white ${username!==""?"border-white":""} py-2 px-2`}>
                                        <Input value={username} onChange={onChangeUsername} type="text" id="username" className="peer order-2 w-full h-full border-none font-subhead text-base text-white placeholder:font-subhead placeholder:text-base placeholder:text-[#D9D9D9]/[0.6]" placeholder="Enter UserName"/>
                                        <svg className={`order-1 peer-focus:fill-white/100 ${username!==""?"fill-white/100":"fill-white/60"}`} width="24" height="24" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14 14C18.4188 14 22 10.8664 22 7C22 3.13359 18.4188 0 14 0C9.58125 0 6 3.13359 6 7C6 10.8664 9.58125 14 14 14ZM19.6 15.75H18.5562C17.1687 16.3078 15.625 16.625 14 16.625C12.375 16.625 10.8375 16.3078 9.44375 15.75H8.4C3.7625 15.75 0 19.0422 0 23.1V25.375C0 26.8242 1.34375 28 3 28H25C26.6562 28 28 26.8242 28 25.375V23.1C28 19.0422 24.2375 15.75 19.6 15.75Z"/>
                                        </svg>
                                    </div>
                                    {/* <p className={`w-full h-5 font-subhead text-sm font-medium text-[#EF4444] text-left ${errorUsername!==""?"visible":"invisible"}`}>{errorUsername}</p> */}
                                </FormInputComp>
                                <FormInputComp>
                                    <div className={`w-auto h-auto group flex flex-row justify-start items-center gap-2 border-dashed border-b-2 border-[#D9D9D9]/[0.6] has-[:focus]:border-white ${email!==""?"border-white":""} py-2 px-2`}>
                                        <Input value={email} onChange={onChangeEmail} type="email" id="email" className="peer order-2 w-full h-full border-none font-subhead text-base text-white placeholder:font-subhead placeholder:text-base placeholder:text-[#D9D9D9]/[0.6]" placeholder="Enter Email"/>
                                        <svg className={`stroke-2  order-1 peer-focus:stroke-white ${email!==""?"stroke-white/100":"stroke-white/60"}`} width="24" height="24" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.03125 10.125L17.0395 17.3104C17.6173 17.7253 18.3827 17.7253 18.9605 17.3104L28.9688 10.125M7.875 28.5H28.125C29.989 28.5 31.5 26.933 31.5 25V11C31.5 9.067 29.989 7.5 28.125 7.5H7.875C6.01104 7.5 4.5 9.067 4.5 11V25C4.5 26.933 6.01104 28.5 7.875 28.5Z"  strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    {/* <p className={`w-full h-5 font-subhead text-sm font-medium text-[#EF4444] text-left ${errorEmail!==""?"visible":"invisible"}`}>{errorEmail}</p> */}
                                </FormInputComp>
                                <FormInputComp>
                                    <div className={`w-auto h-auto group flex flex-row justify-start items-center gap-2 border-dashed border-b-2 border-[#D9D9D9]/[0.6] has-[:focus]:border-white ${pwd!==""?"border-white":""} py-2 px-2`}>
                                        <Input value={pwd} onChange={onChangePwd} type="password" id="password" className="peer order-2 w-full h-full border-none font-subhead text-base text-white placeholder:font-subhead placeholder:text-base placeholder:text-[#D9D9D9]/[0.6]" placeholder="Enter Password"/>
                                        <svg className={`stroke-2  order-1 peer-focus:stroke-white ${pwd!==""?"stroke-white/100":"stroke-white/60"}`} width="24" height="24" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.5 15.5V9.5C8.5 7.51088 9.29018 5.60322 10.6967 4.1967C12.1032 2.79018 14.0109 2 16 2C17.9891 2 19.8968 2.79018 21.3033 4.1967C22.7098 5.60322 23.5 7.51088 23.5 9.5V15.5M5.5 15.5H26.5C28.1569 15.5 29.5 16.8431 29.5 18.5V29C29.5 30.6569 28.1569 32 26.5 32H5.5C3.84315 32 2.5 30.6569 2.5 29V18.5C2.5 16.8431 3.84315 15.5 5.5 15.5Z" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    {/* <p className={`w-full h-5 font-subhead text-sm font-medium text-[#EF4444] text-left ${errorPwd!==""?"visible":"invisible"}`}>{errorPwd}</p> */}
                                </FormInputComp>
                                <div className="w-full h-auto p-1 flex flex-row justify-start items-center font-subhead ">
                                    <p className="w-auto h-full pr-4 py-2 text-left font-subhead font-medium text-lg text-slate-100">Select Your Role :</p>
                                    <DropDownHeader onClick={()=>{setDropdown(!dropdown)}} value={dropdownval} className={'grow'}>
                                        <DropDownMenu  className={`absolute top-10 left-0 transition-all duration-300 ease-in-out ${dropdown ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
                                            <DropDownItm onClick={
                                                ()=>{
                                                    setDropdownVal("Customer");
                                                    setDropdown(false);
                                                }
                                            } value={"Customer"}/>
                                            <DropDownItm onClick={
                                                ()=>{
                                                    setDropdownVal("Tailor");
                                                    setDropdown(false);
                                                }
                                            } value={"Tailor"}/>
                                            <DropDownItm onClick={
                                                ()=>{
                                                    setDropdownVal("Retailer");
                                                    setDropdown(false);
                                                }
                                            } value={"Retailer"}/>
                                        </DropDownMenu>
                                    </DropDownHeader>
                                </div>
                            </div>
                            <Button type={"submit"} className="py-2 font-button2 rounded-[6px] text-base">
                                Sign Up
                            </Button>
                        </div>
                        <div className="w-full h-auto flex flex-col justify-center items-center gap-3">
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
                                <span>Don't have an account?&ensp; </span><a className="font-bold hover:text-blue-600 hover:cursor-pointer"> Login</a>
                            </div> 
                        </div>     
                    </form>
                </div>
            </GlassContainer>
        </AuthBackground>
    )
}
export default SignUpPage;