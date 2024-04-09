import React, { useState, useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

function Navbar() {

  const [isLoading, setIsLoading] = useState(false);
  const [shadow, setShadow] = useState(false);

  const NavbarLinks = [
    {
      name: "Home",
      to: "hero",
    },
    {
      name: "Services",
      to: "services",
    },
    {
      name: "About",
      to: "about",
    },
    {
      name: "ContactUs",
      to: "contact",
    }

  ];

  useEffect(() => {
    const handleScroll = () => {
      setShadow(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);


  });




  return (
    <>
      <nav
        className={`flex justify-between fixed top-0 left-0 w-full z-10 transition duration-300 ease-in-out backdrop-blur-md ${shadow ? "shadow-lg" : ""
          }`}
      >
        {/* here the logo will  come */}
        {/* <div className="flex items-center justify-center mr-2 ml-28">
          <img src={IndonesiaOnChain} alt="" className="h-3/5" />
        </div> */}

        <div className="flex px-6">
          <ul className="inline-flex items-center mr-16 space-x-8">
            {NavbarLinks.map((link, key) => (
              <li key={key}>
                <ScrollLink
                  to={link.to}
                  smooth={true}
                  offset={-20}
                  className="px-4 py-2 font-poppins font-normal text-base leading-7 cursor-pointer"
                  activeClass="text-purple-600 underline"
                >
                  {link?.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar