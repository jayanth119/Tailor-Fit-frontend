import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { CardConatiner,CardBody,CardImage,CardTitle,CardSubTitle } from "../../components/ui/card";
function Suggestion (){
    return(
        <div className="w-full h-auto flex flex-col justify-start items-start gap-2 ps-4 py-2 pb-4 md:ps-6 md:py-3 md:pb-6">
            <div className="w-full h-auto flex flex-row justify-between items-center">
                <h1 className="w-auto h-auto font-urbanist font-bold text-3xl text-[#1D1C22] py-2">Suggestion for You</h1>
                {/* <h2 className="w-auto h-auto font-urbanist font-semibold text-xl text-[#616166] mb-3"></h2> */}
                <div className="w-10 h-10 p-1 flex flex-col justify-center items-center rounded-full hover:cursor-pointer transition-colors duration-200 ease-in-out hover:bg-[#ECE9FE]">
                    <FaAngleRight className="h-full text-[#3D2DB5]"/>
                </div>
            </div>
        </div>
    )
}

export default Suggestion;