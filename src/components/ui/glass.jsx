import { useState } from "react";
import { CgCloseR } from "react-icons/cg";
import { CiMail } from "react-icons/ci";
import { IoLockClosedOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
const Glass=()=>{
    const [seePass,setSeePass]=useState(false);
    return(
        <div className="w-[35%] h-full bg-glass flex px-10 py-5 flex-col justify-center items-center gap-2">
            <div className="w-full h-[10%] flex items-center justify-end">
                <CgCloseR color="#D9D9D9" size={30} className="cursor-pointer"/>
            </div>
            <div className="flex flex-col border-[1px] h-[90%] p-5 w-full border-gray-400 border-dashed items-start gap-6">
            <div>
                <span className="text-subhead font-montserrat font-bold text-2xl">EXISTING</span>
                <span className="text-white font-bold text-2xl">  MEMBER</span>
                <div className="text-white font-montserrat flex justify-start text-lg">Welcome Back!</div>
            </div>
            <div className="w-full flex flex-col items-start gap-4">
            <div className="w-[90%] border-b-2 flex flex-row items-center gap-5 p-2 border-dashed">
                <CiMail size={25}/>
                <input type="email" placeholder="Enter email" className="bg-transparent text-black w-full outline-none placeholder-slate-600"></input>
            </div>
            <div className="w-[90%] border-b-2 flex flex-row items-center gap-5 p-2 border-dashed cursor-text">
                <IoLockClosedOutline size={25}/>
                <input type={`${seePass?'text':'password'}`} placeholder="Enter Password" className="bg-transparent text-black w-full outline-none placeholder-slate-600"></input>
                <button onClick={()=>setSeePass(!seePass)}>
                {seePass?<IoEye size={20}/>:<IoEyeOff size={20}/>}
                </button>
            </div>
            <a className="flex justify-end w-[90%] text-forgot">forgot Password?</a>
            <button className="font-buttonf w-[90%] bg-white text-xl text-button font-semibold rounded-lg p-2 hover:shadow-xl transiton-all duration-300 ">LOGIN</button>
            </div>
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
                <span>Don't have an account?</span><a className="font-bold">Register Now</a>
            </div>
            </div>
        </div>
    )
}
export default Glass;