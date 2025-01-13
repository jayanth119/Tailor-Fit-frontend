const NavItems=({navItems,hovered})=>{
    return(
        <div className="flex flex-col gap-4 w-full h-1/2 pl-16 justify-center items-start text-white">
                <span className="font-shop text-3xl">Shop</span>
                <ul className="flex flex-col gap-3">
                    {navItems.map((navItem,index)=>
                        <li key={index} className={`cursor-pointer font-poppins text-md transition-all duration-400 ease-in-out ${hovered===index? "scale-125 text-navitem font-bold":""}`} 
                        // onMouseEnter={()=>setHovered(index)} 
                        // onMouseLeave={()=>setHovered(null)}
                        >
                            {hovered===index ? "-"+navItem : navItem}
                        </li>
                    )}
                </ul>
            </div>
    )
}
export default NavItems;