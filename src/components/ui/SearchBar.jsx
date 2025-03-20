import { useState } from "react";
const SearchBar=()=>{
    const [search,setSearch]=useState('');
    return(
        <div className="w-full h-auto flex flex-row justify-end items-center">
            <input 
            type="text" 
            placeholder="Search...." 
            className="bg-gray-600 rounded-lg outline-none text-white w-44 px-4 py-2 focus:border-0 focus:w-72 focus:shadow-md transition-all duration-500"
            value={search} 
            onChange={(e)=>{setSearch(e.target.value)}}
            />
        </div>
    )
}
export default SearchBar;