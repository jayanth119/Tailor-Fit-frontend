import { Search } from "lucide-react";
import { useState } from "react";
const SearchBar=({scroll})=>{
    const [search,setSearch]=useState('');
    return(
        <div className="relative w-full h-auto flex flex-row justify-end items-center">
            <input 
            type="text" 
            placeholder="Search...." 
            className={`peer ${scroll?"bg-[#046E61]":"bg-[#1e4644]"} rounded-full text-white w-44 px-4 py-1 focus:border-0 focus:w-72 focus:shadow-md focus:outline outline-1 outline-white pr-[38px] placeholder:text-gray-300  transition-all duration-500`}
            value={search} 
            onChange={(e)=>{setSearch(e.target.value)}}
            />
            <Search width={18} height={18} className={`absolute right-2 ${search===""?"text-white":"text-gray-300"}  peer-focus:text-white`}/>
        </div>
    )
}
export default SearchBar;