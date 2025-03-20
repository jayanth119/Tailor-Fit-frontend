import React from "react";
import { Star } from "lucide-react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "../../style/home/index.css";
import suggestion_1 from "../../assets/images/slider/suggestion_1.webp";
import suggestion_2 from "../../assets/images/slider/suggestion_2.webp";
import suggestion_3 from "../../assets/images/slider/suggestion_3.webp";
import suggestion_4 from "../../assets/images/slider/suggestion_4.webp";


const SuggestionItem = () => {
    return (
        <div className="group w-full h-auto flex flex-col justify-center items-center gap-[6px] hover:cursor-pointer">
            <div className="suggestion relative w-full aspect-[329/464] bg-[#F3F1EF]">
                <Star className="z-50 absolute top-4 right-4 w-4 h-4 text-[#757575]" />
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <img src={suggestion_3} alt="slider-image" className="w-full h-full aspect-[329/464] object-cover"/>
                </div>
                <div className="suggestion-slider-container absolute inset-0 hidden group-hover:block transition-all duration-200">
                    <SuggestionSlider/>
                </div>

            </div>
            <div className="w-full h-auto flex flex-row justify-between items-start">
                <div className="grow h-full flex flex-col justify-center items-center gap-1 py-1">
                    <p className="w-full h-auto text-black text-start text-base/[18px] font-caliber font-bold truncate">The Surya Vamsi</p>
                    <p className="w-full h-auto text-black text-start text-base/[20px] font-caliber font-medium truncate">$2334</p>
                </div>
            </div>
        </div>
    );
};

export const SuggestionSlider  = ()=>{
    return(
        <Swiper
        slidesPerView={1}
        loop = {true}
        speed={600}
        navigation={true}
        modules={[Navigation]}
        className="suggestion-slider absolute w-full h-ful">
            <SwiperSlide className="slider-slide text-white w-full h-full">
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <img src={suggestion_1} alt="slider-image" className="w-full h-full aspect-[329/464] object-cover"/>
                </div>
            </SwiperSlide>
            <SwiperSlide className="slider-slide text-white w-full h-full">
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <img src={suggestion_2} alt="slider-image" className="w-full h-full aspect-[329/464] object-cover"/>
                </div>
            </SwiperSlide>
            <SwiperSlide className="slider-slide text-white w-full h-full">
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <img src={suggestion_3} alt="slider-image" className="w-full h-full aspect-[329/464] object-cover"/>
                </div>
            </SwiperSlide>
            <SwiperSlide className="slider-slide text-white w-full h-full">
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <img src={suggestion_4} alt="slider-image" className="w-full h-full aspect-[329/464] object-cover"/>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

export default SuggestionItem;
