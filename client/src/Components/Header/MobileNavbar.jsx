import { Link as ScrollLink } from "react-scroll";
import logo from "../../assets/images/logo.png";
import { useEffect, useState } from "react";
import { Link as RouteLink } from 'react-router-dom'
function MobileNavbar() {


  const NavbarLinksOne = [
    {
      name: "Home",
      to: "hero",
    },
    {
      name: "About",
      to: "about",
    },

  ];

  const NavbarLinksTwo = [
    {
      name: "Services",
      to: '/services',
    }
  ]

  const NavbarLinksThree = [
    {
      name: "ContactUs",
      to: "contact",
    },
  ];


  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [open, setOpen] = useState(false); // State for mobile menu

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


  return (
    <>
      <nav
        className={`flex text-customGold bg-white lg:bg-inherit justify-between fixed top-0 left-0 w-full z-[200] transition duration-300 ease-in-out   ${visible ? "translate-y-0" : "-translate-y-full"
          }  ${!atTop ? "shadow-lg  backdrop-blur-3xl" : ""} ${open ? 'backdrop-blur-xl' : ''} `}
      >
        <div className="flex items-center ml-8 m-4 ">
          <img src={logo} alt="" className="w-[9%] left-0" />
          <span className="text-2xl ml-2 font-bold font-sedan hidden lg:inline">
            Metro Vancouver Spray Foam
          </span>
        </div>

        <div className="flex px-6 items-center  ">
          <div
            className={`lg:hidden cursor-pointer
                    
                    `}
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
            className={`lg:flex   lg:space-x-16  ${open
              ? "flex flex-col bg-white w-full text-center absolute left-0 top-full  "
              : " hidden lg:flex"
              }`}
          >
            {NavbarLinksOne.map((link, key) => (
              <li key={key}>
                <ScrollLink
                  to={link.to}
                  smooth={true}
                  offset={-20}
                  className="md:block hidden px-1 py-2 font-sedan font-semibold text-lg leading-7 cursor-pointer lg:inline"
                >
                  {link?.name}
                </ScrollLink>
              </li>
            ))}

            {
              NavbarLinksTwo.map((link, key) => (
                <li key={key}>
                  <RouteLink
                    to={link.to}
                    className="md:block hidden px-1 py-2 font-sedan font-semibold text-lg leading-7 cursor-pointer lg:inline"
                  >
                    {link?.name}
                  </RouteLink>
                </li>
              ))
            }
            {NavbarLinksThree.map((link, key) => (
              <li key={key}>
                <ScrollLink
                  to={link.to}
                  smooth={true}
                  offset={-20}
                  className="md:block hidden px-1 py-2 font-sedan font-semibold text-lg leading-7 cursor-pointer lg:inline"
                >
                  {link?.name}
                </ScrollLink>
              </li>
            ))}


            <div className="block md:hidden">
              {NavbarLinksOne.map((link, key) => (
                <li key={key}>
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    offset={-20}
                    className="px-1 py-2 font-sedan font-[400] text-lg leading-7 cursor-pointer block lg:inline"
                  >
                    {link?.name}
                  </ScrollLink>
                </li>
              ))}
              {
                NavbarLinksTwo.map((link, key) => (
                  <li key={key}>
                    <RouteLink
                      to={link.to}
                      className="px-1 py-2 font-sedan font-[400] text-lg leading-7 cursor-pointer block lg:inline"
                    >
                      {link?.name}
                    </RouteLink>
                  </li>
                ))
              }
              {NavbarLinksThree.map((link, key) => (
                <li key={key}>
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    offset={-20}
                    className="md:block hidden px-1 py-2 font-sedan font-semibold text-lg leading-7 cursor-pointer lg:inline"
                  >
                    {link?.name}
                  </ScrollLink>
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