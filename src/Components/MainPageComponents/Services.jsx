import heroImage from "../../assets/images/DALL E/image3.webp";
const HeroSection = () => {
  return (
    <div id="services" className="relative text-white font-anton font-extrabold w-full h-[663px] overflow-hidden">
      <img
        src={heroImage}
        alt="Hero Background"
        className="absolute z-[-4] top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full z-[-2] bg-black opacity-65"></div>

    </div>
  );
};

export default HeroSection;
