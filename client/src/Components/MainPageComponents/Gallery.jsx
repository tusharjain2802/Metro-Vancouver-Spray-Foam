// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Gallery.css';

import image1 from "../../assets/images/gallery/image (11).jpg";
import image2 from "../../assets/images/gallery/image (4).jpg";
import image3 from "../../assets/images/gallery/image (24).jpg";
import image4 from "../../assets/images/gallery/image (36).jpg";
import image5 from "../../assets/images/gallery/image (27).jpg";
import image6 from "../../assets/images/gallery/image (38).jpg";
import image7 from "../../assets/images/gallery/image (26).jpg";
import image8 from "../../assets/images/gallery/image (13).jpg";
import image9 from "../../assets/images/gallery/image (9).jpg";
import image10 from "../../assets/images/gallery/image (28).jpg";

import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { useState } from 'react';

export default function App() {
  const images =[
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10
  ];

  const [fullWidth, setFullWidth]= useState(false);

  const showfullwidth =(value)=>{
    setFullWidth(value);
  }
  return (
    <div className='my-[45px] '>
    <div onMouseEnter={()=>showfullwidth(true)} onMouseLeave={()=>showfullwidth(false)} className='mx-[9%] mb-[16px] w-auto relative subhead'>
    <h1 className={`font-anton transition-all duration-500 font-bold text-[29px] md:text-[38px]`}>Our Projects</h1>
    <span className={`absolute left-1 duration-500 -bottom-1 h-[12px] md:h-[16px] ${fullWidth ? "w-[49px] " :" w-[169px] md:w-[219px]"} z-[-1] transition-all bg-customGold`} ></span>
  </div>
    <p className='text-center text-[22px] mx-[5%] md:text-[28px] '><span className='text-customGold '>&quot;</span>Transforming Spaces with Innovative Insulation:<br />
    <span className='text-[19px] md:text-[23px] font-sedan'> Your Partner for Comfort, Efficiency, and Safety.<span className='text-customGold '>&quot;</span></span></p>
    <p className='text-center my-[20px] mx-[19%] '>Innovative Insulation Solutions by Fomaing. From spray foam mastery to fireproofing expertise, we&apos;re dedicated to creating safer, more efficient spaces. Trust us to insulate, protect, and transform your environment with cutting-edge technology and unparalleled craftsmanship. We are committed to putting the time and effort in to achieve your satisfaction.</p>
      <Swiper
        effect={'coverflow'}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
      {images.map((image, index)=>(
        <SwiperSlide key={index}>
          <img src={image} />
        </SwiperSlide>
      ))}
      </Swiper>
    </div>
  );
}
