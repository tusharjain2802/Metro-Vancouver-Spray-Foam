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
  return (
    <div className='my-[45px] '>
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
