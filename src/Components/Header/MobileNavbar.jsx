import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import logo from '../../assets/images/logo.png'
import { useEffect, useState } from "react";

function MobileNavbar() {
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
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);


    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 768px)'); // Define media query for md and larger screens
        const handleScreenSizeChange = (e) => {
            if (e.matches) {
                console.log("Screen size is md or larger");
                setOpen(false)
            }
        };
        mediaQuery.addEventListener('change', handleScreenSizeChange);
        return () => mediaQuery.removeEventListener('change', handleScreenSizeChange);
    }, []);

    return (
        <>
            <nav
                className={`flex  text-customGold justify-between fixed top-0 left-0 w-full z-10 transition duration-300 ease-in-out  shadow-lg backdrop-blur-md ${visible ? 'translate-y-0' : '-translate-y-full'}  ${!atTop ? "shadow-lg backdrop-blur-md" : ""
                    }`}
            >
                <div className="flex items-center ml-8 m-4 ">
                    <img src={logo} alt="" className="w-[9%] left-0" />
                    <span className="text-xl ml-2 font-semibold font-sedan hidden md:inline">Metro Vancouver Spray Foam</span>
                </div>

                <div className="flex px-6 items-center  ">
                    <div className={`md:hidden cursor-pointer
                    
                    `} onClick={() => setOpen(!open)}>
                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {open ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            )}
                        </svg>
                    </div>
                    <ul className={`md:flex space-x-8 md:space-x-16 backdrop-blur-lg ${open ? 'flex flex-col w-full text-center py-4 absolute left-0 top-full  ' : ' hidden md:flex'}`}>
                        {NavbarLinks.map((link, key) => (
                            <div className="backdrop-blur-md">
                                <li key={key}>
                                    <ScrollLink
                                        to={link.to}
                                        smooth={true}
                                        offset={-20}
                                        className="px-4 py-2     font-sedan font-[200] text-lg leading-7 cursor-pointer block md:inline backdrop-blur-xl"
                                        activeClass="underline"
                                    >
                                        {link?.name}
                                    </ScrollLink>
                                </li>
                            </div>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default MobileNavbar;