import React from 'react'
import { useState } from 'react'
import { ChevronRight, ChevronDown, Dot } from 'lucide-react';
import Insulation from '../services/Insulation'
import FireProofing from '../services/FireProofing'
import SprayFoam from '../services/SprayFoam'
import DampRoofing from '../services/DampRoofing'
import DryWall from '../services/DryWall'
import Testing from '../services/Testing'
const Services = () => {
  const ServicesTabs = ['Insulation', 'Fireproofing', 'Spray foam', 'Damp roofing', 'Dry wall']
  const [CurrentIndex, setCurrentIndex] = useState(0);
  const [DropdownOpen, DropdownClosed] = useState(false)
  const [currentService, setCurrentService] = useState(ServicesTabs[0])
  const HandleClickDropdown = () => {
    DropdownClosed(!DropdownOpen)
  }
  const HandleClick = (index) => {
    setCurrentIndex(index)
    DropdownClosed(false)
    setCurrentService(ServicesTabs[index])
  }

  const CustomService = (index) => {

    switch (index) {
      case 0:
        return <Insulation />
      case 1:
        return <Testing />
      case 2:
        return <SprayFoam />
      case 3:
        return <DampRoofing />
      case 4:
        return <DryWall />
    }
  }
  return (
    <div className="mt-32">

      <div>
        <div className='sm:flex justify-center items-center hidden'>
          <div className='grid grid-cols-5 gap-3 items-center'>
            {ServicesTabs.map((service, index) => (
              <span className={`bg-gray-300 p-3 h-auto text-center lg:text-base sm:text-sm text-sm text-black rounded-xl font-anton col-span-1 cursor-pointer hover:bg-gray-600 hover:text-white duration-300 ${CurrentIndex === index ? 'bg-gray-600 text-white' : ''}`} key={index}
                onClick={() => {
                  HandleClick(index)
                }}>
                {service}
              </span>
            ))}
          </div>
        </div>


        <div className='flex justify-center sm:hidden sticky z-50'>
          <div className='flex flex-col justify-center  items-center mx-10'>

            <button className='gap-1 flex items-center w-48 bg-gray-300 p-3 h-auto text-center lg:text-base sm:text-sm text-sm text-black rounded-xl font-anton' onClick={HandleClickDropdown}>

              Services ({currentService})
              {
                !DropdownOpen ? (
                  <ChevronRight size={15} />
                ) : (
                  <ChevronDown size={15} />
                )
              }

            </button>

            <div className='flex flex-col m-2'>
              {DropdownOpen && (
                <div className='bg-transparent text-xs sm:text-base flex flex-col gap-2'>
                  {ServicesTabs.map((service, index) => (
                    <span className={`bg-gray-300 p-3 w-48 h-auto text-center lg:text-base sm:text-sm text-sm text-black rounded-xl font-anton col-span-1 cursor-pointer hover:bg-gray-600 hover:text-white duration-300 ${CurrentIndex === index ? 'bg-gray-600 text-white' : ''}`} key={index}
                      onClick={() => {
                        HandleClick(index)
                      }}>
                      {service}
                    </span>
                  ))}
                </div>
              )}


            </div>
          </div>
        </div>
      </div>


      <div className='sticky z-40'>
        {CustomService(CurrentIndex)}
      </div>
    </div>
  )
}

export default Services
