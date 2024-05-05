import CompanyName from '../../assets/images/CompanyName.png';
import { Link } from "react-router-dom";
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-customGold z-[2] relative text-white text-center  mt-[5rem]">
      <div className="absolute top-0 left-0 w-full h-full z-[-1] bg-black opacity-20"></div>

      <div className='flex flex-col items-center h-48 justify-center gap-4 '>
        <div className='flex items-center gap-8 md:gap-16'>
          <div className='border-t-2 border-[#5c5346] w-16 md:w-32 lg:w-60'></div>
          <img src={CompanyName} alt="" className='w-60 md:w-72 lg:w-[450px]' />
          <div className='border-t-2 border-[#5c5346] w-16 md:w-32 lg:w-60'></div>
        </div>


        <div className='flex justify-center '>
          <ul className="flex justify-center md:text-[15px] font-[400] gap-8">
            <li className="p-2">
              <Link to="https://www.instagram.com/metro_vancouver_spray_foam?igsh=aGdvYW9vcGdmYzRw" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                <FaInstagram size={20} />
              </Link>
            </li>
            <li className="p-2">
              <Link to="https://www.facebook.com/share/ZrtQWV4N52AJQKTd/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                <FaFacebook size={20} />
              </Link>
            </li>
            <li className="p-2">
              <Link to="https://api.whatsapp.com/send?phone=17789922501" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                <FaWhatsapp size={20} />
              </Link>
            </li>
            <li className="p-2">
              <Link to="https://www.youtube.com/@MetrovancouverSprayfoam-xf9sh" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                <FaYoutube size={20} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center  text-base px-4  -mt-4">
        ©Metro Vancouver Spray Foam, Inc. All rights reserved.
      </div>
      <div className='py-1 mt-3 text-[14px] text-center bg-customGold'>
      Crafted with 🖤 <Link className='hover:underline underline-offset-4' target='__blank' to="https://linktr.ee/TechtribeFreelance" >TechTribe</Link>
      </div>
    </footer>
  );
};

export default Footer;