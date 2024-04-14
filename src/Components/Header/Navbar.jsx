import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import logo from '../../assets/images/logo.png'
import { useEffect, useState } from "react";
function Navbar() {

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
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(currentScrollPos < prevScrollPos || currentScrollPos < 10);
      setAtTop(currentScrollPos < 400);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);


  return (
    <>
      <nav
        className={`flex text-customGold justify-between fixed top-0 left-0 w-full z-10 transition duration-300 ease-in-out ${visible ? 'translate-y-0' : '-translate-y-full'}  ${!atTop ? "shadow-lg backdrop-blur-md" : ""
          }`}
      >
        <div className=" flex items-center ml-8 m-4">
          <img src={logo} alt="" className="w-[9%] left-0" />
          <span className="text-xl ml-2 font-semibold font-sedan">Metro Vancouver Spray Foam</span>
        </div>

        <div className="flex px-6">
          <ul className="inline-flex items-center mr-16 space-x-8">
            {NavbarLinks.map((link, key) => (
              <li key={key}>
                <ScrollLink
                  to={link.to}
                  smooth={true}
                  offset={-20}
                  className="px-4 py-2 font-sedan font-[200] text-lg leading-7 cursor-pointer"
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