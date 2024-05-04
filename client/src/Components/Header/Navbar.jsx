import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useEffect, useState } from "react";

function MobileNavbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);

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
        className={`flex  text-customGold justify-between fixed top-0 left-0 w-full z-10 transition duration-300 ease-in-out  shadow-lg backdrop-blur-md ${
          visible ? "translate-y-0" : "-translate-y-full"
        }  ${!atTop ? "shadow-lg backdrop-blur-md" : ""}`}
      >
        <Link to="/">
          <div className="flex items-center ml-8 m-4 ">
            <img src={logo} alt="" className="w-[9%] left-0" />
            <span className="text-xl ml-2 font-semibold font-sedan hidden md:inline">
              Metro Vancouver Spray Foam
            </span>
          </div>
        </Link>
      </nav>
    </>
  );
}

export default MobileNavbar;
