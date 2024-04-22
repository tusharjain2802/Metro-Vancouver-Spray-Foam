import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-customGold z-[-2] relative text-white text-center  mt-[5rem]">
    <div className="absolute top-0 left-0 w-full h-full z-[-1] bg-black opacity-20"></div>
      <div className='flex justify-center items-center pt-4 p-8 md:p-16'>
        {/* <img src={MainLogo} alt="" /> */}

      </div>

      <div className="flex justify-between p-6 flex-wrap">
        <div className='w-full'>
          <ul className="flex justify-center md:text-[15px] font-[400]">
            <li className="p-2">
              <Link to="https://www.instagram.com/metro_vancouver_spray_foam?igsh=aGdvYW9vcGdmYzRw" target="_blank" rel="noopener noreferrer" className="hover:underline">
                <FontAwesomeIcon icon={faInstagram} />
                <span className='ml-1'>Instagram</span>
              </Link>
            </li>
            <li className="p-2">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className=" hover:underline">
                <FontAwesomeIcon icon={faFacebook} />
                <span className='ml-1'>Facebook</span>
              </a>
            </li>
            <li className="p-2">
              <Link  to="https://api.whatsapp.com/send?phone=17789922501" target="_blank" rel="noopener noreferrer" className=" hover:underline">
                <FontAwesomeIcon icon={faWhatsapp} />
                <span className='ml-1'>Whatsapp</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center px-4 -mt-4">
        ©Metro Vancouver Spray Foam, Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;