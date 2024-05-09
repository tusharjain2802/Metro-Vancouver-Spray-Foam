import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useEffect, useState } from "react";

function MobileNavbar() {
  const NavbarLinks = [
    {
      name: "Home",
      to: "/",
    }
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

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024)"); // Define media query for lg and larger screens
    const handleScreenSizeChange = (e) => {
      if (e.matches) {
        console.log("Screen size is lg or larger");
        setOpen(false);
      }
    };
    mediaQuery.addEventListener("change", handleScreenSizeChange);
    return () =>
      mediaQuery.removeEventListener("change", handleScreenSizeChange);
  }, []);

  return (
    <div>
      <nav
        className={`flex  text-customGold bg-white   justify-between fixed top-0 left-0 w-full z-[200] transition duration-300 ease-in-out   ${visible ? "translate-y-0" : "-translate-y-full"
          }  ${!atTop ? "shadow-lg " : ""} `}
      >
        <div className="flex items-center ml-8 m-4 ">
          <img src={logo} alt="" className="w-[9%] left-0" />
          <span className="text-xl ml-2 font-semibold font-sedan hidden lg:inline">
            Metro Vancouver Spray Foam
          </span>
        </div>

        <div className="flex px-6 items-center  ">
          <div
            className={`lg:hidden cursor-pointer`}
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
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              )}
            </svg>
          </div>
          <ul
            className={`backdrop-blur-xl items-center lg:flex ${open
              ? "  flex flex-col bg-white w-full text-center  absolute left-0 top-full  "
              : " hidden lg:flex"
              }`}
          >
            <li>
              <Link
                to="/"
                smooth={true}
                offset={-20}
                className="pr-11 font-sedan py-4 t text-lg leading-7 cursor-pointer block lg:inline font-bold"
                
              >
                <span className="inline-block ">Back to Home</span>
              </Link>
            </li>


          </ul>
        </div>
      </nav>
    </div>
  );
}

export default MobileNavbar;
