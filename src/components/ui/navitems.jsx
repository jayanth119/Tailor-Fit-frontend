const NavItems=({navItems,hovered})=>{
    return(
        <div className="flex flex-col gap-2 w-full h-1/2 justify-center items-center text-white">
                <span className="font-shop text-3xl">Shop</span>
                <ul>
                    {navItems.map((navItem,index)=>
                        <li key={index} className={`cursor-pointer font-poppins text-md transition-all duration-200 ease-out ${hovered===index? "scale-125 text-navitem font-bold":""}`} 
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