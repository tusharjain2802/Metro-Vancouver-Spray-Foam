import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-customGold z-[-2] relative text-white text-center  mt-[5rem]">
      <div className="absolute top-0 left-0 w-full h-full z-[-1] bg-black opacity-20"></div>
      <div className='grid grid-cols-12 items-center pt-4 p-8 md:p-16'>

      </div>

      <div className="flex justify-between p-6 flex-wrap">
        <div className='w-full'>
          <ul className="flex justify-center md:text-[15px] font-[400]">
            <li className="p-2">
              <a href="https://www.instagram.com/metro_vancouver_spray_foam?igsh=aGdvYW9vcGdmYzRw" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                <FontAwesomeIcon icon={faInstagram} />
                <span className='ml-1 text-xl'>Instagram</span>
              </a>
            </li>
            <li className="p-2">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                <FontAwesomeIcon icon={faFacebook} />
                <span className='ml-1 text-xl'>Facebook</span>
              </a>
            </li>
            <li className="p-2">
              <a href="https://api.whatsapp.com/send?phone=17789922501" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                <FontAwesomeIcon icon={faWhatsapp} />
                <span className='ml-1 text-xl'>Whatsapp</span>
              </a>
            </li>
          </ul>
        </div>
      </div>


      <div className="text-center  text-xl px-4 -mt-4">
        ©Metro Vancouver Spray Foam, Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;