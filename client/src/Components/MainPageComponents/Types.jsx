import { useState } from 'react'
import BackGroundImage from '../../assets/images/DALL E/BackGroundImage.webp'
import FlipCard from './FlipCard'
import { FoamTypes } from '../../TextData'
const Types = () => {
    const [fullWidth, setFullWidth] = useState(false);
    const showfullwidth = (value) => {
        setFullWidth(value);
    }
    return (

        <div className='my-10 w-full'>
            <div id="services" className="relative px-[9%] text-white font-sedan  w-full h-fit py-16 overflow-hidden my-16">
                <img
                    src={BackGroundImage}
                    alt="Hero Background"
                    className="absolute z-[-4] top-0 left-0 w-full h-full  object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full z-[-2] bg-black opacity-75"></div>

                <div onMouseEnter={() => showfullwidth(true)} onMouseLeave={() => showfullwidth(false)} className='flex flex-col mb-[36px] w-auto relative  my-8'>
                    <h1 className={`font-anton transition-all duration-500 text-white  text-left text-[29px] md:text-[38px]`}>What is Spray foam</h1>
                    <span className={`z-50 duration-500 h-[12px] md:h-[16px] ${fullWidth ? "w-[69px] " : "w-[184px]  md:w-[320px]"} transition-all bg-customGold`} ></span>
                </div>

                <div className='font-sedan text-[18px]'>
                    Spray foam is a multifunctional insulating material that is sprayed into place. It offers exceptional thermal insulation, boasting a substantial R-value that varies between 3.5 and 7 per inch. Additionally, it can function as a waterproofing agent, specifically in closed-cell foam. When implemented as exterior wall insulation, it improves energy efficiency and prevents heat loss by forming an impermeable barrier. Spray foam has been identified as a dependable solution in the realms of comfort enhancement, energy cost reduction, and moisture infiltration prevention.
                </div>
                
                    <h1 className={`font-anton transition-all duration-500 text-white my-[20px] font-bold text-left text-[24px] md:text-[31px]`}>Types of Foam</h1>
                 
                
                <div className='flex flex-col sm:flex-row justify-center sm:justify-evenly mx-auto'>

                    {FoamTypes.map((foam, index) => (
                        <div className='mx-auto my-6 cursor-pointer font-sedan sm:my-0' key={index}>
                            <FlipCard
                                ImagePath={foam.ImagePath}
                                Heading={foam.FoamName}
                                Description={foam.Description}
                            />
                        </div>
                    ))}


                </div>
            </div>


        </div>
    )
}

export default Types
