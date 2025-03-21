import SearchBar from "../ui/SearchBar";

 const NavBar=()=>{
     return(
         <div className="flex flex-row w-screen justify-evenly items-center h-[10%] p-5 bg-sky-100 shadow-md fixed top-0 left-0 z-50">
          <div className="w-full h-auto grid grid-cols-3 justify-center items-center gap-4">
              <div className="col-span-1 h-full flex flex-row justify-start items-center ga-6">
                <button className="w-28 h-12 text-lg font-poppins flex items-center justify-center">Home</button>
                <button className="w-28 h-12 text-lg font-poppins flex items-center justify-center">Try On</button>
              </div>
              <div className="col-span-1 h-full flex flex-col justify-center  items-center gap-6">
                <a href="www.google.com" className="font-main text-4xl font-semibold text-green-950 ">Tailor-Fit</a>
              </div>
              <div className="col-span-1 h-full flex flex-row justify-end items-center gap-6">
                <SearchBar/>           
                <button className="w-28 h-12 text-lg font-poppins flex items-center justify-center">Cart</button>
                <button className="w-28 h-12 text-lg font-poppins flex items-center justify-center">Login</button>
              </div>
          </div>
         </div>        
     )
 }
 
 export default NavBar;
