import React from 'react'
import { useEffect, useState } from 'react'
import FireProofingOne from '../../assets/images/FireProofing.png'
import FireProofTwo from '../../assets/images/FireProofTwo.png'
import FireProofThree from '../../assets/images/FireProofingThree.png'
import InsulationFour from '../../assets/images/InsulationFour.png'

import Aos from 'aos'
import 'aos/dist/aos.css'
const FireProofing = () => {
    useEffect(() => {
        Aos.init();
    }, [])


    return (
        <div className='mx-auto my-16'>
            <div className="mt-16 text-black h-full mx-[9%]  mb-16">
                <div className="grid relative grid-cols-1 md:grid-cols-2">
                    <div id='targetDiv' className={`mx-auto md:mr-auto md:ml-0 mb-[35px] md:mb-0 relative md:h-[300px] w-[210px] md:w-[300px]`} >
                        <img src={FireProofingOne} alt="" className=" mx-auto md:mr-auto object-cover h-full w-full md:ml-0 rounded-xl " />
                        <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -top-3 md:-top-4 -left-3 md:-left-4 "></div>
                        <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -bottom-3 md:-bottom-4 -right-3 md:-right-4 "></div>
                        <div className="h-[29px] w-[29px] rounded-full z-[-1] opacity-85 bg-customGold absolute bottom-[260px] -right-20 "></div>
                    </div>

                    <div className="flex flex-col justify-evenly text-center md:text-left text-2xl md:text-3xl lg:text-4xl p-4">
                        <div className="mb-0">
                            <span className="font-[300] font-anton">
                                What is Fireproofing?
                            </span>
                        </div>
                        <div className="font-sedan font-[400] text-lg md:text-left text-center lg:text-xl leading-6 mt-[21px] space-y-4">
                            <p>
                                Fireproofing is the practice of making materials or structures more resistant to fire. Techniques include the application of special fire-resistant coatings or the incorporation of fire-resistant materials in construction to enhance the safety and integrity of buildings during fires.
                            </p>
                        </div>
                    </div>
                    <div className="h-[99px] w-[99px] rounded-full animate-moving-div1 z-[-1] opacity-70 blur-sm bg-customGold absolute bottom-[249px] md:bottom-auto md:top-[32px] right-14 "></div>
                </div>
            </div>




            <div className="mt-16 text-black h-full mx-[9%]  mb-16 ">
                <div className="grid relative grid-cols-1 md:grid-cols-2">
                    <div className="mx-auto md:mr-auto md:ml-0 mb-[35px] md:mb-0 relative md:h-[300px] w-[210px] md:w-[600px] block md:hidden" >
                        <img src={FireProofTwo} alt="" className=" mx-auto md:mr-auto h-full w-full md:ml-0 rounded-xl " />
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
                            Benefits of fireproofing include increased safety for building occupants, protection of essential structural elements during a fire, potential insurance cost reductions, and compliance with fire safety regulations, which can help avoid legal liabilities.
                        </div>
                    </div>
                    <div className="h-[99px] w-[99px] rounded-full animate-moving-div z-[-1] opacity-70 blur-sm bg-customGold absolute bottom-[249px] md:bottom-auto md:top-[32px] right-14 md:left-96"></div>
                    <div className="mx-auto md:ml-auto md:mr-0 mb-[35px] md:mb-0 relative md:h-[300px] w-[210px] md:w-[500px] md:block hidden" >
                        <img src={FireProofTwo} alt="" className=" mx-auto md:mr-auto h-full w-full md:ml-0 rounded-xl " />
                        <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -top-3 md:-top-4 -left-3 md:-left-4 "></div>
                        <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -bottom-3 md:-bottom-4 -right-3 md:-right-4 "></div>
                        <div className="h-[40px] w-[40px] rounded-full z-[-1] opacity-85 bg-customGold absolute bottom-[260px] right-[350px]"></div>
                    </div>
                </div>
            </div>




            <div className="mt-16 text-black h-full mx-[9%]  mb-16">
                <div className="grid relative grid-cols-1 md:grid-cols-2">
                    <div className="mx-auto md:mr-auto md:ml-0 mb-[35px] md:mb-0 relative md:h-[300px] w-[300px] md:w-[300px] lg:w-[400px]" >
                        <img src={FireProofThree} alt="" className=" mx-auto md:mr-auto h-full w-full md:ml-0 rounded-xl" />
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
                                Effective fireproofing involves applying materials such as intumescent paint, which swells when exposed to heat, creating a protective barrier, or rigid boards that insulate steel structures from high temperatures, thereby maintaining structural stability.
                            </p>
                        </div>
                    </div>
                    <div className="h-[99px] w-[99px] rounded-full animate-moving-div1 z-[-1] opacity-70 blur-sm bg-customGold absolute bottom-[249px] md:bottom-auto md:top-[32px] right-14 "></div>
                </div>
            </div>
        </div>
    )
}

export default FireProofing
