import { ArrowRight } from "lucide-react";

const Foooter = ()=>{
    return (
        <div className="w-full h-auto px-14 flex flex-col justify-center items-center gap-4 bg-[#fcf7f2] ">
            <div className="w-full h-full grid grid-cols-12 justify-start items-center gap-16 border-t border-[#fcf8f5] py-2">
                <div className="col-span-6 h-auto flex flex-col justify-start items-start gap-3 py-8">
                    <h1 className="w-full h-auto font-main text-4xl text-black text-start">Tailor-fit</h1>
                    <div className="w-[60%] h-auto p-2 relative">
                        <input placeholder="Email address" className="absolute left-0 w-full h-auto pr-8 text-lg border-b boreder-black bg-transparent focus:ring-0 outline-none"/>
                        <ArrowRight className="absolute -bottom-4 right-1 h-4 text-base text-black"/>
                    </div>
                </div>
                <div className="col-span-3 h-full flex flex-col justify-start items-start gap-3 py-8">
                    <h2 className="w-full h-auto text-start text-balance text-lg font-normal">Contact Us</h2>
                    <div className="w-full h-auto flex flex-col justify-start items-start gap-1">
                        <p className="w-full h-auto text-start text-base font-caliber font-semibold">Live Chart</p>
                        <p className="w-full h-auto text-start text-base font-caliber font-semibold">Email Us</p>
                    </div>
                </div>
                <div className="col-span-3 h-full flex flex-col justify-start items-start gap-3 py-8">
                    <h2 className="w-full h-auto text-start text-balance text-lg font-normal">Folllow Us</h2>
                    <div className="w-full h-auto flex flex-col justify-start items-start gap-1">
                        <a className="w-full h-auto text-start text-base font-caliber font-semibold">Instagram</a>
                        <a className="w-full h-auto text-start text-base font-caliber font-semibold">Facebook</a>
                    </div>
                </div>
            </div>
        </div>
    );
} 

export default Foooter;