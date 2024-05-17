import React from 'react'
import { useEffect, useState } from 'react'
import DampProof from '../../assets/images/DampProof.png'

import Aos from 'aos'
import 'aos/dist/aos.css'
const DampRoofing = () => {
    useEffect(() => {
        Aos.init();
    }, [])


    return (
        <div className='mx-auto my-16'>
            <div className="mt-16 text-black h-full mx-[9%]  mb-16">
                <div className="grid relative grid-cols-1 md:grid-cols-2">
                    <div id='targetDiv' className={`mx-auto md:mr-auto md:ml-0 mb-[35px] md:mb-0 relative md:h-[300px] w-[210px] md:w-[300px]`} >
                        <img src={DampProof} alt="" className=" mx-auto md:mr-auto object-cover h-full w-full md:ml-0 rounded-xl " />
                        <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -top-3 md:-top-4 -left-3 md:-left-4 "></div>
                        <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -bottom-3 md:-bottom-4 -right-3 md:-right-4 "></div>
                        <div className="h-[29px] w-[29px] rounded-full z-[-1] opacity-85 bg-customGold absolute bottom-[260px] -right-20 "></div>
                    </div>

                    <div className="flex flex-col justify-evenly text-center md:text-left text-2xl md:text-3xl lg:text-4xl p-4">
                        <div className="mb-0">
                            <span className="font-[300] font-anton">
                                What is Damp Proofing?
                            </span>
                        </div>
                        <div className="font-sedan font-[400] text-lg md:text-left text-center lg:text-xl leading-6 mt-[21px] space-y-4">
                            <p>
                                Damp proofing is the treatment of a building's foundation or walls to prevent moisture from passing into the interior spaces. It is essential for preventing water damage and maintaining structural integrity.
                            </p>
                        </div>
                    </div>
                    <div className="h-[99px] w-[99px] rounded-full animate-moving-div1 z-[-1] opacity-70 blur-sm bg-customGold absolute bottom-[249px] md:bottom-auto md:top-[32px] right-14 "></div>
                </div>
            </div>




            <div className="mt-16 text-black h-full mx-[9%]  mb-16 ">
                <div className="grid relative grid-cols-1 md:grid-cols-2">
                    <div className="mx-auto md:mr-auto md:ml-0 mb-[35px] md:mb-0 relative md:h-[300px] w-[210px] md:w-[600px] block md:hidden" >
                        <img src={DampProof} alt="" className=" mx-auto md:mr-auto h-full w-full md:ml-0 rounded-xl " />
                        <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -top-3 md:-top-4 -left-3 md:-left-4 "></div>
                        <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -bottom-3 md:-bottom-4 -right-3 md:-right-4 "></div>
                        <div className="h-[40px] w-[40px] rounded-full z-[-1] opacity-85 bg-customGold absolute bottom-[260px] -left-12"></div>
                    </div>

                    <div className="flex flex-col justify-evenly text-center md:text-left text-2xl md:text-3xl lg:text-4xl p-4">
                        <div className="mb-0">
                            <span className="font-[300] font-anton">
                                What are its benefits?
                            </span>
                        </div>
                        <div className="font-sedan font-[400] text-lg md:text-left text-center lg:text-xl leading-6 mt-[21px]">
                            Damp proofing helps protect the structure from water damage, extends the life of the building, prevents health issues related to mold and damp, and reduces heating costs by eliminating damp cold spots.
                        </div>
                    </div>
                    <div className="h-[99px] w-[99px] rounded-full animate-moving-div z-[-1] opacity-70 blur-sm bg-customGold absolute bottom-[249px] md:bottom-auto md:top-[32px] right-14 md:left-96"></div>
                    <div className="mx-auto md:ml-auto md:mr-0 mb-[35px] md:mb-0 relative md:h-[300px] w-[210px] md:w-[500px] md:block hidden" >
                        <img src={DampProof} alt="" className=" mx-auto md:mr-auto h-full w-full md:ml-0 rounded-xl " />
                        <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -top-3 md:-top-4 -left-3 md:-left-4 "></div>
                        <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -bottom-3 md:-bottom-4 -right-3 md:-right-4 "></div>
                        <div className="h-[40px] w-[40px] rounded-full z-[-1] opacity-85 bg-customGold absolute bottom-[260px] right-[350px]"></div>
                    </div>
                </div>
            </div>




            <div className="mt-16 text-black h-full mx-[9%]  mb-16">
                <div className="grid relative grid-cols-1 md:grid-cols-2">
                    <div className="mx-auto md:mr-auto md:ml-0 mb-[35px] md:mb-0 relative md:h-[300px] w-[300px] md:w-[300px] lg:w-[400px]" >
                        <img src={DampProof} alt="" className=" mx-auto md:mr-auto h-full w-full md:ml-0 rounded-xl" />
                        <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -top-3 md:-top-4 -left-3 md:-left-4 "></div>
                        <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -bottom-3 md:-bottom-4 -right-3 md:-right-4 "></div>
                        <div className="h-[29px] w-[29px] rounded-full z-[-1] opacity-85 bg-customGold absolute bottom-[260px] -right-20 "></div>
                    </div>

                    <div className="flex flex-col justify-evenly text-center md:text-left text-2xl md:text-3xl lg:text-4xl p-4">
                        <div className="mb-0">
                            <span className="font-[300] font-anton">
                                How is it Done?
                            </span>
                        </div>
                        <div className="font-sedan font-[400] text-lg md:text-left text-center lg:text-xl leading-6 mt-[21px] space-y-4">
                            <p>
                                This is typically achieved through the application of a waterproof coating or membrane to the outside of foundation walls, the installation of damp-proof courses within walls, or by incorporating water-resistant materials in the construction process.
                            </p>
                        </div>
                    </div>
                    <div className="h-[99px] w-[99px] rounded-full animate-moving-div1 z-[-1] opacity-70 blur-sm bg-customGold absolute bottom-[249px] md:bottom-auto md:top-[32px] right-14 "></div>
                </div>
            </div>
        </div>
    )
}

export default DampRoofing
