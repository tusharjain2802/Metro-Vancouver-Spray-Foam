import { useEffect, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <button
        className={`fixed bottom-5 md:bottom-10 z-50 right-5 md:right-10  text-white px-4 py-2 rounded-full transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={scrollToTop}
      >
        <FaArrowAltCircleUp className="text-customGold text-[50px] hover:text-[#7e6e33] transition-colors" />
      </button>
    </div>
  );
};

export default ScrollUpButton;
