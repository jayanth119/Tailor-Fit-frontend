import React from "react";
import logo from "/images/logo.png";
import useNavigator from "../../hooks/useNavigator";
import { FiShoppingCart } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

function MainNavBar(){
    const [loaction,navigator] = useNavigator();

    return (
        <div className="fixed top-0 left-0 z-50 w-full h-auto px-4 md:px-6 py-2 flex flex-row justify-center items-center bg-[#F3F1EF]">
            <div className="w-full h-auto flex flex-row justify-between items-center py-1">
                <div  className="w-auto h-auto md:ps-16">
                    <img onClick={()=>{{navigator("/login")}}} src={logo} className="h-12 object-contain  hover:cursor-pointer" alt="tailorfitLogo"/>
                </div>
                <div className="w-auto h-auto md:ps-4 flex flex-row justify-center items-center gap-4 md:gap-6">
                    <div className="group w-auto h-auto  px-2 py-1 rounded-lg flex flex-row justify-center items-center gap-1 hover:cursor-pointer">
                        <CiSearch className="w-6 h-6 stroke-[1px] text-[#C2C1C5] group-hover:text-[#1D1C22]" />
                        <p className="font-urbanist font-semibold text-center text-base text-[#C2C1C5] group-hover:text-[#1D1C22]">Search</p>
                    </div>
                    <div className="w-auto h-auto flex flex-row justify-center items-center gap-2 hover:cursor-pointer">
                        <div className="w-auto h-auto relative flex flex-col justify-center items-center">
                            <FiShoppingCart className="w-7 h-7 text-[#1D1C22]" />
                            <div className="absolute -top-2 left-2 w-auto h-auto px-[6px] py-[2px] bg-[#852099] font-urbanist font-semibold text-center text-xs text-white rounded-xl">
                                8
                            </div>
                        </div>
                        <p className="w-auto h-auto font-urbanist font-semibold text-center text-base">Cart</p>
                    </div>
                    <div className="w-auto h-auto md:px-2 hover:cursor-pointer">
                        { true?
                        <div onClick={()=>{{navigator("/")}}} className="w-9 h-9 rounded-full bg-[#ECE9FE]">
                        </div>:
                        <div onClick={()=>{{navigator("/login")}}} className=" w-auto h-auto py-1 px-2">
                            <p className="font-urbanist font-semibold text-center text-lg text-[#166BE3]">Login</p>
                        </div>
                        }
                    </div>
                    <div className="group w-auto h-auto flex flex-col justify-center items-center px-2 py-2 rounded-lg border-[1px] border-transparent hover:border-[#C2C1C5] hover:cursor-pointer">
                        <BsThreeDotsVertical className="w-6 h-6 text-[#1d1c22ab] group-hover:text-[#000000]"/>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default MainNavBar;