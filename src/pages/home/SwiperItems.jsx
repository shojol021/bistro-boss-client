import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
import SectionTitle from "../shared/SectionTitle";

const SwiperItems = () => {
    return (
        <>
            <section className="w-2/3 mx-auto">
                <SectionTitle 
                heading={"ORDER ONLINE"}
                subHeading={"From 11:00am to 10:00pm"}></SectionTitle>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={25}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mb-12"
                >
                    <SwiperSlide>
                        <img src={slide1} alt="" />
                        <h3 className="text-3xl text-center -mt-12 pb-6 text-white uppercase text-shadow z-10">Salads</h3>
                        </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt="" />
                        <h3 className="text-3xl text-center -mt-12 pb-6 text-white uppercase text-shadow z-10">Pizzas</h3>
                        </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="" />
                        <h3 className="text-3xl text-center -mt-12 pb-6 text-white uppercase text-shadow z-10">Soups</h3>
                        </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} alt="" />
                        <h3 className="text-3xl text-center -mt-12 pb-6 text-white uppercase text-shadow z-10">Desserts</h3>
                        </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} alt="" />
                        <h3 className="text-3xl text-center -mt-12 pb-6 text-white uppercase text-shadow z-10">Salads</h3>
                        </SwiperSlide>
                </Swiper>
            </section>
        </>
    );
};

export default SwiperItems;