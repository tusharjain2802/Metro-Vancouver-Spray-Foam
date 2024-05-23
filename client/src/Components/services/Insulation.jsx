import React from 'react'
import { useEffect, useState } from 'react'
import InsulationImage from '../../assets/images/Insulation.png'
import InsulationTwo from '../../assets/images/InsulationTwo.png'
import InsulationThree from '../../assets/images/InsulationThree.png'
import InsulationFour from '../../assets/images/InsulationFour.png'

import Aos from 'aos'
import 'aos/dist/aos.css'
const Insulation = () => {


  const [fullWidth, setFullWidth] = useState(false);

  useEffect(() => {
    Aos.init();
  }, [])


  return (
    <div className='mx-auto my-16'>
      <div className="mt-16 text-black h-full mx-[9%]  mb-16">
        <div className="grid relative grid-cols-1 md:grid-cols-2">
          <div id='targetDiv' className={`mx-auto md:mr-auto md:ml-0 mb-[35px] md:mb-0 relative md:h-[300px] w-[210px] md:w-[300px]`} data-aos="fade-down">
            <img src={InsulationImage} alt="" className=" mx-auto md:mr-auto object-cover h-full w-full md:ml-0 rounded-xl " />
            <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -top-3 md:-top-4 -left-3 md:-left-4 "></div>
            <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -bottom-3 md:-bottom-4 -right-3 md:-right-4 "></div>
            <div className="h-[29px] w-[29px] rounded-full z-[-1] opacity-85 bg-customGold absolute bottom-[260px] -right-20 hidden customBreakPointSm:block "></div>
          </div>

          <div className="flex flex-col justify-evenly text-center md:text-left text-2xl md:text-3xl lg:text-4xl md:p-4">
            <div className="mb-0">
              <span className="font-[300] font-anton">
                What is Insulation?
              </span>
            </div>
            <div className="font-sedan font-[400] text-lg md:text-left text-center lg:text-xl leading-6 mt-[21px] space-y-4">
              <p>
                Insulation refers to materials used in buildings to reduce heat loss or gain by creating a barrier over different areas with significant temperature differences. Effective insulation is crucial for maximizing energy efficiency and maintaining consistent indoor temperatures in homes and commercial buildings.
              </p>
            </div>
          </div>
          <div className="h-[99px] w-[99px] rounded-full animate-moving-div1 z-[-1] opacity-70 blur-sm bg-customGold absolute bottom-[249px] md:bottom-auto md:top-[32px] right-14 "></div>
        </div>
      </div>




      <div className="mt-16 text-black h-full mx-[9%]  mb-16 ">
        <div className="grid relative grid-cols-1 md:grid-cols-2">
          <div className="mx-auto md:mr-auto md:ml-0 mb-[35px] md:mb-0 relative md:h-[300px] w-[210px] md:w-[600px] block md:hidden" data-aos="fade-down">
            <img src={InsulationTwo} alt="" className=" mx-auto md:mr-auto h-full w-full md:ml-0 rounded-xl " />
            <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -top-3 md:-top-4 -left-3 md:-left-4 "></div>
            <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -bottom-3 md:-bottom-4 -right-3 md:-right-4 "></div>
            <div className="h-[40px] w-[40px] rounded-full z-[-1] opacity-85 bg-customGold absolute bottom-[260px] -left-12"></div>
          </div>

          <div className="flex flex-col justify-evenly text-center md:text-left text-2xl md:text-3xl lg:text-4xl md:p-4">
            <div className="mb-0">
              <span className="font-[300] font-anton">
                What are its benefits?
              </span>
            </div>
            <div className="font-sedan font-[400] text-lg md:text-left text-center lg:text-xl leading-6 mt-[21px]">
              The primary benefits of insulation include significant energy savings through reduced heating and cooling costs, enhanced comfort within the living or working environment, improved sound control, and a notable decrease in the building's overall carbon footprint through energy conservation.
            </div>
          </div>
          <div className="h-[99px] w-[99px] rounded-full animate-moving-div z-[-1] opacity-70 blur-sm bg-customGold absolute bottom-[249px] md:bottom-auto md:top-[32px] right-14 md:left-96"></div>
          <div className="mx-auto md:ml-auto md:mr-0 mb-[35px] md:mb-0 relative md:h-[300px] w-[210px] md:w-[300px] md:block hidden" data-aos="fade-down">
            <img src={InsulationTwo} alt="" className=" mx-auto md:mr-auto h-full w-full md:ml-0 rounded-xl " />
            <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -top-3 md:-top-4 -left-3 md:-left-4 "></div>
            <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -bottom-3 md:-bottom-4 -right-3 md:-right-4 "></div>
            <div className="h-[40px] w-[40px] rounded-full z-[-1] opacity-85 bg-customGold absolute bottom-[260px] right-[350px] "></div>
          </div>
        </div>
      </div>




      <div className="mt-16 text-black h-full mx-[9%]  mb-16">
        <div className="grid relative grid-cols-1 md:grid-cols-2">
          <div className="mx-auto md:mr-auto md:ml-0 mb-[35px] md:mb-0 relative md:h-[300px] w-[210px] md:w-[300px]" data-aos="fade-down">
            <img src={InsulationThree} alt="" className=" mx-auto md:mr-auto object-cover h-full w-full md:ml-0 rounded-xl " />
            <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -top-3 md:-top-4 -left-3 md:-left-4 "></div>
            <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -bottom-3 md:-bottom-4 -right-3 md:-right-4 "></div>
            <div className="h-[29px] w-[29px] rounded-full z-[-1] opacity-85 bg-customGold absolute bottom-[260px] -right-20 hidden customBreakPointSm:block"></div>
          </div>

          <div className="flex flex-col justify-evenly text-center md:text-left text-2xl md:text-3xl lg:text-4xl md:p-4">
            <div className="mb-0">
              <span className="font-[300] font-anton">
                How is it Done?
              </span>
            </div>
            <div className="font-sedan font-[400] text-lg md:text-left text-center lg:text-xl leading-6 mt-[21px] space-y-4">
              <p>
                Insulation installation involves placing insulating materials such as fiberglass, foam, or cellulose between walls, floors, and ceilings. Techniques vary with the type of insulation being used, from loose-fill cellulose blown into attics to fiberglass batts layered in wall cavities.
              </p>
            </div>
          </div>
          <div className="h-[99px] w-[99px] rounded-full animate-moving-div1 z-[-1] opacity-70 blur-sm bg-customGold absolute bottom-[249px] md:bottom-auto md:top-[32px] right-14 "></div>
        </div>
      </div>



      <div className="mt-16 text-black h-full mx-[9%]  mb-16 ">
        <div className="grid relative grid-cols-1 md:grid-cols-2">
          <div className="mx-auto md:mr-auto md:ml-0 mb-[35px] md:mb-0 relative md:h-[300px] w-[300px] md:w-[300px] block md:hidden" data-aos="fade-down">
            <img src={InsulationFour} alt="" className=" mx-auto md:mr-auto h-full w-full md:ml-0 rounded-xl " />
            <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -top-3 md:-top-4 -left-3 md:-left-4 "></div>
            <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -bottom-3 md:-bottom-4 -right-3 md:-right-4 "></div>
            <div className="h-[40px] w-[40px] rounded-full z-[-1] opacity-85 bg-customGold absolute bottom-[260px] -left-12"></div>
          </div>

          <div className="flex flex-col justify-evenly text-center md:text-left text-2xl md:text-3xl lg:text-4xl md:p-4">
            <div className="mb-0">
              <span className="font-[300] font-anton">
                What is R-Value?
              </span>
            </div>
            <div className="font-sedan font-[400] text-lg md:text-left text-center lg:text-xl leading-6 mt-[21px]">
              R-value measures the thermal resistance of insulation materials. Higher R-values mean greater insulating effectiveness. The optimal R-value depends on climate and building location but typically ranges from R-30 to R-60 for attics and from R-13 to R-40 for wall cavities.
            </div>
          </div>
          <div className="h-[99px] w-[99px] rounded-full animate-moving-div z-[-1] opacity-70 blur-sm bg-customGold absolute bottom-[249px] md:bottom-auto md:top-[32px] right-14 md:left-96"></div>
          <div className="mx-auto md:ml-auto md:mr-0 mb-[35px] md:mb-0 relative md:h-[200px] md:w-[400px] lg:h-[300px] w-[210px] lg:w-[600px] md:block hidden" data-aos="fade-down">
            <img src={InsulationFour} alt="" className=" mx-auto md:mr-auto h-full w-full md:ml-0 rounded-xl " />
            <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -top-3 md:-top-4 -left-3 md:-left-4 "></div>
            <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -bottom-3 md:-bottom-4 -right-3 md:-right-4 "></div>
            <div className="h-[40px] w-[40px] rounded-full z-[-1] opacity-85 bg-customGold absolute bottom-[260px] right-[350px]"></div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Insulation
