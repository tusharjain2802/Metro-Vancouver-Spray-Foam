import React from 'react'
import { useEffect, useState } from 'react'
import WhatIsSprayFoam from '../../assets/images/WhatIsSprayFoam.png'
import OpenCellFoam from '../../assets/images/OpenCellFoam.png'
import ClosedCellFoam from '../../assets/images/ClosedCellFoam.png'
import sprayFoamBenefits from '../../assets/images/sprayFoamBenefits.png'
import insulationHowItisDone from '../../assets/images/insulationHowItisDone.png'
import RValueSprayFoam from '../../assets/images/RValueSprayFoam.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
const SprayFoam = () => {
    useEffect(() => {
        Aos.init();
    }, [])


    return (
        <div className='mx-10 my-16'>
            <div className="mt-16 text-black h-full mx-[9%]  mb-16">
                <div className="grid relative grid-cols-1 md:grid-cols-2">
                    <div id='targetDiv' className={`mx-auto md:mr-auto md:ml-0 mb-[35px] md:mb-0 relative md:h-[300px] w-[210px] md:w-[300px]`} >
                        <img src={WhatIsSprayFoam} alt="" className=" mx-auto md:mr-auto object-cover h-full w-full md:ml-0 rounded-xl " />
                        <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -top-3 md:-top-4 -left-3 md:-left-4 "></div>
                        <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -bottom-3 md:-bottom-4 -right-3 md:-right-4 "></div>
                        <div className="h-[29px] w-[29px] rounded-full z-[-1] opacity-85 bg-customGold absolute bottom-[260px] -right-20 hidden customBreakPointSm:block"></div>
                    </div>

                    <div className="flex flex-col justify-evenly text-center md:text-left text-2xl md:text-3xl lg:text-4xl md:p-4">
                        <div className="mb-0">
                            <span className="font-[300] font-anton">
                                What is Spray Foam?
                            </span>
                        </div>
                        <div className="font-sedan font-[400] text-lg md:text-left text-center lg:text-xl leading-6 mt-[21px] space-y-4">
                            <p>
                                Spray foam is a multifunctional insulating material that is sprayed into place. It offers exceptional thermal insulation, boasting a substantial R-value that varies between 3.5 and 7 per inch. Additionally, it can function as a waterproofing agent, specifically in closed-cell foam. When implemented as exterior wall insulation, it improves energy efficiency and prevents heat loss by forming an impermeable barrier. Spray foam has been identified as a dependable solution in the realms of comfort enhancement, energy cost reduction, and moisture infiltration prevention.
                            </p>
                        </div>
                    </div>
                    <div className="h-[99px] w-[99px] rounded-full animate-moving-div1 z-[-1] opacity-70 blur-sm bg-customGold absolute bottom-[249px] md:bottom-auto md:top-[32px] right-14 "></div>
                </div>
            </div>


            <div className="flex justify-center text-center md:text-left text-2xl md:text-3xl lg:text-4xl md:p-4">
                <span className="font-[300] font-anton underline ">
                    Types of Spray Foams
                </span>
            </div>


            <div className="mt-16 text-black h-full mx-[9%]  mb-16 ">
                <div className="grid relative grid-cols-1 md:grid-cols-2">
                    <div className="mx-auto md:mr-auto md:ml-0 mb-[35px] md:mb-0 relative md:h-[300px] w-[210px] md:w-[300px] block md:hidden" >
                        <img src={OpenCellFoam} alt="" className=" mx-auto md:mr-auto h-full w-full md:ml-0 rounded-xl " />
                        <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -top-3 md:-top-4 -left-3 md:-left-4 "></div>
                        <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -bottom-3 md:-bottom-4 -right-3 md:-right-4 "></div>
                        <div className="h-[40px] w-[40px] rounded-full z-[-1] opacity-85 bg-customGold absolute bottom-[260px] -left-12"></div>
                    </div>

                    <div className="flex flex-col justify-evenly text-center md:text-left text-2xl md:text-3xl lg:text-4xl md:p-4">
                        <div className="mb-0">
                            <span className="font-[300] font-anton">
                                Open-Cell Foam
                            </span>
                        </div>
                        <div className="font-sedan font-[400] text-lg md:text-left text-center lg:text-xl leading-6 mt-[21px]">
                            Open-cell foam is an adaptable and economical spray foam insulation material that is renowned for its ability to attenuate sound. It permits moisture to travel through, provides effective thermal insulation, and fills irregular spaces, all of which contribute to its widespread use in residential and commercial construction.
                        </div>
                    </div>
                    <div className="h-[99px] w-[99px] rounded-full animate-moving-div z-[-1] opacity-70 blur-sm bg-customGold absolute bottom-[249px] md:bottom-auto md:top-[32px] right-14 md:left-96"></div>
                    <div className="mx-auto md:ml-auto md:mr-0 mb-[35px] md:mb-0 relative md:h-[300px] w-[210px] md:w-[300px] md:block hidden" >
                        <img src={OpenCellFoam} alt="" className=" mx-auto md:mr-auto h-full w-full md:ml-0 rounded-xl " />
                        <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -top-3 md:-top-4 -left-3 md:-left-4 "></div>
                        <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -bottom-3 md:-bottom-4 -right-3 md:-right-4 "></div>
                        <div className="h-[40px] w-[40px] rounded-full z-[-1] opacity-85 bg-customGold absolute bottom-[260px] right-[350px]"></div>
                    </div>
                </div>
            </div>




            <div className="mt-16 text-black h-full mx-[9%]  mb-16">
                <div className="grid relative grid-cols-1 md:grid-cols-2">
                    <div className="mx-auto md:mr-auto md:ml-0 mb-[35px] md:mb-0 relative md:h-[300px] w-[210px] md:w-[300px] lg:w-[300px]" >
                        <img src={ClosedCellFoam} alt="" className=" mx-auto md:mr-auto h-full w-full md:ml-0 rounded-xl" />
                        <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -top-3 md:-top-4 -left-3 md:-left-4 "></div>
                        <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -bottom-3 md:-bottom-4 -right-3 md:-right-4 "></div>
                        <div className="h-[29px] w-[29px] rounded-full z-[-1] opacity-85 bg-customGold absolute bottom-[260px] -right-20 hidden sm:block "></div>
                    </div>

                    <div className="flex flex-col justify-evenly text-center md:text-left text-2xl md:text-3xl lg:text-4xl md:p-4">
                        <div className="mb-0">
                            <span className="font-[300] font-anton">
                                Closed-cell Foam
                            </span>
                        </div>
                        <div className="font-sedan font-[400] text-lg md:text-left text-center lg:text-xl leading-6 mt-[21px] space-y-4">
                            <p>
                                Closed-cell foam, dense and efficient, seals gas-filled chambers tightly, rendering it rigid and impermeable to moisture and air. It boasts exceptional strength, thermal insulation, and moisture resistance. Commonly used in basements, walls, and roofs for moisture control and high R-value.
                            </p>
                        </div>
                    </div>
                    <div className="h-[99px] w-[99px] rounded-full animate-moving-div1 z-[-1] opacity-70 blur-sm bg-customGold absolute bottom-[249px] md:bottom-auto md:top-[32px] right-14 "></div>
                </div>
            </div>


            <div className="flex justify-center text-center md:text-left text-2xl md:text-3xl lg:text-4xl md:p-4">
                <span className="font-[300] font-anton underline ">
                    Other Attributes
                </span>
            </div>


            <div className="mt-16 text-black h-full mx-[9%]  mb-16 ">
                <div className="grid relative grid-cols-1 md:grid-cols-2">
                    <div className="mx-auto md:mr-auto md:ml-0 mb-[35px] md:mb-0 relative md:h-[300px] w-[210px] md:w-[300px] block md:hidden" >
                        <img src={sprayFoamBenefits} alt="" className=" mx-auto md:mr-auto h-full w-full md:ml-0 rounded-xl " />
                        <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -top-3 md:-top-4 -left-3 md:-left-4 "></div>
                        <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -bottom-3 md:-bottom-4 -right-3 md:-right-4 "></div>
                        <div className="h-[40px] w-[40px] rounded-full z-[-1] opacity-85 bg-customGold absolute bottom-[260px] -left-12"></div>
                    </div>

                    <div className="flex flex-col justify-evenly text-center md:text-left text-2xl md:text-3xl lg:text-4xl md:p-4">
                        <div className="mb-0">
                            <span className="font-[300] font-anton">
                                What are it's benefits?
                            </span>
                        </div>
                        <div className="font-sedan font-[400] text-lg md:text-left text-center lg:text-xl leading-6 mt-[21px]">
                            Spray foam provides excellent thermal insulation and air sealing properties, which significantly reduce energy leakage and lower utility bills. It also improves indoor air quality by reducing the influx of allergens and pollutants and offers superior moisture resistance.
                        </div>
                    </div>
                    <div className="h-[99px] w-[99px] rounded-full animate-moving-div z-[-1] opacity-70 blur-sm bg-customGold absolute bottom-[249px] md:bottom-auto md:top-[32px] right-14 md:left-96"></div>
                    <div className="mx-auto md:ml-auto md:mr-0 mb-[35px] md:mb-0 relative md:h-[300px] w-[210px] md:w-[300px] md:block hidden" >
                        <img src={sprayFoamBenefits} alt="" className=" mx-auto md:mr-auto h-full w-full md:ml-0 rounded-xl " />
                        <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -top-3 md:-top-4 -left-3 md:-left-4 "></div>
                        <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -bottom-3 md:-bottom-4 -right-3 md:-right-4 "></div>
                        <div className="h-[40px] w-[40px] rounded-full z-[-1] opacity-85 bg-customGold absolute bottom-[260px] right-[350px]"></div>
                    </div>
                </div>
            </div>




            <div className="mt-16 text-black h-full mx-[9%]  mb-16">
                <div className="grid relative grid-cols-1 md:grid-cols-2">
                    <div className="mx-auto md:mr-auto md:ml-0 mb-[35px] md:mb-0 relative md:h-[300px] w-[300px] md:w-[300px] lg:w-[300px]" >
                        <img src={insulationHowItisDone} alt="" className=" mx-auto md:mr-auto h-full w-full md:ml-0 rounded-xl" />
                        <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -top-3 md:-top-4 -left-3 md:-left-4 "></div>
                        <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -bottom-3 md:-bottom-4 -right-3 md:-right-4 "></div>
                        <div className="h-[29px] w-[29px] rounded-full z-[-1] opacity-85 bg-customGold absolute bottom-[260px] -right-20 hidden sm:block"></div>
                    </div>

                    <div className="flex flex-col justify-evenly text-center md:text-left text-2xl md:text-3xl lg:text-4xl md:p-4">
                        <div className="mb-0">
                            <span className="font-[300] font-anton">
                                How is it Done?
                            </span>
                        </div>
                        <div className="font-sedan font-[400] text-lg md:text-left text-center lg:text-xl leading-6 mt-[21px] space-y-4">
                            <p>
                                Installation of spray foam insulation involves spraying a liquid mixture that quickly expands into foam, filling even the smallest openings. It is ideal for hard-to-reach areas and forms a permanent barrier against air and moisture.
                            </p>
                        </div>
                    </div>
                    <div className="h-[99px] w-[99px] rounded-full animate-moving-div1 z-[-1] opacity-70 blur-sm bg-customGold absolute bottom-[249px] md:bottom-auto md:top-[32px] right-14 "></div>
                </div>
            </div>



            <div className="mt-16 text-black h-full mx-[9%]  mb-16 ">
                <div className="grid relative grid-cols-1 md:grid-cols-2">
                    <div className="mx-auto md:mr-auto md:ml-0 mb-[35px] md:mb-0 relative md:h-[300px] w-[210px] md:w-[300px] block md:hidden" >
                        <img src={RValueSprayFoam} alt="" className=" mx-auto md:mr-auto h-full w-full md:ml-0 rounded-xl " />
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
                            Spray foam typically has an R-value ranging from R-20 to R-30 per inch, making it one of the most efficient insulating materials available. The best-suited R-value for spray foam in most climates is around R-30 to R-60, depending on the building's specific requirements.
                        </div>
                    </div>
                    <div className="h-[99px] w-[99px] rounded-full animate-moving-div z-[-1] opacity-70 blur-sm bg-customGold absolute bottom-[249px] md:bottom-auto md:top-[32px] right-14 md:left-96"></div>
                    <div className="mx-auto md:ml-auto md:mr-0 mb-[35px] md:mb-0 relative md:h-[300px] w-[210px] md:w-[300px] md:block hidden" >
                        <img src={RValueSprayFoam} alt="" className=" mx-auto md:mr-auto h-full w-full md:ml-0 rounded-xl " />
                        <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -top-3 md:-top-4 -left-3 md:-left-4 "></div>
                        <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -bottom-3 md:-bottom-4 -right-3 md:-right-4 "></div>
                        <div className="h-[40px] w-[40px] rounded-full z-[-1] opacity-85 bg-customGold absolute bottom-[260px] right-[350px]"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SprayFoam
