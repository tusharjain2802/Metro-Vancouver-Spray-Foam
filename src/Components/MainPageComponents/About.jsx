import MethodsImageOne from '../../assets/images/MethodsImageOne.png'
import MethodsImageTwo from '../../assets/images/MethodsImageTwo.png'
import GradientSpan from '../common/GradientSpan'
import GradientButton from '../common/GradientButton'
const Methods = () => {
    return (
        <div className='mt-16 text-black h-full md:mx-20  mb-16' >


            <div className='hidden lg:flex  flex-row justify-between space-y-0'>

                <div className='w-1/2 ml-16 items-end'>
                    <img src={MethodsImageOne} alt="" className='' />
                </div>

                <div className='w-1/2 flex flex-col justify-evenly font-fahkwang text-4xl p-4  items-start'>
                    <div className='mb-0'>
                        <div className='flex gap-2 '>
                            <span className=''>jbdvljbl</span>
                            <GradientSpan>jbdvljbl</GradientSpan>
                        </div>
                        <span className=''>jbdvljbl</span>
                    </div>

                    <div className='font-cabin font-[400] text-xl leading-6   text-start'>
                        jbdvljbl
                    </div>
                    <div className='m-4 md:m-0'>
                        <GradientButton>jbdvljbl</GradientButton>
                    </div>
                </div>

            </div>


            <div className='lg:flex justify-between hidden'>

                <div className='w-1/2 ml-16 flex flex-col justify-evenly font-fahkwang text-4xl p-4 '>
                    <div>
                        <div className='flex gap-2'>
                            <span className=''>jbdvljbl</span>
                            <GradientSpan>jbdvljbl</GradientSpan>
                        </div>
                    </div>

                    <div className='font-cabin font-[400] text-xl leading-6 '>
                        jbdvljbl
                    </div>
                    <div>
                        <GradientButton>jbdvljbl</GradientButton>
                    </div>
                </div>

                <div className='w-1/2 ml-16 items-end'>
                    <img src={MethodsImageTwo} alt="" />
                </div>
            </div>

            <div className='flex flex-col justify-center text-center items-center space-y-8 lg:hidden'>

                <div className='md:w-1/2 lg:ml-16 items-end'>
                    <img src={MethodsImageOne} alt="" className='' />
                </div>

                <div className='md:w-1/2 flex flex-col justify-evenly font-fahkwang text-4xl p-4 items-center text-center'>
                    <div className='mb-4 md:mb-0'>
                        <div className='flex gap-2 text-center'>
                            <span className=''>jbdvljbl</span>
                            <GradientSpan>jbdvljbl</GradientSpan>
                        </div>
                        <span className=''>jbdvljbl</span>
                    </div>

                    <div className='font-cabin font-[400] text-xl leading-7  text-center '>
                        jbdvljbl
                    </div>
                    <div className='m-4 '>
                        <GradientButton>jbdvljbl</GradientButton>
                    </div>
                </div>

            </div>

            <div className='flex flex-col justify-center items-center lg:hidden space-y-8 md:space-y-0'>
                <div className='md:w-1/2 lg:ml-16'>
                    <img src={MethodsImageTwo} alt="" />
                </div>

                <div className='md:w-1/2  flex flex-col justify-evenly font-fahkwang text-4xl p-4 items-center text-center'>
                    <div>
                        <div className='flex gap-2 m-2 text-center'>
                            <span className=''>jbdvljbl</span>
                            <GradientSpan>jbdvljbl</GradientSpan>
                        </div>
                    </div>

                    <div className='font-cabin font-[400] text-xl leading-7  '>
                        jbdvljbl
                    </div>
                    <div className='m-4'>
                        <GradientButton>jbdvljbl</GradientButton>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Methods