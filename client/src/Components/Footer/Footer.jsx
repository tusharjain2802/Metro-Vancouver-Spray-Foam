
import React, { useState } from 'react'
import CompanyName from '../../assets/images/CompanyName.png';
import { Link } from "react-router-dom";
import { Footer } from "flowbite-react";
import { ChevronRight, ChevronDown, Dot } from 'lucide-react';
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { TechnicalDataSheetLinks, SafetyDataSheetLinks } from '../../TextData';
const FooterComponent = () => {

  const [isOpenTechnicalDataSheet, setIsOpenTechnicalDataSheet] = useState(false)
  const [isOpenSafetyDataSheet, setIsOpenSafetyDataSheet] = useState(false)
  const HandleClickIsOpenTechnicalDataSheet = () => {
    setIsOpenTechnicalDataSheet(!isOpenTechnicalDataSheet)
  }
  const HandleClickIsOpenSafetyDataSheet = () => {
    setIsOpenSafetyDataSheet(!isOpenSafetyDataSheet)
  }
  return (
    <Footer>

      <div className="bg-customGold z-[2] relative text-white  mt-[5rem]">
        <div className="absolute top-0 left-0 w-full h-full z-[-1] bg-black opacity-20"></div>

        <div className='flex flex-col items-center pt-8 h-fit justify-center gap-4 '>
          <div className='flex items-center gap-8 md:gap-16'>
            <div className='border-t-2 border-[#5c5346] w-16 md:w-32 lg:w-60'></div>
            <img src={CompanyName} alt="" className='w-60 md:w-72 lg:w-[450px]' />
            <div className='border-t-2 border-[#5c5346] w-16 md:w-32 lg:w-60'></div>
          </div>
        </div>


        <div className="w-full flex flex-col items-center sm:items-start justify-evenly  sm:flex-row  my-8  font-anton ">
          <div>
            <Footer.Title title="Worker's Column" className='text-sm sm:text-base' />
            <Footer.LinkGroup col className='text-xs sm:text-base'>
              <Footer.Link href="#">Report Injury</Footer.Link>
              <Footer.Link href="#">Daily Work Record</Footer.Link>
              <Footer.Link href="#">Safety Complain</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Documents" className='text-sm sm:text-base' />
            <Footer.LinkGroup col className='text-xs sm:text-base'>
              <Footer.Link href="#">Exposure Plan</Footer.Link>
              <div className='flex flex-col '>

                <button className='flex  items-center gap-1' onClick={HandleClickIsOpenTechnicalDataSheet}>
                  {
                    !isOpenTechnicalDataSheet ? (
                      <ChevronRight size={15} />
                    ) : (
                      <ChevronDown size={15} />
                    )
                  }
                  Technical Datasheets
                </button>

                <div className='flex flex-col ml-5'>
                  {isOpenTechnicalDataSheet && (
                    <div className='bg-transparent text-xs sm:text-base flex flex-col'>
                      {TechnicalDataSheetLinks.map((link, index) => (
                        <a href={link.Link} target='_blank' key={index} className='flex'>
                          <Dot />{link.Name}
                        </a>
                      ))}
                    </div>
                  )}


                </div>
              </div>
              <div className='flex flex-col '>

                <button className='flex  items-center gap-1' onClick={HandleClickIsOpenSafetyDataSheet}>
                  {
                    !isOpenSafetyDataSheet ? (
                      <ChevronRight size={15} />
                    ) : (
                      <ChevronDown size={15} />
                    )
                  }
                  Safety Datasheets
                </button>

                <div className='flex flex-col ml-5 duration-300'>
                  {isOpenSafetyDataSheet && (
                    <div className='bg-transparent text-xs sm:text-base flex flex-col duration-300 '>
                      {SafetyDataSheetLinks.map((link, index) => (
                        <a href={link.Link} target='_blank' key={index} className='flex duration-300'>
                          <Dot />{link.Name}
                        </a>
                      ))}
                    </div>
                  )}


                </div>
              </div>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="GuildeLines" className='text-sm sm:text-base' />
            <Footer.LinkGroup col className='text-xs sm:text-base'>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
         
        </div>





        <div className='flex justify-center my-8 '>
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
        <div className="text-center  text-base px-4  -mt-4">
          ©Metro Vancouver Spray Foam, Inc. All rights reserved.
        </div>
        <div className='py-1 mt-3 text-[14px] text-center bg-customGold'>
          Crafted with 🖤 <Link className='hover:underline underline-offset-4' target='__blank' to="https://linktr.ee/TechtribeFreelance" >TechTribe</Link>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;