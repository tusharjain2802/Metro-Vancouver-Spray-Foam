import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp, faTwitter } from '@fortawesome/free-brands-svg-icons';
import CompanyName from '../../assets/images/CompanyName.png';
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-customGold z-[2] relative text-white text-center  mt-[5rem]">
      <div className="absolute top-0 left-0 w-full h-full z-[-1] bg-black opacity-20"></div>

      <div className='flex flex-col items-center h-48 justify-center gap-4 '>
        <div className='flex items-center gap-8 md:gap-16'>
          <div className='border-t-2 border-[#5c5346] w-16 md:w-32 lg:w-60'></div>
          <img src={CompanyName} alt="" className='w-48 md:w-60 lg:w-96' />
          <div className='border-t-2 border-[#5c5346] w-16 md:w-32 lg:w-60'></div>
        </div>

        
        <div className='flex justify-center '>
          <ul className="flex justify-center md:text-[15px] font-[400] gap-8">
            <li className="p-2">
              <Link to="https://www.instagram.com/metro_vancouver_spray_foam?igsh=aGdvYW9vcGdmYzRw" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </li>
            <li className="p-2">
              <Link to="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
            </li>
            <li className="p-2">
              <Link to="https://api.whatsapp.com/send?phone=17789922501" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                <FontAwesomeIcon icon={faWhatsapp} />
              </Link>
            </li>
            <li className="p-2">
              <Link to="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                <FaXTwitter />
              </Link>
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