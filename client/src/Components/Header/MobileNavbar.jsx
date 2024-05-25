import { Link as ScrollLink } from "react-scroll";
import logo from "../../assets/images/logo.png";
import { useEffect, useState } from "react";
import { Link as RouteLink, useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

function MobileNavbar() {
  const navigate = useNavigate();

  const NavbarLinksOne = [
    {
      name: "Home",
      to: "hero",
    }
  ];

  const NavbarLinksThree = [
    {
      name: "About",
      to: "about",
    },
    {
      name: "ContactUs",
      to: "contact",
    },
  ];

  const services = [
    { name: "Insulation", to: "/services/0" },
    { name: "Fireproofing", to: "/services/1" },
    { name: "Spray foam", to: "/services/2" },
    { name: "Damp roofing", to: "/services/3" },
    { name: "Dry wall", to: "/services/4" }
  ];

  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [open, setOpen] = useState(false); // State for mobile menu
  const [servicesOpen, setServicesOpen] = useState(false); // State for services dropdown

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(currentScrollPos < prevScrollPos || currentScrollPos < 10);
      setAtTop(currentScrollPos < 200);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigationAndScroll = (to) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(to);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100); // Delay to ensure the navigation completes
  };

  return (
    <>
      <nav
        className={`flex text-customGold bg-white lg:bg-inherit justify-between fixed top-0 left-0 w-full z-[200] transition duration-300 ease-in-out   ${visible ? "translate-y-0" : "-translate-y-full"}  ${!atTop ? "shadow-lg  backdrop-blur-3xl" : ""} ${open ? 'backdrop-blur-xl' : ''}`}
      >
        <div className="flex items-center ml-8 m-4 ">
          <img src={logo} alt="Logo" className="w-[9%] left-0" />
          <span className="text-xs sm:text-base md:text-xl lg:text-2xl ml-2 font-bold font-sedan inline">
            Metro Vancouver Spray Foam
          </span>
        </div>

        <div className="flex px-6 items-center">
          <div
            className="lg:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                  stroke="#b3a058"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                  stroke="#b3a058"
                ></path>
              )}
            </svg>
          </div>
          <ul
            className={`lg:flex lg:space-x-16 ${open ? "flex flex-col bg-white w-full text-center absolute left-0 top-full" : "hidden lg:flex"}`}
          >
            {NavbarLinksOne.map((link, key) => (
              <li key={key}>
                <span
                  onClick={() => handleNavigationAndScroll(link.to)}
                  className="md:block hidden px-1 py-2 font-sedan font-semibold text-lg leading-7 cursor-pointer lg:inline"
                >
                  {link?.name}
                </span>
              </li>
            ))}
            <li className="relative group">
              <span className="md:block hidden px-1 py-2 font-sedan font-semibold text-lg leading-7 cursor-pointer lg:inline">
                Services
              </span>
              <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-lg py-2 w-40">
                {services.map((service, index) => (
                  <li
                    key={index}
                    onClick={() => navigate(service.to)}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-xl"
                  >
                    {service.name}
                  </li>
                ))}
              </ul>
            </li>
            {NavbarLinksThree.map((link, key) => (
              <li key={key}>
                <span
                  onClick={() => handleNavigationAndScroll(link.to)}
                  className="md:block hidden px-1 py-2 font-sedan font-semibold text-lg leading-7 cursor-pointer lg:inline"
                >
                  {link?.name}
                </span>
              </li>
            ))}
            <div className="block md:hidden">
              {NavbarLinksOne.map((link, key) => (
                <li key={key}>
                  <span
                    onClick={() => handleNavigationAndScroll(link.to)}
                    className="px-1 py-2 font-sedan font-[400] text-lg leading-7 cursor-pointer block lg:inline"
                  >
                    {link?.name}
                  </span>
                </li>
              ))}
              <li className="relative">
                <span
                  className="px-1 py-2 font-sedan font-[400] text-lg leading-7 cursor-pointer flex items-center justify-center lg:inline "
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  Services {
                    servicesOpen ? (<span> <ChevronDown /></span>) : (<span><ChevronUp /></span>)
                  }
                </span>
                {servicesOpen && (
                  <ul className="bg-white  mt-2 rounded-lg py-2">
                    {services.map((service, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          navigate(service.to);
                          setServicesOpen(false); // Close dropdown on click
                          setOpen(false); // Close mobile menu
                        }}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer underline"
                      >
                        {service.name}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              {NavbarLinksThree.map((link, key) => (
                <li key={key}>
                  <span
                    onClick={() => handleNavigationAndScroll(link.to)}
                    className="px-1 py-2 font-sedan font-[400] text-lg leading-7 cursor-pointer block lg:inline"
                  >
                    {link?.name}
                  </span>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default MobileNavbar;
