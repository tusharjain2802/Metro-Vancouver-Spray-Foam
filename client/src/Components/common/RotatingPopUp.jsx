import { useEffect, useState } from "react";
import { GiSpray } from "react-icons/gi";
import { Link } from "react-router-dom";
import ContactUS from "../../assets/images/ContactUs.png"
const RotatingPopUp = () => {
  const [currentColor, setCurrentColor] = useState("text-customGold");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentColor(
        currentColor === "text-customGold" ? "text-black" : "text-customGold"
      );
    }, 500);

    return () => clearInterval(intervalId);
  }, [currentColor]);

  
  
  return (
    <Link
      to="https://api.whatsapp.com/send?phone=17789922501"
      target="__blank"
      className="flex z-50 items-center"
    >
      <div
        id=""
        className="z-50 fixed top-[10%] md3:top-[80px] right-4 md3:right-[40px] mx-auto my-4"
      >
        <img
          draggable="false"
          className={`animate-spin-slow w-[99px] md:w-[155px] h-[99px] md:h-[155px] `}
          alt="howToStart"
          src={ContactUS}
        />
        <GiSpray className={`animate-bounce h-[19px] w-[19px] md:h-[35px] md:w-[35px] absolute top-[43%] left-[41%] md:left-[37%] ${currentColor} `} />
      </div>
    </Link>
  );
};

export default RotatingPopUp;
