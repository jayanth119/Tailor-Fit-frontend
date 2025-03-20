import SearchBar from '../ui/SearchBar';
const NavBar=()=>{
    return(
        <div className="flex flex-row w-screen justify-evenly items-center h-auto bg-sky-100 shadow-md fixed top-0 left-0 z-50 px-20 py-4">
            <div className='grow h-auto flex flex-row justify-start items-center gap-6'>
                <button className="w-auto h-auto font-caliber font-bold text-xl flex items-center justify-center">Home</button>
                <button className="w-auto h-auto font-caliber font-bold text-xl flex items-center justify-center">Try On</button>
            </div>
            <a href="www.google.com" className="font-main text-4xl text-green-950 ">Tailor-Fit</a>
            <div className='grow h-auto flex flex-row justify-end items-center gap-6'>
                <SearchBar/>            
                <button className="w-auto h-auto font-caliber font-bold text-xl  flex items-center justify-center">Cart</button>
                <button className="w-auto h-auto font-caliber font-bold text-xl  flex items-center justify-center">Login</button>
            </div>
        </div>        
    )
}

export default NavBar;