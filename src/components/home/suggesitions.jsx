import React from "react";
import SuggestionItem from "./sugesstionItem";
import "../../style/home/index.css";

const Suggestions = ({data})=>{
    return (
        <div className="w-full h-auto flex flex-col justify-start items-start gap-4 px-14 py-8">
            <div className="w-full h-auto flex flex-row justify-center items-center gap-4">
                <h1 className="grow h-auto text-start font-ZapfHumanist font-medium text-5xl ">
                    NEW ARRIVILES
                </h1>
                <div className="w-auto h-full px-2 flex flex-col justify-center items-center gap-1">
                    <p className="w-full h-auto font-caliber font-medium text-base lg:text-base text-black underline underline-offset-4 hover:cursor-pointer">Shop all</p>
                </div>
            </div>
            <div className="w-full h-auto grid grid-cols-4 gap-4">
                <SuggestionItem/>
                <SuggestionItem/>
                <SuggestionItem/>
                <SuggestionItem/>
            </div>
        </div>
    )
}

export default Suggestions;