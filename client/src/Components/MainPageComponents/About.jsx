import { useState } from 'react'

import MethodsImageOne from "../../assets/images/gallery/image (5).jpg";
import AboutImageTwo from '../../assets/images/AboutImageTwo.png'
import GradientSpan from "../common/GradientSpan";
const Methods = () => {
  const [fullWidth, setFullWidth] = useState(false);

  const showfullwidth = (value) => {
    setFullWidth(value);
  }
  return (
    <div id="about" className='mx-auto'>
      <div onMouseEnter={() => showfullwidth(true)} onMouseLeave={() => showfullwidth(false)} className='mx-[9%] mb-[16px] w-auto relative subhead'>
        <h1 className={`font-anton transition-all duration-500 font-bold text-[29px] md:text-[38px]`}>About</h1>
        <span className={`absolute left-1 duration-500 -bottom-1 h-[12px] md:h-[16px] ${fullWidth ? "w-[49px] " : " w-[80px] md:w-[120px]"} z-[-1] transition-all bg-customGold`} ></span>
      </div>
      <div className="mt-16 text-black h-full mx-[9%]  mb-16">
        <div className="grid relative grid-cols-1 md:grid-cols-2">
          <div className="mx-auto md:mr-auto md:ml-0 mb-[35px] md:mb-0 relative md:h-[431px] w-[210px] md:w-[342px]">
            <img src={AboutImageTwo} alt="" className=" mx-auto md:mr-auto h-full w-full md:ml-0 rounded-xl " />
            <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -top-3 md:-top-4 -left-3 md:-left-4 "></div>
            <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -bottom-3 md:-bottom-4 -right-3 md:-right-4 "></div>
            <div className="h-[29px] w-[29px] rounded-full z-[-1] opacity-85 bg-customGold absolute bottom-[260px] -right-20 "></div>
          </div>

          <div className="flex flex-col justify-evenly text-center md:text-left text-2xl md:text-3xl lg:text-4xl p-4">
            <div className="mb-0">
              <span className="font-[300] font-anton">
                Welcome to  <GradientSpan>Metro Vancouver Spray Foam: </GradientSpan>Your Partner in Construction Excellence.
              </span>
            </div>
            <div className="font-sedan font-[400] text-lg md:text-left text-center lg:text-xl leading-6 mt-[21px] space-y-4">
              <p>We&apos;re your premier destination for insulation solutions in the Metro Vancouver area. Proudly locally owned and operated, we&apos;ve been dedicated to serving our community with excellence in insulation services for numerous years.
              </p>
              <p>
                If you&apos;re on the lookout for reliable insulation companies in your area, your search ends here. We specialize in offering comprehensive insulation solutions tailored to meet the needs of residential, commercial, and industrial properties alike. With our team of seasoned professionals, we understand the distinct requirements of every project, striving to deliver cost-effective and energy-efficient solutions customized to your unique needs.
              </p>
            </div>
          </div>
          <div className="h-[99px] w-[99px] rounded-full animate-moving-div z-[-1] opacity-70 blur-sm bg-customGold absolute bottom-[249px] md:bottom-auto md:top-[32px] right-8 "></div>
        </div>
      </div>




      <div className="mt-16 text-black h-full mx-[9%]  mb-16 block md:hidden">
        <div className="grid relative grid-cols-1 md:grid-cols-2">
          <div className="mx-auto md:mr-auto md:ml-0 mb-[35px] md:mb-0 relative md:h-[431px] w-[210px] md:w-[342px]">
            <img src={MethodsImageOne} alt="" className=" mx-auto md:mr-auto h-full w-full md:ml-0 rounded-xl " />
            <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -top-3 md:-top-4 -left-3 md:-left-4 "></div>
            <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -bottom-3 md:-bottom-4 -right-3 md:-right-4 "></div>
            <div className="h-[29px] w-[29px] rounded-full z-[-1] opacity-85 bg-customGold absolute bottom-[260px] -right-20 "></div>
          </div>

          <div className="flex flex-col justify-evenly text-center md:text-left text-2xl md:text-3xl lg:text-4xl p-4">
            <div className="mb-0">
              <span className="font-[300] font-anton">
                We&apos;re <GradientSpan>Masters of Comfort and Safety.</GradientSpan> Experience the Difference.
              </span>
            </div>
            <div className="font-sedan font-[400] text-lg md:text-left text-center lg:text-xl leading-6 mt-[21px]">
              At Metro Vancouver Spray Foam, we go beyond the bricks and mortar to ensure your building is not just structurally sound, but perfectly insulated and protected. With our expertise in spray foam insulation, a variety of insulation types, damp proofing solutions, precise drywall installations, thorough firestopping techniques, and efficient blow-in insulation services, we are your comprehensive partner in construction excellence.
            </div>
          </div>
          <div className="h-[99px] w-[99px] rounded-full animate-moving-div z-[-1] opacity-70 blur-sm bg-customGold absolute bottom-[249px] md:bottom-auto md:top-[32px] right-8 "></div>
        </div>
      </div>
      <div className="mt-16 text-black h-full mx-[9%]  mb-16 md:block hidden">
        <div className="grid relative grid-cols-1 md:grid-cols-2">

          <div className="flex flex-col justify-evenly text-center md:text-left text-2xl md:text-3xl lg:text-4xl p-4">
            <div className="mb-0">
              <span className="font-[300] font-anton">
                We&apos;re <GradientSpan>Masters of Comfort and Safety.</GradientSpan> Experience the Difference.
              </span>
            </div>
            <div className="font-sedan font-[400] text-lg md:text-left text-center lg:text-xl leading-6 mt-[21px]">
              At Metro Vancouver Spray Foam, we go beyond the bricks and mortar to ensure your building is not just structurally sound, but perfectly insulated and protected. With our expertise in spray foam insulation, a variety of insulation types, damp proofing solutions, precise drywall installations, thorough firestopping techniques, and efficient blow-in insulation services, we are your comprehensive partner in construction excellence.
            </div>
          </div>
          <div className="h-[99px] w-[99px] rounded-full animate-moving-div z-[-1] opacity-70 blur-sm bg-customGold absolute bottom-[249px] md:bottom-auto md:top-[32px] left-96 "></div>
          <div className="mx-auto md:ml-auto md:mr-0 mb-[35px] md:mb-0 relative md:h-[431px] w-[210px] md:w-[342px]">
            <img src={MethodsImageOne} alt="" className=" mx-auto md:mr-auto h-full w-full md:ml-0 rounded-xl " />
            <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -top-3 md:-top-4 -left-3 md:-left-4 "></div>
            <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -bottom-3 md:-bottom-4 -right-3 md:-right-4 "></div>
            <div className="h-[29px] w-[29px] rounded-full z-[-1] opacity-85 bg-customGold absolute bottom-[260px] -right-20 "></div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Methods;
