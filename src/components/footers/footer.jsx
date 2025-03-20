import { MoveRight } from "lucide-react";

const Foooter = ()=>{
    return (
        <div className="w-full h-auto px-14 flex flex-col justify-center items-center gap-4 bg-[#f9f5f1] ">
            <div className="w-full h-full grid grid-cols-12 justify-start items-center gap-16 border-t border-[#fcf8f5] py-2">
                <div className="col-span-6 h-auto flex flex-col justify-start items-start gap-1 py-8">
                    <h1 className="w-full h-auto font-main text-5xl text-black text-start font-semibold">Tailor-fit</h1>
                    <div className="w-[60%] h-auto p-2 relative flex flex-col justify-center items-start gap-4">
                        <div className="w-full h-auto relative">
                            <input placeholder="Email address" className=" w-full h-auto pr-8 text-lg border-b border-[#777777] focus:border-black bg-transparent focus:ring-0 outline-none placeholder:text-[#777777]"/>
                            <MoveRight className="absolute hover:cursor-pointer bottom-2 right-1 h-4 text-base text-black"/>
                        </div>
                        <p className="w-full h-auto text-start text-wrap text-base font-caliber text-[#777777]">
                            By submitting your email above, you consent and agree to receive recurring promotional and personalized marketing emails from us. You may unsubscribe at any time. To learn more, please see our <span className="underline underline-offset-4 text-black">Privacy</span> & <span className="underline underline-offset-4 text-black">Terms</span>
                        </p>
                    </div>
                </div>
                <div className="col-span-3 h-full flex flex-col justify-start items-start gap-3 py-8">
                    <h2 className="w-full h-auto text-[#777777] text-start text-balance text-base font-semibold">Contact Us</h2>
                    <div className="w-full h-auto flex flex-col justify-start items-start gap-1">
                        <p className="w-full h-auto text-start text-base font-caliber font-medium">Live Chart</p>
                        <p className="w-full h-auto text-start text-base font-caliber font-medium">Email Us</p>
                        <p className="w-full h-auto text-start text-base font-caliber font-medium">Call Us</p>
                        <p className="w-full h-auto text-start text-base font-caliber font-medium">Book Appointment</p>
                    </div>
                </div>
                <div className="col-span-3 h-full flex flex-col justify-start items-start gap-3 py-8">
                    <h2 className="w-full h-auto text-[#777777] text-start text-balance text-base font-semibold">Folllow Us</h2>
                    <div className="w-full h-auto flex flex-col justify-start items-start gap-1">
                        <a href="#" className="w-full h-auto text-start text-base font-caliber font-medium">Instagram</a>
                        <a href="#"  className="w-full h-auto text-start text-base font-caliber font-medium">Facebook</a>
                        <a href="#"  className="w-full h-auto text-start text-base font-caliber font-medium">Whatsapp</a>
                        <a href="#"  className="w-full h-auto text-start text-base font-caliber font-medium">Twitter</a>
                    </div>
                </div>
            </div>
        </div>
    );
} 

export default Foooter;