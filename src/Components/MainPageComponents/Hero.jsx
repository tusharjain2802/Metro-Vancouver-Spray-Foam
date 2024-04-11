import heroImage from "../../assets/images/hero.png"
const HeroSection = () => {
  return (
    <div className="relative  w-full h-screen overflow-hidden">
      <img src={heroImage} alt="Hero Background" className="absolute opacity-65 top-0 left-0 w-full h-full object-cover" />
      <div className="absolute top-0 left-0 w-full h-full  bg-opacity-50"></div>
      <h1 className="text-[46px] absolute top-[40%] left-[10%] text-black font-black ">From Foam to Fireproof:<br /><span> Your Insulation Experts</span></h1>
    </div>
  );
};

export default HeroSection;
 