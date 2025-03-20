import { useEffect, useState } from "react";
import SearchBar from "../ui/SearchBar";

const NavBar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex flex-row w-screen justify-between items-center h-auto fixed top-0 left-0 z-50 px-16 py-2 transition-colors duration-300 
        ${scroll ? "bg-white text-black shadow-md" : "bg-transparent text-white"}
        hover:bg-white hover:text-black hover:cursor-pointer`}
    >
      <div className="w-full h-auto grid grid-cols-3 justify-between items-center">
        <div className="col-span-1 h-auto flex flex-row justify-start items-center gap-8">
          <a href="#" className="text-base text-inherit font-normal">Home</a>
          <a href="#" className="text-base text-inherit font-normal">Try-On</a>
          <a href="#" className="text-base text-inherit font-normal">Trending</a>
        </div>
        <h1 className="col-span-1 h-auto flex flex-col justify-center items-center text-5xl text-center text-inherit font-semibold font-main">
          <span className="relative top-1">Tailor Fit</span>
        </h1>
        <div className="col-span-1 h-auto flex flex-row justify-end items-center gap-8">
          <SearchBar scroll={scroll} />
          <a href="#" className="text-base text-inherit font-normal">Cart</a>
          <a href="#" className="text-base text-inherit font-normal">Login</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
