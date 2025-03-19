import SearchBar from './SearchBar';
const NavBar=()=>{
    return(
        <div className="flex flex-row w-screen justify-evenly items-center h-[10%] p-5 bg-sky-100 shadow-md fixed top-0 left-0 z-50">
            <button className="w-28 h-12 text-lg font-poppins flex items-center justify-center">Home</button>
            <button className="w-28 h-12 text-lg font-poppins flex items-center justify-center">Try On</button>
            <a href="www.google.com" className="font-main text-4xl text-green-950 ">Tailor-Fit</a>
            <SearchBar/>            
            <button className="w-28 h-12 text-lg font-poppins flex items-center justify-center">Cart</button>
            <button className="w-28 h-12 text-lg font-poppins flex items-center justify-center">Login</button>
        </div>        
    )
}

export default NavBar;