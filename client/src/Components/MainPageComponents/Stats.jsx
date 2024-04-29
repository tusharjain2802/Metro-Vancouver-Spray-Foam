import { useState, useEffect, useRef } from "react";
import LiquidityPageImageOne from "../../assets/images/LiquidityPageImageOne.png";
import LiquidityPageImageTwo from "../../assets/images/LiquidityPageImageTwo.png";
import LiquidityPageImageThree from "../../assets/images/LiquidityPageImageThree.png";
import LiquidityPageImageFour from "../../assets/images/LiquidityPageImageFour.png";
import { ElfsightWidget } from "react-elfsight-widget";
import bgImage from "../../assets/images/DALL E/image1.webp"
const LiquidityInfo = () => {
  const [currentProjectsNumber, setCurrentProjectsNumber] = useState(0);
  const [currentProjectSize, setCurrentProjectSize] = useState(0);
  const finalProjectsNumber = 2600;
  const finalProjectSize = 2700;
  const liquidityInfoRef = useRef(null);

  useEffect(() => {
    const incrementProjectsNumber = () => {
      setCurrentProjectsNumber((prevNumber) => {
        const incrementAmount = Math.ceil(finalProjectsNumber / 500) + 20;
        const nextNumber = prevNumber + incrementAmount;
        if (nextNumber >= finalProjectsNumber) {
          setCurrentProjectsNumber(finalProjectsNumber);
          clearInterval(projectsNumberInterval);
        }
        return nextNumber;
      });
    };

    const incrementProjectSize = () => {
      setCurrentProjectSize((prevSize) => {
        const incrementAmount = Math.ceil(finalProjectSize / 500) + 20;
        const nextSize = prevSize + incrementAmount;
        if (nextSize >= finalProjectSize) {
          setCurrentProjectSize(finalProjectSize);
          clearInterval(projectSizeInterval);
        }
        return nextSize;
      });
    };

    let projectsNumberInterval;
    let projectSizeInterval;

    const handleScroll = () => {
      const liquidityInfoTop = liquidityInfoRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (liquidityInfoTop < windowHeight - 300) {
        projectsNumberInterval = setInterval(incrementProjectsNumber, 200);
        projectSizeInterval = setInterval(incrementProjectSize, 200);
      } else {
        clearInterval(projectsNumberInterval);
        clearInterval(projectSizeInterval);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(projectsNumberInterval);
      clearInterval(projectSizeInterval);
    };
  }, [finalProjectsNumber, finalProjectSize]);

  const [fullWidth, setFullWidth]= useState(false);

  const showfullwidth =(value)=>{
    setFullWidth(value);
  }

  return (
    <div id="about" className="relative w-full py-[40px] overflow-hidden">
    <img src={bgImage} alt="Hero Background" className="absolute opacity-65 top-0 left-0 w-full h-full object-cover" />
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
    <div onMouseEnter={()=>showfullwidth(true)} onMouseLeave={()=>showfullwidth(false)} className='mx-[9%] flex flex-col mb-[36px] w-auto relative '>
    <h1 className={`font-anton transition-all duration-500 text-white font-bold text-[29px] md:text-[38px]`}>What our customers say</h1>
    <span className={`z-50 duration-500 h-[12px] md:h-[16px] ${fullWidth ? "w-[99px] " :"w-[330px]  md:w-[431px]"} transition-all bg-customGold`} ></span>
  </div>
  <div className="mx-[9%]">
    <ElfsightWidget widgetId="8ea48be8-ee6e-4aa7-a5e8-9eda592ce1b5" />
    </div>
    <div className="flex md:flex-row mx-[9%] flex-col justify-center gap-8 mb-8 items-center">
      <div
        className="relative bg-cover bg-center h-[300px] w-[300px] rounded-lg border-2  border-white border-opacity-60 p-4"
        style={{ backgroundImage: `url(${LiquidityPageImageOne})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000] to-customGold opacity-70  p-4 h-full flex flex-col justify-end rounded-lg"></div>
        <div className="relative z-[1] text-white flex justify-center top-1/3 text-center md:top-0 md:text-start md:justify-start">
          <div>
            <h2 className="text-white text-6xl font-bold m-1 font-cabin">4+</h2>
            <p className="text-white text-xl font-cabin">Years of Experience</p>
          </div>
        </div>
      </div>
      <div ref={liquidityInfoRef} className="flex flex-col justify-evenly gap-8">
        <div
          className="relative bg-cover bg-center h-[300px] w-[300px] md:h-[134px] xl:w-[800px] lg:w-[600px] rounded-lg border-2  border-white border-opacity-60 p-2"
          style={{ backgroundImage: `url(${LiquidityPageImageTwo})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#000000] to-customGold opacity-70 p-4 h-full flex flex-col justify-end rounded-lg"></div>
          <div className="relative z-[1] text-white flex md:justify-start justify-center top-1/3 text-center md:text-start md:top-0">
            <div>
              <h2 className="text-white text-6xl font-bold m-1 font-cabin">
                {currentProjectsNumber}+
              </h2>
              <p className="text-white text-xl font-cabin">
                Projects Completed
              </p>
            </div>
          </div>
        </div>
        <div
          className="relative bg-cover bg-center h-[300px] w-[300px] md:h-[134px] xl:w-[800px] lg:w-[600px] rounded-lg border-2  border-white border-opacity-60 p-4"
          style={{ backgroundImage: `url(${LiquidityPageImageThree})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#000000] to-customGold opacity-70 p-4 h-full flex flex-col justify-end rounded-lg"></div>
          <div className="relative z-[1] text-white flex md:justify-end justify-center top-1/3 text-center  md:text-start md:top-0">
            <div>
              <h2 className="text-white text-6xl font-bold m-1 font-cabin">
                {currentProjectSize} sq. ft.
              </h2>
              <p className="text-white text-xl font-cabin">
                Average Project Size
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative bg-cover bg-center h-[300px] w-[300px] rounded-lg border-2  border-white border-opacity-60 p-4"
        style={{ backgroundImage: `url(${LiquidityPageImageFour})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000] to-customGold opacity-70 p-4 h-full flex flex-col justify-end rounded-lg"></div>
        <div className="relative z-[1] text-white flex md:flex-col md:justify-end md:h-full justify-center top-1/3 text-center md:text-start md:top-0">
          <div>
            <h2 className="text-white text-6xl font-bold m-1 font-cabin">
              Serving
            </h2>
            <p className="text-white text-xl font-cabin">
              Metro Vancouver and surrounding areas
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LiquidityInfo;
