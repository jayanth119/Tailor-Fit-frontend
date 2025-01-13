import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
const Shop=({navItems})=>{
    const container = useRef(null);
    useGSAP(()=>{
        
        const timeline = gsap.timeline({ repeat: -1, delay: 0.2 });
        // Select all line elements
        const lineElements = container.current.querySelectorAll(".lineElement");

        // Stagger the animation so each element animates after the previous one
        lineElements.forEach((line, index) => {
            const textElement = line.nextElementSibling;

            timeline
              .to(line, {
                width: 16,
                duration: 0.9,
                ease: "power2.inOut",
              },index * 1.3 )
              .to(
                textElement,
                {
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "white",
                  duration: 0.9,
                  ease: "power2.inOut",
                },`<`)
                .to(line, {
                    width: 0,
                    duration: 0.9,
                    delay: 0.4,
                    ease: "power2.inOut",
                  },)
                  .to(
                    textElement,
                    {
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#ffffff8c",
                      duration: 0.9,
                      ease: "power2.inOut",
                    },"<")
            });

    },{scope:container});
    return(
        <div ref={container} className="flex flex-col gap-5 w-full h-1/2 pl-16 justify-center items-start text-white">
                <span className="font-shop text-3xl">Shop</span>
                <ul className="flex flex-col gap-4 justify-center items-start">
                    {navItems.map((navItem,index)=>
                        <li key={index} className={`cursor-pointer flex flex-row justify-start items-center gap-3`} >
                            <div className="lineElement w-0 h-0 border-b-2 border-solid border-white rounded-xl"></div>
                            <p className="textelement grow h-full flex flex-col justify-start items-center font-poppins text-sm text-[#ffffff8c] font-medium">{navItem}</p>
                        </li>
                    )}
                </ul>
            </div>
    )
}
export default Shop;