import React, { useState } from 'react'
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
            <div id="services" className="relative text-white font-anton  w-full h-fit py-16 overflow-hidden my-16">
                <img
                    src={BackGroundImage}
                    alt="Hero Background"
                    className="absolute z-[-4] top-0 left-0 w-full h-full  object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full z-[-2] bg-black opacity-65"></div>
                <div onMouseEnter={() => showfullwidth(true)} onMouseLeave={() => showfullwidth(false)} className='flex flex-col mb-[36px] w-auto relative mx-10 my-8'>
                    <h1 className={`font-anton transition-all duration-500 text-white  text-left text-[29px] md:text-[38px]`}>Types of Foam</h1>
                    <span className={`z-50 duration-500 h-[12px] md:h-[16px] ${fullWidth ? "w-[59px] " : "w-[114px]  md:w-[250px]"} transition-all bg-customGold`} ></span>
                </div>
                <div className='flex flex-col sm:flex-row justify-center sm:justify-evenly mx-auto'>

                    {FoamTypes.map((foam, index) => (
                        <div className='mx-auto my-6 sm:my-0' key={index}>
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
