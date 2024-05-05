import { Link } from 'react-router-dom';
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { MdWork } from "react-icons/md";
const MapSection = () => {

  return (
    <div className="relative mt-[12px] mb-[65px] w-full overflow-hidden">

      <div className="flex flex-col justify-center gap-4 mt-2 mb-12">
        <Link to="mailto:metrovancouversprayfoam@gmail.com" className='flex items-center'>
          <div className='flex gap-3 items-center'>
            <IoMdMail className='text-customGold' />
            <span className='font-anton font-bold'>Mail:</span>
          </div>
          <span className='ml-[15px]  font-[500] text-base md:text-[16px]'>metrovancouversprayfoam@gmail.com</span>
        </Link>
        <Link to="tel:17789922501" className='flex items-center'>
          <div className='flex gap-3 items-center'>
            <FaPhone className='text-customGold'/>
            <span className='font-anton font-bold'>Phone:</span>
          </div>
          <span className='ml-[15px] font-[500] text-base md:text-[16px]'>+1 (778) 992-2501</span>
        </Link>

        <div className='font-anton flex gap-3'>
          <div className='flex gap-3 items-center'>
            <MdWork className='text-customGold'/>
            <span className='font-anton font-bold'>Working Hours:</span>
          </div>
          <span className='text-sm sm:text-base'>
            Mon - Fri 10:00 AM - 07:00 PM
          </span>
        </div>
      </div>
      <iframe
        className="w-full px-[10%] h-[550px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2610.7008272500175!2d-122.8292256!3d49.13031679999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485dbb85b467a9b%3A0x2ae1e68bd294d849!2sMetro%20Vancouver%20spray%20foam!5e0!3m2!1sen!2sin!4v1712989321888!5m2!1sen!2sin"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  );
};

export default MapSection;
