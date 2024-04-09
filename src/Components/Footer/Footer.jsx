import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-[#252641] text-center  mt-[5rem]">

      <div className='flex justify-center items-center pt-4 p-8 md:p-16'>
        {/* <img src={MainLogo} alt="" /> */}

      </div>

      <div className="flex justify-between p-6 flex-wrap">
        <div className='w-full'>
          <ul className="flex justify-center md:text-[15px] font-[400]">
            <li className="p-2">
              <a href="https://www.instagram.com/metro_vancouver_spray_foam?igsh=aGdvYW9vcGdmYzRw" target="_blank" rel="noopener noreferrer" className="text-[#B2B3CF] hover:underline">
                <FontAwesomeIcon icon={faInstagram} />
                <span className='ml-1'>Instagram</span>
              </a>
            </li>
            <li className="p-2">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-[#B2B3CF] hover:underline">
                <FontAwesomeIcon icon={faFacebook} />
                <span className='ml-1'>Facebook</span>
              </a>
            </li>
            <li className="p-2">
              <a href="https://api.whatsapp.com/send?phone=123456789" target="_blank" rel="noopener noreferrer" className="text-[#B2B3CF] hover:underline">
                <FontAwesomeIcon icon={faWhatsapp} />
                <span className='ml-1'>Whatsapp</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-[#B2B3CF] text-center px-4 -mt-4">
        ©Metro Vancouver Spray Foam, Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;