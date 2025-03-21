import { useState } from "react";
const SearchBar=()=>{
    const [search,setSearch]=useState('');
    return(
        <div className="w-full h-auto flex flex-row justify-end items-center">
            <input 
            type="text" 
            placeholder="Search...." 
            className="bg-gray-100 rounded-full outline-none shadow-md text-gray-800 placeholder:text-gray-500 w-44 py-1 px-3 focus:border-0 focus:w-72 focus:shadow-lg transition-all duration-500"
            value={search} 
            onChange={(e)=>{setSearch(e.target.value)}}
            />
        </div>
    )
}
export default SearchBar;