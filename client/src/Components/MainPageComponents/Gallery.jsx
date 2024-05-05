import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Modal from 'react-modal';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { useState } from 'react';
import './Gallery.css';

// Importing all images
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
import image11 from '../../assets/images/Image11.jpg';
import image12 from '../../assets/images/Image12.jpg';
import image13 from '../../assets/images/Image13.jpg';
import image14 from '../../assets/images/Image14.jpg';
import image15 from '../../assets/images/Image15.jpg';
import image16 from '../../assets/images/Image16.jpg';

export default function App() {
  const images = [
    image1, image2, image3, image4, image5, image6,
    image7, image8, image9, image10, image11, image12,
    image13, image14, image15, image16
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [fullWidth, setFullWidth] = useState(false);

  const showfullwidth = (value) => {
    setFullWidth(value);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className='my-[45px]'>
      {/* Rest of your component structure... */}
      <div onMouseEnter={() => showfullwidth(true)} onMouseLeave={() => showfullwidth(false)} className='mx-[9%] mb-[16px] w-auto relative subhead'>
        <h1 className={`font-anton transition-all duration-500 font-bold text-[29px] md:text-[38px]`}>Our Projects</h1>
        <span className={`absolute left-1 duration-500 -bottom-1 h-[12px] md:h-[16px] ${fullWidth ? "w-[49px] " : " w-[169px] md:w-[219px]"} z-[-1] transition-all bg-customGold`} ></span>
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
        {images.map((image, index) => (
          <SwiperSlide key={index} onClick={() => openModal(image)}>
            <img src={image} alt={`Gallery Image ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <img src={selectedImage} alt="Enlarged Project" />
        <button onClick={closeModal} className='p-3 w-32 m-4 font-anton font-medium rounded-xl bg-customGold text-black'>Close</button>
      </Modal>
    </div>
  );
}
