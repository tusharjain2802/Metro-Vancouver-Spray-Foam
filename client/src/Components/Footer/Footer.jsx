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
        <div className='col-span-12 md:col-span-6 text-center'>
          <h1 className='font-anton text-xl mb-4 tracking-wide'>MetroVancouver Spray Foam</h1>
          <span className='font-anton font-normal'>
            Metro Vancouver Spray Foam is a premier insulation company specializing in fiberglass insulation solutions tailored for pipes, batts, and residential structures. Renowned for their superior quality, their products effectively mitigate heat transfer, uphold consistent temperatures, and bolster energy efficiency. Leveraging their expertise, Metro Vancouver Spray Foam delivers dependable and comfortable insulation solutions for diverse applications.
          </span>
        </div>
        <div className='col-span-12 md:col-span-6 text-center mx-auto my-8 md:my-0'>
          <h1 className='font-anton text-xl mb-4 tracking-wide'>Contact</h1>
          <div className='flex flex-col gap-3'>
            <Link to="mailto:metrovancouversprayfoam@gmail.com" className='flex items-center'>
              <div className='flex gap-3 items-center'>
                <IoMdMail />
                <span className='font-anton font-bold'>Mail:</span>
              </div>
              <span className='ml-[15px]  font-[500] text-base md:text-[16px]'>metrovancouversprayfoam@gmail.com</span>
            </Link>
            <Link to="tel:17789922501" className='flex items-center'>
              <div className='flex gap-3 items-center'>
                <FaPhone />
                <span className='font-anton font-bold'>Phone:</span>
              </div>
              <span className='ml-[15px] font-[500] text-base md:text-[16px]'>+1 (778) 992-2501</span>
            </Link>

            <div className='font-anton flex gap-3'>
              <div className='flex gap-3 items-center'>
                <MdWork />
                <span className='font-anton font-bold'>Working Hours:</span>
              </div>
              <span className='text-sm sm:text-base'>
                Mon - Fri 10:00 AM - 07:00 PM
              </span>
            </div>
          </div>
        </div>
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