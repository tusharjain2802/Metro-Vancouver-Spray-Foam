import Typewriter from "../common/TypeWriter";
import heroImage from "../../assets/images/DALL E/image2.webp";
const HeroSection = () => {
  return (
    <div id="hero" className="relative text-white font-anton font-extrabold w-full h-[459px] md:h-[663px] overflow-hidden">
      <img
        src={heroImage}
        alt="Hero Background"
        className="absolute z-[-4] top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full z-[-2] bg-black opacity-65"></div>
      <h1 className="text-[39px] md:text-[56px] font-anton absolute top-[40%] left-[10%] font-black ">
        <Typewriter text="From Foam to Fireproof:" delay={100} />
        <br />
        <span className="relative text-[29px] md:text-[45px]">
          <Typewriter text=" Your Insulation Experts" delay={100} />
          <div className="absolute bg-customGold z-[-1] left-0 bottom-0 opacity-90 w-full h-[30px] "></div>
        </span>
      </h1>
    </div>
  );
};

export default HeroSection;
