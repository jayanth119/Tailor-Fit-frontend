import {React,useState,useEffect} from "react";
import { FaAngleRight,FaAngleLeft } from "react-icons/fa6";
import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';
import "swiper/css";
import "../../style/slider.css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import useNavigator from "../../hooks/useNavigator";
import { Autoplay, Navigation } from 'swiper/modules';


function HomeSlider(){
    const [swiperEle,setSwiperEle] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [loaction,navigator] = useNavigator();
    const [mouseClickrgt,setMouseClickrgt] = useState(false);
    const [mouseClicklft,setMouseClicklft] = useState(false);
    const data = [
        "https://v3img.voot.com/resizeMedium,w_914,h_514/v3Storage/assets/vertical-tvdi-1729190726033.jpg",
        "https://v3img.voot.com/resizeMedium,w_914,h_514/v3Storage/assets/vertical-carousel-tv-1738045273909.jpg",
        "https://v3img.voot.com/resizeMedium,w_914,h_514/v3Storage/assets/vertical-tv-1734502195805.jpg",
        "https://v3img.voot.com/resizeMedium,w_914,h_514/v3Storage/assets/boo-tv-1700639535900.jpg",
        "https://v3img.voot.com/resizeMedium,w_914,h_514/v3Storage/assets/tv-1726683379800.jpg",
    ];
    const handelSlideClick = (event,index)=>{
        if(activeIndex === (index + 1)%data.length){
            swiperEle.slidePrev(600,false);
        }
        else if((activeIndex==4 && index==0) || activeIndex === (index - 1)%data.length){
            swiperEle.slideNext(600,false);
        }
        else if( activeIndex=== index){
            navigator("/login");
        }
        
    }
    return(
        <div className="w-full h-auto flex flex-col justify-center items-center ">
            <div className="relative w-full h-[440px] md:h-[212px] lg:h-[512px] pt-2 mb-6 md:mb-6 flex flex-row justify-center items-center">
                
                <Swiper className="w-full h-full flex flex-row justify-center items-center"
                    slidesPerView={3}
                    loop={true}
                    centeredSlides={true}
                    speed={600}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    onInit={(swiper) =>  setSwiperEle(swiper)}
                    navigation={
                        {
                            prevEl:".swiper-button-next",
                            nextEl:".swiper-button-prev"
                        }
                    }
                    onSlideChange={(swiper) => {setActiveIndex(swiper.realIndex)}} 
                    breakpoints={{
                        320:{
                            allowTouchMove:true,
                        },
                        1024:{
                            allowTouchMove:false,
                        },
                    }}
                    modules={[Autoplay, Navigation]}
                >
                    {
                        data.map((data,index)=>{
                            return (
                                <SwiperSlide key={index} onClick={(e)=>{handelSlideClick(event,index)}} className="relative aspect-video h-full rounded-2xl overflow-hidden bg-[#0B024D] bg-right transition-all duration-[400ms] ">
                                    <img loading="lazy" src={data} className={`absolute w-full h-full aspect-video object-cover transition-opacity duration-[600ms] ${activeIndex===index?"opacity-100":"opacity-65"}`}/>
                                    <div className={`absolute bottom-0 w-full h-3/4 flex flex-col justify-end items-center px-4 py-8 md:py-2 lg:px-6 lg:pb-8 bg-gradient-to-b from-transparent from-10% to-black to-85%  transition-opacity duration-[600ms] ${index === activeIndex?"opacity-100":"opacity-0"}`}>
                                        <h1 className={`font-urbanist font-semibold text-balance md:text-5xl text-center text-white`}>Heading</h1>
                                    </div>
                                </SwiperSlide>
                            );
                        })
                    }
                </Swiper>
                <div className="icon-container right-36 ">
                    <div onMouseDown={(e)=>{setMouseClicklft(true)}} onMouseUp={(e)=>{setMouseClicklft(false)}} className={`swiper-button-next relative rounded-full border-solid border-[3px] border-[#46454C] bg-transparent hidden md:flex flex-col justify-center items-center hover:cursor-pointer transition-transform duration-[175ms] m-0 ${mouseClicklft?"scale-[0.8725]":"scale-100"}`}>
                        <FaAngleLeft className="icon-size text-[#46454C]"/>
                    </div>
                    <div onMouseDown={(e)=>{setMouseClickrgt(true)}} onMouseUp={(e)=>{setMouseClickrgt(false)}} className={`swiper-button-prev relative rounded-full border-solid border-[3px] border-[#46454C] bg-transparent hidden md:flex flex-col justify-center items-center hover:cursor-pointer transition-transform duration-[175ms] ${mouseClickrgt?"scale-[0.8725]":"scale-100"}`}>
                        <FaAngleRight className="icon-size text-[#46454C]"/>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default HomeSlider;

