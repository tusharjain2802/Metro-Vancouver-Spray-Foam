import { useEffect, useState } from 'react'
import ImageOne from '../../assets/images/ImageOne.png'
import ImageTwo from '../../assets/images/ImageTwo.png'
import ImageThree from '../../assets/images/ImageThree.png'
import ImageFour from '../../assets/images/ImageFour.png'
import GradientSpan from "../common/GradientSpan";
const Chemicals = () => {

    const [fullWidth, setFullWidth] = useState(false);

    const showfullwidth = (value) => {
        setFullWidth(value);
    }

   

    return (
        <div className='mx-auto my-16'>
            <div onMouseEnter={() => showfullwidth(true)} onMouseLeave={() => showfullwidth(false)} className='mx-[9%] mb-[16px] w-auto relative subhead'>
                <h1 className={`font-anton transition-all duration-500 font-bold text-[29px] md:text-[38px]`}>Chemicals Used</h1>
                <span className={`absolute left-0 duration-500 -bottom-1 h-[12px] md:h-[16px] ${fullWidth ? "w-[49px] " : " w-[210px] md:w-[280px]"} z-[-1] transition-all bg-customGold`} ></span>
            </div>
            <div className="mt-16 text-black h-full mx-[9%]  mb-16">
                <div className="grid relative grid-cols-1 md:grid-cols-2">
                    <div id='targetDiv' className={`mx-auto md:mr-auto md:ml-0 mb-[35px] md:mb-0 relative md:h-[300px] w-[210px] md:w-[300px]`}>
                        <img src={ImageOne} alt="" className=" mx-auto md:mr-auto object-cover h-full w-full md:ml-0 rounded-xl " />
                        <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -top-3 md:-top-4 -left-3 md:-left-4 "></div>
                        <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -bottom-3 md:-bottom-4 -right-3 md:-right-4 "></div>
                        <div className="h-[29px] w-[29px] rounded-full z-[-1] opacity-85 bg-customGold absolute bottom-[260px] -right-20 "></div>
                    </div>

                    <div className="flex flex-col justify-evenly text-center md:text-left text-2xl md:text-3xl lg:text-4xl p-4">
                        <div className="mb-0">
                            <span className="font-[300] font-anton">
                                <GradientSpan>Insulthane® Extreme </GradientSpan>
                            </span>
                        </div>
                        <div className="font-sedan font-[400] text-lg md:text-left text-center lg:text-xl leading-6 mt-[21px] space-y-4">
                            <p>
                                This is Elastochem&apos;s advanced closed-cell spray foam insulation product, offering exceptional thermal resistance and an enhanced moisture barrier, making it ideal for both residential and commercial applications.
                            </p>
                        </div>
                    </div>
                    <div className="h-[99px] w-[99px] rounded-full animate-moving-div1 z-[-1] opacity-70 blur-sm bg-customGold absolute bottom-[249px] md:bottom-auto md:top-[32px] right-14 "></div>
                </div>
            </div>




            <div className="mt-16 text-black h-full mx-[9%]  mb-16 ">
                <div className="grid relative grid-cols-1 md:grid-cols-2">
                    <div className="mx-auto md:mr-auto md:ml-0 mb-[35px] md:mb-0 relative md:h-[300px] w-[210px] md:w-[300px] block md:hidden">
                        <img src={ImageTwo} alt="" className=" mx-auto md:mr-auto h-full w-full md:ml-0 rounded-xl " />
                        <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -top-3 md:-top-4 -left-3 md:-left-4 "></div>
                        <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -bottom-3 md:-bottom-4 -right-3 md:-right-4 "></div>
                        <div className="h-[29px] w-[29px] rounded-full z-[-1] opacity-85 bg-customGold absolute bottom-[260px] -right-20"></div>
                    </div>

                    <div className="flex flex-col justify-evenly text-center md:text-left text-2xl md:text-3xl lg:text-4xl p-4">
                        <div className="mb-0">
                            <span className="font-[300] font-anton">
                                <GradientSpan>Boreal Nature Series</GradientSpan>
                            </span>
                        </div>
                        <div className="font-sedan font-[400] text-lg md:text-left text-center lg:text-xl leading-6 mt-[21px]">
                            This line of products is designed for those seeking eco-friendly insulation options. It&apos;s made from renewable resources and provides excellent thermal insulation and air-sealing properties.
                        </div>
                    </div>
                    <div className="h-[99px] w-[99px] rounded-full animate-moving-div z-[-1] opacity-70 blur-sm bg-customGold absolute bottom-[249px] md:bottom-auto md:top-[32px] right-14 md:left-96"></div>
                    <div className="mx-auto md:ml-auto md:mr-0 mb-[35px] md:mb-0 relative md:h-[300px] w-[210px] md:w-[300px] md:block hidden">
                        <img src={ImageTwo} alt="" className=" mx-auto md:mr-auto h-full w-full md:ml-0 rounded-xl " />
                        <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -top-3 md:-top-4 -left-3 md:-left-4 "></div>
                        <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -bottom-3 md:-bottom-4 -right-3 md:-right-4 "></div>
                        <div className="h-[29px] w-[29px] rounded-full z-[-1] opacity-85 bg-customGold absolute bottom-[260px] -right-20"></div>
                    </div>
                </div>
            </div>




            <div className="mt-16 text-black h-full mx-[9%]  mb-16">
                <div className="grid relative grid-cols-1 md:grid-cols-2">
                    <div className="mx-auto md:mr-auto md:ml-0 mb-[35px] md:mb-0 relative md:h-[300px] w-[210px] md:w-[300px]">
                        <img src={ImageThree} alt="" className=" mx-auto md:mr-auto object-cover h-full w-full md:ml-0 rounded-xl " />
                        <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -top-3 md:-top-4 -left-3 md:-left-4 "></div>
                        <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -bottom-3 md:-bottom-4 -right-3 md:-right-4 "></div>
                        <div className="h-[29px] w-[29px] rounded-full z-[-1] opacity-85 bg-customGold absolute bottom-[260px] -right-20 "></div>
                    </div>

                    <div className="flex flex-col justify-evenly text-center md:text-left text-2xl md:text-3xl lg:text-4xl p-4">
                        <div className="mb-0">
                            <span className="font-[300] font-anton">
                                <GradientSpan>Ener-Spray </GradientSpan>
                            </span>
                        </div>
                        <div className="font-sedan font-[400] text-lg md:text-left text-center lg:text-xl leading-6 mt-[21px] space-y-4">
                            <p>
                                A high-quality spray foam that provides superior insulation and air barrier capabilities. It is designed to meet the most demanding energy-saving requirements, improving the overall energy efficiency of buildings.
                            </p>
                        </div>
                    </div>
                    <div className="h-[99px] w-[99px] rounded-full animate-moving-div1 z-[-1] opacity-70 blur-sm bg-customGold absolute bottom-[249px] md:bottom-auto md:top-[32px] right-14 "></div>
                </div>
            </div>



            <div className="mt-16 text-black h-full mx-[9%]  mb-16 ">
                <div className="grid relative grid-cols-1 md:grid-cols-2">
                    <div className="mx-auto md:mr-auto md:ml-0 mb-[35px] md:mb-0 relative md:h-[300px] w-[210px] md:w-[300px] block md:hidden">
                        <img src={ImageFour} alt="" className=" mx-auto md:mr-auto h-full w-full md:ml-0 rounded-xl " />
                        <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -top-3 md:-top-4 -left-3 md:-left-4 "></div>
                        <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -bottom-3 md:-bottom-4 -right-3 md:-right-4 "></div>
                        <div className="h-[29px] w-[29px] rounded-full z-[-1] opacity-85 bg-customGold absolute bottom-[260px] -right-20"></div>
                    </div>

                    <div className="flex flex-col justify-evenly text-center md:text-left text-2xl md:text-3xl lg:text-4xl p-4">
                        <div className="mb-0">
                            <span className="font-[300] font-anton">
                                <GradientSpan>Quick Shield 112XC</GradientSpan>
                            </span>
                        </div>
                        <div className="font-sedan font-[400] text-lg md:text-left text-center lg:text-xl leading-6 mt-[21px]">
                            Known for its high yield and excellent thermal properties, this product is used for various residential and commercial insulation applications. It is designed to offer long-lasting durability and improved energy efficiency.
                        </div>
                    </div>
                    <div className="h-[99px] w-[99px] rounded-full animate-moving-div z-[-1] opacity-70 blur-sm bg-customGold absolute bottom-[249px] md:bottom-auto md:top-[32px] right-14 md:left-96"></div>
                    <div className="mx-auto md:ml-auto md:mr-0 mb-[35px] md:mb-0 relative md:h-[300px] w-[210px] md:w-[300px] md:block hidden">
                        <img src={ImageFour} alt="" className=" mx-auto md:mr-auto h-full w-full md:ml-0 rounded-xl " />
                        <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -top-3 md:-top-4 -left-3 md:-left-4 "></div>
                        <div className="h-[107px] md:h-[183px] w-[107px] md:w-[183px] rounded-xl z-[-1] opacity-90 bg-customGold absolute -bottom-3 md:-bottom-4 -right-3 md:-right-4 "></div>
                        <div className="h-[29px] w-[29px] rounded-full z-[-1] opacity-85 bg-customGold absolute bottom-[260px] -right-20"></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Chemicals
